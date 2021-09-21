function init(){
    var images = document.querySelectorAll("div.products-2 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-2")
            img.setAttribute("src", path)
        }
    }
    var images = document.querySelectorAll("div.products-1 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-1")
            img.setAttribute("src", path)
        }
    }

    var images = document.querySelectorAll("div.products-3 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-3")
            img.setAttribute("src", path)
        }
    }

    var images = document.querySelectorAll("div.products-4 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-4")
            img.setAttribute("src", path)
        }
    }

    var images = document.querySelectorAll("div.products-5 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-5")
            img.setAttribute("src", path)
        }
    }
    var images = document.querySelectorAll("div.products-6 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-6")
            img.setAttribute("src", path)
        }
    }
    var images = document.querySelectorAll("div.products-7 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-7")
            img.setAttribute("src", path)
        }
    }

    var images = document.querySelectorAll("div.products-8 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-8")
            img.setAttribute("src", path)
        }
    }

    var images = document.querySelectorAll("div.products-9 img")
    for(var i = 0; i < images.length; i++){
        images[i].onclick = function(){
            event.preventDefault()
            var path = this.src
            var img = document.getElementById("mainImg-9")
            img.setAttribute("src", path)
        }
    }

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