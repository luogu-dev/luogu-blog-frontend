<?php
$CI = &get_instance();

use Luogu\Models\{
    Vote, VoteType
};

Vote::includeConstants();
?>
@extends("blog.mdblog.template")

@section('title')
    {{ $blogPost->getTitle() }}
@endsection

@section('contents')
    <div id="blog-container"
         data-blogid="{{ $blogPost->getBlogID() }}"
         data-vote="{{ $userVote }}"
         data-thumbUp="{{ $blogPost->getThumbUp() }}">
        <div class="mdblog-article-container mdui-shadow-2 mdui-hoverable">
            <div class="mdui-typo-display-1-opacity">{{ $blogPost->getTitle() }}</div>
            <br>
            <div style="margin-bottom: 8px;">
                <div class="mdui-typo-caption-opacity  mdblog-article-time mdui-float-left">{{ date('Y-m-d H:i:s', $blogPost->getPostTime()) }}</div>
                <div id="vote-count"></div>
            </div>
            <br>
            <div class="mdui-typo">
                <hr/>
            </div>
            <div class="mdui-typo mdblog-article-content" id="article-content">
                {!! markdown($blogPost->getContent()) !!}
            </div>
        </div>

        <div id="blog-comments"></div>

        <div id="vote-buttons"></div>

    </div>
    <link rel="stylesheet" href="/css/katex.min.css"/>
@endsection

@section('scripts')
    <script src="/js/auto-render.min.js"></script>
    <script>
        var blogContainer = document.getElementById("blog-container");
        BlogGlobals.blogID = parseInt(blogContainer.getAttribute("data-blogid"));
        BlogGlobals.vote = parseInt(blogContainer.getAttribute("data-vote"));
        BlogGlobals.thumbUp = parseInt(blogContainer.getAttribute("data-thumbUp"));
    </script>
    <script src="/js/blog/mdblog/article.js"></script>
@endsection
