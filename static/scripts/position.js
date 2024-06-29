function toggleView(ind){
    if($("#jobDesc" + ind).css("display") == "none"){
        $("#toggleView" + ind).html("Hide information");
        $("#jobDesc" + ind).css("display","block");
    }
    else{
        $("#toggleView" + ind).html("View more information");
        $("#jobDesc" + ind).css("display","none");
    }
}


const positions = [
    ["Hardware/Software Co-Design Engineer", "Houston, TX"],
    ["Applied AI Product Data Scientist", "Houston, TX"],
    ["Insider Risk Investigator", "Houston, TX"],
    ["Revenue Technology Product Manager", "Houston, TX"],
    ["Analytics Engineer, Finance", "Houston, TX"],
    ["Solutions Architectr", "Houston, TX"]
];

function updateSearch(){
    const role = document.getElementById("roleSearch").value;
    const loc = document.getElementById("locationSearch").value;

    for(i in positions){

        console.log("position" + (parseInt(i)+1));
        document.getElementById("position" + (parseInt(i)+1)).style["display"] = "block";
        if(!positions[i][0].toLowerCase().includes(role.toLowerCase()) || !positions[i][1].toLowerCase().includes(loc.toLowerCase())) document.getElementById("position" + (parseInt(i)+1)).style["display"] = "none";
    }
}