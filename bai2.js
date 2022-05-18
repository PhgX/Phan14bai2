function result(){
    let Fahr = +document.getElementById("Fahrenheit").value;   
    document.getElementById("result").innerHTML = convert_Fahr_to_Cels(Fahr);
}

function convert_Fahr_to_Cels(degree){
    let a = degree - 32;    
    let Cels = a/1.8;    
    return Cels;
}

