let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
console.log(passportWithAddress.address.city);
let deepCopy = JSON.parse(JSON.stringify(passportWithAddress));

deepCopy.address.city = "Bobryisk";
console.log(deepCopy.address.city);