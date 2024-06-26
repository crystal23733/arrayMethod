// const items = [
//   {name : '콜라', price: 1000},
//   {name : '사이다', price: 1200},
//   {name : '물', price: 800},
//   {name : '주스', price: 1500},
// ]

// const itemObject = items.reduce((obj: { [name: string]: number }, item) => {
//   obj[item.name] = item.price;
//   return obj;
// },{});
// console.log(itemObject);

type Item = {
  name: string;
  price: number;
};

type ItemObject = {
  [name: string]: number;
};

const items: Item[] = [
  { name: '콜라', price: 1000 },
  { name: '사이다', price: 1200 },
  { name: '물', price: 800 },
  { name: '주스', price: 1500 }
];

const itemObject = items.reduce((obj: ItemObject, item: Item) => {
  obj[item.name] = item.price;
  return obj;
}, {} as ItemObject);

console.log(itemObject);
// { 콜라: 1000, 사이다: 1200, 물: 800, 주스: 1500 }