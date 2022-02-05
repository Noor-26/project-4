// problem - 1 : ana to bori
function anaToVori (ana){ 
    let vori = ana / 16;
    return vori;
}

// problem -2 : pandaCost
function pandaCost ( isSingara , isSomuca , isJilabi){
    const singara = 7;
    const somuca = 10;
    const jilabi = 15;
    
    let totalSingara = isSingara * singara;
    let totalSomuca = isSomuca * somuca;
    let totalJilabi = isJilabi * jilabi;

    let total = totalSingara + totalSomuca + totalJilabi;
    return total;

}

// problem - 3 : picnicBudget

function picnicBudget (members){
   let budget = 0;
    if(members <= 100){
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
const output = picnicBudget(120);
console.log(output);