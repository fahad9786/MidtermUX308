// input snowfall in centimeters
export function snowRemoval(cm) {
    // processing (figure it out)
    let equipment = "";
    if(cm <= 1){
        equipment = "broom";
    }else if(cm <= 8){
        equipment = "shovel";
    
    }else if(cm <= 30){
        equipment = "electric snowblower";
    }else{
        equipment = "gas snowblower";
    }
    // output
    return equipment;
}

// developer test
if (import.meta.main) {
    console.log(`snowRemoval(3) = ${snowRemoval(3)}`);
}