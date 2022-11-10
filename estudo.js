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
let lista = ["Jorge", "Duarte", "Waldete", "Raquel",];

function mostra(){
document.write(lista.lenght + "<br>"); 
for(let i = 0; i < lista.lenght; i++){
    document.write(lista[i] + "<br>");
}

function mostraTabuada(){
    for(let i = 1; i <= 10; i++)
    document.write("O valor do i " + i + "<br>");
}

}
function moeda(merda){
    return merda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if (!Number(v)){
        alert("O valor deve ser numérico");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return

    }
    if (!Number(j)){
        alert("Os juros devem ser numéricos");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return

    }

    if (!Number(t)){
        alert("Os meses devem ser numéricos");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return

    }
    let r = 0;
    for(let i =1; i <=t; i++){
        r = v * (1 + (j/100));
        document.write("mês " + i + " - valor: " + r + "<br>");
        v = r;
    }
   
    document.write("Resultado: " + r );
}


function nota(){
  let n1 = document.getElementById("b1").value;
  let n2 = document.getElementById("b2").value;
  let n3 = document.getElementById("b3").value;
  let n4 = document.getElementById("b4").value;
  let r = Number(n1)+Number(n2)+Number(n3)+Number(n4);

  document.getElementById("resul").innerHTML = "Nota: " + r;
}
