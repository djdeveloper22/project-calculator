(() => {

  let showResultado = document.querySelector('#showResultado');
  let buttons = document.querySelectorAll('.btn-num');
  let functionIgual = document.querySelector('#functionIgual');
  let resultado = '';
  console.log(buttons);

  //acceder a los contenidos de los botones
  buttons.forEach((botones)=>{
    botones.addEventListener('click', (e)=>{
      let dataNum = e.target.dataset.num;
      resultado = showResultado.value += dataNum;
      console.log(resultado)
    })
  })

  functionIgual.addEventListener('click', (e)=>{
    let resp = eval(showResultado.value);
    showResultado.value = resp
  })


})()
