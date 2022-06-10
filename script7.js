var fruitType = prompt("Which fruit do you want?");

switch (fruitType) {
  case "Orange":
    console.log("60 Rs./Kg");
    break;
  case "Apple":
    console.log("160 Rs./Kg");
    break;

  case "Mango":
    console.log("80 Rs./Kg");
    break;

  case "Banana":
    console.log("30 Rs./Kg");
    break;

  default:
    console.log(`${fruitType}, Not available`);
}
