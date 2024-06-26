const items = [
  {name : '콜라', price: 1000},
  {name : '사이다', price: 1200},
  {name : '물', price: 800},
  {name : '주스', price: 1500},
]

const itemObject = items.reduce((obj: { [name: string]: number }, item) => {
  obj[item.name] = item.price;
  return obj;
},{});
console.log(itemObject);