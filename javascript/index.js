function guessing(){
    let a = Math.floor(Math.random() * (10 - 1)+1);
    let b = document.getElementById("guessNumber").value;

    if(a == b){
        document.getElementById("btn1").innerText="you win";
    }else{
        document.getElementById("btn1").innerText="fail";
    }
    
}

function fail(){
    let z = `<div style="border:1px solid black; width:100px height:100px;">

    <p> fail</p>
    
    
    
    </div> `
}

