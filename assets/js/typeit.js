// Sistem Salam & Integrasi TypeIt
var date = new Date();
var time = date.getHours();

if (time < 12) {
    new TypeIt('#salam', {
        speed: 200,
        waitUntilVisible: true,
        cursor: false,
    }).type('Pagi! Aku').go();
} else if (time < 18) {
    new TypeIt('#salam', {
        speed: 200,
        waitUntilVisible: true,
        cursor: false,
    }).type('Siang! Aku').go();
} else {
    new TypeIt('#salam', {
        speed: 200,
        waitUntilVisible: true,
        cursor: false,
    }).type('Sore! Aku').go();
}

new TypeIt('#nama', {
    speed: 400,
    waitUntilVisible: true
}).type('Erick').go();