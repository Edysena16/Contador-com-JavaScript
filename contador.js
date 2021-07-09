//window.addEventListener("load", () => {
window.addEventListener("load", () => {
  const botao = document.getElementById("botao");

  botao.addEventListener("click",() => {  
  //tempo, em segundos, que queremos
  let sec= 360;
  const countDiv = document.getElementById('timer');
  //const countDiv = document.getElementById('timer');
  
  //Obter o numerador inteiro de uma divisao
  const secpass = () => {
  
   let min = Math.floor(sec/60);
   let segundosRestantes = sec % 60;
  
   if (segundosRestantes < 10) {
    segundosRestantes = "0" + segundosRestantes;
   }
  
   if (min < 10) {
     min = "0" + min;
   }
  //vai gerar o formato 02:59
   countDiv.innerHTML = min + ":" + segundosRestantes;
  
  
  //condição final
   if (sec > 0) {
       sec = sec - 1;
   }
   else {
       countDiv.innerHTML = "Acabou!";
   }
  
  };
  
  const CountDown = setInterval(() => secpass(), 1000);
  });
  
})

