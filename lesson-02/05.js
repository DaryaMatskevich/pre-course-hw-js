let passport = {
    name: "Petr",
    surname: "Petrov",
};
console.log(passport.name)

let newPassport = Object.assign({}, passport);
   newPassport.name = "Ivan"
console.log(newPassport.name)