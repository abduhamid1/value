let ranges = document.querySelector(".ranges");
let width = document.querySelector(".width");
let height = document.querySelector(".height");
let radios = document.querySelector(".radios");
let fonts = document.querySelector(".fonts");
let bg = document.querySelector(".card");
let text = document.querySelector(".title");
let textcollor = document.querySelector(".textcollor")

ranges.addEventListener('input', () => {
    bg.style.backgroundColor = ranges.value;
})
width.addEventListener('input', () => {
    bg.style.width = width.value + "px";
})
height.addEventListener('input', () => {
    bg.style.height = height.value + "px";
})
radios.addEventListener('input', () => {
    bg.style.borderRadius = `${ radios.value }%`
})
fonts.addEventListener('input', () => {
    text.style.fontSize = fonts.value + "px";
})

textcollor.addEventListener('input', () => {
    text.style.color = textcollor.value ;
})