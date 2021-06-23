let button = document.querySelector('button'),
algoritmo = parseInt(document.querySelector('#algoritmo').value),
div = document.querySelector('div'),
p = document.createElement('p')

function consulta(){
  num1 = parseInt(document.querySelector('#num1').value),
  num2 = parseInt(document.querySelector('#num2').value)
  ;
  switch(algoritmo){
    case 1 :
      ((n1=num1,n2=num2)=>{
        return insertar(n1+n2)
      })()
      break;
    case 2 :
      ((n1=num1,n2=num2)=>{
        return insertar(n1-n2)
      })()
      break;
    case 3 :
      ((n1=num1,n2=num2)=>{
        return insertar(n1*n2)
      })()
      break;
    case 4 :
      ((n1=num1,n2=num2)=>{
        return insertar(n1/n2)
      })()
      break;
    }
}
function insertar (text){
    if(!document.querySelector('#resultado')){
      txt = document.createTextNode(text)
      p.setAttribute('id','resultado')
      p.appendChild(txt)
      div.appendChild(p)   
    }
    else{
      document.querySelector('#resultado').remove()
      txt = document.createTextNode(text)
      p.setAttribute('id','resultado')
      p.appendChild(txt)
      div.appendChild(p)
    }
}
button.onclick = () => consulta()