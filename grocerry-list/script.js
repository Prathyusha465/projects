const pencil=document.getElementById("pencil");
const inp=document.getElementById("input");
const result=document.getElementById("result");
pencil.addEventListener("click",function(){
    result.innerHTML="";
})
inp.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    {
        addItem();
    }
})
function addItem(){
   var h2=document.createElement("h2");
   h2.innerHTML= "- " +inp.value;
   result.insertAdjacentElement("beforeend",h2);
   inp.value="";
}