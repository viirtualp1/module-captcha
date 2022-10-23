function createCaptcha(
  options = {
    alphabet: [],
    length: 4,
  },
) {
  const alphabet = options.alphabet;
  const length = options.length;
  const max = alphabet.length - 1;

  const getRandNumbers = () => alphabet[Math.floor(Math.random() * max)];
  const captcha = new Array(length).fill(0).map(getRandNumbers);

  return captcha.join("");
}
