const slides = [
    [
        "Unleash your artistic <span class='purpText'>Creativity.</span>",
        "mona.png",
        `Here at Singularity, we work to enable creativity and expression through our Image-Generation Service. Our users can use natural language prompts to generate new images, 
        combine unique styles, and find inspiration for their own art. The service functions through a Generative Adversarial Network (GAN), 
        a system of neural networks that can generate completely original digital images from a dataset of publicly-available images. We understand the importance of originality 
        and privacy, so we allow any artist or photographer to opt out their publicly-available images from our GAN's training process. `
    ],
    [
        "Write Content <span class='purpText'>Effortlessly.</span>",
        "text-gen.png",
        `With Singularity, any user can use our Text-Generation Service to find inspiration, improve their own writing, or find answers to a vast range of questions.
        Our text-generation service utilizes a large language model (LLM) heavily trained on years of text data. The LLM is built in with a Transformer neural network structure, which
        allows the model to process multiple inputs in parallel, make the model capable of understanding human prompts and producing natural language outputs. 
        LLMs are one of the most innovative and fast-growing aspects of artificial intelligence, and, here at Singularity, we aim to ensure a future where AI can serve as a tool for the progression of society.`
    ],
    [
        "Programming <span class='purpText'>Made Easy.</span>",
        "code.png",
        `Writing code has never been easier with Singularity's code-generation service. The service is built on a large language model (LLM) specifically trained on publicly available code.
        Our model allows for fully-functional snippets of code to be generated solely through natural language prompts. Singularity supports a wide variety of languages, including C++, Python,
         Java, Javascript, HTML, CSS, C#, and others.`
    ]

]


// display the current slide
let curSlide = 0;
function showSlide(slide){
    $("#slideshow").fadeOut(600,function(){
        $("#slideshow").css("opacity",1);
        for(let i = 0; i <= 2; i++){
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
        $("#blurbHeader").html(slides[slide][0]);
        $("#blurbText").html(slides[slide][2]);
        $("#slideshow").fadeIn(600);

    })
    
}

// display next slide
function nextSlide(){
    curSlide++;
    curSlide %= 3;
    showSlide(curSlide);
}


// display previous slide
function prevSlide(){
    curSlide--;
    if(curSlide == -1) curSlide = 2;
    showSlide(curSlide);
}

showSlide(0);