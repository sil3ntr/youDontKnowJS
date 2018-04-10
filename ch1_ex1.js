const TAX_RATE = 0.1;
const PHONE_PRICE = 199;
const ACCESSORY_PRICE = 19.99;
const SPENDING_THRESHOLD = 500;
var bankBal = 1000;

function purchase (bankBal){
    //do some purchasing
    bank = bankBal;
    while (bank > 0 ){
        bank = bank - PHONE_PRICE;
        return bank;
        console.log(bank);
    }
    

}

function priceFormat () {

}

purchase(bankBal);

console.log(bank);
console.log(bankBal);

