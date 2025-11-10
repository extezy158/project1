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

let temperature=25;
if(temperature>=25){
    console.log('на улице тепло')
}
let number=5;
if(number<0){
    console.log('отрицательное число')
}

let grade=9;
if(grade>=9){
    console.log('отлично')
}
else if(grade>=7){
    console.log('хорошо')
}
else if(grade>=5){
    console.log('удовлетворительно')
}
else{
    console.log('нужно подтянуться')

}

let tmep=20;
if(grade>=18){
    console.log('тепло')
}
else if(grade>=13){
    console.log('нормально')
}
else if(grade>=5){
    console.log('прохладно')
}
else{
    console.log('холодно')

}

let day=3;

switch(day){
    case 1:
        console.log('понедельник')
        break;
    case 2:
        console.log('вторник')
        break;
    case 3:
        console.log('среда')
        break;
default:
    console.log('другой день')
}

let role=1;
switch(role){
    case 1:
        console.log('администратор')
        break;
    case 2:
        console.log('юзер')
        break;
  case 3:
        console.log('гость')
        break;
default:
    console.log('роль не выбрана')
}
let isOnline=true;
let status=isOnline?'online':'offline';
console.log(status);

let zakazreg=true;
let zakazstatus=zakazreg?'заказ готов':'в сборке';
console.log(zakazstatus);