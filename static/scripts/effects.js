function lerp(start,stop,t,margin=1){
    if(Math.abs(start-stop) < margin)return stop;
    return start + (stop-start) * t;
}


// PARALLAX

// track scroll
let scroll = 0;
window.addEventListener("scroll",function(event){
    scroll = this.document.documentElement.scrollTop;
},true);

// speed of parallax lag
const lagEase = 0.05;
let offsetLag = 0;

let tracking = true;

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



parallax("aiHead",0.5);
parallax("aiText",0.3);

