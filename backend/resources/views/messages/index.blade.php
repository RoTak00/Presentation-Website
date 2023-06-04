@extends('master')

@section('content')
    <style>
        input,
        label {
            display: block;
            margin-bottom: 30px;
        }
    </style>
    <h1>Messages List</h1>

    @foreach ($messages as $item)
        <div style="margin-bottom: 10px;">
            <strong> {{ $item->name }} </strong>
            <br>
            <p>{{ $item->message }}</p>

            <form method="POST" action={{ route('messages.destroy', ['message' => $item->id]) }}>
                @csrf
                @method('DELETE')
                <button type="submit"> Remove </button>
            </form>
        </div>
    @endforeach
@endsection
