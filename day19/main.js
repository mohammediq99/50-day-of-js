const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')


const days = ["Sunday","Monday","Tuseday","Wednsday","Thursday","Friday","Saterday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

toggleEl.addEventListener('click',(e)=>{
   const html =  document.querySelector('html');
   if(html.classList.contains('dark')){
       html.classList.remove('dark')
       e.target.innerHTML = "Dark mode"
   }else{
       html.classList.add('dark')
       e.target.innerHTML = 'Light mode';
   }
})
function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hourForClock = hours %12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    console.log(hourForClock)
    hourEl.style.transform = `translate(-50%,-100%) rotate(${hourForClock *  30}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${minutes *  6}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${seconds *  6}deg)`
    timeEl.innerHTML = `${hourForClock}:${minutes < 10 ? `0 ${minutes}` : minutes} ${ampm} `
    dateEl.innerHTML = `${days[day]} , ${months[month]} <span class="circle">${date}</span>` 
}



setInterval(setTime ,1000)



