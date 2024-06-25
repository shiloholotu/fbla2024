function changeAnchor(){
    // console.log(window.scrollY); <-- will use later to fit Shiloh screen
    const scrollButton = document.querySelector('.scroll-button');
    
    var yPos = window.scrollY;
    if(yPos>=0 && yPos < 852){
        scrollButton.href = "#anchor1";
    } else if (yPos>=852 && yPos < 1824) {
        scrollButton.href = "#anchor2";
    } else if (yPos>=1824 && yPos < 2651) {
        scrollButton.href = "#anchor3";
    } else {
        scrollButton.href = "#anchor0";
    } 
}

// changing the arrow

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-button');
    var scrollPosition = window.scrollY;

    if(scrollPosition >= 2651){
        scrollButton.innerHTML = "<img src='static/assets/svg/up.png' style='transform:translate(0,0)'>";
    } else {
        scrollButton.innerHTML = "<img src='static/assets/svg/down.png'>";
    }
})