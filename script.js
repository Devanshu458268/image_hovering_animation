// var img=document.querySelector("#elem1 img");
// var body=document.querySelector("#elem1");


// body.addEventListener("mousemove", function(data){
//     img.style.left=data.x+"px";
//     img.style.top=data.y+"px";

// })


// body.addEventListener("mouseenter", function(data){
//     img.style.opacity=1;

// })
// body.addEventListener("mouseleave", function(data){
//     img.style.opacity=0;

// })


var elem =document.querySelectorAll(".elem")

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(data){
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",function(data){
        val.childNodes[3].style.opacity=0
    })
    val.addEventListener("mousemove",function(data){
        val.childNodes[3].style.left=data.x+"px";
    })
    
})