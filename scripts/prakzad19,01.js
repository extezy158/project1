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

    function normalizeLogin(Login){
        const resultLogin=login.toLowerCase().trim();

        return resultLogin;
    }

    const testlogin=" LOGINTEST ";
    const login=" MYLOGIN ";

    let normLogin=normalizeLogin(testLogin);
    let normalizeLoginTest=normalizeLogin(login);

    console.log("Normalize login", normLogin);
    console.log("Normalize second login", normalizeLoginTest);

    const filterLongWords=(words, minLength)=>{
        return words.filter(word=>word.length>minLength)
    }

    let animals=["cat", "parrot", "dog"];
    const min=4;

    filterLongWords(animals,min)
