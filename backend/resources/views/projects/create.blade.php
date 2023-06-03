@extends('master')

@section('content')
    <style>
        input,
        label {
            display: block;
            margin-bottom: 30px;
        }
    </style>
    <h1>Create Project</h1>
    <form method="POST" action={{ route('projects.store') }} enctype="multipart/form-data">
        @csrf
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="link" placeholder="Link" required />
        <textarea name="description" placeholder="Description" required></textarea>
        <br />
        <label for="image">Image</label>
        <input type="file" name="image" accept="image/png,image/jpg,image/jpeg,image/bmp,image/gif,image/webp"
            required>

        <div>
            <button type="submit"> Adăugare </button>
        </div>
    </form>
@endsection
