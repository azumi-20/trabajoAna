let bars = document.querySelector("#nav__toggle")

bars.onclick = function(){
    let navbar = document.querySelector(".nav__menu")
    navbar.classList.toggle("active")
}

const fullImgBox = document.getElementById("fullImgBox")
const antes = document.getElementById('icono_antes')
const next = document.getElementById('icono_next')
const img_element = document.getElementById("img-element")
const closeImg = document.getElementById("closeImg")
const imagenes =  [...document.querySelectorAll('.imgem')];

let indexImg = 0

imagenes.forEach((img, i)=>{
    img.addEventListener("click", (e)=>{
        clicked(i)
        fullImgBox.style.display = 'flex'
        img_element.src = img.src
    })
})

function clicked(position){
    indexImg = position
    img_element.src = imagenes[indexImg].src
}

antes.addEventListener("click", e =>{
    if(indexImg >= imagenes.length-1){
        indexImg = -1
    }
    indexImg++
    img_element.src = imagenes[indexImg].src
})

next.addEventListener("click", e =>{
    if(indexImg <= 0){
        indexImg = imagenes.length
    }
    indexImg--
    img_element.src = imagenes[indexImg].src
})

closeImg.addEventListener("click", ()=>{
    fullImgBox.style.display = "none"
})





