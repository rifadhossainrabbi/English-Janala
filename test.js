const creatElements = (arr) => {
  const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
  console.log(htmlElements);
}

const synonyms = ["hello", "hi", "konnichiwa"];
creatElements(synonyms);