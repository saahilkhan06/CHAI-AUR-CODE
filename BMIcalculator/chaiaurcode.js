const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (
    height === '' ||
    height < 0 ||
    isNaN(height) ||
    weight === '' ||
    weight < 0 ||
    isNaN(weight)
  ) {
    results.innerHTML = `please give me a valid height and weight`;
  } else {
    const bmi = weight * height;
    results.innerHTML = `${bmi}`;
  }
  if (bmi < 18.6) {
    const bmi = weight * height;
    results.innerHTML = 'under weight';
  }
});
