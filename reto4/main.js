let button = document.querySelector("button");
let div = document.querySelector("#container")
button.onclick = () =>{
  if(document.querySelector('.resultado')){
    document.querySelector('.resultado').remove()
  }
  let texto = document.querySelector("#texto"),
  veces = document.querySelector("#veces"),
  p = document.createElement('p')
  text = texto.value ;
  veces = parseInt(veces.value) ;
  
  let string ="" ;
  for(let i=0;i < veces;i++ ){
      string = `${string} ${text}`
  }
  string = document.createTextNode(string)
  p.classList.add('resultado')
  p.appendChild(string)
  div.appendChild(p)
}
