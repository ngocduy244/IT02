$(document).ready(function() {
    $("#top").hide()

    $(window).scroll(function() {
        if($(this).scrollTop() >= 100)
        {
            $("#Menu").css({
                "position": "fixed",
                "left": "0",
                "right": "0",
                "z-index": "100",
                "top": "0"
            })
        }
        else{
            $("#Menu").css({
                "position": "relative",
            })
        }

        if($(this).scrollTop() >= 200)
            $("#top").show("slow")
        else
            $("#top").hide()
    })

    $("#top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })

})

