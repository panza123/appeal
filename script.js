"use strict"
const inputBox = document.querySelector('#input-box');
const iconArrow = document.querySelector('.icon-arrow');
const disPlay = document.querySelector('#displays');
 const box = document.querySelector('.input-box')
const iconError = document.querySelector('#icon-error')

console.log(disPlay)

iconArrow.addEventListener('click',e =>{
    e.preventDefault();
    if(inputBox.value === ""){
     disPlay.innerText ="please provide a valid email!"
     iconError.style.display = 'block'
    box.style.borderColor = 'hsl(0, 93%, 68%)'
    }
     else if(!inputBox.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        disPlay.innerText ="please provide a valid email!"
        iconError.style.display = 'block'
        box.style.borderColor = 'hsl(0, 93%, 68%)'
        return false
    }
   else{
    return true
   }
})