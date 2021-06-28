let button = document.querySelector('button');
let p = document.querySelector('#resultado')
button.onclick = () =>{
  let dias = document.querySelector('#dias');
  let horas = document.querySelector('#horas');
  let minutos = document.querySelector('#minutos');
  let segundos = document.querySelector('#segundos');
  dias = parseInt(dias.value);
  horas = parseInt(horas.value);
  minutos = parseInt(minutos.value);
  segundos = parseInt(segundos.value)
  console.log(segundos)
  horas = dias * 24 + horas ;
  minutos = horas * 60 + minutos ;
  segundos = minutos * 60 + segundos ;
  console.log(segundos)
  let text = document.createTextNode(segundos +' S')
  let br = document.createElement('br')
  p.appendChild(text)
  p.appendChild(br)
}
