const containerOne = document.querySelector('.posudaContainer1')
const containerTwo = document.querySelector('.posudaContainer2')
const containerThree = document.querySelector('.posudaContainer3')
const containerFour = document.querySelector('.posudaContainer4')

const svetContainer1 = document.querySelector('.svetContainer1')
const svetContainer2 = document.querySelector('.svetContainer2')
const svetContainer3 = document.querySelector('.svetContainer3')
const svetContainer4 = document.querySelector('.svetContainer4')

const vannaContainer1 = document.querySelector('.vannaContainer1')
const vannaContainer2 = document.querySelector('.vannaContainer2')
const vannaContainer3 = document.querySelector('.vannaContainer3')
const vannaContainer4 = document.querySelector('.vannaContainer4')

const hozContainer1 = document.querySelector('.hozContainer1')
const hozContainer2 = document.querySelector('.hozContainer2')
const hozContainer3 = document.querySelector('.hozContainer3')
const hozContainer4 = document.querySelector('.hozContainer4')

const kovriContainer1 = document.querySelector('.kovriContainer1')
const kovriContainer2 = document.querySelector('.kovriContainer2')
const kovriContainer3 = document.querySelector('.kovriContainer3')
const kovriContainer4 = document.querySelector('.kovriContainer4')

const shtoriContainer1 = document.querySelector('.shtoriContainer1')
const shtoriContainer2 = document.querySelector('.shtoriContainer2')
const shtoriContainer3 = document.querySelector('.shtoriContainer3')
const shtoriContainer4 = document.querySelector('.shtoriContainer4')

const zerkalaContainer1 = document.querySelector('.zerkalaContainer1')
const zerkalaContainer2 = document.querySelector('.zerkalaContainer2')
const zerkalaContainer3 = document.querySelector('.zerkalaContainer3')
const zerkalaContainer4 = document.querySelector('.zerkalaContainer4')

const posuda1 = document.querySelector('.kuhnya1')
const posuda2 = document.querySelector('.kuhnya2')
const posuda3 = document.querySelector('.kuhnya3')
const posuda4 = document.querySelector('.kuhnya4')

const hoz1 = document.querySelector('.hoz1')
const hoz2 = document.querySelector('.hoz2')
const hoz3 = document.querySelector('.hoz3')
const hoz4 = document.querySelector('.hoz4')

const svet1 = document.querySelector('.svet1')
const svet2 = document.querySelector('.svet2')
const svet3 = document.querySelector('.svet3')
const svet4 = document.querySelector('.svet4')

const vanna1 = document.querySelector('.vanna1')
const vanna2 = document.querySelector('.vanna2')
const vanna3 = document.querySelector('.vanna3')
const vanna4 = document.querySelector('.vanna4')

const kovri1 = document.querySelector('.kovri1')
const kovri2 = document.querySelector('.kovri2')
const kovri3 = document.querySelector('.kovri3')
const kovri4 = document.querySelector('.kovri4')

const shtori1 = document.querySelector('.shtori1')
const shtori2 = document.querySelector('.shtori2')
const shtori3 = document.querySelector('.shtori3')
const shtori4 = document.querySelector('.shtori4')

const zerkalo1 = document.querySelector('.zerkalo1')
const zerkalo2 = document.querySelector('.zerkalo2')
const zerkalo3 = document.querySelector('.zerkalo3')
const zerkalo4 = document.querySelector('.zerkalo4')

zerkalo4.addEventListener('mouseover', zerkaloOpenedFour)
function zerkaloOpenedFour(){
    zerkalaContainer4.classList.add('OpenedContainer')
    document.querySelector('.opisanieZerka4').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    zerkalo4.style.width = '14em'
    zerkalo4.style.height = '12em'
}
zerkalo4.addEventListener('mouseout', zerkaloClosedFour)
function  zerkaloClosedFour(){
    zerkalaContainer4.classList.remove('OpenedContainer')
    document.querySelector('.opisanieZerka4').innerHTML = ''
    zerkalo4.style.width = '10em'
    zerkalo4.style.height = '10em'
}


zerkalo3.addEventListener('mouseover', zerkaloOpenedThree)
function zerkaloOpenedThree(){
    zerkalaContainer3.classList.add('OpenedContainer')
    document.querySelector('.opisanieZerka3').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    zerkalo3.style.width = '14em'
    zerkalo3.style.height = '12em'
}
zerkalo3.addEventListener('mouseout', zerkaloClosedThree)
function  zerkaloClosedThree(){
    zerkalaContainer3.classList.remove('OpenedContainer')
    document.querySelector('.opisanieZerka3').innerHTML = ''
    zerkalo3.style.width = '10em'
    zerkalo3.style.height = '10em'
}


zerkalo2.addEventListener('mouseover', zerkaloOpenedTwo)
function zerkaloOpenedTwo(){
    zerkalaContainer2.classList.add('OpenedContainer')
    document.querySelector('.opisanieZerka2').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    zerkalo2.style.width = '14em'
    zerkalo2.style.height = '12em'
}
zerkalo2.addEventListener('mouseout', zerkaloClosedTwo)
function  zerkaloClosedTwo(){
    zerkalaContainer2.classList.remove('OpenedContainer')
    document.querySelector('.opisanieZerka2').innerHTML = ''
    zerkalo2.style.width = '10em'
    zerkalo2.style.height = '10em'
}

zerkalo1.addEventListener('mouseover', zerkaloOpenedOne)
function zerkaloOpenedOne(){
    zerkalaContainer1.classList.add('OpenedContainer')
    document.querySelector('.opisanieZerkalo1').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    zerkalo1.style.width = '14em'
    zerkalo1.style.height = '12em'
}
zerkalo1.addEventListener('mouseout', zerkaloClosedOne)
function  zerkaloClosedOne(){
    zerkalaContainer1.classList.remove('OpenedContainer')
    document.querySelector('.opisanieZerkalo1').innerHTML = ''
    zerkalo1.style.width = '10em'
    zerkalo1.style.height = '10em'
}

shtori4.addEventListener('mouseover', shtoriOpenedFour)
function shtoriOpenedFour(){
    shtoriContainer4.classList.add('OpenedContainer')
    document.querySelector('.opisanieShtori4').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    shtori4.style.width = '14em'
    shtori4.style.height = '12em'
}
shtori4.addEventListener('mouseout', shtoriClosedFour)
function  shtoriClosedFour(){
    shtoriContainer4.classList.remove('OpenedContainer')
    document.querySelector('.opisanieShtori4').innerHTML = ''
    shtori4.style.width = '10em'
    shtori4.style.height = '10em'
}

shtori3.addEventListener('mouseover', shtoriOpenedThree)
function shtoriOpenedThree(){
    shtoriContainer3.classList.add('OpenedContainer')
    document.querySelector('.opisanieShtori3').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    shtori3.style.width = '14em'
    shtori3.style.height = '12em'
}
shtori3.addEventListener('mouseout', shtoriClosedThree)
function  shtoriClosedThree(){
    shtoriContainer3.classList.remove('OpenedContainer')
    document.querySelector('.opisanieShtori3').innerHTML = ''
    shtori3.style.width = '10em'
    shtori3.style.height = '10em'
}

shtori2.addEventListener('mouseover', shtoriOpenedTwo)
function shtoriOpenedTwo(){
    shtoriContainer2.classList.add('OpenedContainer')
    document.querySelector('.opisanieShtori2').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    shtori2.style.width = '14em'
    shtori2.style.height = '12em'
}
shtori2.addEventListener('mouseout', shtoriClosedTwo)
function  shtoriClosedTwo(){
    shtoriContainer2.classList.remove('OpenedContainer')
    document.querySelector('.opisanieShtori2').innerHTML = ''
    shtori2.style.width = '10em'
    shtori2.style.height = '10em'
}



shtori1.addEventListener('mouseover', shtoriOpenedOne)
function shtoriOpenedOne(){
    shtoriContainer1.classList.add('OpenedContainer')
    document.querySelector('.opisanieShtori1').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    shtori1.style.width = '14em'
    shtori1.style.height = '12em'
}
shtori1.addEventListener('mouseout', shtoriClosedOne)
function  shtoriClosedOne(){
    shtoriContainer1.classList.remove('OpenedContainer')
    document.querySelector('.opisanieShtori1').innerHTML = ''
    shtori1.style.width = '10em'
    shtori1.style.height = '10em'
}


hoz4.addEventListener('mouseover', hozOpenedFour)
function hozOpenedFour(){
    hozContainer4.classList.add('OpenedContainer')
    document.querySelector('.opisanieHoz4').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    hoz4.style.width = '14em'
    hoz4.style.height = '12em'
}
hoz4.addEventListener('mouseout', hozClosedFour)
function  hozClosedFour(){
    hozContainer4.classList.remove('OpenedContainer')
    document.querySelector('.opisanieHoz4').innerHTML = ''
    hoz4.style.width = '10em'
    hoz4.style.height = '10em'
}



hoz3.addEventListener('mouseover', hozOpenedThree)
function hozOpenedThree(){
    hozContainer3.classList.add('OpenedContainer')
    document.querySelector('.opisanieHoz3').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    hoz3.style.width = '14em'
    hoz3.style.height = '12em'
}
hoz3.addEventListener('mouseout', hozClosedThree)
function  hozClosedThree(){
    hozContainer3.classList.remove('OpenedContainer')
    document.querySelector('.opisanieHoz3').innerHTML = ''
    hoz3.style.width = '10em'
    hoz3.style.height = '10em'
}


hoz2.addEventListener('mouseover', hozOpenedTwo)
function hozOpenedTwo(){
    hozContainer2.classList.add('OpenedContainer')
    document.querySelector('.opisanieHoz2').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    hoz2.style.width = '14em'
    hoz2.style.height = '12em'
}
hoz2.addEventListener('mouseout', hozClosedTwo)
function  hozClosedTwo(){
    hozContainer2.classList.remove('OpenedContainer')
    document.querySelector('.opisanieHoz2').innerHTML = ''
    hoz2.style.width = '10em'
    hoz2.style.height = '10em'
}


hoz1.addEventListener('mouseover', hozOpenedOne)
function hozOpenedOne(){
    hozContainer1.classList.add('OpenedContainer')
    document.querySelector('.opisanieHoz1').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    hoz1.style.width = '14em'
    hoz1.style.height = '12em'
}
hoz1.addEventListener('mouseout', hozClosedOne)
function  hozClosedOne(){
    hozContainer1.classList.remove('OpenedContainer')
    document.querySelector('.opisanieHoz1').innerHTML = ''
    hoz1.style.width = '10em'
    hoz1.style.height = '10em'
}

kovri4.addEventListener('mouseover', kovriOpenedFour)
function kovriOpenedFour(){
    kovriContainer4.classList.add('OpenedContainer')
    document.querySelector('.opisanieKovri4').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    kovri4.style.width = '14em'
    kovri4.style.height = '12em'
}
kovri4.addEventListener('mouseout', kovriClosedFour)
function  kovriClosedFour(){
    kovriContainer4.classList.remove('OpenedContainer')
    document.querySelector('.opisanieKovri4').innerHTML = ''
    kovri4.style.width = '10em'
    kovri4.style.height = '10em'
}

kovri3.addEventListener('mouseover', kovriOpenedThree)
function kovriOpenedThree(){
    kovriContainer3.classList.add('OpenedContainer')
    document.querySelector('.opisanieKovri3').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    kovri3.style.width = '14em'
    kovri3.style.height = '12em'
}
kovri3.addEventListener('mouseout', kovriClosedThree)
function  kovriClosedThree(){
    kovriContainer3.classList.remove('OpenedContainer')
    document.querySelector('.opisanieKovri3').innerHTML = ''
    kovri3.style.width = '10em'
    kovri3.style.height = '10em'
}

kovri2.addEventListener('mouseover', kovriOpenedTwo)
function kovriOpenedTwo(){
    kovriContainer2.classList.add('OpenedContainer')
    document.querySelector('.opisanieKovri2').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    kovri2.style.width = '14em'
    kovri2.style.height = '12em'
}
kovri2.addEventListener('mouseout', kovriClosedTwo)
function  kovriClosedTwo(){
    kovriContainer2.classList.remove('OpenedContainer')
    document.querySelector('.opisanieKovri2').innerHTML = ''
    kovri2.style.width = '10em'
    kovri2.style.height = '10em'
}


kovri1.addEventListener('mouseover', kovriOpenedOne)
function kovriOpenedOne(){
    kovriContainer1.classList.add('OpenedContainer')
    document.querySelector('.opisanieKovri1').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    kovri1.style.width = '14em'
    kovri1.style.height = '12em'
}
kovri1.addEventListener('mouseout', kovriClosedOne)
function  kovriClosedOne(){
    kovriContainer1.classList.remove('OpenedContainer')
    document.querySelector('.opisanieKovri1').innerHTML = ''
    kovri1.style.width = '10em'
    kovri1.style.height = '10em'
}

vanna4.addEventListener('mouseover', vannaOpenedFour)
function vannaOpenedFour(){
    vannaContainer4.classList.add('OpenedContainer')
    document.querySelector('.opisanieVanna4').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    vanna4.style.width = '14em'
    vanna4.style.height = '12em'
}
vanna4.addEventListener('mouseout', vannaClosedFour)
function  vannaClosedFour(){
    vannaContainer4.classList.remove('OpenedContainer')
    document.querySelector('.opisanieVanna4').innerHTML = ''
    vanna4.style.width = '10em'
    vanna4.style.height = '10em'
}


vanna3.addEventListener('mouseover', vannaOpenedThree)
function vannaOpenedThree(){
    vannaContainer3.classList.add('OpenedContainer')
    document.querySelector('.opisanieVanna3').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
    vanna3.style.width = '14em'
    vanna3.style.height = '12em'
}
vanna3.addEventListener('mouseout', vannaClosedThree)
function  vannaClosedThree(){
    vannaContainer3.classList.remove('OpenedContainer')
    document.querySelector('.opisanieVanna3').innerHTML = ''
    vanna3.style.width = '10em'
    vanna3.style.height = '10em'
}

vanna2.addEventListener('mouseover', vannaOpenedTwo)
function vannaOpenedTwo(){
    vannaContainer2.classList.add('OpenedContainer')
    document.querySelector('.opisanieVanna2').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
   
    vanna2.style.width = '14em'
    vanna2.style.height = '12em'
}
vanna2.addEventListener('mouseout', vannaClosedTwo)
function  vannaClosedTwo(){
    vannaContainer2.classList.remove('OpenedContainer')
    document.querySelector('.opisanieVanna2').innerHTML = ''
    vanna2.style.width = '10em'
    vanna2.style.height = '10em'
}


vanna1.addEventListener('mouseover', vannaOpenedOne)
function vannaOpenedOne(){
    vannaContainer1.classList.add('OpenedContainer')
    document.querySelector('.opisanieVanna1').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
   
    vanna1.style.width = '14em'
    vanna1.style.height = '12em'
}
vanna1.addEventListener('mouseout', vannaClosedOne)
function  vannaClosedOne(){
    vannaContainer1.classList.remove('OpenedContainer')
    document.querySelector('.opisanieVanna1').innerHTML = ''
    vanna1.style.width = '10em'
    vanna1.style.height = '10em'
}

svet1.addEventListener('mouseover', svetOpenedOne)
function svetOpenedOne(){
    svetContainer1.classList.add('OpenedContainer')
    document.querySelector('.opisanieSvet1').innerHTML = 'Люстра VITALUCE Тара блэк трио поможет визуально обозначить различные зоны в помещении и расставить акценты на основных элементах интерьера.'
   
    svet1.style.width = '14em'
    svet1.style.height = '12em'
}
svet1.addEventListener('mouseout', svetClosedOne)
function svetClosedOne(){
    svetContainer1.classList.remove('OpenedContainer')
    document.querySelector('.opisanieSvet1').innerHTML = ''
    svet1.style.width = '10em'
    svet1.style.height = '10em'
}

svet2.addEventListener('mouseover', svetOpenedTwo)
function svetOpenedTwo(){
    svetContainer2.classList.add('OpenedContainer')
    document.querySelector('.opisanieSvet2').innerHTML = 'Производитель Luminar Тип тарелка обеденная Коллекция Diwali Материал ударопрочное стекло Форма круглая Цвет серый'
   
    svet2.style.width = '14em'
    svet2.style.height = '12em'
}
svet2.addEventListener('mouseout', svetClosedTwo)
function svetClosedTwo(){
    svetContainer2.classList.remove('OpenedContainer')
    document.querySelector('.opisanieSvet2').innerHTML = ''
    svet2.style.width = '10em'
    svet2.style.height = '10em'
}
svet3.addEventListener('mouseover', svetOpenedThree)
function svetOpenedThree(){
    svetContainer3.classList.add('OpenedContainer')
    document.querySelector('.opisanieSvet3').innerHTML = 'Система потолочных спотов City найдет применение для различных решений – организации освещения в зоне отдыха или акцентирующей подсветки .'
   
    svet3.style.width = '14em'
    svet3.style.height = '12em'
}
svet3.addEventListener('mouseout', svetClosedThree)
function svetClosedThree(){
    svetContainer3.classList.remove('OpenedContainer')
    document.querySelector('.opisanieSvet3').innerHTML = ''
    svet3.style.width = '10em'
    svet3.style.height = '10em'
}

svet4.addEventListener('mouseover', svetOpenedFour)
function svetOpenedFour(){
    svetContainer4.classList.add('OpenedContainer')
    document.querySelector('.opisanieSvet4').innerHTML = 'Люстра потолочная Vitaluce Лабиринт предназначена в качестве основного источника света в больших комнатах: гостиной, зале, спальне. '
   
    svet4.style.width = '14em'
    svet4.style.height = '12em'
}
svet4.addEventListener('mouseout', svetClosedFour)
function svetClosedFour(){
    svetContainer4.classList.remove('OpenedContainer')
    document.querySelector('.opisanieSvet4').innerHTML = ''
    svet4.style.width = '10em'
    svet4.style.height = '10em'
}


posuda1.addEventListener('mouseover', posudaOpenedOne)
function posudaOpenedOne(){
    containerOne.classList.add('OpenedContainer')
    document.querySelector('.opisaniePosuda1').innerHTML = 'Производитель Luminar Тип тарелка обеденная Коллекция Diwali Материал ударопрочное стекло Форма круглая Цвет серый'
   
    posuda1.style.width = '14em'
    posuda1.style.height = '12em'
}
posuda1.addEventListener('mouseout', posudaClosedOne)
function posudaClosedOne(){
    containerOne.classList.remove('OpenedContainer')
    document.querySelector('.opisaniePosuda1').innerHTML = ''
    posuda1.style.width = '10em'
    posuda1.style.height = '10em'
}

posuda2.addEventListener('mouseover', posudaOpenedTwo)
function posudaOpenedTwo(){
    containerTwo.classList.add('OpenedContainer')
    document.querySelector('.opisaniePosuda2').innerHTML = 'Коллекция OLHP-95 Производитель Китай Материал стекло Цвет белый Ширина	24 см Высота 2,3 см'
   
    posuda2.style.width = '14em'
    posuda2.style.height = '12em'
}
posuda2.addEventListener('mouseout', posudaClosedTwo)
function posudaClosedTwo(){
    containerTwo.classList.remove('OpenedContainer')
    document.querySelector('.opisaniePosuda2').innerHTML = ''
    posuda2.style.width = '10em'
    posuda2.style.height = '10em'
}


posuda3.addEventListener('mouseover', posudaOpenedThree)
function posudaOpenedThree(){
    containerThree.classList.add('OpenedContainer')
    document.querySelector('.opisaniePosuda3').innerHTML = 'Красивые бокалы – изделия, с помощью которых можно эффектно подчеркнуть аромат и вкус вина, шампанского и других напитков.'
   
    posuda3.style.width = '14em'
    posuda3.style.height = '12em'
}
posuda3.addEventListener('mouseout', posudaClosedThree)
function posudaClosedThree(){
    containerThree.classList.remove('OpenedContainer')
    document.querySelector('.opisaniePosuda3').innerHTML = ''
    posuda3.style.width = '10em'
    posuda3.style.height = '10em'
}

posuda4.addEventListener('mouseover', posudaOpenedFour)
function posudaOpenedFour(){
    containerFour.classList.add('OpenedContainer')
    document.querySelector('.opisaniePosuda4').innerHTML = 'Диаметр верха 17,5 см, 21,5 см Диаметр дна 13 см, 17,8 см Высота 10,3 см, 11,8 см Объём	1,8 л, 3,4 л'
   
    posuda4.style.width = '14em'
    posuda4.style.height = '12em'
}
posuda4.addEventListener('mouseout', posudaClosedFour)
function posudaClosedFour(){
    containerFour.classList.remove('OpenedContainer')
    document.querySelector('.opisaniePosuda4').innerHTML = ''
    posuda4.style.width = '10em'
    posuda4.style.height = '10em'
}