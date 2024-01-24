let productsBtn = document.getElementById("productsBtn")
let cover = document.getElementById("cover")
let coverBtn = document.getElementById("coverBtn")



productsBtn.addEventListener("click",showCover)
coverBtn.addEventListener("click",cloesCover)
function cloesCover(){
    if (cover.style = "display:block"){
        cover.style = "display:none";

    }
}

function showCover (){
    cover.style = "display:block"
}