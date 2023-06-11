<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\ResponseFactory;
use App\Models\Project;


use Illuminate\Support\Facades\File;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all()->reverse();
        return view('projects.index', ['projects'=>$projects]);
    }

    public function api_get($limit = null)
    {
        $projects = null;
        if($limit == null)
            $projects = Project::where('status', 'active')->orderBy('created_at', 'desc')->get();
        else
            $projects = Project::where('status', 'active')->orderBy('created_at', 'desc')->take($limit)->get();

        foreach($projects as $item)
        {
            $item->image = 'http://'.$_SERVER['HTTP_HOST']."/images/projects/".$item->image;
        }

        return response()->json(['data'=>$projects, 'count'=>count($projects)]);

    }

    /**
     * Retrieves a paginated JSON response of active projects, 
     * with optional limits and page numbers for pagination.
     *
     * @param int|null $limit The number of results to return per page.
     * @param int|null $page The page number to retrieve.
     * @throws Some_Exception_Class If an error occurs during pagination.
     * @return \Illuminate\Http\JsonResponse The paginated projects and total pages as JSON.
     */
    public function api_get_paginated($page, $limit)
    {
        $projects = Project::where('status', 'active')->orderBy('created_at', 'desc');
        $pages = ceil($projects->count() / $limit);
        $projects = $projects->offset(($page-1) * $limit);
        $projects = $projects->take($limit);
        $projects = $projects->get();

        foreach($projects as $item)
        {
            $item->image = 'http://'.$_SERVER['HTTP_HOST']."/images/projects/".$item->image;
        }


        return response()->json(['data'=>$projects, 'pages'=>$pages]);

    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('projects.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $alias = GenerateAlias($request->title);

        $imageName = "";
        $imageExtension = "";
        $imageFileName = "";
        if($request->copy_image != null)
        {
            $imageFileName = $request->copy_image;
            $imageExtension = explode(".", $imageFileName)[1];
            $imageName = explode(".", $imageFileName)[0];
        }
        else
        {
            $imageName = "project-".$alias;
            $imageExtension = $request->image->extension();
            $imageFileName = $imageName. "." . $imageExtension;
        }
        $index = 1;
        while(File::exists(public_path("images/projects/".$imageFileName)))
        {
            $imageFileName = $imageName . "-" . $index . "." . $imageExtension;
            $index += 1;
        }

        if($request->copy_image != null)
        {
            copy(public_path("images/projects/".$request->copy_image), public_path("images/projects/".$imageFileName));
        }
        else
        {
            $request->image->move(public_path("images/projects"), $imageFileName);
        }


        $newProject = new Project;
        $newProject->title = $request->title;
        $newProject->description = $request->description;
        $newProject->image = $imageFileName;
        $newProject->link = $request->link;
        $newProject->link_github = $request->link_github;

        $newProject->status = "inactive";
        if($request->is_published) $newProject->status = "active";

        

        $newProject->save();

        $sessionSuccessMessage = "Project added successfully.";
        if($request->copy_image != null)
        {
            $sessionSuccessMessage = "Project copied successfully.";
            return redirect()->route('projects.index')->with('message', $sessionSuccessMessage);
        }
        if($request->save_and_exit)
            return redirect()->route('projects.index')->with('message', $sessionSuccessMessage);
        if($request->save_and_new)
            return redirect()->back()->with('message', $sessionSuccessMessage);

        return redirect()->back()->with('message', "Save ok. Error redirecting.");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        return view('projects.edit', ['project'=>$project]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $project = Project::findOrFail($id);

        $alias = GenerateAlias($request->title);

        if($request->save_as_copy)
        {
            $request->copy_image = $project->image;
            $request->is_published = 0;
            $this->store($request);
            return redirect()->route('projects.index');
        }

        $imageName = $project->image;
        if($request->image != null)
        {
            $old_path = public_path("images/projects/".$imageName);
            if(File::exists($old_path))
            {
                File::delete($old_path);
            }
            $imageName = "project-" . $alias . "." . $request->image->extension();
            $index = 1;
            while(File::exists(public_path("images/projects/".$imageName)))
            {
                $imageName = "project-" . $alias . "-" . $index . "." . $request->image->extension();
                $index += 1;
            }
            $request->image->move(public_path("images/projects/"), $imageName);
        }

        $project->title = $request->title;
        $project->description = $request->description;
        $project->image = $imageName;
        $project->link = $request->link;
        $project->link_github = $request->link_github;
        $project->status = "inactive";
        if($request->is_published) $project->status = "active";

        $project->save();

        $sessionSuccessMessage = "Project edited successfully.";
        if($request->save_and_exit)
            return redirect()->route('projects.index')->with('message', $sessionSuccessMessage);
        if($request->save)
            return redirect()->back()->with('message', $sessionSuccessMessage);

        return redirect()->back()->with('message', "Save ok. Error redirecting.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::findOrFail($id);

        $old_path = public_path("images/projects/".$project->image);
        if(File::exists($old_path))
        {
            File::delete($old_path);
        }

        $project->delete();

        return redirect('projects');
    }
}
