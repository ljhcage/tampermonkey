// ==UserScript==
// @name         getFavlist of bilibili
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        https://space.bilibili.com/*
// @match        http://space.bilibili.com/*
// @require	        https://code.jquery.com/jquery-1.11.2.min.js
// @grant        GM_setClipboard
// ==/UserScript==
var timer = setInterval(a,1000);// set timer
function addBtn(insertPlace,btn){//func to add btn
    debugger
    var favlist=document.getElementsByClassName("cover cover-normal");
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
function a()//timer func to check if dom is loaded, only if dom is loaded then add btn, else keep wait
{
	if(document.getElementsByClassName("fav-filters").length)
	{
//        debugger
//        console.log(timer)
		clearInterval(timer);
        var btn = document.createElement("div");
        btn.classList.add("filter-item");
        btn.style.cssText ="float:left";
        btn.innerHTML=("<span class=\"text\">获取链接</span>");
        var insertPlace = document.getElementsByClassName("fav-filters");
        addBtn(insertPlace,btn)
	}else{
        debugger
        console.log("in?")
    }
}
