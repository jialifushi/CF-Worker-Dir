/**
 *  自定义网站配置 
 */
const config = {
  title: "HertzHe的导航页",
  subtitle: "HertzHe Dafeiji Dir",
  logo_icon: "sitemap",
  backgroundImage: "https://cdn.stocksnap.io/img-thumbs/280h/QKLA2F9TKK.jpg",  // 背景图片的 URL
  hitokoto: true,
  search: true,
  search_engine: [
    {
      name: "百 度",
      template: "https://www.baidu.com/s?wd=$s"
    },
    {
      name: "谷 歌",
      template: "https://www.google.com/search?q=$s"
    },
    {
      name: "必 应",
      template: "https://www.bing.com/search?q=$s"
    },
    {
      name: "搜 狗",
      template: "https://www.sogou.com/web?query=$s"
    }
  ],
  selling_ads: true,
  sell_info: {
    domain: "bigfly.com",
    price: 500,
    mon_unit: "yen sign",
    contact: [
      {
        type: "envelope",
        content: "709216047@qq.com"
      }
    ]
  },
  lists: [
    {
      name: "技术",
      icon: "code",
      list: [
        { url: "https://oschina.net/", name: "开源中国", desc: "程序员集散地" },
        { url: "https://v2ex.com", name: "V2EX", desc: "程序员集散地" },
        { url: "https://csdn.net/", name: "CSDN技术社区", desc: "程序员集散地" },
        { url: "https://github.com/", name: "Github", desc: "程序员集散地" },
      ]
    },
    {
      name: "学习",
      icon: "graduation cap",
      list: [
        { url: "https://w3school.com.cn/", name: "W3school在线教程", desc: "程序员集散地" },
        { url: "https://runoob.com/", name: "菜鸟教程", desc: "程序员集散地" },
        { url: "https://segmentfault.com/", name: "思否社区", desc: "程序员集散地" },
        { url: "https://jianshu.com/", name: "简书", desc: "程序员集散地" },
      ]
    },
    {
      name: "娱乐",
      icon: "game",
      list: [
        { url: "https://bilibili.com/", name: "哔哩哔哩", desc: "ACG视频" },
        { url: "https://douyin.com/", name: "抖音", desc: "短视频分享" },
        { url: "https://weibo.com/", name: "微博", desc: "社交媒体" },
        { url: "https://twitch.tv/", name: "Twitch", desc: "直播平台" },
        { url: "https://twitch1.tv/", name: "Twitch1", desc: "直播平台1" },
      ]
    },
    {
      name: "工作",
      icon: "briefcase",
      list: [
        { url: "https://linkedin.com/", name: "领英", desc: "职业社交平台" },
        { url: "https://zoom.us/", name: "Zoom", desc: "视频会议平台" },
        { url: "https://trello.com/", name: "Trello", desc: "项目管理工具" },
        { url: "https://slack.com/", name: "Slack", desc: "团队协作工具" },
        { url: "https://slack2.com/", name: "Slack2", desc: "团队协作工具2" },
      ]
    },
    {
      name: "秘密",
      icon: "lock",
      list: [
        { url: "https://protonmail.com/", name: "ProtonMail", desc: "加密邮件服务" },
        { url: "https://1password.com/", name: "1Password", desc: "密码管理工具" },
        { url: "https://signal.org/", name: "Signal", desc: "安全通讯应用" },
        { url: "https://duckduckgo.com/", name: "DuckDuckGo", desc: "隐私搜索引擎" },
        { url: "https://duckduckgo1.com/", name: "DuckDuckGo1", desc: "隐私搜索引擎1" },
      ]
    }
  ]
}

const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(), config.selling_ads ? renderSeller() : null), init);
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
});

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
;

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.com/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.com/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 * 增加最下层图片的自定义，和导航链接和链接名称
 */
function renderIndex(){
  const footer = el('footer', [], el('div', ['class="footer"', 'style="background-color: #f0f0f0; background-image: url(\'https://cdn.pixabay.com/photo/2023/10/17/09/01/seagull-8320687_1280.jpg\'); background-size: cover;"'],
    'Powered by ' +
    el('a', [
      'class="ui label"',
      'href="https://www.baidu.com"',
      'target="_blank"',
      'style="background-image: url(\'\'); background-size: cover;"'
    ], el('i', ['class="github icon"'], "") + '何壮-typecho-Dir') +
    ' &copy; Base on ' +
    el('a', ['class="ui label"'], el('i', ['class="balance scale icon"'], "") + 'MIT License')
  ));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.baidu.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  
  //当链接无效时，建议放开这条代码
  //return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))

  // 新增背景图片处理部分
  // 使用 background-size: cover; background-position: center; 确保背景图片自适应并居中显示
  var backgroundImage = config.backgroundImage ? `background-image: url('${config.backgroundImage}'); background-size: cover; background-position: center;` : "";
  var defaultBackground = `background-image: linear-gradient(to bottom, #1e3c72, #2a5298); background-size: cover; background-position: center;`;

  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"','style="' + (backgroundImage || defaultBackground) + '"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}


function renderMain() {
  var mainBackgroundImage = ""; // 自定义下方背景图的URL
  var defaultMainBackground = "background-color: #FFC0CB;"; // 默认背景颜色（粉红色）

  var mainStyle = mainBackgroundImage ? `background-image: url('${mainBackgroundImage}'); background-size: cover; background-position: center;` : defaultMainBackground;

  var main = config.lists.map((item) => {
    const card = (url, name, desc) => el('a', ['class="card"', `href=${url}`, 'target="_blank"'],
      el('div', ['class="content"'], el('img', ['class="left floated avatar ui image"', `src=${getFavicon(url)}`], "") +
      el('div', ['class="header"'], name) + el('div', ['class="meta"'], desc))
    );

    const divider = el('h4', ['class="ui horizontal divider header"'],
      el('i', [`class="${item.icon} icon"`], "") + item.name
    );

    var content = el('div', ['class="ui four stackable cards"'], item.list.map((link) => {
      return card(link.url, link.name, link.desc);
    }).join(""));

    return el('div', ['class="ui basic segment"'], divider + content);
  }).join("");

  return el('main', ['style="' + mainStyle + '"'], el('div', ['class="ui container"'], main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
