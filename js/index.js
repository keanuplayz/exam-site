var tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
var contentEls = document.querySelectorAll('.content');

tabBar.listen('MDCTabBar:activated', function (event) {
    document.querySelector('.content--active').classList.remove('content--active');

    contentEls[event.detail.index].classList.add('content--active');
});