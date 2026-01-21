let value=42;
console.log(typeof value);

let x =10;
let y=20;
let xy=x+y;
xy=xy/2;
console.log(xy);

let text="JavaScript";

console.log(text.length);

let massiv=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(massiv);

function calcDiscounter() {
    return function (a, b) {
        return a - b;
    }
}


const generateUmnFinder=()=>{
    const Umn=(a,b,c)=>a*b*c;
    return Umn;
        };
    const Umn=generateUmnFinder();

    /*function normalizeLogin(Login){
        const resultLogin=login.toLowerCase().trim();

        return resultLogin;
    }

    const testlogin=" LOGINTEST ";
    const login=" MYLOGIN ";

    let normLogin=normalizeLogin(testLogin);
    let normalizeLoginTest=normalizeLogin(login);

    console.log("Normalize login", normLogin);
    console.log("Normalize second login", normalizeLoginTest);
*/
    const filterLongWords=(words, minLength)=>{
        return words.filter(word=>word.length>minLength)
    }

    let animals=["cat", "parrot", "dog"];
    const min=4;
    filterLongWords(animals,min)





    
    
const filterNumbers=(numbers)=>{
    return numbers.filter(number=>typeof number === 'number');
}
let numbers=[1,2,3,4,5,6,7,8,9,10, null, undefined, "1", '2'];
 
 console.log(filterNumbers(numbers));


 const UmnCalc=()=>{
    const Umn=(a,b,c)=>{
    switch(c)
    {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
           
            if(b=0)
            {
                return "Ошибка: деление на 0";
            }
            return a/b;
    };
}
    return Umn;
        };

        const users=[
            {name: "John", age: 30},
            {name: "Alice", age: 25},
            {name: "Bob", age: 35},
            {name: "Eve", age: 28}
        ];
        const formatter=(user)=>{
            return `${user.name} (${user.age})`;
        };
        const formattedUsers=users.map(formatter);
        console.log(formattedUsers);

        function formatName(name) {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
          }

          nameee="vLad";
          console.log(formatName(nameee));

          function isEmail(email) {
            return email.includes("@");
          }

          email="vLad@.com";
          console.log(isEmail(email));

          function createWallet() {
            let balance = 0;
          
            return function(amount) {
              if (typeof amount === 'number') {
                if (amount < 0) {
                  return balance;
                } else {
                  balance += amount;
                  return balance;
                }
              } else {
                return balance;
              }
            };
          }
          
          const myWallet = createWallet();
          console.log(myWallet(100));
          console.log(myWallet(50));
          console.log(myWallet(-20));
          console.log(myWallet()); 