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