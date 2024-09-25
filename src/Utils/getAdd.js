export const getAdd = (numbers) => {
  if (!numbers) return 0;
  let numberArray;

  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.match(/\/\/(.+)\\n/)[1];
    const restOfInput = numbers.replace(`//${customDelimiter}\\n`, "");
    numberArray = restOfInput.split(customDelimiter);
  } else {
    numberArray = numbers.replace(/\\n/, ",").split(",");
  }

  let negatives = numberArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  return numberArray.reduce((acc, item) => acc + Number(item), 0);
};
