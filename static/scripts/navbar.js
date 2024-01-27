function toggleBurgerMenu(){
    if($("#burgerMenu").css("opacity") == "0"){
        $("#burgerMenu").css("opacity","1");
        $("#burgerMenu").css("pointer-events","all");
        $("#burgerToggle").attr("src","/static/assets/svg/cancel.svg");
    }
    else{
        $("#burgerMenu").css("opacity","0");
        $("#burgerMenu").css("pointer-events","none");
        $("#burgerToggle").attr("src","/static/assets/svg/menu.svg");
    }
}