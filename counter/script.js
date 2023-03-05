 const incEl=document.getElementById("inc");
 const decEl=document.getElementById("dec");
var count=0;
function valchange(num)
{
     count+=num;
     document.getElementById("count").innerText=count;
}
