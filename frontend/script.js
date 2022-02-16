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


function d() {
    if(1+1 === 2){
    }
    /* var */ a = "Hello1"
    /* let */ b = "Hello2"
    /* const */ c = "Hello3"
}


d()

console.log(a)
console.log(b)
console.log(c)

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



let h = {
    anotherMethod: function(text){
        return `You sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod('another argument'));