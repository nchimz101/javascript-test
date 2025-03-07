function decipher(encryptedText, knownWord) {
    // Helper function to decrypt the text with a given shift
    function decryptWithShift(text, shift) {
        return text.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) { // Only shift alphabetic characters
                let code = char.charCodeAt(0);
                let base = (char === char.toUpperCase()) ? 65 : 97; // Base for uppercase or lowercase
                return String.fromCharCode((code - base - shift + 26) % 26 + base);
            }
            return char; // Return non-alphabetic characters as they are
        }).join('');
    }

    // Try all possible shifts (0 to 25) and check for the known word
    for (let shift = 0; shift < 26; shift++) {
        const decryptedText = decryptWithShift(encryptedText, shift);
        if (decryptedText.includes(knownWord)) {
            return decryptedText; // Return the decrypted text when we find the correct shift
        }
    }

    return null; // If no valid shift is found
}

let encryptedText = "Uifsf jt b tfdsfu dpef!";
let knownWord = "There";

console.log(decipher(encryptedText, knownWord));
