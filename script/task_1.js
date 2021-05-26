

function mainFunction( callback){
    let number = +prompt("Enter number")

   let  pow = +prompt("Enter pow")


    if ( callback){
    callback(number, pow);
    }
    alert( callback(number, pow))
    }



function UserPow(number , pow){
    if (!number || !pow){
        return 'some error'
    }
    return number ** pow
}

mainFunction( UserPow)

