// Computation, validation, alert, date persing function

function compute()
{
    var principal = document.getElementById("principal").value; // holds input element "principal"
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;   // interest holds the interest formula

// This alerts a user to focus on inserting +ve number in the amount box. 
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
// The logic to convert the 'No of Years' into the actual year in the future
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

// 'resultDesplay' variable holds & displays the highlighed result values.    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}


// Slider read, display, & update function 

function updateRate()
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value + '%'; // holds & displays the default slider rate value

    rateval.oninput = function() 
    {
        output.innerHTML = this.value;  // Reads the update value of the slider and displays it along with the slider
    }  
}