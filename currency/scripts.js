document.addEventListener('DOMContentLoaded',function(){
    const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency'); // Corrected variable name
const resultElement = document.querySelector('.result');

// different countries options
const countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "INR", name: "Indian Rupee" },
    { code: "NP", name: "Nepalese Rupee" },
    { code: "EURO", name: "Euro" },
    { code: "AD", name: "Austrailian" },
    { code: "INR", name: "Indian Rupee" },
];

// showing countries
countries.forEach(country => {
    const option1 = document.createElement('option');
    option1.value = country.code;
    option1.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);

    const option2= document.createElement('option');
    option2.value = country.code;
    option2.textContent = `${country.code} (${country.name})`;
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value="USD";
    toCurrencyElement.value="INR";
});

const getExchangeRate= async ()=>{
    const amount=parseFloat(fromAmountElement.value);
    const fromCurrency=fromCurrencyElement.value;
    const toCurrency=toCurrencyElement.value;


    // fectch data from api
    const response= await fetch(`https://v6.exchangerate-api.com/v6/
    e08d5ee60a0c0769402688d4/latest/${fromCurrency}`)
    const data=await response.json();

    const conversionRate=data.rates[toCurrency];
    const convertedAmount=(amount *conversionRate);
    convertedAmountElement.value=convertedAmount

  

} 
fromAmountElement.addEventListener('input',getExchangeRate);
getExchangeRate();



})