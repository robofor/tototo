function onClickHandler() {
  if (parseInt(operator.value) === 1) {
    document.getElementById('demo').innerHTML = parseInt(number_1.value) + parseInt(number_2.value);
  }
  else if (parseInt(operator.value) === 2) {
    document.getElementById('demo').innerHTML = parseInt(number_1.value) - parseInt(number_2.value);
  } 
  else if (parseInt(operator.value) === 3) {
    document.getElementById('demo').innerHTML = parseInt(number_1.value) * parseInt(number_2.value);
  } 
  else if (parseInt(operator.value) === 4) {
    document.getElementById('demo').innerHTML = parseInt(number_1.value) / parseInt(number_2.value);
  } 
  }