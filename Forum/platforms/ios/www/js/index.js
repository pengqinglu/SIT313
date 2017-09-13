var currentuser="";

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
var throwException = function() {
    try{
        throw new Error("test error");
    }
    catch(error)
    {
        alert(error);
    }
}

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


//================================================================================================

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
                                             
    var tabbar_page = '<ons-page><ons-toolbar><div class="center">Home</div><div class="left"><ons-toolbar-button onclick="fn.toggleMenu()"><ons-icon icon="ion-navicon, material:md-menu"></ons-icon></ons-toolbar-button></div></ons-toolbar><ons-tabbar id="appTabbar" position="auto"><ons-tab label="Home" icon="ion-home" page="home.html" active></ons-tab><ons-tab icon="ion-ios-bell" label="Notifications" badge="3" page="notifications.html"></ons-tab><ons-tab icon="ion-plus-circled" page="post.html"></ons-tab><ons-tab icon="ion-ios-email-outline" label="Message" badge="2" page="message.html"></ons-tab><ons-tab icon="ion-person" label="Me" page="me.html"></ons-tab></ons-tabbar></ons-page>';
    document.getElementById('tabbar-page.html').innerHTML = tabbar_page;
                  
    me();
    
    var sidemenu = '<ons-page><ons-list><p style="text-align: center; margin-top: 10px;"><ons-search-input placeholder="Search"></ons-search-input></p><ons-list-item onclick="fn.loadView(0)" tappable>Home</ons-list-item><ons-list-item onclick="appNavigator.pushPage(' + "'settings.html'" + ')" tappable>Settings</ons-list-item><ons-list-item onclick="showDialog(' + "'about'" + ')" tappable>About</ons-list-item><ons-list-item onclick="throwException(' + "'exception'" + ')" tappable>throw Exception</ons-list-item><ons-list-item onclick="listException(' + "'exception'" + ')" tappable>list Exception</ons-list-item></ons-list></ons-page>';
    document.getElementById('sidemenu.html').innerHTML = sidemenu;
      
    var home = '<ons-page><ons-tabbar position="top"><ons-tab label="All" page="allposts.html" active></ons-tab><ons-tab label="Game" page="game.html"></ons-tab><ons-tab label="Music" page="music.html"></ons-tab><ons-tab label="Picture" page="picture.html"></ons-tab><ons-tab label="Irrigation" page="irrigation.html"></ons-tab></ons-tabbar><ons-alert-dialog id="about"><div class="alert-dialog-title">About</div><div class="alert-dialog-content">SIT313 - Mobile Computing</br>Student Name: Qinglu PENG</br>Student ID: 216036238</br>Email: pengq@deakin.edu.au</div><div class="alert-dialog-footer"><button class="alert-dialog-button" onclick="hideDialog(' + "'about'" + ')">OK</button></div></ons-alert-dialog></ons-page>';
    document.getElementById('home.html').innerHTML = home;
    
    var allposts = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item onclick="appNavigator.pushPage(' + "'picturepost1.html'" + ')" tappable>[Daily Photo] Sheepers#1</ons-list-item><ons-list-item onclick="appNavigator.pushPage(' + "'musicpost1.html'" + ')" tappable>Forforever</ons-list-item><ons-list-item>All Post 3</ons-list-item><ons-list-item>All Post 4</ons-list-item><ons-list-item>All Post 5</ons-list-item><ons-list-item>All Post 6</ons-list-item></ons-list></ons-page>';
    document.getElementById('allposts.html').innerHTML = allposts;
    
    var game = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item>Game Post 1</ons-list-item><ons-list-item>Game Post 2</ons-list-item><ons-list-item>Game Post 3</ons-list-item><ons-list-item>Game Post 4</ons-list-item><ons-list-item>Game Post 5</ons-list-item><ons-list-item>Game Post 6</ons-list-item></ons-list></ons-page>';
    document.getElementById('game.html').innerHTML = game;
    
    var music = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item onclick="appNavigator.pushPage(' + "'musicpost1.html'" + ')" tappable>Forforever</ons-list-item><ons-list-item>Music Post 2</ons-list-item><ons-list-item>Music Post 3</ons-list-item><ons-list-item>Music Post 4</ons-list-item><ons-list-item>Music Post 5</ons-list-item><ons-list-item>Music Post 6</ons-list-item></ons-list></ons-page>';
    document.getElementById('music.html').innerHTML = music;
                  
    var picture = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item onclick="appNavigator.pushPage(' + "'picturepost1.html'" + ')" tappable>[Daily Photo] Sheepers#1</ons-list-item><ons-list-item>Picture Post 2</ons-list-item><ons-list-item>Picture Post 3</ons-list-item><ons-list-item>Picture Post 4</ons-list-item><ons-list-item>Picture Post 5</ons-list-item><ons-list-item>Picture Post 6</ons-list-item></ons-list></ons-page>';
    document.getElementById('picture.html').innerHTML = music;
                  
    var irrigation = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item>Irrigation Post 1</ons-list-item><ons-list-item>Irrigation Post 2</ons-list-item><ons-list-item>Irrigation Post 3</ons-list-item><ons-list-item>Irrigation Post 4</ons-list-item><ons-list-item>Irrigation Post 5</ons-list-item><ons-list-item>Irrigation Post 6</ons-list-item></ons-list></ons-page>';
    document.getElementById('irrigation.html').innerHTML = irrigation;
                 
    var settings = '<ons-page id="settings"><ons-toolbar><div class="left"><ons-back-button>Home</ons-back-button></div><div class="center">Settings</div></ons-toolbar><ons-list><ons-list-header>Settings</ons-list-header><ons-list-item><div class="center">Night mode</div><div class="right"><ons-switch></ons-switch></div></ons-list-item><ons-list-item><div class="center">Notifications</div><div class="right"><ons-switch checked></ons-switch></div></ons-list-item></ons-list><ons-list-item>Adjust the volume:<ons-row><ons-col width="40px" style="text-align: center; line-height: 31px;"><ons-icon icon="md-volume-down"></ons-icon></ons-col><ons-col><ons-range id="range-slider" value="25" style="width: 100%;"></ons-range></ons-col><ons-col width="40px" style="text-align: center; line-height: 31px;"><ons-icon icon="md-volume-up"></ons-icon></ons-col></ons-row>Volume:<span id="volume-value">&nbsp;25</span> <span id="careful-message" style="display: none">&nbsp;(careful, that&apos;s loud)</span></ons-list-item></ons-page>';
     document.getElementById('settings.html').innerHTML = settings;
                  
    var notifications = '<ons-page id="notifications-page"><ons-tabbar id="hidden-tabbar" position="top"><ons-tab page="allnotifications.html" active></ons-tab><ons-tab page="mentions.html"></ons-tab></ons-tabbar><style type="text/css">#hidden-tabbar .tabbar__content {top: 0px;}#hidden-tabbar .tabbar {display: none;}.notifs-bar {height: 45px;}.notifs-bar .button-bar {height: 27px;width: 100%;}.notifs-bar.list-item--material .button-bar {align-items: center;}.notifs-bar ons-button {font-size: 14px;line-height: inherit;text-align: center;width: 50%;}.notifs-bar ons-button:first-child {border-radius: 30px 0px 0px 30px;}.notifs-bar ons-button:last-child {border-radius: 0px 30px 30px 0px;}</style></ons-page>';
     document.getElementById('notifications.html').innerHTML = notifications;
     
    var allnotifications = '<ons-page id="allnotifications-page"><ons-pull-hook><ons-icon size="30px" spin icon="md-spinner"></ons-icon></ons-pull-hook><ons-list><ons-list-item modifier="longdivider" class="notifs-bar"><div class="button-bar"><ons-button id="all-all-button"><b>All</b></ons-button><ons-button id="all-mentions-button" modifier="outline" onclick="document.getElementById(' + "'hidden-tabbar'" + ').setActiveTab(1)"><b>Mentions</b></ons-button></div></ons-list-item><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"><ons-icon icon="ion-ios-chatboxes" size="25px"></ons-icon></div><div class="center"><div class="notif-thumbnails"><img src="img/41501698082_.pic.jpg"><img src="img/31501698077_.pic.jpg"><ons-button class="option-arrow" modifier="quiet" onclick="document.getElementById(' + "'sheet'" + ').show()"><ons-icon icon="ion-arrow-down-b"></ons-icon></ons-button></div><b>Mindy</b>&nbsp;and&nbsp;<b>Linda</b>&nbsp;replied you</div></ons-list-item><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"><ons-icon icon="ion-heart" size="25px" style="color: red"></ons-icon></div><div class="center"><div class="notif-thumbnails"><img src="img/11501698068_.pic.jpg"><ons-button class="option-arrow" modifier="quiet" onclick="document.getElementById(' + "'sheet'" + ').show()"><ons-icon icon="ion-arrow-down-b"></ons-icon></ons-button></div><b>sheepers</b>&nbsp;liked your post</div></ons-list-item></ons-list><ons-action-sheet id="sheet" cancelable><ons-action-sheet-button onclick="document.getElementById(' + "'sheet'" + ').hide(); ons.notification.toast({message: ' + "'OK. You won\&apos;t see recommendations like this as much.'" + ', timeout: 2000})">See less often</ons-action-sheet-button><ons-action-sheet-button icon="md-close" onclick="document.getElementById(' + "'sheet'" + ').hide()">Cancel</ons-action-sheet-button></ons-action-sheet><style type="text/css">#all-page {font-size: 14px;}#all-all-button {background-color: #00aced;}#all-mentions-button {border-color: #00aced;color: #00aced;}.all-notifs .left {align-items: baseline;width: 25%;}.all-notifs .left.list-item--material__left {padding: 14px 12px;}.all-notifs .left ons-icon {color: #00aced;margin-left: auto;}.all-notifs .center {width: 100%;}.notif-thumbnails {width: 100%;}.notif-thumbnails img {border-radius: 50%;height: 28px;width: 28px;}</style></ons-page>';
    document.getElementById('allnotifications.html').innerHTML = allnotifications;
                  
    var mentions = '<ons-page id="mentions-page"><ons-pull-hook><ons-icon size="30px" spin icon="md-spinner"></ons-icon></ons-pull-hook><ons-list><ons-list-item modifier="longdivider" class="notifs-bar"><div class="button-bar"><ons-button id="mentions-all-button" modifier="outline" onclick="document.getElementById(' + "'hidden-tabbar'" + ').setActiveTab(0)"><b>All</b></ons-button><ons-button id="mentions-mentions-button"><b>Mentions</b></ons-button></div></ons-list-item></ons-list><ons-list><ons-list-item modifier="longdivider" style="border-top: 1px solid #eee"><div class="left"><img class="list-item__thumbnail" src="img/11501698068_.pic.jpg"></div><div class="center"><div class="tweet-header"><span class="list-item__title"><b>sheepers</b></span><span class="list-item__subtitle">@sheepers&nbsp;&#8231;&nbsp;1 day ago</span><ons-button class="option-arrow" modifier="quiet" onclick="ons.openActionSheet({cancelable: true,buttons: [' + "'Share Tweet via...'" + ',' + "'Add to Moment'" + ',' + "'Unfollow @cKitty'" + ',' + "'Mute @cKitty'" + ',' + "'Mute this conversation'" + ',' + "'Block @cKitty'" + ',' + "'Report Tweet'" + ',{label: ' + "'Cancel'" + ',icon: ' + "'md-close'" + '}]})"><ons-icon icon="ion-arrow-down-b"></ons-icon></ons-button></div><span class="list-item__content">Happy new years&nbsp;<span style="color: #00aced">@Charlotte</span></span><ons-row class="option-buttons"><ons-col><ons-button modifier="quiet"><ons-icon icon="ion-ios-chatboxes"></ons-icon><span class="reaction-no">1</span></ons-button></ons-col><ons-col><ons-button modifier="quiet"><ons-icon icon="ion-heart"></ons-icon><span class="reaction-no">5</span></ons-button></ons-col><ons-col><ons-button modifier="quiet"><ons-icon icon="ion-ios-email-outline"></ons-icon></ons-button></ons-col></ons-row></div></ons-list-item><ons-if platform="ios other"><div style="text-align: center; margin-bottom: 10px"><ons-icon size="30px" spin icon="md-spinner"></ons-icon></div></ons-if><ons-if platform="android"><div style="text-align: center; margin-bottom: 45px">&#8231;</div></ons-if></ons-list><style type="text/css">#mentions-page {font-size: 14px;}#mentions-all-button {border-color: #00aced;color: #00aced;}#mentions-mentions-button {background-color: #00aced;}</style></ons-page>';
     document.getElementById('mentions.html').innerHTML = mentions;
                  
//    var post = '<ons-page><form name="form1" method="post" action=""><center><h2><strong>New Post </strong></h2></center><p><center><label for="textarea">Title:</label><textarea name="textarea" id="textarea" cols="45" rows="1"></textarea><label for="select">Classify:</label><select name="select" required id="select"><option selected>Game</option><option>Music</option><option>Picture</option><option>Irrigation</option></select></center></p><p><center><label for="textarea2">Content:</label><textarea name="textarea2" id="textarea2" cols="45" rows="5"></textarea></center></p><p  align="right"><input type="reset" name="reset" id="reset" value="reset"><input type="submit" name="submit" id="submit" value="submit"></p></form></ons-page>';
//     document.getElementById('post.html').innerHTML = post;

    var message = '<ons-page><ons-pull-hook id="pull-hook">Pull to refresh</ons-pull-hook><ons-list><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"></div><div class="center"><div class="notif-thumbnails"><img src="img/11501698068_.pic.jpg"><b>@ sheepers</b>&nbsp;</div>Do you have time tomorrow afternoon?</div></ons-list-item></ons-list><ons-list><ons-list-item class="all-notifs" modifier="longdivider"><div class="left"></div><div class="center"><div class="notif-thumbnails"><img src="img/31501698077_.pic.jpg"><b>@ Linda</b>&nbsp;</div>Shall we go to Coles together on Saturday?</div></ons-list-item></ons-list></ons-page>';
    document.getElementById('message.html').innerHTML = message;
                  
//    var me = '<ons-page><ons-toolbar><div class="center">Login</div></ons-toolbar><div style="text-align: center; margin-top: 30px;"><p><ons-input id="username" modifier="underbar" placeholder="Username" float></ons-input></p><p><ons-input id="password" modifier="underbar" type="password" placeholder="Password" float></ons-input></p><p style="margin-top: 30px;"><ons-button onclick="login()">Login</ons-button></p><p style="margin-top: 30px;"><ons-button onclick="appNavigator.pushPage(' + "'register.html'" + ')">Register</ons-button></p></div></ons-page>';
//    document.getElementById('me.html').innerHTML = me;
                  
    var register = '<ons-page><ons-toolbar><div class="left"><ons-back-button>Login</ons-back-button></div><div class="center">Register</div></ons-toolbar><form name="form2" method="post" action=""><p><center><label for="textarea">Username:</label><textarea name="textarea" id="newusername" cols="20" rows="1"></textarea></center></p><p><center><label for="password">Password:</label><input type="password" name="password" id="newpassword"></center></p><p><center><input type="reset" name="reset" id="newuserreset" value="reset">&nbsp;&nbsp;&nbsp;<input type="submit" name="submit" id="newusersubmit" value="submit" onclick="newregister_submit()"></center></p></form></ons-page>';
    document.getElementById('register.html').innerHTML = register;
                  
//    var profile = '<ons-page id="profile"><div class="left"><ons-back-button>Back</ons-back-button></div><div style="text-align: center"><img style="height: 160px; width: 120px" class="profile-thumbnail" src="img/101501779827_.pic.jpg"></div><div style="text-align: center">Welcome <b>Charlotte</b> !</div></br></br><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-person"></ons-icon></div><div class="center">Profile</div></ons-list-item><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-thumbsup"></ons-icon></div><div class="center">Likes</div></ons-list-item><ons-list-item modifier="longdivider" tappable><div class="left"><ons-icon icon="ion-ios-box"></ons-icon></div><div class="center">Draft Box</div></ons-list-item><ons-list-item modifier="nodivider" tappable>Help</ons-list-item></ons-page>';
//     document.getElementById('profile.html').innerHTML = profile;

});

function post_submit()
{
    var newposttitle = document.getElementById('newposttitle').value;
    var newpostclassify = document.getElementById('newpostclassify').value;
    var newpostcontent = document.getElementById('newpostcontent').value;
    var post = '[{"title":"' + newposttitle + '","classify":"' + newpostclassify + '","content":"' + newpostcontent + '"}]';
}

function newregister_submit()
{
    var newusername = document.getElementById('newusername').value;
    var newpassword = document.getElementById('newpassword').value;
    var user = '[{"username":"'+ newusername +'","password":"' + newpassword + '"}]';
    var loadreturnvalue = new XMLHttpRequest();
    loadreturnvalue.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + newusername), false);
    loadreturnvalue.send(null);
    if (loadreturnvalue.responseText != "Bad Request: objectid doesn't exist.")
    {
        ons.notification.alert('The username has been registered!');
    }
    else
    {
        var createuser = new XMLHttpRequest();
        createuser.open("get", encodeURI("http://introtoapps.com/datastore.php?action=save&appid=216036238&objectid=" + newusername + "&data=" + user), false);
        createuser.send(null);
        ons.notification.alert('User created successfully');
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
        loginpage = '<ons-page id="profile"><div style="text-align: center"><img style="height: 160px; width: 120px" class="profile-thumbnail" src="img/101501779827_.pic.jpg"></div><div style="text-align: center">Welcome <b>Charlotte</b> !</div></br></br><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-person"></ons-icon></div><div class="center">Profile</div></ons-list-item><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-thumbsup"></ons-icon></div><div class="center">Likes</div></ons-list-item><ons-list-item modifier="longdivider" tappable><div class="left"><ons-icon icon="ion-ios-box"></ons-icon></div><div class="center">Draft Box</div></ons-list-item><ons-list-item modifier="nodivider" tappable>Help</ons-list-item></ons-page>';
        
    }
    
    document.getElementById('me.html').innerHTML = loginpage;
    
}

function login()
{
    var login_username = document.getElementById('username').value;
    var login_password = document.getElementById('password').value;
    
    var load_loginuser = new XMLHttpRequest();
    load_loginuser.open("get", encodeURI("http://introtoapps.com/datastore.php?action=load&appid=216036238&objectid=" + login_username), false);
    load_loginuser.send(null);
    
    var login_username_info = eval('(' + load_loginuser.responseText + ')');
    
    if (login_username_info[0].password == login_password)
    {
        currentuser = login_username;
        
        ons.notification.alert('Login successful!');
        
        currentuser_info = '<ons-page id="currentuser_info"><div style="text-align: center"><img style="height: 160px; width: 120px" class="profile-thumbnail" src="img/101501779827_.pic.jpg"></div><div style="text-align: center">Welcome <b>' + currentuser + '</b> !</div></br></br><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-person"></ons-icon></div><div class="center">Profile</div></ons-list-item><ons-list-item modifier="nodivider" tappable><div class="left"><ons-icon icon="ion-thumbsup"></ons-icon></div><div class="center">Likes</div></ons-list-item><ons-list-item modifier="longdivider" tappable><div class="left"><ons-icon icon="ion-ios-box"></ons-icon></div><div class="center">Draft Box</div></ons-list-item><ons-list-item modifier="nodivider" tappable>Help</ons-list-item></ons-page>';
        document.querySelector('#appNavigator').pushPage('forum.html');
    }
    else
    {
        ons.notification.alert('Incorrect username or password.');
    }
    document.getElementById('me.html').innerHTML = currentuser_info;
}
