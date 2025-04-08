document.querySelector("#calculate").onclick = () => {
    let x = document.querySelector("#input-x").value;
    let y = document.querySelector("#input-y").value;

    let op = document.querySelector("#operation").value;

    let total = document.querySelector("#total");

    x = parseInt(x);
    y = parseInt(y);

    if(isNaN(x) || isNaN(y)) {
        alert("Field Should not be empty");
    } else {
        switch(op) {
            case '+':
    
                let sum = x + y;
    
                total.innerHTML = `Results: ${sum}`;
                break;
    
            case '-':
                let diff = x - y;
    
                total.innerHTML = `Results: ${diff}`;
                break;
    
            case '*':
                let prod = x * y;
    
                total.innerHTML = `Results: ${prod}`;
                break;
            
            case '/':
                let quo = x / y;
                if(x === 0 || y === 0) {
                    alert("cannot divide by 0");
                } else {
                    total.innerHTML = `Results: ${quo}`;
                }
                break;
        }
    }
    

}
