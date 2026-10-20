(function(){var GA="G-XXXXXXXXXX";function g(){window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",GA)}
function load(){if(window.gtag||GA.indexOf("XXXX")>-1)return;var s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+GA;document.head.appendChild(s);g()}
var ck=document.getElementById("ck"),v=null;try{v=localStorage.getItem("ck")}catch(e){}
if(v==="1")load();else if(v===null&&ck)ck.style.display="flex";
document.querySelectorAll("[data-ck]").forEach(function(b){b.onclick=function(){try{localStorage.setItem("ck",b.dataset.ck)}catch(e){}ck.style.display="none";if(b.dataset.ck==="1")load()}});
document.addEventListener("click",function(e){var a=e.target.closest("[data-ev]");if(a&&window.gtag)gtag("event",a.dataset.ev,{link_url:a.href||""})});
var f=document.getElementById("f");if(f)f.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(f),m="Olá! Sou "+d.get("n")+". "+d.get("m")+" (WhatsApp: "+d.get("t")+")";if(window.gtag)gtag("event","generate_lead");window.open("https://wa.me/5538999561384?text="+encodeURIComponent(m),"_blank","noopener");location.href="/obrigado.html"});
var mn=document.getElementById("mn"),mb=document.getElementById("mb");
function cm(o){mn.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Fechar menu":"Abrir menu");document.documentElement.classList.toggle("lock",o)}
mb.onclick=function(){cm(!mn.classList.contains("open"))};mn.addEventListener("click",function(e){if(e.target.closest("a"))cm(false)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")cm(false)});
document.getElementById("tg").onclick=function(){var d=document.documentElement,c=d.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),n=c==="dark"?"light":"dark";d.dataset.theme=n;try{localStorage.setItem("th",n)}catch(e){}};
var els=document.querySelectorAll(".rv");if(!("IntersectionObserver" in window)){els.forEach(function(x){x.classList.add("on")});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}})},{threshold:.1});els.forEach(function(x){io.observe(x)});
if(document.body.dataset.thanks&&window.gtag)gtag("event","generate_lead_thanks")})();
