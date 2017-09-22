var currentuser="";
//var newpostcontent="";
currentuser = window.localStorage.getItem("currentusername");

window.fn = {};

window.fn.toggleMenu = function () {
    document.getElementById('appSplitter').left.toggle();
};

window.fn.loadView = function (index) {
    document.getElementById('appTabbar').setActiveTab(index);
    document.getElementById('sidemenu').close();
};

//ons.ready(function () {
//    const sidemenu = document.getElementById('appSplitter');
//    ons.platform.isAndroid() ? sidemenu.left.setAttribute('animation', 'overlay') : sidemenu.left.setAttribute('animation', 'reveal');
//
//    document.querySelector('#tabbar-page').addEventListener('postchange', function(event) {
//        if (event.target.matches('#appTabbar')) {
//            event.currentTarget.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
//        }
//    });
//});

//Form input
//var login = function() {
//    var username = document.getElementById('username').value;
//    var password = document.getElementById('password').value;
//    
//    if (username === 'pengqinglu' && password === '123456') {
//        ons.notification.alert('Login successful!');
//        document.querySelector('#appNavigator').pushPage('profile.html');
//    }
//    else {
//        ons.notification.alert('Incorrect username or password.');
//    }
//};

//Dialogs
var showDialog = function (id) {
    document
    .getElementById(id)
    .show();
};

var hideDialog = function (id) {
    document
    .getElementById(id)
    .hide();
};

//throw Exception
//var throwException = function() {
//    try{
//        throw new Error("test error");
//    }
//    catch(error)
//    {
//        alert(error);
//    }
//}

//监听native.keyboardshow 键盘弹出事件
//var isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判断是iOS
//if(isIOS) {
//    function keyboardShowHandler(e){
//        if(window.scrollY < 100) //键盘高度一般大于100，如果scrollY小于100，可以认为界面未上移，则需要手动上移
//            window.scrollTo(0, e.keyboardHeight);
//    }
//    function keyboardHideHandler(e){
//        if(window.scrollY != 0)
//            window.scrollTo(0, 0);
//    }
//    window.addEventListener('native.keyboardshow', keyboardShowHandler);
//    window.addEventListener('native.keyboardhide', keyboardHideHandler);
//}
//


//=============================================================================================================

$(document).ready(function()
{
    var navigator = $(ons._util.createElement('<ons-navigator id="appNavigator" page="forum.html" swipeable swipe-target-width="80px"></ons-navigator>'));
//    var page = $(ons._util.createElement('<ons-page></ons-page>'));
//    var splitter = $(ons._util.createElement('<ons-splitter id="appSplitter"></ons-splitter>'));
//    var splitter_side = $(ons._util.createElement('<ons-splitter-side id="sidemenu" page="sidemenu.html" swipeable side="left" collapse="" width="220px"></ons-splitter-side>'));
//    var splitter_content = $(ons._util.createElement('<ons-splitter-content page="tabbar-page.html"></ons-splitter-content>'));
    
//    navigator.append(page);
//    page.append(splitter);
//    splitter.append(splitter_side);
//    splitter.append(splitter_content);
                  
    $("body").append(navigator);
                  
    var forum ='<ons-page><ons-splitter id="appSplitter"><ons-splitter-side id="sidemenu" page="sidemenu.html" swipeable side="left" collapse="" width="220px"></ons-splitter-side><ons-splitter-content page="tabbar-page.html"></ons-splitter-content></ons-splitter></ons-page>';
    document.getElementById('forum.html').innerHTML = forum;
                                             
    var tabbar_page = '<ons-page><ons-toolbar><div class="center">The first forum</div><div class="left"><ons-toolbar-button onclick="fn.toggleMenu()"><ons-icon icon="ion-navicon, material:md-menu"></ons-icon></ons-toolbar-button></div></ons-toolbar><ons-tabbar id="appTabbar" position="auto"><ons-tab label="Home" icon="ion-home" page="home.html" active></ons-tab><ons-tab icon="ion-ios-bell" label="Notifications" badge="3" page="notifications.html"></ons-tab><ons-tab icon="ion-ios-email-outline" label="Message" badge="2" page="message.html"></ons-tab><ons-tab icon="ion-person" label="Me" page="me.html"></ons-tab></ons-tab><ons-tab></ons-tab></ons-tabbar><ons-fab position="bottom right" onclick = "addnewpost()"><ons-icon icon="md-plus"></ons-icon></ons-fab></ons-page>';
    document.getElementById('tabbar-page.html').innerHTML = tabbar_page;
    
    var sidemenu = '<ons-page><ons-list><p style="text-align: center; margin-top: 10px;"><ons-search-input placeholder="Search"></ons-search-input></p><ons-list-item onclick="fn.loadView(0)" tappable>Home</ons-list-item><ons-list-item onclick="appNavigator.pushPage(' + "'settings.html'" + ')" tappable>Settings</ons-list-item><ons-list-item onclick="showDialog(' + "'about'" + ')" tappable>About</ons-list-item></ons-list></ons-page>';
    document.getElementById('sidemenu.html').innerHTML = sidemenu;
      
    var home = '<ons-page><ons-tabbar position="top"><ons-tab label="All" page="allposts.html" active></ons-tab><ons-tab label="Game" page="game.html"></ons-tab><ons-tab label="Music" page="music.html"></ons-tab><ons-tab label="Picture" page="picture.html"></ons-tab><ons-tab label="Irrigation" page="irrigation.html"></ons-tab></ons-tabbar><ons-alert-dialog id="about"><div class="alert-dialog-title">About</div><div class="alert-dialog-content">SIT313 - Mobile Computing</br>Student Name: Qinglu PENG</br>Student ID: 216036238</br>Email: pengq@deakin.edu.au</div><div class="alert-dialog-footer"><button class="alert-dialog-button" onclick="hideDialog(' + "'about'" + ')">OK</button></div></ons-alert-dialog></ons-page>';
    document.getElementById('home.html').innerHTML = home;
    
    displayallposts();
    displaygameposts();
    displaymusicposts();
    displaypictureposts();
    displayirrigationposts();
                  
//    var allposts = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item onclick="appNavigator.pushPage(' + "'picturepost1.html'" + ')" tappable>[Daily Photo] Sheepers#1</ons-list-item><ons-list-item onclick="appNavigator.pushPage(' + "'musicpost1.html'" + ')" tappable>Forforever</ons-list-item><ons-list-item>All Post 3</ons-list-item><ons-list-item>All Post 4</ons-list-item><ons-list-item>All Post 5</ons-list-item><ons-list-item>All Post 6</ons-list-item></ons-list></ons-page>';
//    document.getElementById('allposts.html').innerHTML = allposts;
    
//    var game = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item>Game Post 1</ons-list-item><ons-list-item>Game Post 2</ons-list-item><ons-list-item>Game Post 3</ons-list-item><ons-list-item>Game Post 4</ons-list-item><ons-list-item>Game Post 5</ons-list-item><ons-list-item>Game Post 6</ons-list-item></ons-list></ons-page>';
//    document.getElementById('game.html').innerHTML = game;
//    
//    var music = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item onclick="appNavigator.pushPage(' + "'musicpost1.html'" + ')" tappable>Forforever</ons-list-item><ons-list-item>Music Post 2</ons-list-item><ons-list-item>Music Post 3</ons-list-item><ons-list-item>Music Post 4</ons-list-item><ons-list-item>Music Post 5</ons-list-item><ons-list-item>Music Post 6</ons-list-item></ons-list></ons-page>';
//    document.getElementById('music.html').innerHTML = music;
//                  
//    var picture = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item onclick="appNavigator.pushPage(' + "'picturepost1.html'" + ')" tappable>[Daily Photo] Sheepers#1</ons-list-item><ons-list-item>Picture Post 2</ons-list-item><ons-list-item>Picture Post 3</ons-list-item><ons-list-item>Picture Post 4</ons-list-item><ons-list-item>Picture Post 5</ons-list-item><ons-list-item>Picture Post 6</ons-list-item></ons-list></ons-page>';
//    document.getElementById('picture.html').innerHTML = picture;
//
//    var irrigation = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item>Irrigation Post 1</ons-list-item><ons-list-item>Irrigation Post 2</ons-list-item><ons-list-item>Irrigation Post 3</ons-list-item><ons-list-item>Irrigation Post 4</ons-list-item><ons-list-item>Irrigation Post 5</ons-list-item><ons-list-item>Irrigation Post 6</ons-list-item></ons-list></ons-page>';
//    document.getElementById('irrigation.html').innerHTML = irrigation;
                 
    var settings = '<ons-page id="settings"><ons-toolbar><div class="left"><ons-back-button>Home</ons-back-button></div><div class="center">Settings</div></ons-toolbar><ons-list><ons-list-header>Settings</ons-list-header><ons-list-item><div class="center">Night mode</div><div class="right"><ons-switch></ons-switch></div></ons-list-item><ons-list-item><div class="center">Notifications</div><div class="right"><ons-switch checked></ons-switch></div></ons-list-item></ons-list><ons-list-item>Adjust the volume:<ons-row><ons-col width="40px" style="text-align: center; line-height: 31px;"><ons-icon icon="md-volume-down"></ons-icon></ons-col><ons-col><ons-range id="range-slider" value="25" style="width: 100%;"></ons-range></ons-col><ons-col width="40px" style="text-align: center; line-height: 31px;"><ons-icon icon="md-volume-up"></ons-icon></ons-col></ons-row>Volume:<span id="volume-value">&nbsp;25</span> <span id="careful-message" style="display: none">&nbsp;(careful, that&apos;s loud)</span></ons-list-item></ons-page>';
     document.getElementById('settings.html').innerHTML = settings;
                  
    var notifications = '<ons-page id="notifications-page"><ons-tabbar id="hidden-tabbar" position="top"><ons-tab page="allnotifications.html" active></ons-tab><ons-tab page="mentions.html"></ons-tab></ons-tabbar><style type="text/css">#hidden-tabbar .tabbar__content {top: 0px;}#hidden-tabbar .tabbar {display: none;}.notifs-bar {height: 45px;}.notifs-bar .button-bar {height: 27px;width: 100%;}.notifs-bar.list-item--material .button-bar {align-items: center;}.notifs-bar ons-button {font-size: 14px;line-height: inherit;text-align: center;width: 50%;}.notifs-bar ons-button:first-child {border-radius: 30px 0px 0px 30px;}.notifs-bar ons-button:last-child {border-radius: 0px 30px 30px 0px;}</style></ons-page>';
     document.getElementById('notifications.html').innerHTML = notifications;
     
    var allnotifications = '<ons-page id="allnotifications-page"><ons-pull-hook><ons-icon size="30px" spin icon="md-spinner"></ons-icon></ons-pull-hook><ons-list><ons-list-item modifier="longdivider" class="notifs-bar"><div class="button-bar"><ons-button id="all-all-button"><b>All</b></ons-button><ons-button id="all-mentions-button" modifier="outline" onclick="document.getElementById(' + "'hidden-tabbar'" + ').setActiveTab(1)"><b>Mentions</b></ons-button></div></ons-list-item><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"><ons-icon icon="ion-ios-chatboxes" size="25px"></ons-icon></div><div class="center"><div class="notif-thumbnails"><img src="img/41501698082_.pic.jpg"><img src="img/31501698077_.pic.jpg"><ons-button class="option-arrow" modifier="quiet" onclick="document.getElementById(' + "'sheet'" + ').show()"><ons-icon icon="ion-arrow-down-b"></ons-icon></ons-button></div><b>Mindy</b>&nbsp;and&nbsp;<b>Linda</b>&nbsp;replied you</div></ons-list-item><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"><ons-icon icon="ion-heart" size="25px" style="color: red"></ons-icon></div><div class="center"><div class="notif-thumbnails"><img src="img/11501698068_.pic.jpg"><ons-button class="option-arrow" modifier="quiet" onclick="document.getElementById(' + "'sheet'" + ').show()"><ons-icon icon="ion-arrow-down-b"></ons-icon></ons-button></div><b>sheepers</b>&nbsp;liked your post</div></ons-list-item></ons-list><ons-action-sheet id="sheet" cancelable><ons-action-sheet-button onclick="document.getElementById(' + "'sheet'" + ').hide(); ons.notification.toast({message: ' + "'OK. You won\&apos;t see recommendations like this as much.'" + ', timeout: 2000})">See less often</ons-action-sheet-button><ons-action-sheet-button icon="md-close" onclick="document.getElementById(' + "'sheet'" + ').hide()">Cancel</ons-action-sheet-button></ons-action-sheet><style type="text/css">#all-page {font-size: 14px;}#all-all-button {background-color: #00aced;}#all-mentions-button {border-color: #00aced;color: #00aced;}.all-notifs .left {align-items: baseline;width: 25%;}.all-notifs .left.list-item--material__left {padding: 14px 12px;}.all-notifs .left ons-icon {color: #00aced;margin-left: auto;}.all-notifs .center {width: 100%;}.notif-thumbnails {width: 100%;}.notif-thumbnails img {border-radius: 50%;height: 28px;width: 28px;}</style></ons-page>';
    document.getElementById('allnotifications.html').innerHTML = allnotifications;
                  
    var mentions = '<ons-page id="mentions-page"><ons-pull-hook><ons-icon size="30px" spin icon="md-spinner"></ons-icon></ons-pull-hook><ons-list><ons-list-item modifier="longdivider" class="notifs-bar"><div class="button-bar"><ons-button id="mentions-all-button" modifier="outline" onclick="document.getElementById(' + "'hidden-tabbar'" + ').setActiveTab(0)"><b>All</b></ons-button><ons-button id="mentions-mentions-button"><b>Mentions</b></ons-button></div></ons-list-item></ons-list><ons-list><ons-list-item modifier="longdivider" style="border-top: 1px solid #eee"><div class="left"><img class="list-item__thumbnail" src="img/11501698068_.pic.jpg"></div><div class="center"><div class="tweet-header"><span class="list-item__title"><b>sheepers</b></span><span class="list-item__subtitle">@sheepers&nbsp;&#8231;&nbsp;1 day ago</span><ons-button class="option-arrow" modifier="quiet" onclick="ons.openActionSheet({cancelable: true,buttons: [' + "'Share Tweet via...'" + ',' + "'Add to Moment'" + ',' + "'Unfollow @cKitty'" + ',' + "'Mute @cKitty'" + ',' + "'Mute this conversation'" + ',' + "'Block @cKitty'" + ',' + "'Report Tweet'" + ',{label: ' + "'Cancel'" + ',icon: ' + "'md-close'" + '}]})"><ons-icon icon="ion-arrow-down-b"></ons-icon></ons-button></div><span class="list-item__content">Happy new years&nbsp;<span style="color: #00aced">@Charlotte</span></span><ons-row class="option-buttons"><ons-col><ons-button modifier="quiet"><ons-icon icon="ion-ios-chatboxes"></ons-icon><span class="reaction-no">1</span></ons-button></ons-col><ons-col><ons-button modifier="quiet"><ons-icon icon="ion-heart"></ons-icon><span class="reaction-no">5</span></ons-button></ons-col><ons-col><ons-button modifier="quiet"><ons-icon icon="ion-ios-email-outline"></ons-icon></ons-button></ons-col></ons-row></div></ons-list-item><ons-if platform="ios other"><div style="text-align: center; margin-bottom: 10px"><ons-icon size="30px" spin icon="md-spinner"></ons-icon></div></ons-if><ons-if platform="android"><div style="text-align: center; margin-bottom: 45px">&#8231;</div></ons-if></ons-list><style type="text/css">#mentions-page {font-size: 14px;}#mentions-all-button {border-color: #00aced;color: #00aced;}#mentions-mentions-button {background-color: #00aced;}</style></ons-page>';
     document.getElementById('mentions.html').innerHTML = mentions;
                
//    var post = '<ons-page><form name="form1" method="post" action=""><center><h2><strong>New Post</strong></h2></center><p><center><label for="textarea">Title:</label><textarea name="textarea" id="newposttitle" cols="45" rows="1"></textarea><label for="select">Classify:</label><select name="select" required id="newpostclassify"><option selected>Game</option><option>Music</option><option>Picture</option><option>Irrigation</option></select></center></p><p><center><label for="textarea2">Content:</label><textarea name="textarea2" id="newpostcontent" cols="45" rows="5"></textarea></center></p><p style="margin-top: 30px;"><center><ons-button onclick="newpost_reset()">Reset</ons-button>&nbsp;&nbsp;&nbsp;<ons-button onclick="newpost_submit()">Submit</ons-button></center></p></form></ons-page>';
//    document.getElementById('post.html').innerHTML = post;
                  
    var message = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"></div><div class="center"><div class="notif-thumbnails"><img src="img/11501698068_.pic.jpg"><b>@ sheepers</b>&nbsp;</div>Do you have time tomorrow afternoon?</div></ons-list-item></ons-list><ons-list><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"></div><div class="center"><div class="notif-thumbnails"><img src="img/31501698077_.pic.jpg"><b>@ Linda</b>&nbsp;</div>Shall we go to Coles together on Saturday?</div></ons-list-item></ons-list></ons-page>';
    document.getElementById('message.html').innerHTML = message;
                  
//    var me = '<ons-page><ons-toolbar><div class="center">Login</div></ons-toolbar><div style="text-align: center; margin-top: 30px;"><p><ons-input id="username" modifier="underbar" placeholder="Username" float></ons-input></p><p><ons-input id="password" modifier="underbar" type="password" placeholder="Password" float></ons-input></p><p style="margin-top: 30px;"><ons-button onclick="login()">Login</ons-button></p><p style="margin-top: 30px;"><ons-button onclick="appNavigator.pushPage(' + "'register.html'" + ')">Register</ons-button></p></div></ons-page>';
//    document.getElementById('me.html').innerHTML = me;

    me();
                  
    var register = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Login</ons-back-button></div><div class="center">Register</div></ons-toolbar><div style="text-align: center; margin-top: 30px;"><p><ons-input id="newusername" modifier="underbar" placeholder="Username" float></ons-input></p><p><ons-input id="newpassword" modifier="underbar" type="password" placeholder="Password" float></ons-input></p><p style="margin-top: 30px;"><center><ons-button onclick="newregister_reset()">Reset</ons-button>&nbsp;&nbsp;&nbsp;<ons-button onclick="newregister_submit()">Submit</ons-button></center></p></div></ons-page>';
    document.getElementById('register.html').innerHTML = register;
                  
//    var profile = '<ons-page id="profile"><div class="left"><ons-back-button>Back</ons-back-button></div><div style="text-align: center"><img style="height: 160px; width: 120px" class="profile-thumbnail" src="img/101501779827_.pic.jpg"></div><div style="text-align: center">Welcome <b>Charlotte</b> !</div></br></br><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-person"></ons-icon></div><div class="center">Profile</div></ons-list-item><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-thumbsup"></ons-icon></div><div class="center">Likes</div></ons-list-item><ons-list-item modifier="longdivider" tappable><div class="left"><ons-icon icon="ion-ios-box"></ons-icon></div><div class="center">Draft Box</div></ons-list-item><ons-list-item modifier="nodivider" tappable>Help</ons-list-item></ons-page>';
//     document.getElementById('profile.html').innerHTML = profile;

});

function newregister_reset()
{
    document.getElementById("newusername").value="";
    document.getElementById("newpassword").value="";
}

function newregister_submit()
{
    var newusername = document.getElementById('newusername').value;
    var newpassword = sha256_digest(document.getElementById('newpassword').value);
    
    var user = '[{"username":"'+ newusername +'","password":"' + newpassword + '"}]';
    
    var loadreturnvalue = new XMLHttpRequest();
    loadreturnvalue.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + newusername), false);
    loadreturnvalue.send(null);
    
    if (newusername == "")
    {
        ons.notification.alert('Please input the username!');
    }
    else
    {
        if (newpassword == "")
        {
            ons.notification.alert('Please input the password!');
        }
        else
        {
            if (loadreturnvalue.responseText != "Bad Request: objectid doesn't exist.")
            {
                ons.notification.alert('The username has been registered!');
                newregister_reset();
            }
            else
            {
                var createuser = new XMLHttpRequest();
                createuser.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=" + newusername + "&data=" + user), false);
                createuser.send(null);
                ons.notification.alert({message:'User created successfully!'});
                document.querySelector('#appNavigator').popPage();
            }
        }
    }
}


function me()
{
    if (currentuser == "")
    {
        var loginpage = '<ons-page><ons-toolbar><div class="center">Login</div></ons-toolbar><div style="text-align: center; margin-top: 30px;"><p><ons-input id="username" modifier="underbar" placeholder="Username" float></ons-input></p><p><ons-input id="password" modifier="underbar" type="password" placeholder="Password" float></ons-input></p><p style="margin-top: 30px;"><ons-button onclick="login()">Login</ons-button></p><p style="margin-top: 30px;"><ons-button onclick="appNavigator.pushPage(' + "'register.html'" + ')">Register</ons-button></p></div></ons-page>';
    }
    else
    {
        loginpage = '<ons-page id="profile"><div style="text-align: center"><img style="height: 160px; width: 120px" class="profile-thumbnail" src="img/101501779827_.pic.jpg"></div><div style="text-align: center">Welcome <b>' + currentuser + '</b> !</div></br></br><ons-list-item modifier="nodivider" tappable onclick="myposts()"><div class="left"><ons-icon icon="ion-ios-list-outline"></ons-icon></div><div class="center">My posts</div></ons-list-item><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-thumbsup"></ons-icon></div><div class="center">Likes</div></ons-list-item><ons-list-item modifier="longdivider" tappable onclick="changeperinfo()"><div class="left"><ons-icon icon="ion-ios-person"></ons-icon></div><div class="center">Profile</div></ons-list-item><ons-list-item modifier="nodivider" tappable onclick="logout()">Logout</ons-list-item></ons-page>';
    }
    
    document.getElementById('me.html').innerHTML = loginpage;
}

function login()
{
    var login_username = document.getElementById('username').value;
    var login_password = sha256_digest(document.getElementById('password').value);
    
    var load_loginuser = new XMLHttpRequest();
    load_loginuser.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + login_username), false);
    load_loginuser.send(null);
    
    if (login_username == "")
    {
        ons.notification.alert('Please input the username!');
    }
    else
    {
        if (login_password == "")
        {
            ons.notification.alert('Please input the password!');
        }
        else
        {
            if (load_loginuser.responseText == "Bad Request: objectid doesn't exist.")
            {
                ons.notification.alert('Username does not exist!');
                login_reset();
            }
            else
            {
                var login_username_info = eval('(' + load_loginuser.responseText + ')');
                
                if (login_username_info[0].password == login_password)
                {
                    currentuser = login_username;
                    
                    ons.notification.alert('Login successful!');
                    
                    document.querySelector('#appNavigator').pushPage('forum.html');
                    currentuser_info = '<ons-page id="currentuser_info"><div style="text-align: center"><img style="height: 160px; width: 120px" class="profile-thumbnail" src="img/101501779827_.pic.jpg"></div><div style="text-align: center">Welcome <b>' + currentuser + '</b> !</div></br></br><ons-list-item modifier="nodivider" tappable onclick="myposts()"><div class="left"><ons-icon icon="ion-ios-list-outline"></ons-icon></div><div class="center">My posts</div></ons-list-item><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-thumbsup"></ons-icon></div><div class="center">Likes</div></ons-list-item><ons-list-item modifier="longdivider" tappable onclick="changeperinfo()"><div class="left"><ons-icon icon="ion-ios-person"></ons-icon></div><div class="center">Profile</div></ons-list-item><ons-list-item modifier="nodivider" tappable onclick="logout()">Logout</ons-list-item></ons-page>';
                }
                else
                {
                    ons.notification.alert('Incorrect password!');
                    login_reset();
                }
            }
        }
    }
    document.getElementById('me.html').innerHTML = currentuser_info;
}

function login_reset()
{
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}

function logout()
{
    currentuser = "";
    
    window.localStorage.setItem("currentusername", "");

    document.querySelector('#appNavigator').popPage();
    ons.notification.alert('Logout successful!');
    window.location.reload();
}

function newpost_reset()
{
    document.getElementById("newposttitle").value="";
    document.getElementById("newpostclassify").value="Game";
    document.getElementById("newpostcontent").value="";
}

function addnewpost()
{
    if (currentuser != "")
    {
        var addnewpost = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">New Post</div></ons-toolbar><form name="form1" method="post" action=""><center><h2><strong>New Post</strong></h2></center><p><label for="textarea">Title:</label><textarea name="textarea" id="newposttitle" cols="45" rows="1"></textarea><label for="select">Classify:</label><select name="select" required id="newpostclassify"><option selected>Game</option><option>Music</option><option>Picture</option><option>Irrigation</option></select></center></p><p><label for="textarea">Content:</label><textarea name="textarea" id="newpostcontent"></textarea></p><p style="margin-top: 30px;"><center><ons-button onclick="newpost_reset()">Reset</ons-button>&nbsp;&nbsp;&nbsp;<ons-button onclick="newpost_submit()">Submit</ons-button></p></form></ons-page>';
        
//        <p><div id="toolbar"></div><div id="editor" input="text"></div></p>
        
//        var toolbarOptions = [
//                              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//                              ['blockquote', 'code-block'],
//                              
//                              [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//                              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//                              [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//                              [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//                              [{ 'direction': 'rtl' }],                         // text direction
//                              
//                              [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//                              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//                              
//                              [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//                              [{ 'font': [] }],
//                              [{ 'align': [] }],
//                              
//                              ['clean']                                         // remove formatting button
//                              ]
//        
//        //set the editor into div and set up theme
//        
//        var quill = new Quill('#editor',{
//                              modules:{
//                              toolbar: toolbarOptions
//                              },
//                              theme:'snow'
//                              });
//        
//        newpostcontent = quill.getText();

        
//        var addnewpost = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">New Post</div></ons-toolbar><form name="form1" method="post" action=""><center><h2><strong>New Post</strong></h2></center><p><center><label for="textarea">Title:</label><textarea name="textarea" id="newposttitle" cols="45" rows="1"></textarea><label for="select">Classify:</label><select name="select" required id="newpostclassify"><option selected>Game</option><option>Music</option><option>Picture</option><option>Irrigation</option></select></center></p><p><div class="content"><div class="container-fluid"><div id=' + "'pad-wrapper'" + '><div id="editparent"><div id=' + "'editControls'" + ' class=' + "'span12'" + ' style=' + "'text-align:center; padding:5px;'" + '><div class=' + "'btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'undo'" + ' href=' + "'#'" + '><i class=' + "'icon-undo'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'redo'" + ' href=' + "'#'" + '><i class=' + "'icon-repeat'" + '></i></a></div><div class=' + "'btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'bold'" + ' href=' + "'#'" + '><b>Bold</b></a><a class=' + "'btn'" + ' data-role=' + "'italic'" + ' href=' + "'#'" + '><em>Italic</em></a><a class=' + "'btn'" + ' data-role=' + "'underline'" + ' href=' + "'#'" + '><u><b>U</b></u></a><a class=' + "'btn'" + ' data-role=' + "'strikeThrough'" + ' href=' + "'#'" + '><strike>abc</strike></a></div><div class=' + "'btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'justifyLeft'" + ' href=' + "'#'" + '><i class=' + "'icon-align-left'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'justifyCenter'" + ' href=' + "'#'" + '><i class=' + "'icon-align-center'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'justifyRight'" + ' href=' + "'#'" + '><i class=' + "'icon-align-right'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'justifyFull'" + ' href=' + "'#'" + '><i class=' + "'icon-align-justify'" + '></i></a></div><div class=' + "'btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'indent'" + ' href='" + '#'" + '><i class=' + "'icon-indent-right'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'outdent'" + ' href=' + "'#'" + '><i class=' + "'icon-indent-left'" + '></i></a></div><div class=' + "'btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'insertUnorderedList'" + ' href=' + "'#'" + '><i class=' + "'icon-list-ul'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'insertOrderedList'" + ' href=' + "'#'" + '><i class=' + "'icon-list-ol'" + '></i></a></div><div class=' + "btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'h1'" + ' href=' + "'#'" + '>h<sup>1</sup></a><a class=' + "'btn'" + ' data-role=' + "'h2'" + ' href=' + "'#'" + '>h<sup>2</sup></a><a class=' + "'btn'" + ' data-role=' + "'p'" + ' href=' + "'#'" + '>p</a></div><div class=' + "'btn-group'" + '><a class=' + "'btn'" + ' data-role=' + "'subscript'" + ' href=' + "'#'" + '><i class=' + "'icon-subscript'" + '></i></a><a class=' + "'btn'" + ' data-role=' + "'superscript'" + ' href=' + "'#'" + '><i class=' + "'icon-superscript'" + '></i></a></div></div><div id=' + "'editor'" + ' class=' + "'span12'" + ' style=' + "''" + ' contenteditable><h1>This is a title!</h1><p>This is just some example text to start us off</p></div></div></div></div></div></form></ons-page>';
        
        
        document.getElementById('addnewpost.html').innerHTML = addnewpost;
        document.querySelector('#appNavigator').pushPage('addnewpost.html');
    }
    else
    {
        ons.notification.alert('Please log in first');
    }
}

function newpost_submit()
{
    var newposttitle = document.getElementById('newposttitle').value;
    var newpostclassify = document.getElementById('newpostclassify').value;
    var newpostcontent = document.getElementById('newpostcontent').value;
    var newposttime = currenttime();
    var newpostauthor = currentuser;
    
    window.localStorage.setItem("currentusername", currentuser);
    
    var newpost = '[{"newpostauthor":"' + newpostauthor + '","newposttime":"' + newposttime + '","newpostclassify":"' + newpostclassify + '","newposttitle":"' + newposttitle + '","newpostcontent":"' + encodeURIComponent(newpostcontent) + '", "postreply":[{"replyuser":"","replycontent":"","replytime":""}]}]';
    
    var save_newpost = new XMLHttpRequest();
    save_newpost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=" + newpostauthor + "_" + newposttime + "_" + newpostclassify + "&data=" + newpost), false);
    save_newpost.send(null);
    
    var retrieveallposts = new XMLHttpRequest();
    retrieveallposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    retrieveallposts.send(null);
    
    if (retrieveallposts.responseText == "Bad Request: objectid doesn't exist.")
    {
        var saveallpost = new XMLHttpRequest();
        saveallpost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=allposts&data=[]"), false);
        saveallpost.send(null);
    }
    
    var allposts = '{"newpostauthor":"' + newpostauthor + '","newposttime":"' + newposttime + '","newpostclassify":"' + newpostclassify + '"}';
    
    var appendallposts = new XMLHttpRequest();
    appendallposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=append&appid=216036238&objectid=allposts&data=" + allposts), false);
    appendallposts.send(null);
    
    ons.notification.alert('Post successful!');
    
    newpostcontent="";
    
    document.querySelector('#appNavigator').popPage();
    
    location.reload();
    
}


function currenttime()
{
    var myDate = new Date();
    
    var year = myDate.getFullYear().toString();
    
    var month = myDate.getMonth() + 1;
    if (month < 10)
    {
        month = ("0" + month).toString();
    }
    else
    {
        month = month.toString();
    }
    
    var date = myDate.getDate();
    if (date < 10)
    {
        date = ("0" + date).toString();
    }
    else
    {
        date = date.toString();
    }
    

    var hour = myDate.getHours();
    if (hour < 10)
    {
        hour = ("0" + hour).toString();
    }
    else
    {
        hour = hour.toString();
    }
    
    var minute = myDate.getMinutes();
    if (minute < 10)
    {
        minute = ("0" + minute).toString();
    }
    else
    {
        minute = minute.toString();
    }
    
    var second = myDate.getSeconds();
    if (second < 10)
    {
        second = ("0" + second).toString();
    }
    else
    {
        second = second.toString();
    }
    
    var currenttime = year + month + date + hour + minute + second;
    return currenttime;
}

function displayallposts()
{
    var list_allposts = new XMLHttpRequest();
    list_allposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    list_allposts.send(null);
    
    if (list_allposts.responseText != "Bad Request: objectid doesn't exist.")
    {
        var allposts_info = eval('(' + list_allposts.responseText + ')');
        
        var displaypostlist = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list>';
        
        for (var i=0; i<allposts_info.length; i++)
        {
            var postauthor = allposts_info[i].newpostauthor;
            var posttime = allposts_info[i].newposttime;
            var postclassify = allposts_info[i].newpostclassify;
            
            var getpost = new XMLHttpRequest();
            getpost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
            getpost.send(null);
            
            var post_info = eval('(' + getpost.responseText + ')');
            
            var arr = posttime.split("");
            
            var year = "";
            var month = "";
            var day = "";
            var hour = "";
            var minute = "";
            var second = "";
            
            for (var a=0; a<=3; a++)
            {
                year += arr[a];
            }
            
            for (var b=4; b<=5; b++)
            {
                month += arr[b];
            }
            
            for (var c=6; c<=7; c++)
            {
                day += arr[c];
            }
            
            for (var d=8; d<=9; d++)
            {
                hour += arr[d];
            }
            
            for (var e=10; e<=11; e++)
            {
                minute += arr[e];
            }
            
            for (var f=12; f<=13; f++)
            {
                second += arr[f];
            }
            
            var date1 = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
            
            displaypostlist += '<ons-list-item onclick="postpage(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')" modifier="chevron" tappable>' + post_info[0].newposttitle + '&nbsp&nbsp[Post time:' + date1 + ']</ons-list-item>';
        }
        
        displaypostlist += '</ons-list></ons-page>';
        
        document.getElementById('allposts.html').innerHTML = displaypostlist;
    }
}

function displaygameposts()
{
    var list_allposts = new XMLHttpRequest();
    list_allposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    list_allposts.send(null);
    
    if (list_allposts.responseText != "Bad Request: objectid doesn't exist.")
    {
        var allposts_info = eval('(' + list_allposts.responseText + ')');

        var displaygamepostlist = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list>';
        
        for (var i=0; i<allposts_info.length; i++)
        {
            var postauthor = allposts_info[i].newpostauthor;
            var posttime = allposts_info[i].newposttime;
            var postclassify = allposts_info[i].newpostclassify;
            
            if (postclassify == 'Game')
            {
                var getgamepost = new XMLHttpRequest();
                getgamepost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
                getgamepost.send(null);
                
                var gamepost_info = eval('(' + getgamepost.responseText + ')');
                
                var arr = posttime.split("");
                
                var year = "";
                var month = "";
                var day = "";
                var hour = "";
                var minute = "";
                var second = "";
                
                for (var a=0; a<=3; a++)
                {
                    year += arr[a];
                }
                
                for (var b=4; b<=5; b++)
                {
                    month += arr[b];
                }
                
                for (var c=6; c<=7; c++)
                {
                    day += arr[c];
                }
                
                for (var d=8; d<=9; d++)
                {
                    hour += arr[d];
                }
                
                for (var e=10; e<=11; e++)
                {
                    minute += arr[e];
                }
                
                for (var f=12; f<=13; f++)
                {
                    second += arr[f];
                }
                
                var date1 = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                
                displaygamepostlist += '<ons-list-item onclick="postpage(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')" modifier="chevron" tappable>' + gamepost_info[0].newposttitle + '&nbsp&nbsp[Post time:' + date1 + ']</ons-list-item>';
            }
            
        }
        
        displaygamepostlist += '</ons-list></ons-page>';
        
        document.getElementById('game.html').innerHTML = displaygamepostlist;
    }
}

function displaymusicposts()
{
    var list_allposts = new XMLHttpRequest();
    list_allposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    list_allposts.send(null);
    
    if (list_allposts.responseText != "Bad Request: objectid doesn't exist.")
    {
        var allposts_info = eval('(' + list_allposts.responseText + ')');
        
        var displaymusicpostlist = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list>';
        
        for (var i=0; i<allposts_info.length; i++)
        {
            var postauthor = allposts_info[i].newpostauthor;
            var posttime = allposts_info[i].newposttime;
            var postclassify = allposts_info[i].newpostclassify;
            
            if (postclassify == 'Music')
            {
                var getmusicpost = new XMLHttpRequest();
                getmusicpost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
                getmusicpost.send(null);
                
                var musicpost_info = eval('(' + getmusicpost.responseText + ')');
                
                var arr = posttime.split("");
                
                var year = "";
                var month = "";
                var day = "";
                var hour = "";
                var minute = "";
                var second = "";
                
                for (var a=0; a<=3; a++)
                {
                    year += arr[a];
                }
                
                for (var b=4; b<=5; b++)
                {
                    month += arr[b];
                }
                
                for (var c=6; c<=7; c++)
                {
                    day += arr[c];
                }
                
                for (var d=8; d<=9; d++)
                {
                    hour += arr[d];
                }
                
                for (var e=10; e<=11; e++)
                {
                    minute += arr[e];
                }
                
                for (var f=12; f<=13; f++)
                {
                    second += arr[f];
                }
                
                var date1 = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                
                displaymusicpostlist += '<ons-list-item onclick="postpage(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')" modifier="chevron" tappable>' + musicpost_info[0].newposttitle + '&nbsp&nbsp[Post time:' + date1 + ']</ons-list-item>';
            }
            
        }
        
        displaymusicpostlist += '</ons-list></ons-page>';
        
        document.getElementById('music.html').innerHTML = displaymusicpostlist;
    }
}

function displaypictureposts()
{
    var list_allposts = new XMLHttpRequest();
    list_allposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    list_allposts.send(null);
    
    if (list_allposts.responseText != "Bad Request: objectid doesn't exist.")
    {
        var allposts_info = eval('(' + list_allposts.responseText + ')');
        
        var displaypicturepostlist = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list>';
        
        for (var i=0; i<allposts_info.length; i++)
        {
            var postauthor = allposts_info[i].newpostauthor;
            var posttime = allposts_info[i].newposttime;
            var postclassify = allposts_info[i].newpostclassify;
            
            if (postclassify == 'Picture')
            {
                var getpicturepost = new XMLHttpRequest();
                getpicturepost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
                getpicturepost.send(null);
                
                var picturepost_info = eval('(' + getpicturepost.responseText + ')');
                
                var arr = posttime.split("");
                
                var year = "";
                var month = "";
                var day = "";
                var hour = "";
                var minute = "";
                var second = "";
                
                for (var a=0; a<=3; a++)
                {
                    year += arr[a];
                }
                
                for (var b=4; b<=5; b++)
                {
                    month += arr[b];
                }
                
                for (var c=6; c<=7; c++)
                {
                    day += arr[c];
                }
                
                for (var d=8; d<=9; d++)
                {
                    hour += arr[d];
                }
                
                for (var e=10; e<=11; e++)
                {
                    minute += arr[e];
                }
                
                for (var f=12; f<=13; f++)
                {
                    second += arr[f];
                }
                
                var date1 = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                
                displaypicturepostlist += '<ons-list-item onclick="postpage(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')" modifier="chevron" tappable>' + picturepost_info[0].newposttitle + '&nbsp&nbsp[Post time:' + date1 + ']</ons-list-item>';
            }
            
        }
        
        displaypicturepostlist += '</ons-list></ons-page>';
        
        document.getElementById('picture.html').innerHTML = displaypicturepostlist;
    }
}

function displayirrigationposts()
{
    var list_allposts = new XMLHttpRequest();
    list_allposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    list_allposts.send(null);
    
    if (list_allposts.responseText != "Bad Request: objectid doesn't exist.")
    {
        var allposts_info = eval('(' + list_allposts.responseText + ')');
        
        var displayirrigationpostlist = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list>';
        
        for (var i=0; i<allposts_info.length; i++)
        {
            var postauthor = allposts_info[i].newpostauthor;
            var posttime = allposts_info[i].newposttime;
            var postclassify = allposts_info[i].newpostclassify;
            
            if (postclassify == 'Irrigation')
            {
                var getirrigationpost = new XMLHttpRequest();
                getirrigationpost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
                getirrigationpost.send(null);
                
                var irrigationpost_info = eval('(' + getirrigationpost.responseText + ')');
                
                var arr = posttime.split("");
                
                var year = "";
                var month = "";
                var day = "";
                var hour = "";
                var minute = "";
                var second = "";
                
                for (var a=0; a<=3; a++)
                {
                    year += arr[a];
                }
                
                for (var b=4; b<=5; b++)
                {
                    month += arr[b];
                }
                
                for (var c=6; c<=7; c++)
                {
                    day += arr[c];
                }
                
                for (var d=8; d<=9; d++)
                {
                    hour += arr[d];
                }
                
                for (var e=10; e<=11; e++)
                {
                    minute += arr[e];
                }
                
                for (var f=12; f<=13; f++)
                {
                    second += arr[f];
                }
                
                var date1 = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
                
                displayirrigationpostlist += '<ons-list-item onclick="postpage(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')" modifier="chevron" tappable>' + irrigationpost_info[0].newposttitle + '&nbsp&nbsp[Post time:' + date1 + ']</ons-list-item>';
            }
            
        }
        
        displayirrigationpostlist += '</ons-list></ons-page>';
        
        document.getElementById('irrigation.html').innerHTML = displayirrigationpostlist;
    }
}


function postpage(postauthor, posttime, postclassify)
{
    var arr = posttime.split("");
    
    var year = "";
    var month = "";
    var day = "";
    var hour = "";
    var minute = "";
    var second = "";
    
    for (var a=0; a<=3; a++)
    {
        year += arr[a];
    }
    
    for (var b=4; b<=5; b++)
    {
        month += arr[b];
    }
    
    for (var c=6; c<=7; c++)
    {
        day += arr[c];
    }
    
    for (var d=8; d<=9; d++)
    {
        hour += arr[d];
    }
    
    for (var e=10; e<=11; e++)
    {
        minute += arr[e];
    }
    
    for (var f=12; f<=13; f++)
    {
        second += arr[f];
    }
    
    var date1 = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    var date2 = new Date();
    var date3 = date2.getTime() - new Date(date1).getTime();
    
    //计算出相差天数
    var days = Math.floor(date3/(24*3600*1000));
    
    //计算出小时数
    var leave1 = date3%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1/(3600*1000));
    
    //计算相差分钟数
    var leave2 = leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2/(60*1000));
    
    //计算相差秒数
    var leave3 = leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3/1000);
    
    var timedifference;
    
    if (days != 0)
    {
        timedifference = days + " Days " + hours + " Hours " + minutes + " Minutes AGO";
    }
    else
    {
        if (hours != 0)
        {
            timedifference = hours + " Hours " + minutes + " Minutes AGO";
        }
        else
        {
            timedifference = minutes + " Minutes AGO";
        }
    }
    
    var displaypost = new XMLHttpRequest();
    displaypost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
    displaypost.send(null);
    
    var displaypost_info = eval('(' + displaypost.responseText + ')');
    
    var postpage = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">' + displaypost_info[0].newposttitle + '</div></ons-toolbar><ons-card class="post"><ons-list-item class="post_title"><div class="center"><div class="list-item__title"><b>' + postauthor + '</b></div></div></ons-list-item><div style="text-align: center; position: relative">' + decodeURIComponent(displaypost_info[0].newpostcontent) + '</div><ons-list-item class="post-button-bar" modifier="nodivider"><div class="center" style="padding-top: 0px"><ons-button class="post-button" modifier="quiet" onclick="like"><ons-icon id="button-post-like" icon="ion-ios-heart-outline"></ons-icon></ons-button><ons-button class="post-button" modifier="quiet"><ons-icon icon="ion-ios-chatbubble-outline" onclick="addnewreply(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')""></ons-icon></ons-button><ons-button class="post-button" modifier="quiet" onclick="editpost(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')"><ons-icon icon="ion-ios-compose-outline"></ons-icon></ons-button></div></ons-list-item><div class="post-time" style="text-align: right; position: relative;">' + timedifference + '</div></ons-card>';
    
    for (var i=1; i<displaypost_info[0].postreply.length; i++)
    {
        postpage = postpage + '<ons-card class="post"><ons-list-item class="post_title"><div class="center"><div class="list-item__title"><b>' + displaypost_info[0].postreply[i].replyuser + '</b></div></div></ons-list-item><div style="text-align: center; position: relative">' + decodeURIComponent(displaypost_info[0].postreply[i].replycontent) + '</div><ons-list-item class="post-button-bar" modifier="nodivider"><div class="center" style="padding-top: 0px"></div></ons-list-item><div class="post-time" style="text-align: right; position: relative;">' + displaypost_info[0].postreply[i].replytime + '</div></ons-card>';
    }
    
    postpage = postpage + '</ons-page>';
    
    document.querySelector('#appNavigator').pushPage('postpage.html');
    document.getElementById('postpage.html').innerHTML = postpage;
}

function myposts()
{
    var list_allposts = new XMLHttpRequest();
    list_allposts.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=allposts"), false);
    list_allposts.send(null);
    
    if (list_allposts.responseText != "Bad Request: objectid doesn't exist.")
    {
        var allposts_info = eval('(' + list_allposts.responseText + ')');
        
        var displaymypostslist = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">My posts</div></ons-toolbar><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list>';
        
        for (var i=0; i<allposts_info.length; i++)
        {
            var postauthor = allposts_info[i].newpostauthor;
            var posttime = allposts_info[i].newposttime;
            var postclassify = allposts_info[i].newpostclassify;
            
            if (postauthor == currentuser)
            {
                var getmypost = new XMLHttpRequest();
                getmypost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
                getmypost.send(null);
                
                var myposts_info = eval('(' + getmypost.responseText + ')');
                
                var arr = posttime.split("");
                
                var year = "";
                var month = "";
                var day = "";
                var hour = "";
                var minute = "";
                var second = "";
                
                for (var a=0; a<=3; a++)
                {
                    year += arr[a];
                }
                
                for (var b=4; b<=5; b++)
                {
                    month += arr[b];
                }
                
                for (var c=6; c<=7; c++)
                {
                    day += arr[c];
                }
                
                for (var d=8; d<=9; d++)
                {
                    hour += arr[d];
                }
                
                for (var e=10; e<=11; e++)
                {
                    minute += arr[e];
                }
                
                for (var f=12; f<=13; f++)
                {
                    second += arr[f];
                }
                
                var date1 = year + "-" + month + "- " + day + " " + hour + ":" + minute + ":" + second;
                
                displaymypostslist += '<ons-list-item onclick="postpage(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')" modifier="chevron" tappable>' + myposts_info[0].newposttitle + '&nbsp&nbsp[Post time:' + date1 + ']</ons-list-item>';
            }
            
        }
        
        displaymypostslist += '</ons-list></ons-page>';
        
        document.querySelector('#appNavigator').pushPage('myposts.html');
        document.getElementById('myposts.html').innerHTML = displaymypostslist;
    }
    else
    {
        ons.notification.alert('You have not sent any posts yet');
    }
}

function addnewreply(postauthor, posttime, postclassify)
{
    if (currentuser == "")
    {
        ons.notification.alert('Please log in first');
    }
    else
    {
        var addnewreply = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">New Reply</div></ons-toolbar><center><h2><strong>New Reply</strong></h2></center><p><label for="textarea">Content:</label><textarea name="textarea" id="newreplycontent"></textarea></p><p style="margin-top: 30px;"><center><ons-button onclick="newreply_reset()">Reset</ons-button>&nbsp;&nbsp;&nbsp;<ons-button onclick="newreply_submit(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')")">Submit</ons-button></center></p></ons-page>';
        
        document.getElementById('addnewreply.html').innerHTML = addnewreply;
        document.querySelector('#appNavigator').pushPage('addnewreply.html');
    }
}

function newreply_reset()
{
    document.getElementById("newreplycontent").value="";
}

function newreply_submit(postauthor, posttime, postclassify)
{
    var displaypost = new XMLHttpRequest();
    displaypost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
    displaypost.send(null);
    
    var displaypost_info = eval('(' + displaypost.responseText + ')');
    
    var postallreply = "";
    
    for (var i=0; i<displaypost_info[0].postreply.length; i++)
    {
        var allreplyuser = displaypost_info[0].postreply[i].replyuser;
        var allreplycontent = displaypost_info[0].postreply[i].replycontent;
        var allreplytime = displaypost_info[0].postreply[i].replytime;
        
        postallreply = postallreply + '{"replyuser":"' + allreplyuser + '","replycontent":"' + encodeURIComponent(allreplycontent) + '","replytime":"' + allreplytime + '"},';
    }
    
    var newreplyuser = currentuser;
    var newreplycontent = document.getElementById('newreplycontent').value;
    var newreplytime = new Date();
    
    postallreply = postallreply + '{"replyuser":"' + newreplyuser + '","replycontent":"' + encodeURIComponent(newreplycontent) + '","replytime":"' + newreplytime + '"}';
    
    var postdetails = '[{"newpostauthor":"' + displaypost_info[0].newpostauthor + '","newposttime":"' + displaypost_info[0].newposttime + '","newpostclassify":"' + displaypost_info[0].newpostclassify + '","newposttitle":"' + displaypost_info[0].newposttitle + '","newpostcontent":"' + displaypost_info[0].newpostcontent + '", "postreply":[' + postallreply + ']}]';
    
    var savenewreply = new XMLHttpRequest();
    savenewreply.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify + "&data=" + postdetails), false);
    savenewreply.send(null);
    
    ons.notification.alert('Reply successful!');
    
    document.querySelector('#appNavigator').popPage();
    
    window.location.reload();
}

function editpost(postauthor, posttime, postclassify)
{
    if (currentuser == "")
    {
        ons.notification.alert('Please log in first');
    }
    else
    {
        var displaypost = new XMLHttpRequest();
        displaypost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
        displaypost.send(null);
        
        var displaypost_info = eval('(' + displaypost.responseText + ')');
        
        var editpost = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">Edit Post</div></ons-toolbar><p><label for="textarea">Content:</label><textarea name="textarea" id="editpostcontent">' + decodeURIComponent(displaypost_info[0].newpostcontent) + '</textarea></p><p style="margin-top: 30px;"><center><ons-button onclick="editpost_submit(' + "'" + postauthor + "'" + ',' + "'" + posttime + "'" + ',' + "'" + postclassify + "'" + ')")">Submit</ons-button></center></p></ons-page>';
        
        document.getElementById('editpost.html').innerHTML = editpost;
        document.querySelector('#appNavigator').pushPage('editpost.html');
    }
}

function editpost_submit(postauthor, posttime, postclassify)
{
    var displaypost = new XMLHttpRequest();
    displaypost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify), false);
    displaypost.send(null);
    
    var displaypost_info = eval('(' + displaypost.responseText + ')');
    
    var editpostuser = displaypost_info[0].newpostauthor;
    var editposttime = displaypost_info[0].newposttime;
    var editpostclassify = displaypost_info[0].newpostclassify;
    var editposttitle = displaypost_info[0].newposttitle;
    var editpostcontent = document.getElementById('editpostcontent').value;
    
    var postallreply = "";
    
    for (var i=0; i<displaypost_info[0].postreply.length; i++)
    {
        var allreplyuser = displaypost_info[0].postreply[i].replyuser;
        var allreplycontent = displaypost_info[0].postreply[i].replycontent;
        var allreplytime = displaypost_info[0].postreply[i].replytime;
        if (i<displaypost_info[0].postreply.length -1)
        {
        postallreply = postallreply + '{"replyuser":"' + allreplyuser + '","replycontent":"' + encodeURIComponent(allreplycontent) + '","replytime":"' + allreplytime + '"},';
        }
        else
        {
            postallreply = postallreply + '{"replyuser":"' + allreplyuser + '","replycontent":"' + encodeURIComponent(allreplycontent) + '","replytime":"' + allreplytime + '"}';
        }
    }
    
    var postdetails = '[{"newpostauthor":"' + displaypost_info[0].newpostauthor + '","newposttime":"' + displaypost_info[0].newposttime + '","newpostclassify":"' + displaypost_info[0].newpostclassify + '","newposttitle":"' + displaypost_info[0].newposttitle + '","newpostcontent":"' + editpostcontent + '", "postreply":[' + postallreply + ']}]';
    
    var save_editpost = new XMLHttpRequest();
    save_editpost.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=" + postauthor + "_" + posttime + "_" + postclassify + "&data=" + postdetails), false);
    save_editpost.send(null);
    
    window.location.reload();
}

function changeperinfo()
{
    var changeperinfo = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Back</ons-back-button></div><div class="center">Profile</div></ons-toolbar><div style="text-align: center; margin-top: 30px;"><p><ons-input id="change_oldpassword" modifier="underbar" type="password" placeholder="Old Password" float></ons-input></p><p><ons-input id="change_newpassword" modifier="underbar" type="password" placeholder="New Password" float></ons-input></p><p style="margin-top: 30px;"><center><ons-button onclick="changepsd()">Submit</ons-button></center></p></div></ons-page>';
    
    document.getElementById('changeperinfo.html').innerHTML = changeperinfo;
    document.querySelector('#appNavigator').pushPage('changeperinfo.html');
}

function changepsd()
{
    var change_oldpassword = document.getElementById('change_oldpassword').value;
    var change_newpassword = document.getElementById('change_newpassword').value;
    
    var getuserpsd = new XMLHttpRequest();
    getuserpsd.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + currentuser), false);
    getuserpsd.send(null);
    
    var getuserpsd_info = eval('(' + getuserpsd.responseText + ')');
    
    if (change_oldpassword == "")
    {
        ons.notification.alert('Please input the old password!');
    }
    else
    {
        if (change_newpassword == "")
        {
            ons.notification.alert('Please input the new password!');
        }
        else
        {
            if (sha256_digest(change_oldpassword) == getuserpsd_info[0].password)
            {
                var newuserinfo = '[{"username":"'+ currentuser +'","password":"' + sha256_digest(change_newpassword) + '"}]';
                
                var sendnewpsd = new XMLHttpRequest();
                sendnewpsd.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=" + currentuser + "&data=" + newuserinfo), false);
                sendnewpsd.send(null);
                
                ons.notification.alert('Password reset successful!');
                currentuser = "";
                window.localStorage.setItem("currentusername", "");
                window.location.reload();
            }
            else
            {
                ons.notification.alert('Wrong old password!');
                document.getElementById("change_oldpassword").value="";
                document.getElementById("change_newpassword").value="";
            }
        }
    }
}
