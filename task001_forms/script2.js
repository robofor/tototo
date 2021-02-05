function onClickHandler() {
  var opr_001 = parseInt(operator.value);
  var num_001 = parseInt(number_1.value);
  var num_002 = parseInt(number_2.value);
  var result_001;
  if (opr_001 === 1) {
    result_001 = num_001 + num_002;
    document.getElementById('demo').innerHTML = result_001;
  }
  else if (opr_001 === 2) {
    result_001 = num_001 - num_002
    document.getElementById('demo').innerHTML = result_001;
  }
  else if (opr_001 === 3) {
    result_001 = num_001 * num_002
    document.getElementById('demo').innerHTML = result_001;
  }
  else if (opr_001 === 4) {
    result_001 = num_001 / num_002
    document.getElementById('demo').innerHTML = result_001;
  }
}