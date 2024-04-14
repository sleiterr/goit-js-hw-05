//* Task 4 Загальний баланс

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

//! .filter(user => user.gender === gender)

//* Використовуєця метод filter(), щоб отримати підмасив користувачів, які мають задану стать (gender). Робиться за допомогою порівняння властивості "gender" кожного об'єкта користувача з переданим значенням gender.

//! .reduce((totalBalance, user) => totalBalance + user.balance, 0);

//* Після фільтрації використовуємо метод reduce() для сумування балансів користувачів у підмасиві. Початкове значення для суми вказане як 0. Кожен елемент підмасиву (користувач) додає свій баланс (user.balance) до поточної суми (totalBalance).
