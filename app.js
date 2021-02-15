const encryptionInput = document.getElementById("encryptionString");
const encryptionOutput = document.getElementById("encryptionOut");
const encryptionKey = document.getElementById("encryptionKey");

const decryptionInput = document.getElementById("decryptionString");
const decryptionOutput = document.getElementById("decryptionOut");
const decryptionKey = document.getElementById("decryptionKey");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//ENCRYPTION-FUNCTION
const encrypt = (message, key) => {
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (message.charAt(i) === alphabet[j]) {
                if ((j + key) >= alphabet.length) {
                    let position = j + key - alphabet.length;
                    encryptedMessage += alphabet[position];
                } else {
                    encryptedMessage += alphabet[j + key];
                }
            }
        }
        if (!alphabet.includes(message.charAt(i))) {
            encryptedMessage += message.charAt(i);
        }
    }

    encryptionOutput.innerText = encryptedMessage;
}

const decrypt = (message, key) => {
    let decryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (message.charAt(i) === alphabet[j]) {
                if ((j - key) < 0) {
                    let position = j - key + alphabet.length;
                    decryptedMessage += alphabet[position];
                } else {
                    decryptedMessage += alphabet[j - key];
                }
            }
        }
        if (!alphabet.includes(message.charAt(i))) {
            decryptedMessage += message.charAt(i);
        }
    }

    decryptionOutput.innerText = decryptedMessage;
}

//LISTENERS
encryptionKey.addEventListener("keydown", k => {
    if (k.keyCode === 13) encrypt(encryptionInput.value, parseInt(encryptionKey.value));
})

decryptionKey.addEventListener("keydown", k => {
    if (k.keyCode === 13) decrypt(decryptionInput.value, parseInt(decryptionKey.value));
})

encryptionInput.addEventListener("keydown", k => {
    if (k.keyCode === 13) encrypt(encryptionInput.value, parseInt(encryptionKey.value));
})

decryptionInput.addEventListener("keydown", k => {
    if (k.keyCode === 13) decrypt(decryptionInput.value, parseInt(decryptionKey.value));
})