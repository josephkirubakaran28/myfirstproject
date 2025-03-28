/* Currency declaration*/
var dCurrencyVlaue = 124556.34;
var cashinCurrency = 14556.34;
var cashoutCurrency = 14556.34;
var unreceiveCurrency = 14556.34;
var unpaidCurrency = 14556.34;
        document.getElementById('cur-rupee').innerHTML = dCurrencyVlaue.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
        });
        document.getElementById('cashin-currency').innerHTML = cashinCurrency.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR'
            });
        document.getElementById('cashout-currency').innerHTML = cashoutCurrency.toLocaleString('en-IN', {
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'INR'
                });
        document.getElementById('unreceive-currency').innerHTML = unreceiveCurrency.toLocaleString('en-IN', {
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: 'INR'
                    }); 
                    document.getElementById('unpaid-currency').innerHTML = unpaidCurrency.toLocaleString('en-IN', {
                        maximumFractionDigits: 2,
                        style: 'currency',
                        currency: 'INR'
                        });