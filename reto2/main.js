//sectores necesarios
let base = document.querySelector('#base'),
  altura = document.querySelector('#altura'),
  button = document.querySelector('#calcular'),
  limpiar = document.querySelector('#limpiar')
  div = document.querySelector('#container')
//funcion para calcular el area y mostrar resultado en el dom
function areaTriangulo(b,h){
  if(document.querySelector('.resultado')){
    document.querySelector('.resultado').remove()
  }
  let area = (b.value * h.value)/ 2
  let p = document.createElement('p'),
    text = document.createTextNode(`el area de b=${b.value},h=${h.value} es ${area}`)
  p.classList.add('resultado')
  p.appendChild(text)
  div.appendChild(p)
}

button.onclick = () => areaTriangulo(base, altura)

