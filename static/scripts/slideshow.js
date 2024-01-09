// list of slideshow content
const slides = [
    [
        "Unleash your artistic <span class='purpText'>Creativity.</span>",
        "mona.png",
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
        text ever since the scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the scrambled it to make a type specimen book.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the scrambled it to make a type specimen book.`
    ],
    [
        "Unleash your artistic <span class='purpText'>Creativity.</span>",
        "mona.png",
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
        text ever since the scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the scrambled it to make a type specimen book.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the scrambled it to make a type specimen book.`
    ],
    [
        "Unleash your artistic <span class='purpText'>Creativity.</span>",
        "mona.png",
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
        text ever since the scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the scrambled it to make a type specimen book.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the scrambled it to make a type specimen book.`
    ],
    [
        "Unleash your artistic <span class='purpText'>Creativity.</span>",
        "mona.png",
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
        text ever since the scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the scrambled it to make a type specimen book.Lorem
        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the scrambled it to make a type specimen book.`
    ]

]


// display the current slide
let curSlide = 0;
function showSlide(slide){
    $("#slideshow").fadeOut(600,function(){

        for(let i = 0; i <= 3; i++){
            if(i == slide){
                $("#slideDot"+i).css("width","40px");
                $("#slideDot"+i).css("opacity","1");
            }
            else{
                $("#slideDot"+i).css("width","15px");
                $("#slideDot"+i).css("opacity",".3");

            }
        }

        $("#blurbImg").attr("src","static/assets/slideshow/" + slides[slide][1]);
        $("#blurbHeader").html = slides[slide][0];
        $("#blurbText").html = slides[slide][2];
        $("#slideshow").fadeIn(600);

    })
    
}

// display next slide
function nextSlide(){
    curSlide++;
    curSlide %= 4;
    showSlide(curSlide);
}


// display previous slide
function prevSlide(){
    curSlide--;
    if(curSlide == -1) curSlide = 3;
    showSlide(curSlide);
}

showSlide(0);