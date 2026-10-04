const green = {
    user: "name",
    age: 5,
    grade: "inf"
};
const { user, age } = green;
console.log(user);
const arr = ["art", 8];
const [art, fruit] = arr;
console.log(fruit);
const newGreen = { ...green };
console.log(newGreen);
