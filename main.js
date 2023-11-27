const retire = document.getElementById("retire");

const now = new Date();
const retireDate = new Date(2063, 11, 31, 0, 0, 0);
retire.innerHTML = `Retire in: ${Math.floor(
  (retireDate - now) / 1000 / 60 / 60 / 24
)} days`;
