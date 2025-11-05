const scrollbutton= document.querySelector(".scroll-top");
scrollbutton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    
})
let message;
message = 'hello';
alert(message);
 let favorite_food='pizza'
 alert(`my favorite food is ${favorite_food}`)
 let age=20;
 age=21;
 alert(`my age is ${age}`)
 const pi='3.14';
  alert(`the value of pi is ${pi}`)
let n=123;
n=12.345;
let isSunny=true;
let isRaining=false;
if(isSunny){
    alert('можно идти гулять')
}
if(isRaining){
    alert('нельзя идти гулять')
}
let box=null;
let anthBox=undefined;
alert(box, anthBox);
let item={
    tittle:"Книга",
    pages: 200,
    available: true
};
alert(item.tittle);
let colors=['red', 'green', 'blue'];
alert(colors[0]);
let text='hello';
alert()