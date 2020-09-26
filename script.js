function animasiIntro(){
    $("#text span").velocity("transition.slideLeftIn",{
        stagger: 100,
        complete: function(){
            animasiStart();
        }
    });
}

function animasiStart(){
    $("#start").velocity("transition.bounceUpIn")
    .mouseenter(function(){
        $(this).velocity({width: 100});
    })
    .mouseleave(function(){
        $(this).velocity({width: 125});
    });
}

function animasiIntroOut(){
    $("#start").attr("disabled", true).css({"color":"black"});
    $("#start").velocity("transition.whirlOut",{
        stagger: 100,
        complete: function(){
            $("#text").velocity({
                "font-size":"20px","top":"95%"},{
                    duration: 1000,
                    complete: function(){
                        callMenu();
                        $("#menu ul li a[href='what_we_do']").trigger("click");
                        $("#start").attr("disabled", false).css({"color":"black"});
                    }
                });
        }
    });
}

function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{
        stagger: 250,
    });

    $("#menu ul li a").off().click(function(event){
        event.preventDefault();
        $(this).parent("li").addClass("active");
        $(this).parent("li").siblings().removeClass("active");

        var hrefString = $(this).attr("href");
        if(hrefString == "back_to_intro"){
            back_to_intro();
        }else{
            if(!$("#"+ hrefString).is(":visible")){
                $(".container-content").fadeOut(1000);
                setTimeout(function(){
                $("#"+ hrefString).show();
                window[hrefString]();
                }, 1000);
            }
        }
    });
}

function what_we_do(){
    $("#what_we_do img").velocity("transition.flipYIn",{duration:1500});
    $("#what_we_do .title").velocity("transition.slideUpIn",{duration:1500});
    $("#what_we_do div").velocity("transition.slideDownIn",{duration:1500});
}

function our_team(){
    $(".members.top240").velocity("transition.slideUpIn",{stagger:100});
    $(".members.top170").velocity("transition.slideDownIn",{stagger:100});
}

function back_to_intro(){
    $("#menu ul li").hide();
    $(".container-content").hide();
    $("#text").velocity({
        "font-size":"90px","top":"50%"},{
             duration: 1000,
            complete: function(){
                $("#start").velocity("transition.whirlIn");
            }
        });
}

$(document).ready(function(){
    animasiIntro();
});