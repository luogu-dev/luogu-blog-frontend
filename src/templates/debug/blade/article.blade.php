<?php
$CI = &get_instance();
use Luogu\Models\{Vote, VoteType};
Vote::includeConstants();
?>
@extends("blog.debug.template")

@section('title')
    {{ $blogPost->getTitle() }}
@endsection

@section('contents')
    <div class="ui text container" id="blog-container"
         data-blogid="{{ $blogPost->getBlogID() }}"
         data-vote="{{ $userVote }}"
         data-thumbUp="{{ $blogPost->getThumbUp() }}">
        <h1 class="ui">
            {{ $blogPost->getTitle() }}
            <div id="article-vote"></div>
        </h1>
        <div class="ui divider"></div>
        <div id="article-content">
            {!! markdown($blogPost->getContent()) !!}
            <br>
        </div>
        <p>
            <i class="wait icon"></i>{{ date('Y-m-d H:i:s', $blogPost->getPostTime()) }}
            @if(getCurrentUser() && getCurrentUser()->getUID() == $blogConfig->getUID())
                &emsp;
                <a href="/blog/post_edit/{{ $blogPost->getBlogID() }}">编辑</a>
            @endif
        </p>

        <div id="article-comments"></div>
    </div>
    <link rel="stylesheet" href="/css/katex.min.css"/>
@endsection

@section('scripts')
    <script src="/js/katex.min.js"></script>
    <script src="/js/auto-render.min.js"></script>
    <script>
        renderMathInElement(document.getElementById("article-content"), {
            delimiters: [
                {
                    left: "$$",
                    right: "$$",
                    display: true
                },
                {
                    left: "$",
                    right: "$",
                    display: false
                },
                {
                    left: "\\[",
                    right: "\\]",
                    display: true
                },
                {
                    left: "\\(",
                    right: "\\)",
                    display: false
                }
            ],
            throwOnError: false
        });
        var blogContainer = document.getElementById("blog-container");
        BlogGlobals.blogID = parseInt(blogContainer.getAttribute("data-blogid"));
        BlogGlobals.vote = parseInt(blogContainer.getAttribute("data-vote"));
        BlogGlobals.thumbUp = parseInt(blogContainer.getAttribute("data-thumbUp"));
    </script>
    <script src="/js/blog/debug/article.js"></script>
@endsection