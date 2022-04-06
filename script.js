function compute()
{
    //fetching values from the form and storing in variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // display an alert msg if the entered value in 'amount' is less than equal to zero
    //setting control back to amount field once user click on 'ok'
    if(principal <= 0)
    {
        alert("Please enter positive number");
        principal.focus();
        
    }

    //calculating interest
    var interest = principal * years * rate / 100;

    
    var year = new Date().getFullYear()+parseInt(years);

    //displaying result of the values entered by user
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",<br/> at an interest rate of " + rate +"%. <br/> You will receive an amount of " + principal + ", <br/> in the year " + year + "<br/>"


    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        