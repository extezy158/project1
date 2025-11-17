const scrollbutton= document.querySelector(".scroll-top");
scrollbutton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    
})
let message;
message = 'hello';
console.log(message);
 let favorite_food='pizza'
 console.log(`my favorite food is ${favorite_food}`)
 let age=20;
 age=21;
 console.log(`my age is ${age}`)
 const pi='3.14';
  console.log(`the value of pi is ${pi}`)
let n=123;
n=12.345;
let isSunny=true;
let isRaining=false;
if(isSunny){
    console.log('можно идти гулять')
}
if(isRaining){
    console.log('нельзя идти гулять')
}
let box=null;
let anthBox=undefined;
console.log(box, anthBox);
let item={
    tittle:"Книга",
    pages: 200,
    available: true
};
console.log(item.tittle);
let colors=['red', 'green', 'blue'];
console.log(colors[0]);

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
for(let i=5;i<16;i++){
    console.log(i)
}

let ii=1;
while(ii<=3){
    console.log('шаг'+ii)
    ii++
}
let cikl=10;
while(cikl>0){
    console.log(cikl)
    cikl--
}

/*let password=1234;
do{
    password=prompt('введите пароль')
} while(password!=1234);
alert('пароль принят')

let chislo=5;
do{
    chislo=prompt('введите цифру')
}while(chislo!='5');
*/
let fruits=['яблоко','груша','апельсин'];
for(let fruit of fruits){ 
    console.log(fruit)
}

for (let letter of 'привет'){
    console.log(letter)
}

let animals=['жираф','обезьяна','кот', 'собака'];
for(let animal of animals){ 
    console.log(animal)
}

let person={name:"Anna", age:15, city:'Minsk'};

for(let key in person){
    console.log(key +": "+person[key])
}

let aboutme={name:"Vlad", age:15, city:'Minsk'};

for(let me in aboutme){
    console.log(me +": "+aboutme[me])
}

for(let i=1;i<=5;i++){
    if(i==3) continue;
    console.log(i)
}
console.log("next")
for(let i=1;i<=10;i++){
    if(i%2===0) continue;
    
    console.log(i)
}
console.log("next")
let ik=0;

for(i=1;i<=5;i++){
ik=ik+i; 

}console.log(ik)

console.log("next")

let umn=3;
for(i=1;i<=10;i++){
    console.log(umn,"*",i)
}
console.log("next")

let fruitWord="Ананас";
let fruitWordCount=0;

for(let letter of fruitWord.toLowerCase()){
    if(letter==="а") fruitWordCount++;
}
console.log("Букв в слове $[fruitWord] - $[fruitWordCount]");


const generateSumFinder=()=>{
const sum=(a,b)=>a=b;
return sum;
    };
const sum=generateSumFinder();
const square=x=>x*x;
console.log(square(5));

const obj={
name:"test",
show() {
    console.log(this.name)
}
};

obj.show();

let name="Nikolay";

function sayHi(){
    alert('Hi'+name);
}
name="Irina";

sayHi();

function makeCounter(){
    let count=0;
    return function(){
        count++;
        console.log(count)
    };
}
let  counter=makeCounter();
counter();
counter();

console.log('next')

function makeWorker() {
let name='Nikolay';

return function() {
    alert(name);
};
}
function sum1(a,b,c){
    console.log(a+b+c)
 }
 sum1(7,213,312)

 const generateUmnFinder=()=>{
    const Umn=(a,b,c)=>a*b*c;
    return Umn;
        };
    const Umn=generateUmnFinder();