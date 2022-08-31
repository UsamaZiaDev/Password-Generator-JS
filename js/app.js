const upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numberSet = [0,1,2,3,4,5,6,7,8,9]
const specialChrSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

////////////////////// 
let newGenValCta = document.querySelector(".newGenCta")
var inputcountRange, upperCaseVal, lowerCaseVal, specialChrVal, numberVal, showRandonTextVal;

// let resultPassword = "";
let char = 0;

newGenValCta.addEventListener("click",function(){

    inputcountRange = document.querySelector(".countRange").value
    upperCaseVal = document.querySelector(".upperCaseVal").checked
    lowerCaseVal = document.querySelector(".lowerCaseVal").checked
    specialChrVal = document.querySelector(".specialChrVal").checked
    numberVal = document.querySelector(".numberVal").checked
    showRandonTextVal = document.querySelector(".randonTextVal")

    if(inputcountRange<4){
        alert("min val 4")
    }else if(inputcountRange>15){
        alert("max val 15")
    }else{
        genratePass()
    }
    
})


function genratePass(){
    let resultPassword = "";

    for(i=0; i<inputcountRange; i++){

        if(char !== inputcountRange){
    
            if(lowerCaseVal){
                resultPassword += lowerSet[Math.floor(Math.random()* 25)]
            }
            if(upperCaseVal){
                resultPassword += upperSet[Math.floor(Math.random()* 25)]
            }
            if(specialChrVal){
                resultPassword += specialChrSet[Math.floor(Math.random()* 21)]
            }
            if(numberVal){
                resultPassword += numberSet[Math.floor(Math.random()* 10)]
            }
            char = char + 1;
        }
        resultPassword = resultPassword.slice(0, inputcountRange)
        showRandonTextVal.innerHTML = resultPassword
    }
}