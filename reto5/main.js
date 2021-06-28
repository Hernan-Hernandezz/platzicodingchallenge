let parrafo = (n) =>{
  if(document.querySelector('.numero')){
    document.querySelector('.numero').remove()
  }
  let display = document.querySelector('#display'),
    p = document.createElement('p'),
    text = document.createTextNode(n)
  p.classList.add('numero')
  p.appendChild(text)
  display.appendChild(p)
}

let agregar = (n) =>{
  if(operacion == ""){
    valor1 = `${valor1}${n}`
    parrafo(valor1)
  }
  else{
    valor2 = `${valor2}${n}`
    parrafo(valor2)
  }
}
// valores de cada celda
let num1 = document.querySelector('#num1'),
  num2 = document.querySelector('#num2'),
  num3 = document.querySelector('#num3'),
  num4 = document.querySelector('#num4'),
  num5 = document.querySelector('#num5'),
  num6 = document.querySelector('#num6'),
  num7 = document.querySelector('#num7'),
  num8 = document.querySelector('#num8'),
  num9 = document.querySelector('#num9'),
  num0 = document.querySelector('#num0'),
  punto = document.querySelector('#punto'),
  borrar = document.querySelector('#borrar')

// operadores
  sum = document.querySelector('#sum'),
  res = document.querySelector('#res'),
  mul = document.querySelector('#mul'),
  div = document.querySelector('#div'),
  igual = document.querySelector('#igual'),
// valores para operacion
  valor1 = "",
  valor2 = "",
  resultado = "",
  operacion = ""

borrar.onclick = () =>{
  valor1 = ""
  valor2 = ""
  operacion = ""
  parrafo(0)
}

num1.onclick = () => {
  agregar(1)
}
num2.onclick = () => {
  agregar(2)
}
num3.onclick = () => {
  agregar(3)
}
num4.onclick = () => {
  agregar(4)
}
num5.onclick = () => {
  agregar(5)
}
num6.onclick = () => {
  agregar(6)
}
num7.onclick = () => {
  agregar(7)
}
num8.onclick = () => {
  agregar(8)
}
num9.onclick = () => {
  agregar(9)
}
num0.onclick = () => {
  agregar(0)
}
punto.onclick = () => {
  agregar(".")
}
sum.onclick = () =>operacion = "suma";parrafo("")
res.onclick = () =>operacion = "resta";parrafo("")
mul.onclick = () =>operacion = "multiplicacion";parrafo("")
div.onclick = () =>operacion = "divicion";parrafo("")

igual.onclick = () =>{
  valor1 = parseInt(valor1)
  valor2 = parseInt(valor2)
  switch(operacion){
    case "suma":
      resultado = valor1 + valor2
      parrafo(resultado)
      break;
    case "resta":
      resultado = valor1 - valor2
      parrafo(resultado)
      break;
    case "multiplicacion":
      resultado = valor1 * valor2
      parrafo(resultado)
      break;
    case "divicion":
      resultado = valor1 / valor2
      parrafo(resultado)
      break;
  }
  valor1 = resultado
  valor2 = ""
}


