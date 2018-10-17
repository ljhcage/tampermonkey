// ==UserScript==
// @name         getFavlist of bilibili
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        https://space.bilibili.com/*
// @require	        https://code.jquery.com/jquery-1.11.2.min.js
// @grant        GM_setClipboard
// ==/UserScript==
window.onload = function (){
    var btn = document.createElement("div");
    btn.classList.add("filter-item");
    btn.style.cssText ="float:left";
    btn.innerHTML=("<span class=\"text\">获取链接</span>");
    var favlist=document.getElementsByClassName("cover cover-normal");
    var insertPlace = document.getElementsByClassName("fav-filters");
    console.log(insertPlace.length)
    insertPlace[0].insertBefore(btn,insertPlace[0].firstElementChild);
    btn.addEventListener("click", function(){
    var list = '';
    for(var i=0;i<favlist.length;i++){
        debugger
        list += (favlist[i].getAttribute("href").replace("//","") + '\n');
    }
    GM_setClipboard(list);
    //console.log(list);
}, false);
}
