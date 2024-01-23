// when the first dropdown is changed, we want to change all the other ones
function updateDropdowns() {

    // generating an image
    if ($("#genInput1").val() == "image") {
        $("#genInput2").html(`
            <option value="cat"selected>of a cat</option>
            <option value="santa">of Santa Claus</option>
            <option value="apple">of an apple</option>
        `);

        $("#genInput3").html(`
            <option value="skateboard"selected>riding a skateboard.</option>
            <option value="beach">relaxing on the beach.</option>
            <option value="textbook">reading a textbook.</option>
        `);
    }

    // generating an essay
    else if ($("#genInput1").val() == "essay") {
        $("#genInput2").html(`
            <option value="quantum"selected>about quantum physics</option>
            <option value="dino">about dinosaurs</option>
            <option value="compsci">about computer science</option>
        `);

        $("#genInput3").html(`
            <option value="pirate"selected>in the style of a pirate.</option>
            <option value="five">for five year olds.</option>
            <option value="poem">as a shakespeare poem.</option>
        `);
    }

    // generating code
    else{
        $("#genInput2").html(`
            <option value="sort"selected>that sorts a list</option>
            <option value="quad">that solves quadratic equations</option>
            <option value="vowel">counts the vowels in a word</option>
        `);

        $("#genInput3").html(`
            <option value="py"selected>in Python.</option>
            <option value="js">in JavaScript.</option>
            <option value="java">in Java.</option>
        `);
    }
}



let lastInd = 0;
function fakeRand() { // randomly choose an output, but avoid the previous output(not truly random)
    let ret = lastInd;
    while (ret == lastInd) ret = parseInt(Math.random() * 4);
    lastInd = ret;
    return ret;
}


function generateDemo() {

    $("#demoSpace").fadeOut(1000, function () {

        // if generating an image
        if ($("#genInput1").val() == "image") {
            // pick a random image
            $("#demoSpace").html(`<img id='demoImg' src='static/assets/ai-pics/${$("#genInput2").val()}/${$("#genInput3").val()}/${fakeRand()}.png'>`);
        }
        // if generating an essay
        else if ($("#genInput1").val() == "essay") {
            
            $("#demoSpace").html(`
            <div>
                <h3><img src='static/assets/logo.png'>AI Text Assistant</h3>
                <p id="demoText"></p>
            </div>
            `);

            // pick a random essay and use typewriter effect
            setTimeout(function () {
                if ($("#genInput3").val() != "poem") typewriter("demoText", essays[$("#genInput2").val()][$("#genInput3").val()][fakeRand()].replaceAll("\n", "<br><br>"));
                else typewriter("demoText", essays[$("#genInput2").val()][$("#genInput3").val()][fakeRand()].replaceAll("\n", "<br>"));
            }, 1000);
        }
        // if generating code
        else{
            $("#demoSpace").html(`
            <pre><code id="demoCode">${codes[$("#genInput2").val()][$("#genInput3").val()]}</code><pre>
            `);
            hljs.highlightAll();
        }

        

        $("#demoSpace").fadeIn(1000);
    });

}

// typewriter effect

function typewriter(element, text, speed) {
    $("#" + element).html("");
    let words = text.split(" ");
    let curInd = 0;
    let timer = setInterval(function () {
        $("#" + element).html($("#" + element).html() + " " + words[curInd]);
        curInd++;
        if (curInd == words.length) clearInterval(timer);
    }, speed);
}
