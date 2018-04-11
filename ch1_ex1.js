const TAX_RATE = 0.1;
const PHONE_PRICE = 199;
const ACCESSORY_PRICE = 19.99;
const SPENDING_THRESHOLD = 500;
var bankBal = 1000;
var amount = 0;


function taxCalc(amount) {
    //calculate tax

    amount = amount * TAX_RATE;
    return amount;
}

function priceFormat (amount) {
    //format the price

    return amount = "$" + amount.toFixed(2);
    
}

    //do some purchasing
    
    while (amount < bankBal){
        //buy a phone
        amount = amount + PHONE_PRICE;
        console.log(amount);

        //if we have money, buy accessory
        if (amount < SPENDING_THRESHOLD){
            amount = amount + ACCESSORY_PRICE;
        }

    }
    
purchase(bankBal);

console.log(bank);
console.log(bankBal);

