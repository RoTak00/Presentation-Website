@extends('master')

@section('page_title')
    Edit Project {{ $project->title }}
@endsection
@section('content')
    <div class="container">

        <form method="POST" action={{ route('projects.update', ['project' => $project->id]) }} enctype="multipart/form-data">

            @csrf
            @method('PUT')
            <div class="buttons">
                <input type="submit" name="save" value="Save">
                <input type="submit" name="save_and_exit" value="Save and Exit">
                <input type="submit" name="save_as_copy" value="Save as Copy">
            </div>
            <div class="preform">
                <input type="checkbox" id="is_published" name="is_published" value="is_published"
                    {{ $project->status == 'active' ? 'checked' : '' }}>
                <label for="is_published"> Published </label>
            </div>
            <hr>
            <div class="form">
                <div class="wrapper">

                    <label for="title"> Title </label>
                    <input type="text" id="title" name="title" placeholder="Title" value="{{ $project->title }}"
                        required />
                    <label for="link"> Link </label>
                    <input type="text" name="link" placeholder="Link" value="{{ $project->link }}" required />
                    <label for="link_github"> GitHub Link </label>
                    <input type="text" name="link_github" placeholder="Github Link" value="{{ $project->link_github }}"
                        required />
                    <label for="image">Image</label>
                    <input type="file" name="image" id="image"
                        accept="image/png,image/jpg,image/jpeg,image/bmp,image/gif,image/webp">
                    <div id="image_preview">
                        <img src="{{ asset('/images/projects/' . $project->image) }}" />
                    </div>
                </div>

                <div class="wrapper">
                    <label for="description">Description</label>
                    <textarea name="description" placeholder="Description" required>{{ $project->description }}</textarea>
                </div>
            </div>



        </form>

    </div>


    <script>
        var imageInput = document.querySelector('input#image');
        var imagePreview = document.querySelector('div#image_preview');

        imageInput.addEventListener('change', function() {
            var file = this.files[0];

            img = document.createElement('img');
            img.src = window.URL.createObjectURL(file);

            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        });
    </script>
@endsection
