// const pets = [
//     {
//       id: "1",
//       name: "Барсик",
//       type: "кіт",
//       color: "сірий",
//       age: 2,
//       weight: 11,
//       isAdopted: true,
//       favoriteFoods: ["риба", "молоко"],
//     },
//     {
//       id: "2",
//       name: "Бім",
//       type: "пес",
//       color: "чорний",
//       age: 5,
//       weight: 12,
//       isAdopted: false,
//       favoriteFoods: ["кістка", "м’ясо"],
//     },
//     {
//       id: "3",
//       name: "Кузя",
//       type: "хом’як",
//       color: "білий",
//       age: 1,
//       weight: 0.2,
//       isAdopted: true,
//       favoriteFoods: ["зерно", "морква"],
//     },
//     {
//       id: "4",
//       name: "Лола",
//       type: "папуга",
//       color: "зелений",
//       age: 3,
//       weight: 0.3,
//       isAdopted: false,
//       favoriteFoods: ["яблуко", "зерно"],
//     },
//   ];

// // // Завдання 1: 
// // // Отримати масив усіх імен об'єктів (ключ name)

// const result1 = pets.map((names) => names.name);
// console.log(result1);


// // // Завдання 2:
// // // Знайти всіх тварин певного типу (наприклад, "кіт").

// const result2 = (pets, type) => pets.filter(pet => pet.type === type);
// console.log(result2(pets, "кіт"));


// // // Отримати імена всіх тварин, які вже знайдені в родину (isAdopted === true).

// const result3 = pets.filter(names => names.isAdopted === true).map(names => names.name);
// console.log(result3);


// // // Завдання 4:
// // // Знайти тварину за іменем.

// const result4 = (pets, findName) => pets.filter(item => item.name === findName);
// console.log(result4(pets, "Кузя"));


// // // Завдання 5
// // // Знайти першу тварину, вага якої більша за 10 кг

// const result5 = pets => pets.find(weightt => weightt.weight > 10)
// console.log(result5(pets));


// // Задача 6 перевірити, чи всі тварини важать менше ніж 15 кг

// const result6 = (pets) => pets.every((item) => item.weight <= 15)
// console.log(result6(pets));


// //  Задача 7 чи є хоч одна тварина молодше 2 років

// const result7 = (pets) => pets.some((item) => item.age < 2);
// console.log(result7(pets));

