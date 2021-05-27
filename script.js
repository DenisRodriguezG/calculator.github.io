"uso strict";

//we call id display
let display = document.getElementById('display');

let numbers = '';
let result = 0;
let aux = 0;
let tmp = 0;
let division = false;
let multi = false;
let suma = false;
let rest = false;
let PI = false;
let porcentN = false;

function numbersEnter(number)
{
    numbers += number;
    display.value = numbers;
    console.log(numbers);
    
}
function pi()
{
    console.log(result);
    if(division)
    {
        tmp = result / Math.PI;
        console.log(tmp);
        display.value = tmp;
        PI = true;
        division = false;
    }
    else if(multi)
    {
        tmp = result * Math.PI;
        console.log(tmp);
        display.value = tmp;
        PI = true;
        multi = false;    
    }
    else if(suma)
    {
        tmp = result + Math.PI;
        console.log(tmp);
        display.value = tmp;
        PI = true;
        suma = false;
    }
    else if(rest)
    {
        tmp = result - Math.PI;
        console.log(tmp);
        display.value = tmp;
        PI = true;
        rest = false;
    }
    
}
function porcent()
{
    if(multi)
    {
        result = result * (parseFloat(numbers)/100);
        display.value = result;
        porcentN = true;
    }
    else if(division)
    {
        result = result / (parseFloat(numbers)/100);
        display.value = result;
        porcentN = true;
    }
    else if(suma)
    {
        result = result + (parseFloat(numbers)/100);
        display.value = result;
        porcentN = true;
    }
    else
    {
        result = result - (parseFloat(numbers)/100);
        display.value = result;
        porcentN = true;
    }
    multi = false;
    division = false;
    suma = false;
    rest = false;
    numbers = '';
}
function restore()
{
    aux=0;
    numbers = '';
    result = 0;
    division = false;
    multi = false;
    suma = false;
    rest = false;
    PI = false;
    porcentN = false;
    tmp = 0;
    display.value = 0;
}
function divisionNumbers()
{
    console.log(result);
    if(division === true)
    {
        result = result / parseFloat(numbers);
        display.value = result;
    }
    else if(multi)
    {
        result = result * parseFloat(numbers);
        display.value = result;
    }
    else if(suma)
    {
        result = result + parseFloat(numbers);
        display.value = result;
    }
    else if(rest)
    {
        result = result - parseFloat(numbers);
        display.value = result;     
    }
    else
    {
        if(aux === 0)
        {
            if(PI)
            {
                result = tmp;
                tmp = 0;
                PI = false;
            }
            else
            {
                if(porcentN)
                {
                    console.log('R--->' + result);
                    porcentN = false;
                }
                else
                {
                    result = parseFloat(numbers);
                }
            }
        }
        else
        {
            result = aux;
            aux = 0;
        }
        
    }
    division = true;
    multi = false;
    suma = false;
    rest = false;
    numbers = '';
}
function multiNumbers()
{
    if(division)
    {
        result = result / parseFloat(numbers);
        display.value = result;
    }
    else if(multi)
    {
        result = result * parseFloat(numbers);
        display.value = result;
    }
    else if(suma)
    {
        result = result + parseFloat(numbers);
        display.value = result;
    }
    else if(rest)
    {
        result = result - parseFloat(numbers);
        display.value = result;
    }
    else
    {

        if(aux === 0)
        {
            if(PI)
            {
                result = tmp;
                tmp = 0;
                PI = false;
            }
            else
            {
                if(porcentN)
                {
                    console.log('R--->' + result);
                    porcentN = false;
                }
                else
                {
                    result = parseFloat(numbers);
                }
            }
        }
        else
        {
            result = aux;
            aux = 0;
        }
    }

    multi = true;
    division = false;
    suma = false;
    rest = false;
    numbers = '';
}
function sumaNumbers()
{
    if(division)
    {
        result = result / parseFloat(numbers);
        display.value = result;
    }
    else if(multi)
    {
        result = result * parseFloat(numbers);
        display.value = result;
    }
    else if(suma)
    {
        result = result + parseFloat(numbers);
        display.value = result;
    }
    else if(rest)
    {
        result = result - parseFloat(numbers);
        display.value = result;
    }
    else
    {
        if(aux === 0)
        {
            if(PI)
            {
                result = tmp;
                tmp = 0;
                PI = false;
            }
            else
            {
                if(porcentN)
                {
                    console.log('R--->' + result);
                    porcentN = false;
                }
                else
                {
                    result = parseFloat(numbers);
                }
            }
        }
        else
        {
            result = aux;
            aux = 0;
        }
    }

    division = false;
    multi = false;
    suma = true;
    rest = false;
    numbers = '';
}
function restNumber()
{
    if(division)
    {
        result = result / parseFloat(numbers);
        display.value = result;
    }
    else if(multi)
    {
        result = result * parseFloat(numbers);
        display.value = result;
    }
    else if(suma)
    {
        result = result + parseFloat(numbers);
        display.value = result;
    }
    else if(rest)
    {
        result = result - parseFloat(numbers);
        display.value = result;
    }
    else
    {
        if(aux === 0)
        {
            if(PI)
            {
                result = tmp;
                tmp = 0;
                PI = false;
            }
            else
            {
                if(porcentN)
                {
                    console.log('R--->' + result);
                    porcentN = false;
                }
                else
                {
                    result = parseFloat(numbers);
                }
            }
        }
        else
        {
            result = aux;
            aux = 0;
        }
    }
    division = false;
    multi = false;
    suma = false;
    rest = true;
    numbers = '';
}
function resultNumbers()
{
    if(division)
    {
        aux = result / parseFloat(numbers);
        display.value = aux;
        console.log("d" + aux);
        division = false;
    }
    else if(multi)
    {
        aux = result * parseFloat(numbers);
        display.value = aux;
        console.log("m" + aux)
        multi = false;
    }
    else if(suma)
    {
        aux = result + parseFloat(numbers);
        display.value = aux;
        suma = false;
    }
    else if(rest)
    {
        aux = result - parseFloat(numbers);
        display.value = aux;
        rest = false;
    }
    
}
