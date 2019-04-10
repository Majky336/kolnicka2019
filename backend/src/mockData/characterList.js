const characterList = [
  {
    id: 1,
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY"
  },
  {
    id: 2,
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY"
  },
  {
    id: 3,
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY"
  },
  {
    id: 6,
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY"
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY"
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY"
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "41.9BBY"
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    height: 175,
    mass: 1358,
    hair_color: "n/a",
    skin_color: "green-tan, brown",
    eye_color: "orange",
    birth_year: "600BBY"
  },
  {
    id: 20,
    name: "Yoda",
    height: 66,
    mass: 17,
    hair_color: "white",
    skin_color: "green",
    eye_color: "brown",
    birth_year: "896BBY",
    gender: "male"
  },
  {
    id: 21,
    name: "Palpatine",
    height: 170,
    mass: 75,
    hair_color: "grey",
    skin_color: "pale",
    eye_color: "yellow",
    birth_year: "82BBY"
  },
  {
    id: 32,
    name: "Qui-Gon Jinn",
    height: 193,
    mass: 89,
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "92BBY"
  },
  {
    id: 33,
    name: "Nute Gunray",
    height: 191,
    mass: 90,
    hair_color: "none",
    skin_color: "mottled green",
    eye_color: "red",
    birth_year: "unknown"
  },
  {
    id: 34,
    name: "Finis Valorum",
    height: 170,
    mass: -1,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "91BBY"
  },
  {
    id: 36,
    name: "Jar Jar Binks",
    height: 196,
    mass: 66,
    hair_color: "none",
    skin_color: "orange",
    eye_color: "orange",
    birth_year: "52BBY"
  },
  {
    id: 35,
    name: "Padmé Amidala",
    height: 165,
    mass: 45,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "46BBY"
  },
  {
    id: 37,
    name: "Roos Tarpals",
    height: 224,
    mass: 82,
    hair_color: "none",
    skin_color: "grey",
    eye_color: "orange",
    birth_year: "unknown"
  },
  {
    id: 38,
    name: "Rugor Nass",
    height: 206,
    mass: -1,
    hair_color: "none",
    skin_color: "green",
    eye_color: "orange",
    birth_year: "unknown"
  },
  {
    id: 39,
    name: "Ric Olié",
    height: 183,
    mass: -1,
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "unknown"
  },
  {
    id: 40,
    name: "Watto",
    height: 137,
    mass: -1,
    hair_color: "black",
    skin_color: "blue, grey",
    eye_color: "yellow",
    birth_year: "unknown"
  },
  {
    id: 41,
    name: "Sebulba",
    height: 112,
    mass: 40,
    hair_color: "none",
    skin_color: "grey, red",
    eye_color: "orange",
    birth_year: "unknown"
  },
  {
    id: 42,
    name: "Quarsh Panaka",
    height: 183,
    mass: -1,
    hair_color: "black",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "62BBY"
  },
  {
    id: 51,
    name: "Mace Windu",
    height: 188,
    mass: 84,
    hair_color: "none",
    skin_color: "dark",
    eye_color: "brown",
    birth_year: "72BBY"
  },
  {
    id: 52,
    name: "Ki-Adi-Mundi",
    height: 198,
    mass: 82,
    hair_color: "white",
    skin_color: "pale",
    eye_color: "yellow",
    birth_year: "92BBY"
  },
  {
    id: 53,
    name: "Kit Fisto",
    height: 196,
    mass: 87,
    hair_color: "none",
    skin_color: "green",
    eye_color: "black",
    birth_year: "unknown"
  },
  {
    id: 54,
    name: "Eeth Koth",
    height: 171,
    mass: -1,
    hair_color: "black",
    skin_color: "brown",
    eye_color: "brown",
    birth_year: "unknown"
  },
  {
    id: 55,
    name: "Adi Gallia",
    height: 184,
    mass: 50,
    hair_color: "none",
    skin_color: "dark",
    eye_color: "blue",
    birth_year: "unknown"
  },
  {
    id: 56,
    name: "Saesee Tiin",
    height: 188,
    mass: -1,
    hair_color: "none",
    skin_color: "pale",
    eye_color: "orange",
    birth_year: "unknown"
  },
  {
    id: 58,
    name: "Plo Koon",
    height: 188,
    mass: 80,
    hair_color: "none",
    skin_color: "orange",
    eye_color: "black",
    birth_year: "22BBY"
  },
  {
    id: 63,
    name: "Poggle the Lesser",
    height: 183,
    mass: 80,
    hair_color: "none",
    skin_color: "green",
    eye_color: "yellow",
    birth_year: "unknown"
  },
  {
    id: 75,
    name: "R4-P17",
    height: 96,
    mass: -1,
    hair_color: "none",
    skin_color: "silver, red",
    eye_color: "red, blue",
    birth_year: "unknown"
  },
  {
    id: 76,
    name: "Wat Tambor",
    height: 193,
    mass: 48,
    hair_color: "none",
    skin_color: "green, grey",
    eye_color: "unknown",
    birth_year: "unknown"
  },
  {
    id: 77,
    name: "San Hill",
    height: 191,
    mass: -1,
    hair_color: "none",
    skin_color: "grey",
    eye_color: "gold",
    birth_year: "unknown"
  },
  {
    id: 78,
    name: "Shaak Ti",
    height: 178,
    mass: 57,
    hair_color: "none",
    skin_color: "red, blue, white",
    eye_color: "black",
    birth_year: "unknown"
  },
  {
    id: 81,
    name: "Raymus Antilles",
    height: 188,
    mass: 79,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "unknown"
  },
  {
    id: 82,
    name: "Sly Moore",
    height: 178,
    mass: 48,
    hair_color: "none",
    skin_color: "pale",
    eye_color: "white",
    birth_year: "unknown"
  },
  {
    id: 83,
    name: "Tion Medon",
    height: 206,
    mass: 80,
    hair_color: "none",
    skin_color: "grey",
    eye_color: "black",
    birth_year: "unknown"
  }
];

export default characterList;
