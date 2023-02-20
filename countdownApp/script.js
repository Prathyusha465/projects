const endDate="23 March 2023 10:00 PM"
document.getElementById("end-date").innerText=endDate;
let dayEl=document.getElementById("daytag");
let hourEl=document.getElementById("hourtag");
let minEl=document.getElementById("mintag");
let secEl=document.getElementById("sectag");

function clock() {
    const end= new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    dayEl.value=Math.floor(diff/3600/24);
    hourEl.value=Math.floor(diff/3600%24);
    minEl.value=Math.floor(diff/60%60);
    secEl.value=Math.floor(diff%60);

}
clock();

setInterval(
    ()=> {
        clock()
    },
    1000
)