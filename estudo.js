let tabuada = 5;

function escreva(){
    document.write("Tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");   
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}

let lista = ["Jesus","Spessato","Jorge","Raquel"]

function mostra(){
    document.write(lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
        document.write(lista[i] + "<br>");
    }  
}

function mostratabuada(){
    for(let i = 1; i <= 10; i++){
        document.write("O valor do i " + i + "<br>");
    }
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if (!Number(v)){
        alert("O campo valor deve ser números")
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if (!Number(j)){
        alert("O campo juros deve ser números")
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if (!Number(t)){
    alert("O campo meses deve ser números")
    document.getElementById("meses").value = "";
    document.getElementById("meses").focus();
    return
}
    let r = 0;
    for(let i =1; i <=t; i++){
        r = v * (1 + (j/100));
        document.write("Mẽs " + i + " - valor: " + r + "<br>");
        v = r;
    }
    document.write("Resultado: " + r);
}