// const items = [
//   {name : '콜라', price: 1000},
//   {name : '사이다', price: 1200},
//   {name : '물', price: 800},
//   {name : '주스', price: 1500},
// ]

const itemList = items.map((item)=>{
  return `${item.name}: ${item.price}원`
});

console.log(itemList);

