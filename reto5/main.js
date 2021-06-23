// let button = document.querySelector('button'),
// algoritmo = parseInt(document.querySelector('#algoritmo').value),
// div = document.querySelector('div'),
// p = document.createElement('p')

// function consulta(){
//   num1 = parseInt(document.querySelector('#num1').value),
//   num2 = parseInt(document.querySelector('#num2').value)
//   ;
//   switch(algoritmo){
//     case 1 :
//       ((n1=num1,n2=num2)=>{
//         return insertar(n1+n2)
//       })()
//       break;
//     case 2 :
//       ((n1=num1,n2=num2)=>{
//         return insertar(n1-n2)
//       })()
//       break;
//     case 3 :
//       ((n1=num1,n2=num2)=>{
//         return insertar(n1*n2)
//       })()
//       break;
//     case 4 :
//       ((n1=num1,n2=num2)=>{
//         return insertar(n1/n2)
//       })()
//       break;
//     }
// }
// function insertar (text){
//     if(!document.querySelector('#resultado')){
//       txt = document.createTextNode(text)
//       p.setAttribute('id','resultado')
//       p.appendChild(txt)
//       div.appendChild(p)   
//     }
//     else{
//       document.querySelector('#resultado').remove()
//       txt = document.createTextNode(text)
//       p.setAttribute('id','resultado')
//       p.appendChild(txt)
//       div.appendChild(p)
//     }
// }
// button.onclick = () => consulta()
let agregar = (n) =>{
  if(!operacion){
    valor1 = `${valor1}${n}`
    console.log(valor1)
    
  }
  else{
    valor2 = `${valor2}${n}`
    console.log(valor2)
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
  punto = document.querySelector('#punto')
// operadores
  sum = document.querySelector('#sum'),
  res = document.querySelector('#res'),
  mul = document.querySelector('#mul'),
  div = document.querySelector('#div'),
  igual = document.querySelector('#igual'),
// valores para operacion
  valor1 = "",
  valor2 = "",
  operacion = false
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
sum.onclick = () =>operacion = true
res.onclick = () =>operacion = true
mul.onclick = () =>operacion = true
div.onclick = () =>operacion = true
igual.onclick = () =>operacion = true