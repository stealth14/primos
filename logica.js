var serie;
var num;
var line=" ";

//verifica si es primo
function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


//retorna string con secuencia de primos
function generateSequence()
{

    num=document.getElementById("input").value
    
    for (i = 2; i <= num; i++)  
    { 
        var check=isPrime(i);

        if(check==true){line+=" "+i.toString();}
    } 
}

//imprime la secuencia en el display
function showSequence()
{
    generateSequence();
    console.log(line);
    //limpia el display

    //agrega la secuencia
    document.getElementById("display").value=line.toString()
    //reinicia secuencia
    clearLine()
}


function clearLine()
{
    line=" "
}
