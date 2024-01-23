import MySingleton from "./exercises.mjs";

const bodyPart = new MySingleton("head");
const bodyPart2 = new MySingleton("hand");
console.log(bodyPart.getBodyPart() === bodyPart2.getBodyPart());
console.log(bodyPart.getBodyPart());
console.log(bodyPart2.getBodyPart());