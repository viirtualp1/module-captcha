function createCaptcha(
  options = {
    alphabet: [],
    length: 4,
  },
) {
  const alphabet = options.alphabet;
  const length = options.length;

  function getArrayRandNumbers() {
    const max = alphabet.length - 1;

    const getRandNumbers = () => alphabet[Math.floor(Math.random() * max)];

    const arrayRandNumbers = new Array(length).fill(0).map(getRandNumbers);
    return arrayRandNumbers;
  }

  const randomArray = getArrayRandNumbers();

  const captchaElement = document.createElement('div');
  captchaElement.className = 'captcha';
  document.body.appendChild(captchaElement);

  randomArray.forEach((symbol) => (captchaElement.innerHTML += symbol));
}
