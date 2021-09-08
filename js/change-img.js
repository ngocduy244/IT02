function init(){
    var images = document.querySelectorAll("div.thumb img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg")
            img.setAttribute("src", path)
        }
    }
    var buttons = document.querySelectorAll(".btnColor a")
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = function(){
            event.preventDefault()
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg")
            img.src = `./images/AK019/${color}_1.png`
            
            var subImage = document.querySelectorAll(".thumb img")
            for(var i = 0; i < subImage.length; i++)
                subImage[i].src = `./images/AK019/${color}_${i+1}.png`
        }
    }

}