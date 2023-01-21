// За допомогою циклу for додайте всі четні числа від min до max 

function coutnEven() {
  const userMin = Number(prompt("Write min number"));
  const userMax = Number(prompt("Write max number"));
  console.log(typeof (userMin));
  console.log(typeof (userMax));
  let total = 0;

  if (isNaN(userMin) || isNaN(userMax)) {
    alert(numberCheck(userMin, userMax));

  }
  for (let i = userMin; i <= userMax; i += 1) {
    if (i % 2 !== 0) {
      continue
    }
    console.log(i);
    total += i;
  }
  console.log(total);
  return
}
coutnEven();

function numberCheck(num1, num2) {
  let result;
  if (isNaN(num1) && isNaN(num2)) {
    result = `First number = ${num1}, Second number = ${num2}`;
  } else if (isNaN(num1)) {
    result = `First number = ${num1}`;
  } else {
    result = `Second number = ${num2}`;
  }
  return result;
}
