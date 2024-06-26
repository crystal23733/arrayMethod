// const items = [
//   {name : '콜라', stock: 5},
//   {name : '사이다', stock: 0},
//   {name : '물', stock: 10},
//   {name : '주스', stock: 2},
// ]

const sortedItem = items.sort((a,b) => {
  return a.stock - b.stock
})
console.log(sortedItem)