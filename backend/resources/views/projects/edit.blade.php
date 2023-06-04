@extends('master')

@section('content')
    <style>
        input,
        label {
            display: block;
            margin-bottom: 30px;
        }
    </style>
    <h1>Edit Project {{ $project->title }} (id {{ $project->id }})</h1>
    <form method="POST" action={{ route('projects.update', ['project' => $project->id]) }} enctype="multipart/form-data"
        style="margin-bottom: 15px;">
        @csrf
        @method('PUT')
        <input type="text" name="title" placeholder="Title" value="{{ $project->title }}" required />
        <input type="text" name="link" placeholder="Link" value="{{ $project->link }}" required />
        <textarea name="description" placeholder="Description" required>{{ $project->description }}</textarea>
        <br />
        <img src="{{ asset('/images/projects/' . $project->image) }}" />
        <label for="image">Modify Image</label>
        <input type="file" name="image" accept="image/png,image/jpg,image/jpeg,image/bmp,image/gif,image/webp">

        <div>
            <button type="submit"> Modificare </button>
        </div>
    </form>

    <a href="{{ route('projects.index') }}"> Back </a>
@endsection
