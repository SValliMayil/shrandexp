var plus=document.getElementById("popup");
var popupbox=document.querySelector(".pop");
var overlay=document.querySelector(".over");
plus.addEventListener("click",function(){
    overlay.style.display="block";
    popupbox.style.display="block";
})
var del=document.getElementById("cancel")
del.addEventListener("click",function(event){
    event.preventDefault(event)
    overlay.style.display="none";
    popupbox.style.display="none";
})
var con=document.querySelector(".main");
var book=document.getElementById("add");
var quote=document.getElementById("quot");
var authors=document.getElementById("auth");
book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div");
    div.setAttribute("class","quotes");
    div.innerHTML=` <h2>${quote.value}</h2>
    <h4>${authors.value}</h4>
    <button onclick="deletequotes(event)">DELETE</button>`;
    con.append(div);
    overlay.style.display="none";
    popupbox.style.display="none";
})
function deletequotes(event){
    event.target.parentElement.remove();
}