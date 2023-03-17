let calcular = document.querySelector("#calcular");
function imc() {
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  let resultado = document.querySelector("#resultado");

  if (altura !== "" && peso !== "") {
    let IMC = (peso / (altura * altura)).toFixed(2);
    let clasificacion = "";
    if (IMC < 16) {
      clasificacion = "IMC Inválido";
    } else if (IMC < 17) {
        clasificacion = "Mucho bajo peso";
    } else if (IMC < 18.5) {
        clasificacion = "Bajopeso";
    } else if (IMC < 25) {
        clasificacion = "Peso normal";
    } else if (IMC < 30) {
        clasificacion = "sobrepeso";
    } else if (IMC < 35) {
        clasificacion = "Obesidad grado I";
    } else if (IMC < 40) {
        clasificacion = "Obesidad grado II";
    } else {
        clasificacion = "Obesidad grado III";
    }

    resultado.textContent = `Su IMC es ${IMC} y usted tiene ${clasificacion}`;
  } else {
    resultado.textContent = "Rellenar todos los campos, y los decimales con. y no con ,!!!";
  }
}

calcular.addEventListener("click", imc);

function cambiar(elemento) {
  //Primeira forma de fazer o evento do clique do botão


  // document.getElementById("evento").innerHTML =
  //   "Obrigadao por passar o mause";
  elemento.innerHTML = "obrigado por passar o mouse"
  elemento.style.backgroundColor = "green"
  elemento.style.cursor = "pointer"
  elemento.style.color = "white"
}

function darVuelta(elemento) {
  // document.getElementById("evento").innerHTML = "Obrigado por sair";
  elemento.innerHTML = "Gracias por salir"
  elemento.style.backgroundColor = "grey"
  elemento.style.color ="white"
}

function colorNormal(elemento) {
  // document.getElementById("evento").innerHTML = "Passe o mause aqui"
  elemento.innerHTML = "Passe o mouse aqui"
  elemento.style.backgroundColor = "#191c2c"
  elemento.style.color = "#fff"
}