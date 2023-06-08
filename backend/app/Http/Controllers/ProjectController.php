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
            $projects = Project::where('status', 'active')->get()->reverse();
        else
            $projects = Project::where('status', 'active')->take($limit)->get()->reverse();

        foreach($projects as $item)
        {
            $item->image = 'http://'.$_SERVER['HTTP_HOST']."/images/projects/".$item->image;
        }

        return response()->json(['data'=>$projects, 'count'=>count($projects)]);

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
        $imageName = "project-" . $alias . "." . $request->image->extension();
        $index = 1;
        while(File::exists(public_path("images/projects/".$imageName)))
        {
            $imageName = "project-" . $alias . "-" . $index . "." . $request->image->extension();
            $index += 1;
        }
        $request->image->move(public_path("images/projects"), $imageName);



        $newProject = new Project;
        $newProject->title = $request->title;
        $newProject->description = $request->description;
        $newProject->image = $imageName;
        $newProject->link = $request->link;
        $newProject->link_github = $request->link_github;

        $newProject->status = "inactive";
        if($request->is_published) $newProject->status = "active";

        

        $newProject->save();

        $sessionSuccessMessage = "Project added successfully.";
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

        $project->save();

        return redirect()->back();
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
