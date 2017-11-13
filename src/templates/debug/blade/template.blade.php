<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="blog-uid" content="{{ $blogConfig->getUID() }}">
    <meta name="blog-name" content="{{ $blogConfig->getSettings()->getBlogName() }}">
    <meta name="current-user" content="{{ getCurrentUser() ? getCurrentUser()->getUID() : '0' }}">
    <link rel="stylesheet" href="https://cdn.bootcss.com/semantic-ui/2.2.13/semantic.min.css">
    <link rel="stylesheet" href="/css/blog/debug.css">
    <title>@yield('title') - {{ $blogConfig->getSettings()->getBlogName() }}</title>
</head>
<body>
    <div>
        <div class="ui main text container">
            <h1 class="ui header">{{ $blogConfig->getSettings()->getBlogName() }}</h1>
            <p>{{ $blogConfig->getSettings()->getBlogSubtitle() }}</p>
        </div>

        <div class="ui borderless main menu">
            <div class="ui text container">
                <a href="." class="header item">
                    首页
                </a>
                <a href="." class="item">文章</a>
                @if(getCurrentUser() && getCurrentUser()->getUID() == $blogConfig->getUID())
                    <a href="/blog/post_new" class="right item">发布新文章</a>
                @endif
            </div>
        </div>
        @yield('contents')

        <div class="ui inverted vertical footer segment" style="margin-top: 150px;">
            <div class="ui center aligned container">
                <div class="ui stackable inverted divided grid">
                    <div class="three wide column">
                        <h4 class="ui inverted header">Group 1</h4>
                        <div class="ui inverted link list">
                            <a href="#" class="item">Link One</a>
                            <a href="#" class="item">Link Two</a>
                        </div>
                    </div>
                    <div class="three wide column">
                        <h4 class="ui inverted header">Group 2</h4>
                        <div class="ui inverted link list">
                            <a href="#" class="item">Link One</a>
                            <a href="#" class="item">Link Two</a>
                        </div>
                    </div>
                    <div class="three wide column">
                        <h4 class="ui inverted header">Group 3</h4>
                        <div class="ui inverted link list">
                            <a href="#" class="item">Link One</a>
                            <a href="#" class="item">Link Two</a>
                        </div>
                    </div>
                    <div class="seven wide column">
                        <h4 class="ui inverted header">{{ $blogConfig->getSettings()->getBlogName() }}</h4>
                        <p>{{ $blogConfig->getSettings()->getBlogSubtitle() }}</p>
                    </div>
                </div>
                <div class="ui inverted section divider"></div>

                <div class="ui horizontal inverted small divided link list">
                    <a class="item" href="#">Site Map</a>
                    <a class="item" href="#">Contact Us</a>
                    <a class="item" href="#">Terms and Conditions</a>
                    <a class="item" href="#">Privacy Policy</a>
                    <a class="item" href="{{ LOCALADDRESS }}">洛谷博客</a>
                </div>
            </div>
        </div>
    </div>
    <script>
        var BlogGlobals = {
            blogName: document.querySelector("meta[name=blog-name]").getAttribute("content"),
            blogUID: parseInt(document.querySelector("meta[name=blog-uid]").getAttribute("content")),
            currentUser: parseInt(document.querySelector("meta[name=current-user]").getAttribute("content")),
            luoguAddress: "{{ LOCALADDRESS }}",
            picAddress: "{{ PICROOT }}"
        };
    </script>
    <script src="{{ STATICROOT }}/js/jquery-2.1.1.min.js"></script>
    <script src="https://cdn.bootcss.com/semantic-ui/2.2.13/semantic.min.js"></script>
    @yield('scripts')
    <script>
        $('.main.menu').visibility({
            type: 'fixed'
        });
    </script>
</body>
</html>
