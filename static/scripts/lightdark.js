var r = document.querySelector(':root');

function switchMode(){
    var computedStyle = getComputedStyle(r);
    var fontColor = computedStyle.getPropertyValue('--font-color').trim();
    var modeButton = document.getElementById("modeButton");

    if(fontColor === 'rgb(42,41,85)'){
        // in light mode, change to dark mode
        r.style.setProperty('--font-color', 'rgb(255,255,255)');
        r.style.setProperty('--background-color','rgb(30,30,35)');
        r.style.setProperty('--navbar-color','rgb(30,30,35,0.85)');
        r.style.setProperty('--transparent-border-color','rgb(175,175,175,0.1');
        r.style.setProperty('--footer-color','rgb(10,10,12)');
        modeButton.textContent = "light_mode";
    } else {
        // in dark mode, change to light mode
        r.style.setProperty('--font-color', 'rgb(42,41,85)');
        r.style.setProperty('--background-color','rgb(255,255,255)');
        r.style.setProperty('--navbar-color','rgb(255,255,255,0.85)');
        r.style.setProperty('--transparent-border-color','rgb(0,0,50,0.15)');
        r.style.setProperty('--footer-color','rgb(26,26,51)');
        modeButton.textContent = "dark_mode";
    }

}