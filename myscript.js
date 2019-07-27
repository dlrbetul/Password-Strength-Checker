
//Burası show/hide password kısmı
function Toggle() {
    var temp = document.getElementById("pass");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}
function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}

//Burası şifre gücü ölçme kısmı ana kısım
function strength(y) {

    var desc = new Array();
    desc[0] = "Too weak";
    desc[1] = "Too weak";
    desc[2] = "Weak";
    desc[3] = "Medium";
    desc[4] = "Good";
    desc[5] = "Enough";
    desc[6] = "Strong";
    desc[7] = "Strong";


    //Bu fonksiyon küçük/büyük/numara/uzunluk kontrolü yapıyor

    var strength = 0;

    if (y.length > 6) strength++;
    if (y.length > 8) strength++;
    if (y.length > 10) strength++;

    if ((y.match(/[a-z]/)) && (y.match(/[A-Z]/))) strength++;
    if (y.match(/\d+/)) strength++;
    if (y.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) strength++;
    if (y.match(/\d+/)) strength++;
    if (y.length < 6 && strength > 0) strength--;


    document.getElementById("pwdesc").innerHTML = desc[strength];
    document.getElementById("pwstrength").className = "strength" + strength;

    if (y == "") {
        document.getElementById("pwstrength").className = "strength0";
    }
    Others(y);

    var cellCoefficient = 0;


    if (y.match(/[a-z]/)) {
        cellCoefficient += 26;
    }

    if (y.match(/[A-Z]/)) {
        cellCoefficient += 26;
    }

    if (y.match(/[0-9]/)) {
        cellCoefficient += 10;
    }

    if (y.match(/.[-,+,!,@,#,$,%,^,&,*,?,_,~,-,(,),-]/)) {
        cellCoefficient += 30;
    }

    var crackTimeInSec = (cellCoefficient ** (y.length)) / 10000000;
    var crackTimeString = "";
    var crackedd = false;
    var cracked = document.getElementById("cracked");
    var crackedS = document.getElementById("cracked-s");
    var crackedE = document.getElementById("cracked-e");
    var crackedText = document.getElementById("cracked-text");

    var myData = wellKnowns;
    if (myData[0].content.toLocaleLowerCase().includes(y.toLocaleLowerCase()) && y != "") {
        document.getElementById("pwdesc").innerHTML = desc[1];
        document.getElementById("pwstrength").className = "strength1";
        crackTimeString = "Your password matches common patterns, it is instantly cracked.";
        crackedd = true
    }

    else if (crackTimeInSec > 0 && crackTimeInSec < 60) {
        crackTimeString = "It takes " + Math.round(crackTimeInSec).toString() + " seconds to crack your password.";
    }
    else if (crackTimeInSec > 60 && crackTimeInSec < 3600) {
        crackTimeString = "It takes " + Math.round(crackTimeInSec / 60).toString() + " minutes to crack your password.";
    }
    else if (crackTimeInSec > 3600 && crackTimeInSec < 14400) {
        crackTimeString = "It takes " + Math.round(crackTimeInSec / 3600).toString() + " hours to crack your password.";
    }
    else if (crackTimeInSec > 14400 && crackTimeInSec < 432000) {
        crackTimeString = "It takes " + Math.round(crackTimeInSec / 14400).toString() + " days to crack your password.";
    }
    else if (crackTimeInSec > 432000 && crackTimeInSec < 5184000) {
        crackTimeString = "It takes " + Math.round(crackTimeInSec / 432000).toString() + " months to crack your password.";
    }
    else if (crackTimeInSec > 5184000 && crackTimeInSec < 5184000000) {
        crackTimeString = "It takes " + Math.round(crackTimeInSec / 5184000).toString() + " years to crack your password.";
    }
    else if (crackTimeInSec > 5184000000) {
        crackTimeString = "It takes more than 1000 years to crack your password.";
    }
    else {
        crackTimeString = "No way";
    }
    if (crackedd == true) {
        cracked.className = "table-dark"
        crackedS.style.display = "none"
        crackedE.style.display = "inline-block"
        crackedText.innerHTML = "Your password already cracked!"
    }
    else {
        cracked.className = "table-success"
        crackedS.style.display = "inline-block"
        crackedE.style.display = "none"
        crackedText.innerHTML = "Your password not cracked yet!"
    }
    crackedd = false

    document.getElementById("crack").innerHTML = crackTimeString;

}

function Others(myInput) {

    var length = document.getElementById("length");
    var lengthS = document.getElementById("length-s");
    var lengthE = document.getElementById("length-e");
    var letter = document.getElementById("letter");
    var letterS = document.getElementById("letter-s");
    var letterE = document.getElementById("letter-e");
    var capital = document.getElementById("capital");
    var capitalS = document.getElementById("capital-s");
    var capitalE = document.getElementById("capital-e");
    var number = document.getElementById("number");
    var numberS = document.getElementById("number-s");
    var numberE = document.getElementById("number-e");
    var special = document.getElementById("special");
    var specialS = document.getElementById("special-s");
    var specialE = document.getElementById("special-e");
    // Validate length

    if (myInput.length >= 8) {
        length.className = "table-success"
        lengthS.style.display = "inline-block"
        lengthE.style.display = "none";
    }
    else {
        length.className = "table-danger"
        lengthS.style.display = "none"
        lengthE.style.display = "inline-block";
    }

    // Validate lowercase letters

    if (myInput.match(/[a-z]/)) {
        letter.className = "table-success"
        letterS.style.display = "inline-block"
        letterE.style.display = "none";
    }
    else {
        letter.className = "table-danger"
        letterS.style.display = "none"
        letterE.style.display = "inline-block";
    }

    // Validate capital letters

    if (myInput.match(/[A-Z]/)) {
        capital.className = "table-success"
        capitalS.style.display = "inline-block"
        capitalE.style.display = "none";
    }
    else {
        capital.className = "table-danger"
        capitalS.style.display = "none"
        capitalE.style.display = "inline-block";
    }
    // Validate numbers

    if (myInput.match(/[0-9]/)) {
        number.className = "table-success"
        numberS.style.display = "inline-block"
        numberE.style.display = "none";
    }
    else {
        number.className = "table-danger"
        numberS.style.display = "none"
        numberE.style.display = "inline-block";
    }
    // Validate special

    if (myInput.match(/.[-,+,!,@,#,$,%,^,&,*,?,_,~,-,(,),-]/)) {
        special.className = "table-success"
        specialS.style.display = "inline-block"
        specialE.style.display = "none";
    }
    else {
        special.className = "table-danger"
        specialS.style.display = "none"
        specialE.style.display = "inline-block";
    }
	
}

function Create() {
    var lengthInput = parseInt(prompt("Please enter password length"));
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var specialChars = "[&\/\\#,+()$~%.'\":*?<>{}]"
    var allChars = numberChars + upperChars + lowerChars + specialChars;
    var password = "";
    for (var i = 0; i < lengthInput; i++) {
        password += allChars[Math.floor(Math.random() * Math.floor(allChars.length))];
    }
    document.getElementById("check").checked = true;
    document.getElementById("pass").value = password;
    strength(password);

    /*
    function generatePassword(passwordLength) {
        var numberChars = "0123456789";
        var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerChars = "abcdefghijklmnopqrstuvwxyz";
        var specialChars = "[&\/\\#,+()$~%.'\":*?<>{}]"
        var allChars = numberChars + upperChars + lowerChars + specialChars;
        var randPasswordArray = Array(passwordLength);
        randPasswordArray[0] = numberChars;
        randPasswordArray[1] = upperChars;
        randPasswordArray[2] = lowerChars;
        randPasswordArray[3] = specialChars;
        randPasswordArray = randPasswordArray.fill(allChars, 4);
        return shuffleArray(randPasswordArray.map(function (x) { return x[Math.floor(Math.random() * x.length)] })).join('');
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    var lengthInput = parseInt(prompt("please,enter password length"));
    document.getElementById("pass").setAttribute("value", generatePassword(lengthInput));
    document.getElementById("pass").type = "text";
    document.getElementById("check").checked = true;
    strength(document.getElementById("pass").value);
    */
}







