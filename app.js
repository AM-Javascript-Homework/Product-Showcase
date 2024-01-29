const products = {
    bugguti : {
        gray : {
            text : "bugguti v8 gary",
            tozih : "this is bugguti v8 gray",
            price : "100,000$"
        },
        red : {
            text : "bugguti v8 red",
            tozih : "this is bugguti v8 red",
            price : "1,008,000$"
        },
        yellow : {
            text : "bugguti v8 yellow",
            tozih : "this is bugguti v8 yellow",
            price : "1,050,000$"
        },
    },
    naissan : {
        gray : {
            text : "nassan gary",
            tozih : "this is nassan gary",
            price : "200,000$"
        },
        red : {
            text : "nassan red",
            tozih : "this is nassan red",
            price : "300,000$"
        },
        yellow : {
            text : "nassan yellow",
            tozih : "this is nassan yellow",
            price : "800,000$"
        },
    },
    bmw : {
        gray : {
            text : "bmw gary",
            tozih : "this is bugguti v8 gray",
            price : "400,000$"
        },
        red : {
            text : "bmw red",
            tozih : "this is bmw red",
            price : "700,000$"
        },
        yellow : {
            text : "bmw yellow",
            tozih : "this is bmw yellow",
            price : "450,000$"
        },
    }
}




// text & tozih
let item1Tozih = document.getElementById("item1Tozih")
let item2Tozih = document.getElementById("item2Tozih")
let item3Tozih = document.getElementById("item3Tozih")



let item1Text = document.getElementById("item1Text")
let item2Text = document.getElementById("item3Text")
let item3Text = document.getElementById("item3Text")















// items1-------------------------------------------------------------------------------------------------------------------
//img
//grayColor
let itemsGray1Color = document.getElementById("itemsGray1")
// redColor
let itemsRed1Color = document.getElementById("itemsRed1")
//yellowColor
let itemsYellow1Color = document.getElementById("itemsYellow1")
//addBtn
let addBtn1 = document.getElementById("addBtn1")
//itemsPrice
let itemsPrice1 = document.getElementById("itemsPrice1")


// gray car
let itemImg1gray = document.getElementById("itemImg1gray")
// red car
let itemImg1red = document.getElementById("itemImg1red")
// yellow car
let itemImg1Yellow = document.getElementById("itemImg1yellow")
// if click
itemsRed1Color.addEventListener("click",itemsRed1Img)
itemsGray1Color.addEventListener("click",itemsGray1Img)
itemsYellow1Color.addEventListener("click",itemsYellow1Img)





function itemsYellow1Img(){
    itemImg1Yellow.style = "display:block";
    itemImg1gray.style = "display:none";
    itemImg1red.style = "display:none";
    item1Text.innerHTML = products.bugguti.yellow.text
    item1Tozih.innerHTML = products.bugguti.yellow.tozih
    itemsPrice1.innerHTML = products.bugguti.yellow.price
}
function itemsGray1Img(){
    itemImg1gray.style = "display:block";
    itemImg1red.style = "display:none";
    itemImg1Yellow.style = "display:none";
    item1Text.innerHTML = products.bugguti.gray.text
    item1Tozih.innerHTML = products.bugguti.gray.tozih

    itemsPrice1.innerHTML = products.bugguti.gray.price
}
function itemsRed1Img(){
    itemImg1Yellow.style = "display:none";
    itemImg1gray.style = "display:none";
    itemImg1red.style = "display:block";
    item1Text.innerHTML = products.bugguti.red.text
    item1Tozih.innerHTML = products.bugguti.red.tozih

    itemsPrice1.innerHTML = products.bugguti.red.price
}
let coverContainerItems = document.getElementById("coverContainerItems")
addBtn1.addEventListener("click",add1)
function add1(){
    if(itemImg1red.style = "display:block"){

    }
}

// items2------------------------------------------------------------------------------------------------------------
//img
//grayColor
let itemsGray2Color = document.getElementById("itemsGray2")
// redColor
let itemsRed2Color = document.getElementById("itemsRed2")
//yellowColor
let itemsYellow2Color = document.getElementById("itemsYellow2")
//addBtn
let addBtn2 = document.getElementById("addBtn2")
//itemsPrice
let itemsPrice2 = document.getElementById("itemsPrice2")


// gray car
let itemImg2gray = document.getElementById("itemImg2gray")
// red car
let itemImg2red = document.getElementById("itemImg2red")
// yellow car
let itemImg2Yellow = document.getElementById("itemImg2yellow")
// if click
itemsRed2Color.addEventListener("click",itemsRed2Img)
itemsGray2Color.addEventListener("click",itemsGray2Img)
itemsYellow2Color.addEventListener("click",itemsYellow2Img)





function itemsYellow2Img(){
    itemImg2Yellow.style = "display:block";
    itemImg2gray.style = "display:none";
    itemImg2red.style = "display:none";
    item2Text.innerHTML = products.naissan.yellow.text
    item2Tozih.innerHTML = products.naissan.yellow.tozih

    itemsPrice2.innerHTML = products.naissan.yellow.price
}
function itemsGray2Img(){
    itemImg2gray.style = "display:block";
    itemImg2red.style = "display:none";
    itemImg2Yellow.style = "display:none";
    item2Text.innerHTML = products.naissan.gray.text
    item2Tozih.innerHTML = products.naissan.gray.tozih

    itemsPrice2.innerHTML = products.naissan.gray.price
}
function itemsRed2Img(){
    itemImg2Yellow.style = "display:none";
    itemImg2gray.style = "display:none";
    itemImg2red.style = "display:block";
    item2Text.innerHTML = products.naissan.red.text
    item2Tozih.innerHTML = products.naissan.red.tozih
    itemsPrice2.innerHTML = products.naissan.red.price
}






//items3----------------------------------------------------------------------------------------------------------------------
//img
//grayColor
let itemsGray3Color = document.getElementById("itemsGray3")
// redColor
let itemsRed3Color = document.getElementById("itemsRed3")
//yellowColor
let itemsYellow3Color = document.getElementById("itemsYellow3")
//addBtn
let addBtn3 = document.getElementById("addBtn3")
//itemsPrice
let itemsPrice3 = document.getElementById("itemsPrice3")


// gray car
let itemImg3gray = document.getElementById("itemImg3gray")
// red car
let itemImg3red = document.getElementById("itemImg3red")
// yellow car
let itemImg3Yellow = document.getElementById("itemImg3yellow")
// if click
itemsRed3Color.addEventListener("click",itemsRed3Img)
itemsGray3Color.addEventListener("click",itemsGray3Img)
itemsYellow3Color.addEventListener("click",itemsYellow3Img)




function itemsYellow3Img(){
    itemImg3Yellow.style = "display:block";
    itemImg3gray.style = "display:none";
    itemImg3red.style = "display:none";
    item3Text.innerHTML = products.bmw.yellow.text
    item3Tozih.innerHTML = products.bmw.yellow.tozih
    itemsPrice3.innerHTML = products.bmw.yellow.price
}
function itemsGray3Img(){
    itemImg3gray.style = "display:block";
    itemImg3red.style = "display:none";
    itemImg3Yellow.style = "display:none";
    item3Text.innerHTML = products.bmw.gray.text
    item3Tozih.innerHTML = products.bmw.gray.tozih
    itemsPrice3.innerHTML = products.bmw.gray.price
}
function itemsRed3Img(){
    itemImg3Yellow.style = "display:none";
    itemImg3gray.style = "display:none";
    itemImg3red.style = "display:block";
    item3Text.innerHTML = products.bmw.red.text
    item3Tozih.innerHTML = products.bmw.red.tozih
    itemsPrice3.innerHTML = products.bmw.red.price
}








// cover open and cloes
let productsBtn = document.getElementById("productsBtn")
let cover = document.getElementById("cover")
let coverBtn = document.getElementById("coverBtn")

// if click to cover-btn and cart-btn
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



// add to cart