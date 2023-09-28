type Planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

let planet: Planet;

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra");
  }
}

type GreetingCallback = (name: string) => void;

function greet(callback: GreetingCallback) {
  const name = prompt("Qual é o seu nome?");

  callback(name);
}
