/*console.log('1.');
let a=10;
let b=5;
let c=a+b;
console.log(c);

console.log('2.');
let name='JS';
console.log('I love '+name);

console.log('3.');
let price=100;
let discount=20;
let itogcena=price-discount;
console.log(itogcena);

console.log('4.');
let isOnline=true;
let status=isOnline?'online':'offline';
console.log(status);

console.log('5.');
let n=2;
let nn=n*n;
console.log(nn);

console.log('6.');
let message=null;

console.log('7.');
let m1=[1,2,3];
console.log(m1.length);

console.log('8.');
let m2=['a','b','c'];
console.log(m2[0]);

console.log('9.');
let m3=[1,2,3];
m3.push(10);
console.log(m3);

console.log('10.');
let m4=[1,2,3];
m4.pop(3);

console.log(m4);
console.log('11.');
let m5=[1,2,3];
m5.forEach(element => console.log(element));

console.log('12.');
let m6=[1,2,3];
let m6summ=m6.reduce((a,b)=>a+b);

console.log('13.');

console.log('14.');

console.log('15.');
let m9=[1,2,3];
m9.forEach(element => console.log(element*2));

console.log('16.');

setTimeout(function(){
    console.log('hello');
},2000);


setTimeout(function(){
    console.log('Loading...');
},3000);


const name1="Alex";

setTimeout(() => {
    console.log("Привет, " + name1);
}, 1000);

function sayHello() {
    console.log("Hello!");
}

setTimeout(sayHello, 1500);

let timerId=setTimeout(() => console.log("ничего не происходит"), 1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);

setInterval(() => console.log("Прошла одна секунда"), 1000);

setInterval(() => console.log("Тик"), 3000);


const btn=document.querySelector('button');
btn.addEventListener('click', () => {
    setTimeout(() => {
        alert("Готово!");
    }, 2000);
});*/

let i=5;

const intervalID=setInterval(() => {
    console.log(i);
    if(i===1){
        clearInterval(intervalID);
        console.log("конец");
    }
    i--;
    console.log
}, 1000,)
;   