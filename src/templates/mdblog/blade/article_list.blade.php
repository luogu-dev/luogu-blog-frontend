@extends("blog.mdblog.template")

@section('title')
    文章列表
@endsection

@section('contents')
    <div id="article-list"></div>
@endsection
@section('button')
    <div class="mdui-fab-wrapper mdblog-fab" id="exampleFab">
        <button id="mdblog-scroll"
                class="mdui-fab mdui-ripple mdui-color-theme-accent">
            <i class="mdui-icon material-icons">keyboard_arrow_up</i>
        </button>
    </div>
    <script>

    </script>
@endsection

@section('scripts')
    <script src="/js/blog/mdblog/article_list.js"></script>
@endsection