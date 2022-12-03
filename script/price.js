let sum=0,chet=0;
const btn = document.querySelector('.btn-1')
btn.addEventListener('click',calculate )
function calculate(){
    for (i=1;i<29;i++){
      
        sum+=Number(document.querySelector(".number_"+i).value)*Number(document.getElementById("price_"+i).innerHTML);
    
    }
    document.querySelector('.priceCount').value = sum
    sum = 0;

}