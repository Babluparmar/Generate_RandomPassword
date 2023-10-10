const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbol = "@~#$%^&*()_-+={}[]\|<>";

const allChar = upperCase + lowerCase + numbers + symbol;

function creatpassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];

    }
    passwordBox.value = password;
}

function copypassword() {
    passwordBox.select();
    document.execCommand("copy");
}