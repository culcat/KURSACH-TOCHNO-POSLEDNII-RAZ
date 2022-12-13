//@author Крайнюков Александр 
//Скрипт для отображения названия категории при наведении на иконку 
const katSvet =  document.querySelector('.kategoriSvet')
const katHoz = document.querySelector('.kategoriHoz')
const katVan =  document.querySelector('.kategoriVan')
const katKuh = document.querySelector('.kategoriKuhnya')
const katCover = document.querySelector('.kategoriKovri')
const katShtori = document.querySelector('.kategoriShtori')
const katZerkalo = document.querySelector('.kategoriZerkalo')

const svet = document.querySelector('.svet')
svet.addEventListener('mouseover', svetKat)
function svetKat(){
    katSvet.innerHTML = 'Освещение'
    katSvet.classList.add('animate__slideInDown')
    
}
svet.addEventListener('mouseout', svetKit)
function svetKit(){
    katSvet.innerHTML = ''
    katSvet.classList.remove('animate__slideInDown')
}
const hoz = document.querySelector('.hoz')
hoz.addEventListener('mouseover', hozKat)
function hozKat(){
    katHoz.innerHTML = 'Хозтовары'
    katHoz.classList.add('animate__slideInDown')
}
hoz.addEventListener('mouseout', hozKit)
function hozKit(){
    katHoz.innerHTML = ''
    katHoz.classList.remove('animate__slideInDown')
}

const  vanna =document.querySelector('.vanna')
vanna.addEventListener('mouseover', vannaKat)
function vannaKat(){
    katVan.innerHTML = 'Товары для ванной'
    katVan.classList.add('animate__slideInDown')
}
vanna.addEventListener('mouseout', vannaKit)
function vannaKit(){
    katVan.innerHTML = ''
    katVan.classList.remove('animate__slideInDown')
}
const posuda = document.querySelector('.kuhnya')
posuda.addEventListener('mouseover', posudaKat)
function posudaKat(){
    katKuh.innerHTML = 'Посуда'
    katKuh.classList.add('animate__slideInDown')
}
posuda.addEventListener('mouseout', posudaKit)
function posudaKit(){
    katKuh.innerHTML = ''
    katKuh.classList.remove('animate__slideInDown')
}

const kover = document.querySelector('.kover')
kover.addEventListener('mouseover', koverKat)
function koverKat(){
    katCover.innerHTML = 'Ковры'
    katCover.classList.add('animate__slideInDown')
}
kover.addEventListener('mouseout', koverKit)
function koverKit(){
    katCover.innerHTML = ''
    katCover.classList.remove('animate__slideInDown')
}
const shtori = document.querySelector('.shtori')
shtori.addEventListener('mouseover', shtoriKat)
function shtoriKat(){
    katShtori.innerHTML = 'Шторы'
    katShtori.classList.add('animate__slideInDown')
}
shtori.addEventListener('mouseout', shtoriKit)
function shtoriKit(){
    katShtori.innerHTML = ''
    katShtori.classList.remove('animate__slideInDown')
}

const zerkalo = document.querySelector('.zerkalo')
zerkalo.addEventListener('mouseover', zerkaloKat)
function zerkaloKat(){
    katZerkalo.innerHTML = 'Зеркала'
    katZerkalo.classList.add('animate__slideInDown')
}
zerkalo.addEventListener('mouseout', zerkaloKit)
function zerkaloKit(){
    katZerkalo.innerHTML = ''
    katZerkalo.classList.remove('animate__slideInDown')
}
