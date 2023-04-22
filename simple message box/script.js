const inp=document.getElementById("input");
inp.addEventListener("keydown",function(event){
    if(event.key== "Enter")
      showmsg();
})
function showmsg(){
    document.getElementById("outputbox").innerHTML=inp.value;
    inp.value="";
}
showmsg();