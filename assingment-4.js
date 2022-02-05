// problem - 1 : ana to bori
function anaToVori (ana){ 
    if(ana <= 0 ){
        var massage = "you don't have proper ana"
        return massage;
    }
    
    let vori = ana / 16;
    return vori;
}


// problem -2 : pandaCost

function pandaCost ( isSingara , isSomuca , isJilabi){
    const singara = 7;
    const somuca = 10;
    const jilabi = 15;

    if (isSingara < 0 || isSomuca < 0 || isJilabi < 0 ) {
        var massage = "please choose the value of your item greater than 0"
        return massage;
    }

    let totalSingara = isSingara * singara;
    let totalSomuca = isSomuca * somuca;
    let totalJilabi = isJilabi * jilabi;

    let total = totalSingara + totalSomuca + totalJilabi;
    return total;

}


// problem - 3 : picnicBudget

function picnicBudget (members){
   let budget = 0;
   if (members <= 0) {
       var massage = "No members included so the picnic budget is 0"
       return massage;
   }

    else if(members <= 100){
    budget = members * 5000;
    return budget;
    }
    else if(members <= 200){
        let firstMembers = members -  100  ;
        let firstBudget = 100 * 5000;
        let secondBudget = firstMembers * 4000;
        budget = firstBudget + secondBudget;
        return budget;
    }
    else {
        let firstMembers = members - 200  ;
        let firstBudget = 100 * 5000;
        let secondBudget = 100 * 4000;
        let thirdBudget = firstMembers * 3000;
        budget = firstBudget + secondBudget + thirdBudget;
        return budget;
    }
}

// problem - 4 : oddFriend

function oddFriend(names) {
    var isOdd =[];
    if (names <= 0 || names > 0 ){
       var massage =  "Numbers not allowed"
       return massage;
    }

    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if(element.length % 2 != 0){
            isOdd.push(element);
            return isOdd;
        }
        else{
            var massage = "No odd Names found"
            return massage;
        }
    }
}






