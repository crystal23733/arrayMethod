//const items = [
//   {name : '콜라', stock: 5},
//   {name : '사이다', stock: 0},
//   {name : '물', stock: 10},
//   {name : '주스', stock: 2},
// ]

const availableItems = items.filter((item)=>{
  return item.stock>0;
})

console.log(availableItems);