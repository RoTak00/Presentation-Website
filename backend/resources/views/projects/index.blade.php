@extends('master')

@section('page_title')
    Projects
@endsection

@section('content')
    <div class="container">

        <div class="project-index-container header">
            <div> ID </div>
            <div> Title </div>
            <div class="actions"> Actions </div>
            <div> Up </div>
        </div>

        @foreach ($projects as $p)
            <?php
            $statusClass = 'project-deleted';
            if ($p['status'] === 'inactive') {
                $statusClass = 'project-inactive';
            }
            if ($p['status'] === 'active') {
                $statusClass = 'project-active';
            }
            
            ?>
            <div class="project-index-container">
                <div>
                    {{ $p->id }}
                </div>

                <div>
                    <strong> {{ $p->title }} </strong>
                </div>

                <div class="actions">

                    <form action={{ route('projects.edit', ['project' => $p->id]) }}>
                        <button type="submit"> Edit
                        </button>
                    </form>


                    <form method="POST" action={{ route('projects.destroy', ['project' => $p->id]) }}>
                        @csrf
                        @method('DELETE')
                        <button type="submit"> Remove </button>
                    </form>
                </div>

                <div class="{{ $statusClass }}">

                </div>
            </div>
        @endforeach

        <div class="project-index-container new">
            <div> </div>
            <div> <a href="{{ route('projects.create') }}">Create new Project</a> </div>
            <div class="actions"> </div>
            <div> </div>
        </div>
    </div>
@endsection
