function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Correct way to handle the array:
console.log(greeter(user.join(" "))); // This will concatenate the strings in the array into a single string
//or
function greeter2(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeter2(user));