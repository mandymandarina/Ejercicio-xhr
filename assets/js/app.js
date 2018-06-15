//esto va siempre igual en xhr hasta send()

const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

const getJSON = (url, callback) => {
  //crear instancia del objeto XMLhttpRequest
  const request = new XMLHttpRequest();

  request.onload = () => {
    //4: la peticion se termino y la respuesta esta lista
    //200: status esta ok
    if(request.readyState === 4 && request.status === 200) {
      callback(request.responseText);//me lo devolvera como strin
    }
  }
  //open()
  request.open('GET',url);
  //send()
  request.send();
}

//en esta parte se puede mostrar la respuesta como uno quiero haciendo DOM

btn.addEventListener('click', () =>{
  getJSON(url, response => {
    let doggie = JSON.parse(response).message;
    console.log(doggie);
    img.src = doggie;
  })
});