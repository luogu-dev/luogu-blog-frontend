<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="blog-uid" content="{{ $blogConfig->getUID() }}">
    <meta name="blog-name"
          content="{{ $blogConfig->getSettings()->getBlogName() }}">
    <meta name="blog-id"
          content="{{ isset($blogPost)?$blogPost->getBlogID():0 }}">
    <meta name="current-user"
          content="{{ getCurrentUser() ? getCurrentUser()->getUID() : '0' }}">
    <link rel="stylesheet" href="//cdn.bootcss.com/mdui/0.3.0/css/mdui.min.css">
    <link rel="stylesheet" href="/css/blog/mdblog.css">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>@yield('title')
        - {{ $blogConfig->getSettings()->getBlogName() }}</title>
</head>
<body class="mdui-theme-primary-indigo mdui-theme-accent-pink">
<nav>
    <div id="small-header" class="mdui-appbar mdui-shadow-0"
         style="position: fixed;z-index: 100;top:0;">
        <div id="topbar" class="mdui-toolbar ">
            <a id="md-menu" class="mdui-btn mdui-btn-icon"><i
                        class="mdui-icon material-icons">menu</i></a>
            <span id="small-title" class="mdui-typo-title md-blog-title "
                  hidden></span>
            <div class="mdui-toolbar-spacer"></div>
            <div class="mdui-textfield mdui-textfield-expandable mdui-float-right"
                 style="max-width: 40%;">
                <button class="mdui-textfield-icon mdui-btn mdui-btn-icon "><i
                            class="mdui-icon material-icons">search</i></button>
                <input class="mdui-textfield-input " type="text"
                       placeholder="Search"/>
                <button class="mdui-textfield-close mdui-btn mdui-btn-icon "><i
                            class="mdui-icon material-icons">close</i></button>
            </div>
        </div>
    </div>
</nav>
<section>
    <div class="mdui-drawer mdui-drawer-close" id="mdblog-drawer">
        <ul class="mdui-list">
            <li onclick="window.location.href='{{"/blog/".$blogConfig->getIdentifier()}}';"
                class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">star</i>
                <div class="mdui-list-item-content">首页</div>
            </li>
            @if(getCurrentUser() && getCurrentUser()->getUID() == $blogConfig->getUID())
                <li onclick="window.location.href='/blog/post_new';"
                    class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">error</i>
                    <div class="mdui-list-item-content">新建文章</div>
                </li>
            @endif
        </ul>
    </div>
</section>

<main class='mdui-container-fluid'>


    <section id="main-container" class=" mdui-col-md-8 mdui-col-offset-md-2">
        <div class="" style="padding: 20px;margin-bottom: 30px;">
            <img class="mdui-center mdui-img-circle"
                 src="{{ PICROOT }}/upload/usericon/{{$blogConfig->getUID()}}.png">
            <div class="mdui-valign">
                <p class="mdui-center mdui-typo-display-2 mdui-text-color-theme"
                   style="margin-bottom:0;margin-top: 15px">{{ $blogConfig->getSettings()->getBlogName() }}</p>

            </div>
            <div class="mdui-valign">
                <p class="mdui-center mdui-typo-subheading-opacity mdui-text-color-theme">@yield('title') </p>
            </div>
        </div>
        @yield('contents')
    </section>

</main>
@yield('button')
<br>
<footer class="mdui-color-theme">
    <div class="mdui-valign">
        <p class="mdui-center">lorem ipsum</p>
    </div>
</footer>

<script>
    var BlogGlobals = {
        blogName: document.querySelector("meta[name=blog-name]").getAttribute("content"),
        blogUID: parseInt(document.querySelector("meta[name=blog-uid]").getAttribute("content")),
        currentUser: parseInt(document.querySelector("meta[name=current-user]").getAttribute("content")),
        blogID: parseInt(document.querySelector("meta[name=blog-id]").getAttribute("content")),
        isAuthor:{{ getCurrentUser() && getCurrentUser()->getUID() == $blogConfig->getUID()? "true" : "false" }},
        luoguAddress: "{{ LOCALADDRESS }}",
        picAddress: "{{ PICROOT }}"
    };
</script>
<script src="{{ STATICROOT }}/js/jquery-2.1.1.min.js"></script>
<script src="//cdn.bootcss.com/mdui/0.3.0/js/mdui.min.js"></script>

<script>
    var scrollDelay;

    function pageScroll() {
        window.scrollBy(0, -50);
        scrollDelay = setTimeout('pageScroll()', 10);
        if ($(window).scrollTop() <= 10)
            clearTimeout(scrollDelay);
    }

    var inst = new mdui.Drawer("#mdblog-drawer", {
        overlay: true,
        swipe: true
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("#topbar").addClass("mdui-color-theme ");
            $("#small-header").removeClass("mdui-shadow-0");
        } else {
            $("#topbar").removeClass("mdui-color-theme ");
            $("#small-header").addClass("mdui-shadow-0");
        }
    });

    $(document).ready(function () {
        $("#mdblog-scroll").click(pageScroll);
        $("#md-menu").click(function () {
            inst.open();
        })
    });

</script>

@yield('scripts')
</body>
</html>
