

function mainFunction( callback){
    let number = prompt("Enter number")

   let  pow = prompt("Enter pow")

    if ( callback){
    callback(number, pow);
    }
    alert( callback(number, pow))
}



function UserPow(number , pow){
    return number ** pow
}

mainFunction( UserPow)

