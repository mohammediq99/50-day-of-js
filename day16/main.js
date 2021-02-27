 const smallCups = document.querySelectorAll('.cup-small');
 const liters = document.getElementById('liters');
 const precentage = document.getElementById('precentage');
 const remained = document.getElementById('remained');

 smallCups.forEach((cup ,index) =>{
     cup.addEventListener('click', ()=> hilghlightCups(index))
 })

 function hilghlightCups(index) {
     if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')  ){
         index--;
     }
     smallCups.forEach((cup , idx ) => {
         if(idx <= index) {
             cup.classList.add('full')
         }else{
            cup.classList.remove('full')
          }
     })
     updateBigCup()
 }

function updateBigCup() {
    const fulCups =  document.querySelectorAll('.cup-small.full').length;
    const totallength =  smallCups.length
    if (fulCups === 0 ){
        precentage.style.visibility = 'hidden';
        precentage.style.height = 0;

    }else{
        precentage.style.visibility = 'visible';
        precentage.style.height = `${fulCups / totallength * 230} px`;
        precentage.innerText =`${fulCups / totallength * 100} %`
    }
    if(fulCups === totallength){
        remained.style.visibility = 'hidden'
        remained.style.height = 0;
    }else{
         remained.style.visibility = 'visible'
        liters.innerText = `${250 * (8- fulCups) / 1000} L`
    }
}
