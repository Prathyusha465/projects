const todoItems=document.getElementsByClassName("to-doitems")[0];
const inp=document.getElementById("input");
inp.addEventListener("keydown",function(event){
  if(event.key==="Enter")
   createlist();
})
function createlist(){
  var parentEl=document.createElement("div");
  var childEl=document.createElement("div");
  var checkicon=document.createElement("i");
  var trashicon=document.createElement("i");
  parentEl.className="items";
  parentEl.innerHTML='<div>'+inp.value+'<div>';
  checkicon.className="fa-solid fa-square-check";
  checkicon.style.color="grey";
  var flag=true;
  checkicon.addEventListener("click",function(e){
    if(flag===true)
    checkicon.style.color="limegreen";
    else
    checkicon.style.color="grey";
    flag=!flag;

  })
  childEl.appendChild(checkicon);
  trashicon.className="fa-solid fa-trash";
  trashicon.addEventListener("click",function(){
    parentEl.remove();
  })
  childEl.appendChild(trashicon);
  parentEl.appendChild(childEl);
  todoItems.appendChild(parentEl);
  inp.value=" ";
}