console.log("client side file is loaded");

fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data);
    })
})
fetch('http://localhost:3000/weather?address=panipat').then((response)=>{
      response.json().then((data)=>{
          if(data.error){
          console.log(error)
          }else{
          console.log(data.location)
          console.log(data.forcast)
          }
      })
})

const weatherform = document.querySelector("form");
const input = document.querySelector('input');

const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    var location = input.value;
    messageOne.innerHTML = "loading ...";
    messageTwo.innerHTML = "";
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
   
      response.json().then((data)=>{
          if(data.error){
          messageOne.innerHTML = data.error;
          }else{
          messageOne.innerHTML = data.location;
          messageTwo.innerHTML = data.forcast;
          }
      })
})

})


