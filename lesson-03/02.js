const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const searchWord = "апельсин";

if (words.indexOf(searchWord) !== -1) {
    console.log("Ура! нашел");
} else {
    console.log("Придется поискать в другом магазине…");
}