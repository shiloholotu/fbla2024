// convert information to hex to be parsed in python
function convertToHex(str){

    let ret = "";
    for(let char of str){
        ret += char.charCodeAt(0).toString(16);
    }

    return ret;
}


// functionality for the application page
function submitApplication(){


    // tracks all required fields
    let filled = true;
    let unfilledElement = "";
    $('[required]').each(function() {
        if ($(this).is(':invalid') || !$(this).val()){
            if(filled){
                filled = false;
                unfilledElement = $(this).attr("id");
                console.log(unfilledElement);
            }
        }
    })
    if (!filled){
        alert("Please fill all fields!");
        // scroll to first unfilled required field
        console.log(unfilledElement)
        window.scrollTo(0, document.getElementById(unfilledElement).offsetTop - 200);
        return;
    }

    // generate random key for applicant
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let rndKey = "";
    for(let i = 0; i <= 12; i++) rndKey += chars[parseInt(Math.random() * chars.length)];

    // sends data to python server
    let dataStr = "";
    const inps = ["job","firstname","lastname","email","phone","resume","outreach","startdate","immigration","workability","additionalinfo","profile","experience"];
    for(let i of inps) dataStr += convertToHex($("#" + i).val() + ":BB:");
    window.location.replace(
        "/submit/" + dataStr + "/" + rndKey
    );
}