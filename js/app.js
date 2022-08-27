let newGenValCta = document.querySelector(".newGenCta")

newGenValCta.addEventListener("click",function(e){
    e.preventDefault();
    ////////////////////// 
    let inputcountRange = document.querySelector(".countRange").value
    let upperCaseVal = document.querySelector(".upperCaseVal").checked
    let lowerCaseVal = document.querySelector(".lowerCaseVal").checked
    let specialChrVal = document.querySelector(".specialChrVal").checked
    let numberVal = document.querySelector(".numberVal").checked
    // let copyTextCta = document.querySelector(".copyTextCta")

    var demoary = [];

    // Validate Uppercase Text Condition
    if(upperCaseVal === true){
        for(i=65; i<=90; i++){
            demoary.push(String.fromCharCode(i))
        }
    }

    // Validate lowerCaseVal Text Condition
     if(lowerCaseVal === true){
        for(i=97; i<= 122; i++){
            demoary.push(String.fromCharCode(i))
        }
    }


    // Validate specialChrVal Condition
     if(specialChrVal === true){
        for(i=33; i<=47; i++){
            demoary.push(String.fromCharCode(i))
        }
        for(i=58; i<=63; i++){
            demoary.push(String.fromCharCode(i))
        }
        for(i=123; i<=127; i++){
            demoary.push(String.fromCharCode(i))
        }
    }


     if(numberVal === true){
        for(i=48; i<=57; i++){
            demoary.push(String.fromCharCode(i))
        }
    }


})
