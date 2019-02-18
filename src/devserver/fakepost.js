module.exports = () => ({
  postID: 1234,
  userVote: 1,
  postThumbUp: 666,
  postTitle: '中国人失掉自信力了吗',
  postTime: '1934 年 9 月 25 日',
  postContent: `
    <h2>A. 取石子</h2>
<p>最后所有的石子肯定会被选完，而每次每个人选一个，所以石子的总和为奇数则先手赢，否则后手赢。</p>
<h2>B. 偷上网</h2>
<p>如果 $n = 1$ ，则枚举一下四个角，如果都不可行，一定无解，否则就找到了合法点。</p>
<p>如果 $n \\geq 2$ ，则圆的总面积一定小于正方形的面积，每次随机一个点，判断是否可行。显然随机次数不会太多就会找到合法解。</p>
<h2>C. 粘骨牌</h2>
<p>对于一个位置，如果它某个方向（上下左右）存在一个骨牌，则从这个点可以转移到对应方向的点。所以建出图之后，问题就变成了求起点到所有特殊点的最小割。注意到这个图其实是棵树，所以树上 dp 即可。</p>
<p>设 $f[i]$ 表示把 $i$ 为根的子树和起点割掉的最小代价，如果 $i$ 本身就是一个特殊点，则 $f[i]= val_{fa_i, i}$ ，否则 $f[i] = \\min(val_{fa_i, i}, \\sum_{j}f[j])$ ，其中 $j$ 表示 $i$ 的儿子。</p>
<h2>D. 太极剑</h2>
<p>对于一个起点，求出其最远可以延伸的终点，这样就变成了有若干段区间，求至少用多少个区间覆盖所有点。这可以用经典的倍增解决。但是这道题有一个特殊的性质，即终点随起点的增加而增加，所以找出长度最短的区间，则这个区间内必然会有割线的端点。所以暴力枚举这些点作为起点，然后暴力走一圈。设这个区间内有 $d$ 个点，走一圈至多走 $\\frac{n}{d}$ 步，所以总复杂度为 $O(d \\times \\frac{n}{d}) = O(n)$ 。</p>
<h2>E. 玩游戏</h2>
<p>所求即为
$$\\frac{\\sum_{i = 1}^{n} \\sum_{j = 1}^{m}(a_i + b_j) ^ x}{nm}$$ </p>
<p>设 $f(x) = \\sum_{i = 1}^{n} \\sum_{j = 1}^{m}(a_i + b_j) ^ x$ </p>
<p>展开得 $f(x) = \\sum_{i = 1}^{n} \\sum_{j = 1}^{m} \\sum_{k = 0}^{x} \\binom{x}{k}a^{x - k}b^{k}$ </p>
<p>交换求和顺序 $f(x) = x!\\sum_{k = 0}^{x} \\frac{\\sum_{i = 1}^{n}a_i^{x - k}}{(x - k)!} \\frac{\\sum_{j = 1}^{m}b_j^{k}}{k!} = x!\\sum_{k = 0}^{x} A_{x - k}B_{k}$ </p>
<p>这是个卷积的形式，求出 $A, B$ 即可，也就是求出 $\\sum_{i = 1}^{n}a_i^x$ 即可。</p>
<p>构造 $g(x) = \\Pi_{i = 1}^{n}(1 + a_i x)$ ，这个可以分治 FFT 求出来，那么 $\\ln{g(x)} = \\sum_{i = 1}^{n}\\ln(1 + a_ix) = \\sum_{i = 1}^{n}\\sum_{k = 1}^{x}\\frac{(-1)^k}{k}a_i^k x^k$ ，所以求出 $x^k$ 项系数就可以求出 $\\sum_{i = 1}^{n}a_i^k$ 。</p>
<p>以上操作需要分治 FFT，多项式 ln，总复杂 $O(n\\log^2n)$ 。</p>
<p><img src="http://cdn1.ihcr.top/1810144213.png-yuantu" alt="头图"></p>
<h2>0x01 引言</h2>
<p>众所周知，尽管现在大部分学校的竞赛练习环境都是构建XP等Windows系操作系统，但是在CCF组织的一系列竞赛（如NOI）中，早已用上了NOI Linux这个Ubuntu操作系统的阉割版。
<img src="http://cdn1.ihcr.top/1810135503.png-yuantu" alt="NOI竞赛的环境要求"></p>
<p><em>NOI竞赛的环境要求</em> </p>
<p>或许大家对自己Windows环境下的Dev-C++、VSCode等都已熟识，但是当场景突然切换到Linux的时候，你会不会不知所措？</p>
<p><em>“想用Ctrl+C复制，结果退出了程序”</em>
<em>“平时AC的程序模板到了Linux上就WA”</em>......</p>
<p><img src="http://cdn1.ihcr.top/1810141552.png-yuantu" alt="平台差异（转自百度文库”NOIP标准评测系统及相关问题“）">
<em>平台差异（转自百度文库”NOIP标准评测系统及相关问题“）</em></p>
<p>为了防止考场上出现此类尴尬情况，我们必须要提前熟悉下Linux系统的使用。</p>
<p>虽然官网已经放出了NOI Linux的ISO镜像，但是配置却相当麻烦，包括激活Vmware，用Vmware装系统开虚拟机等步骤，且NOI Linux默认自带图形界面，两个系统一起运行是低配党的噩梦。</p>
<p>Windows10作为微软的新一代操作系统，紧跟时代潮流，在一周年更新时推出了Linux子系统，可以供装不起Vmware等虚拟机的同学食用。</p>
<p>唯一的缺点就是不带离线评测系统，但是在强大的洛谷评测支撑下谁在乎呢......</p>
<hr>
<h2>0x02 准备</h2>
<p>首先，你需要一个最新的Windows10操作系统，这点不必多说。</p>
<h4>其次，你需要配置一下开发人员模式环境。</h4>
<p>1.设置-&gt;更新与安全-&gt;开发人员模式框选-&gt;是
<img src="http://cdn1.ihcr.top/1810142140.png-yuantu" alt="来，跟着箭头走">
<em>来，跟着箭头走</em> </p>
<p>2.控制面板-&gt;程序-&gt;启用和关闭Windows功能-&gt;框选“适用于Linux的Windows子系统”-&gt;确定-&gt;重启
<img src="http://cdn1.ihcr.top/1810135346.png-yuantu" alt="自行忽略乱码"></p>
<p>给系统盘留下足够的空间，毕竟装好的Linux没法迁移。</p>
<p>这次演示我们会安装Ubuntu，因为NOI Linux正是Ubuntu的修改版。</p>
<p>只要学会了方法，你也可照葫芦画瓢，安装Windows应用商店中的其他子系统。</p>
<h2>0x03 开搞</h2>
<p>去Windows自带的应用商店，搜索“Ubuntu”，然后选第一个安装。
亦可打开<a href="https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6">https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6</a>
<a href="http://cdn1.ihcr.top/1810143654.png-yuantu"></a></p>
<p>安装完后，打开Ubuntu，等待一段时间，让其自己配置，不久就会提示你设置用户名和密码。（这里看你喜好，推荐设置短点，毕竟本地环境不怕攻击）</p>
<h3>Linux区分大小写！</h3>
<p><img src="http://cdn1.ihcr.top/1810145205.png-yuantu" alt=""></p>
<p><em>照图片来</em> </p>
<p>一个纯净的Ubuntu系统安装完成了！</p>
<h2>0x04 基础配置</h2>
<p><strong>以下命令均可直接右键复制粘贴进窗口哦！</strong>
<img src="http://cdn1.ihcr.top/1810145742.png-yuantu" alt=""></p>
<p>正如图片所示，这个系统纯净到连个编译器都没有，所以这一节来看看基础的环境配置。</p>
<h3>解锁root账户</h3>
<p>Ubuntu默认是把root账户锁住的，给刚刚的账户开放sudo权限。</p>
<h4>在Linux的权限系统中，“sudo”正如“以管理员身份运行”，不声明就没法使用管理员权限。而“root”则是"Administrator“，直接解锁全部权限。</h4>
<p>命令三连：</p>
<pre><code class="hljs">sudo passwd root
sudo passwd --unlock root
sudo su</code></pre>
<p><img src="http://cdn1.ihcr.top/1810151229.png-yuantu" alt=""></p>
<p><strong>Warning：如果跳过这一节，请在接下来每个命令前带上sudo！</strong></p>
<h3>更换为国内软件源</h3>
<p>Ubuntu默认的软件源在国外，我们可以换为国内的加快速度，如<a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/">清华TUNA的软件源</a>。
<del>（如果你在国外的话当我没说）</del></p>
<p>TUNA的源（这个Ubuntu是16.04LTS长期支持版的）</p>
<pre><code class="hljs cpp"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse</span>
<span class="hljs-meta"># deb-src https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse</span></span>
deb https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse</span>
<span class="hljs-meta"># deb-src https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse</span></span>
deb https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse</span>
<span class="hljs-meta"># deb-src https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse</span></span>
deb https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse</span>
<span class="hljs-meta"># deb-src https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse</span></span>

# 预发布软件源，不建议启用
<span class="hljs-meta"># deb https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse</span></span>
<span class="hljs-meta"># deb-src https:<span class="hljs-comment">//mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse</span></span></code></pre>
<p>使用的命令<strong>（需按上节指示进入root环境，否则请在每个命令前带上sudo）</strong>：</p>
<pre><code class="hljs">cp /etc/apt/sources.list /etc/apt/sources.list.bak
echo '' &gt; /etc/apt/sources.list
nano /etc/apt/sources.list
（将上文的源右键粘贴进去，编辑完后按Ctrl+X，再按Y和回车）
apt update &amp;&amp; apt upgrade -y</code></pre>
<p><img src="http://cdn1.ihcr.top/1810153131.png-yuantu" alt=""></p>
<h3>安装中文环境</h3>
<pre><code class="hljs">apt install  language-pack-zh-han* -y
locale-gen zh_CN.GB18030 &amp;&amp; locale-gen zh_CN.GB2312 %% locale-gen zh_CN.UTF8
#中文字体，别忘了同意eula
apt install fontconfig -y
sudo apt install ttf-mscorefonts-installer -y
#下面的再执行一遍以防万一
sudo apt install -y --force-yes --no-install-recommends fonts-wqy-microhei
sudo apt install -y --force-yes --no-install-recommends ttf-wqy-zenhei
sudo dpkg-reconfigure locales</code></pre>
<p>使用<strong>sudo dpkg-reconfigure locales</strong>进入菜单，选择<strong>zh_CN.UTF8</strong>回车，下一个菜单中也是选它打回车。
<img src="http://cdn1.ihcr.top/1810154358.png-yuantu" alt="">
<img src="http://cdn1.ihcr.top/1810154428.png-yuantu" alt=""></p>
<p>之后关上Ubuntu重开一遍登录，是不是变中文了？</p>
<p>再用下列命令，把man帮助页替换为中文：<a href="https://blog.csdn.net/qq_14989227/article/details/72954523">via</a></p>
<pre><code class="hljs cpp">apt install manpages-zh
vi /etc/manpath.config
:<span class="hljs-number">1</span>,$s#/usr/share/man#/usr/share/man/zh_CN<span class="hljs-meta">#g</span>
:wq</code></pre>
<p>可以用<strong>man help</strong>测试下。</p>
<h3>安装编译环境</h3>
<pre><code class="hljs cpp">apt install build-essential vim ddd gdb fpc emacs gedit anjuta lazarus -y
wget http:<span class="hljs-comment">//download.noi.cn/T/noi/GUIDE-1.0.2-ubuntu.tar</span>
tar -xvf GUIDE<span class="hljs-number">-1.0</span><span class="hljs-number">.2</span>-ubuntu.tar
cd GUIDE<span class="hljs-number">-1.0</span><span class="hljs-number">.2</span>-ubuntu
./install.sh</code></pre>
<p>这是基础的+NOI官方要求环境，如有需要可以用<strong>apt install 程序名</strong>来安装别的。
若想安装其他版本可以参考下<a href="https://www.cnblogs.com/EasonJim/p/7144017.html">这个</a></p>
<p>来个程序玩玩：</p>
<pre><code class="hljs cpp">root@DESKTOP<span class="hljs-number">-3F</span>Q0AR5:/home/hanlin<span class="hljs-meta"># nano cpuid.cpp</span>
root@DESKTOP<span class="hljs-number">-3F</span>Q0AR5:/home/hanlin<span class="hljs-meta"># g++ -Wall cpuid.cpp -o cpuid</span>
root@DESKTOP<span class="hljs-number">-3F</span>Q0AR5:/home/hanlin# ./cpuid
AMD Ryzen <span class="hljs-number">5</span> <span class="hljs-number">1400</span> Quad-Core Processor</code></pre>
<p><strong>Tips：Linux环境下可执行文件可不带扩展名，实现方式看上方命令行</strong></p>
<p><strong>Update：在正式测试编译环境下，命令行可能有所不同，具体请看 <em>0x06 附言</em> 部分</strong></p>
<h2>0x05 进阶操作</h2>
<h3>安装图形环境，并使用远程桌面连接</h3>
<p>推荐图形环境用xfce4，不臃肿。</p>
<pre><code class="hljs cpp">apt install xfce4 -y
#或使用 apt install xubuntu-desktop -y
<span class="hljs-meta">#xubuntu安装的软件多，基础环境可用第一种</span></code></pre>
<p>图形环境是个大头，因此要多等会，静静等待下载解包。</p>
<p>下面配置xrdp：</p>
<pre><code class="hljs cpp">apt install xrdp -y
echo <span class="hljs-string">"xfce4-session"</span> &gt;~/.xsession
service xrdp restart</code></pre>
<p>为了防止和你计算机本来带的远程桌面冲突，最好换一下端口。
<img src="http://cdn1.ihcr.top/1810164401.png-yuantu" alt=""></p>
<p><em>不换端口的结果</em></p>
<p>运行命令<strong>nano /etc/xrdp/xrdp.ini</strong>，把<strong>port=3389</strong>改为别的（如<strong>port=3390</strong>），然后保存即可。
<img src="http://cdn1.ihcr.top/1810164730.png-yuantu" alt=""></p>
<p>运行<strong>service xrdp restart</strong>，然后去开始菜单，用_localhost:你配置的端口_来访问。
<img src="http://cdn1.ihcr.top/1810165033.png-yuantu" alt=""></p>
<p><img src="http://cdn1.ihcr.top/1810170141.png-yuantu" alt=""></p>
<h3><strong>Enjoy It!</strong></h3>
<h2>0x06 附言-补充材料</h2>
<p>以下的内容均为进入备选区后更新。</p>
<h3>洛谷的编译参数 <a href="https://www.luogu.org/wiki/show?name=%E5%B8%AE%E5%8A%A9">via</a></h3>
<pre><code class="hljs cpp">- C：gcc -DONLINE_JUDGE -Wall -fno-<span class="hljs-keyword">asm</span> -<span class="hljs-built_in">std</span>=c99 -lm
- C++：g++ -DONLINE_JUDGE -Wall -fno-<span class="hljs-keyword">asm</span> -<span class="hljs-built_in">std</span>=c++<span class="hljs-number">98</span> 
- C++<span class="hljs-number">11</span>：g++ -DONLINE_JUDGE -Wall -fno-<span class="hljs-keyword">asm</span> -<span class="hljs-built_in">std</span>=c++<span class="hljs-number">11</span>
- Pascal：ppcx64 -dONLINE_JUDGE </code></pre>
<h3>常见“我在本地/xxOJ AC了、洛谷却不过”的原因 <a href="https://www.luogu.org/wiki/show?name=%E5%B8%AE%E5%8A%A9">via</a></h3>
<pre><code class="hljs">Linux中换行符是'\\n'而Windows中是'\\r\\n'（多一个字符），有些数据在Windows中生成，而在洛谷评测机Linux环境下评测。这种情况在字符串输入中非常常见。

评测系统建立在Linux下，可能由于使用了Linux的保留字而出现CE，但在Windows下正常。

Linux对内存的访问控制更为严格，因此在Windows上可能正常运行的无效指针或数组下标访问越界，在评测系统上无法运行。

严重的内存泄露的问题很可能会引起系统的保护模块杀死你的进程。因此，凡是使用malloc(或calloc,realloc,new)分配而得的内存空间，请使用free(或delete)完全释放。

数据可能真的有问题。但是如果不止一个人通过了这道题，那最好不要怀疑是数据的锅。</code></pre>
<p>如有写得不好的地方，还请dalao多多指正！
<strong>乱码是因为我用的预览体验系统......不过用正式版也可以了！</strong></p>
<pre><code class="language-php">
$test=233;
var_dump($test);</code></pre>
<pre><code class="language-cpp">
#define mian main
#define bao int
#define hao int
#define dailai scanf
#define daizou printf
#define gaoci return 0

#include&lt;stdio.h&gt;

bao mian(){
    hao chi;
    hao wan;
    dailai("%d %d",&amp;chi,&amp;wan);
    hao huai=chi+wan;
    daizou("%d",huai);
    gaoci;
}</code></pre>
<pre><code class="language-python">
import flask

app = flask.Flask("SAM Drawer")

@app.route("/")
def home()-&gt;str:
    return "qwq"

def main()-&gt;None:
    app.run(port=8080)

if __name__ == "__main__":
    main()</code></pre>
  `
})
