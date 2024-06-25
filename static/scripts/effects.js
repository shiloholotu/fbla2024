function lerp(start,stop,t,margin=1){
    if(Math.abs(start-stop) < margin)return stop;
    return start + (stop-start) * t;
}


// PARALLAX

// track scroll
let scroll = 0;
const nav = document.getElementById("navbar");
let navLight = true;
window.addEventListener("scroll",function(event){
    scroll = this.document.documentElement.scrollTop;
    if(scroll >= 2366 && navLight){
        
        nav.style.setProperty('--background-color','rgb(30,30,35)');
        nav.style.setProperty('--navbar-color','rgb(159,48,253,.85)');
        nav.style.setProperty('--transparent-border-color','rgb(175,175,175,0.1');
        nav.style.setProperty('--footer-color','rgb(10,10,12)');
        navLight = false;
    }

    if(scroll < 2366 && navLight == false){
        nav.style.setProperty('--background-color','');
        nav.style.setProperty('--navbar-color','');
        nav.style.setProperty('--transparent-border-color','');
        nav.style.setProperty('--footer-color','');
        navLight = true;
    }

},true);

// speed of parallax lag
const lagEase = 0.05;
let offsetLag = 0;

let tracking = false;

// loop over tracked elements and adjust their offset based on mouse
const parallaxElements = {};
setInterval(function(){
    if(!tracking) return;

    offsetLag = lerp(offsetLag,scroll,lagEase);


    for(const [element, strength] of Object.entries(parallaxElements))
        document.getElementById(element).style.transform = `translate(0,${-offsetLag*strength}px)`;
},10);

// add tracked elements
function parallax(id, strength){
    const element = document.getElementById(id);
    parallaxElements[id] = strength;

    if(element.style["position"] == "static" || element.style["position"] == "") element.style["position"] = "relative";
    element.style["z-index"] = strength*1000;
}



parallax("aiHand",0.5);
parallax("aiHandMobile",0.3);
parallax("aiText",0.3);

