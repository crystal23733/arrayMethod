// const items = [
//   {name : '콜라', stock: 5},
//   {name : '사이다', stock: 0},
//   {name : '물', stock: 10},
//   {name : '주스', stock: 2},
// ]
const totalStock = items.reduce((total, item) => {
  console.log(`토탈: ${total}`)
  console.log(`몰루 ${item.stock}`)
  return total + item.stock;
},5);

console.log(totalStock);