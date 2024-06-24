console.log("hello")
var r = document.querySelector(':root');

function switchMode(){
    var computedStyle = getComputedStyle(r);
    var fontColor = computedStyle.getPropertyValue('--font-color').trim();
    var modeButton = document.getElementById("modeButton");

    if(localStorage.getItem('theme')==='light'){
        // in light mode, change to dark mode
        localStorage.setItem('theme', 'dark');
        r.style.setProperty('--font-color', 'rgb(255,255,255)');
        r.style.setProperty('--background-color','rgb(30,30,35)');
        r.style.setProperty('--navbar-color','rgb(30,30,35,0.85)');
        r.style.setProperty('--transparent-border-color','rgb(175,175,175,0.1');
        r.style.setProperty('--footer-color','rgb(10,10,12)');
        modeButton.textContent = "light_mode";
    } else {
        // in dark mode, change to light mode
        localStorage.setItem('theme','light');
        r.style.setProperty('--font-color', 'rgb(42,41,85)');
        r.style.setProperty('--background-color','rgb(255,255,255)');
        r.style.setProperty('--navbar-color','rgb(255,255,255,0.85)');
        r.style.setProperty('--transparent-border-color','rgb(0,0,50,0.15)');
        r.style.setProperty('--footer-color','rgb(26,26,51)');
        modeButton.textContent = "dark_mode";
    }

}

function applyTheme(theme){
    if(theme==='dark'){
        r.style.setProperty('--font-color', 'rgb(255,255,255)');
        r.style.setProperty('--background-color','rgb(30,30,35)');
        r.style.setProperty('--navbar-color','rgb(30,30,35,0.85)');
        r.style.setProperty('--transparent-border-color','rgb(175,175,175,0.1');
        r.style.setProperty('--footer-color','rgb(10,10,12)');
        modeButton.textContent = "light_mode";

    } else {
        r.style.setProperty('--font-color', 'rgb(42,41,85)');
        r.style.setProperty('--background-color','rgb(255,255,255)');
        r.style.setProperty('--navbar-color','rgb(255,255,255,0.85)');
        r.style.setProperty('--transparent-border-color','rgb(0,0,50,0.15)');
        r.style.setProperty('--footer-color','rgb(26,26,51)');
        modeButton.textContent = "dark_mode";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let currentTheme = localStorage.getItem('theme');
    applyTheme(currentTheme);
})