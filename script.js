let character = {
  name: "",
  gender: "",
  age: 0,
  health: 100,
  happiness: 100,
  intelligence: 100,
  looks: 100
};

function startGame() {
  character.name = document.getElementById("name").value || "Anonymous";
  character.gender = document.getElementById("gender").value;

  document.getElementById("character-creation").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  updateUI();
}

function nextYear() {
  character.age++;
  applyRandomEvent();
  updateUI();
}

function applyRandomEvent() {
  const events = [
    { text: "You read a book. Intelligence +5", effect: () => character.intelligence += 5 },
    { text: "You went to a party. Happiness +10", effect: () => character.happiness += 10 },
    { text: "You got sick. Health -10", effect: () => character.health -= 10 },
    { text: "You started working out. Looks +5", effect: () => character.looks += 5 },
    { text: "You were in a car accident. Health -20", effect: () => character.health -= 20 },
    { text: "You got a promotion. Happiness +15", effect: () => character.happiness += 15 },
    { text: "Nothing interesting happened this year.", effect: () => {} }
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  event.effect();
  document.getElementById("events").innerText = `Age ${character.age}: ${event.text}`;
}

function updateUI() {
  document.getElementById("charInfo").innerText = `${character.name}, ${character.gender}, Age: ${character.age}`;
  document.getElementById("stats").innerHTML = `
    Health: ${character.health}<br>
    Happiness: ${character.happiness}<br>
    Intelligence: ${character.intelligence}<br>
    Looks: ${character.looks}
  `;
}
