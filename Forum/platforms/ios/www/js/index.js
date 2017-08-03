//================================================================================================
window.fn = {};

window.fn.toggleMenu = function () {
    document.getElementById('appSplitter').left.toggle();
};

window.fn.loadView = function (index) {
    document.getElementById('appTabbar').setActiveTab(index);
    document.getElementById('sidemenu').close();
};

ons.ready(function () {
    const sidemenu = document.getElementById('appSplitter');
    ons.platform.isAndroid() ? sidemenu.right.setAttribute('animation', 'overlay') : sidemenu.left.setAttribute('animation', 'reveal');
          
    document.querySelector('#tabbar-page').addEventListener('postchange', function(event) {
        if (event.target.matches('#appTabbar')) {
            event.currentTarget.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
        }
    });
});

//Form input
var login = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'pengqinglu' && password === '123456') {
        ons.notification.alert('Login successful!');
        document.querySelector('#appNavigator').pushPage('profile.html');
    }
    else {
        ons.notification.alert('Incorrect username or password.');
    }
};

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
var isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判断是iOS
if(isIOS) {
    function keyboardShowHandler(e){
        if(window.scrollY < 100) //键盘高度一般大于100，如果scrollY小于100，可以认为界面未上移，则需要手动上移
            window.scrollTo(0, e.keyboardHeight);
    }
    function keyboardHideHandler(e){
        if(window.scrollY != 0)
            window.scrollTo(0, 0);
    }
    window.addEventListener('native.keyboardshow', keyboardShowHandler);
    window.addEventListener('native.keyboardhide', keyboardHideHandler);
}
                                        
//================================================================================================
