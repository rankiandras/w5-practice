/*
console.log(a)
console.log(c)
*/

// csak az a string, ami idezojelekben van
// console.log('Hello!')
// console.log("Hello!")
// console.log(`Hello!`) 

// backtick tobbsoros, lehet sort torni a backtick-kek kozott

// muveletek vegezhetok vele, nem kell idezojel
// NaN
// console.log(typeof NaN)

// console.log(typeof 2)  

// // nulla osztva nullaval az NaN
// console.log(0/0)

// console.log(2.14)

// boolean
// console.log(true)
// console.log(false)

// null es undefined kulonbsege: undefined azt jelenti, nem tortent ertekadas (fuggvenyek alapbol undefinedot returnolnek), a nullnak es az undefinednek a tipusa mas. Undefined tipusa undefined, null pedig object, object helyettesito cucc - utana kell nezni, null object helyett, de objectkent elkonyvelt valami
// console.log(undefined)
// console.log(null)

// console.log(typeof undefined)
// console.log(typeof null)

/*
console.log({
    "title": "Start Coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "tasks": [
        {
            "title": "Bank accounts",
            "description": ""

        },
        {
            "title": "100 doors",
            "description": ""
        },
        {
            "title": "Word filter",
            "description": ""
        }
    ]

    
})
*/



/* hoisting - var cuccokat a nulladik sorba rendezi, undefined-ként inicializálja. Hoistinggal kapcsolatban important notes-ba linket küldött Richard */ 



/*
var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c)
*/

/* KAPCSOs zárójelen kívüli dolgokat nem lát a függvény */




//  function d() {
//     if(1+1 === 2){
//     }
//     /* var */ a = "Hello1"
//     /* let */ b = "Hello2"
//     /* const */ c = "Hello3"
// };



// d()

// console.log(a)
// console.log(b)
// console.log(c)


// scope-ok: global scope, function scope, block scope, scopes-nak is utánanézni. Important notesba küldött Richard linket. VAR fölrendeződik a function 0.dik sorába. 



/*FÜGGVÉNYEK ahol meghívjuk a függvényt, ott fog megszületni a helyén valami, ez lehet primitív, vagy öszetett adatstruktúra. Ezt az eredményt felhasználhatjuk. A függvény neve és sima zárójele közé nem teszünk szóközt!!!*/

/*
let e = 1
console.log(e)
e = 2
console.log(e)

e = e*2
console.log(e)
*/


/*paraméterek. A paramétereknek mindig function scopeja van! Return visszatér, illetve eltöri, breakeli a kódot */

/*
function multiplyByTwo(num){
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)
console.log(f)
console.log(multiplyByTwo(1));
console.log(num);
*/

/*METÓDUSOK. Vannak az objektumok, ezeken belül el lehet menteni kulcs-érték párokat. Ezekben értékként primitívet, objektumot, el tudok tárolni. Függvényt is el lehet menteni objektumba. */ 

// let g = {
//     myMethod: function (){
//         console.log("Hello");
//     }   
// }

// g.myMethod()

// a Window=s rész nem működő jkód!!4
/*
let window = {
    addEventListener: function (eventName, eventFunction){
        if ( eventName === "load") {
            eventFunction()
        }

    }
}

window.addEventListener("load", loadEvent)
*/


/* 
let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod('another argument'));

 */





// objektum: kapcsos zárójelben van, kulcs-érték párokból áll. Kulcs a kettőspont bal oldalán, érték a kettőspont jobb oldalán. Metódus abban tér el a függvénytől, hogy egy objektumba van elmentve, kulcs - aminek értéke egy függvény. Kulcsra mentett függvény a metódus

// változó értékét át tudjuk adni másik változónak



/* 
let myString = "Mikkamakka";

let mySecondString = myString;

let myThirdString = "Mikkamakka";

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString); */

/*  
let myObject = {
    myString: `Mikkamakka`
};

let mySecondObject = myObject; // azért azonos, mert nem hoztam létre új objektumot. Olyan, mint egy azonos dolognak a két neve. Egy entitás, két név.

let myThirdObject = {
    myString: `Mikkamakka`
};


mySecondObject.myString = `Dömdödöm`; //megváltoztatta a myObject myString értékét

let myFourthObject = {...myObject};  // myFourthObject néven létrehozunk egy új objektumot, amelynek a tartalma megegyezik a myObject tartlmával.

myFourthObject.myString = `Vacskamati`;

console.log(myObject.myString);
console.log(myFourthObject.myString);
 */


/* 
console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject);    // nem azonosak!, nem igaz az összehasonlítás
 */

/* 
console.log(`` === ``);  // true,
console.log({} === {});  // false , amint létrehozunk egy objektumot, egy új objektumot hozunk létre. Hiába ugyanaz a kulcs meg az érték, ezek különálló dolgok,  */

/* 
window.addEventListener(`load`, function (){
    console.log(`page is loaded1`); //anonim function. így is meg lehet adni. Window nagy objektum (global object, minden ebben fut, minden ebben történik), eseményfigyelő: addEventListener
})
 */

function loadEvent() {
    console.log(`page is loaded2`);
    let rootElement = document.getElementById("root")
    
/*     let card = function (movieReceived) {
        return `
        <div class="card">
            <h4>${movieReceived.title}</h4>
            <div class="time">${movieReceived.year}</div>
            <div class="rate">${movieReceived.rate}</div>
        </div>
        `;
    };
 */  let card2 = function (title, year, rate) {
        return `
        <div class="card">
            <h4>${title}</h4>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    };

    let anotherFavoriteMovie = {
        'title': 'ASDF',
        'year': 1,
        'rate': 5,
    }
    rootElement.insertAdjacentHTML(`beforeend`, card2(anotherFavoriteMovie.title, anotherFavoriteMovie.year, anotherFavoriteMovie.rate));

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML(`beforeend`, card2(movieSend.title, movieSend.year, movieSend.rate));
    }

/*     rootElement.insertAdjacentHTML(`beforeend`, card({
        'title': 'moulin rouge',
        'year': 2000,
        'rate': 9.9,
    }));

    let actuallyFavouriteMovie = {
        'title': 'Eternal sunshine of a spotless mind',
        'year': 2004,
        'rate': 9.8,
    };

    rootElement.insertAdjacentHTML(`beforeend`, card(actuallyFavouriteMovie));
    
    
    rootElement.insertAdjacentHTML(`beforeend`, card(movies[0]));
 */    
/*  
    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML(`beforeend`, card(movieSend));
    }
*/

/* 
    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML(`beforeend`, card2(movieSend));
    }
 */    
};

window.addEventListener(`load`, loadEvent);

