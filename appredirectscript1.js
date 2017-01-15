
function openApp(){
document.location.href="https://itunes.apple.com/ru/app/vk-app/id564177498?mt=8&at=10l3Wn&ct=blog-564177498";
}
var iosVersion=parseInt(window.navigator.userAgent.replace(/.*?(iPhone|iPad|iPod).*?OS[\s]+([\d]+).*/g,'$2'))||0;
if(iosVersion>=3&&iosVersion<9){
window.setTimeout(function(){ openApp(); },500);
} else if(iosVersion>=9){
if(!!document.addEventListener){
document.addEventListener("DOMContentLoaded", function(){
var evtelem=document.documentElement, evttype="mouseup", evtfunc=function(){
evtelem.removeEventListener(evttype, evtfunc);
openApp();
};
evtelem.addEventListener(evttype, evtfunc);
});
}
}
