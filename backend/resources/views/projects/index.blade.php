@extends('master')

@section('content')
    <style>
        input,
        label {
            display: block;
            margin-bottom: 30px;
        }
    </style>
    <h1>Project List</h1>

    @foreach ($projects as $p)
        <div style="margin-bottom: 10px;">
            <strong> {{ $p->title }} </strong> <a href="{{ route('projects.edit', ['project' => $p->id]) }}"> Edit </a>

            <form method="POST" action={{ route('projects.destroy', ['project' => $p->id]) }}>
                @csrf
                @method('DELETE')
                <button type="submit"> Remove </button>
            </form>
        </div>
    @endforeach

    <h2> <a href="{{ route('projects.create') }}">Create new Project</a> </h2>
@endsection
