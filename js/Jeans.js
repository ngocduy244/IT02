function init(){
    var images = document.querySelectorAll("div.colors2 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg2")
            img.setAttribute("src", path)
        }
    }
    var images = document.querySelectorAll("div.colors1 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg1")
            img.setAttribute("src", path)
        }
    }
}
$(document).ready(function() {
    $("#top").hide()

    $(window).scroll(function() {
        if($(this).scrollTop() >= 45)
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
                "left": "0",
                "right": "0",
                "z-index": "100",
                "top": "0"
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
        }, 2000);
    })

})

$(document).ready(function(){
    $("ul.page a").click(function() {
        $("ul.page a").removeClass("active")
        $(this).addClass("active")
    })
})