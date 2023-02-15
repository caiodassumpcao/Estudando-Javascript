// 1. for ... of

for (let item of cafe) {
  //console.log(item.nome);
}

// 2. forEach
cafe.forEach((item, index) => {
  //console.log(`${index}: ${item.nome}`);
});

// 3. map
//let nome = cafe.map((item) => item.nome + "- visual:" + item.visual);

// 4. filter
let sabor = cafe.filter((item) => item.sabor == "muito bom");

// 5. find
let p1 = cafe.find((item) => item.preço <= 5);

// 6. sort
cafe.sort((cafe1, cafe2) => {
  if (cafe1.nome < cafe2.nome) {
    return -1;
  } else if (cafe1.nome > cafe2.nome) {
    return 1;
  } else {
    return 0;
  }
});

// ordenou em ordem alfabética