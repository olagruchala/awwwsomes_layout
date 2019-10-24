
window.onload = function () {

    let form = document.getElementById("message");
    let fnames = document.getElementsByName("fname");
    let name = document.getElementById("name");
    let emailData = document.getElementById("emailData");
    let textArea = document.getElementById("textArea");


    //dodaję atrybut "required" do wszystkich pól formularza po ustawieniu focus na którymkolwiek z nich
    let onInputFocus = function () {
        fnames.forEach(elem => elem.setAttribute("required", ""));
    };
    fnames.forEach(elem => elem.addEventListener("focus", onInputFocus));


    //dodaję powiadomienie o za krotkim imieniu
    name.addEventListener("input", function (e) {
        if (name.value.length < 3) {
            e.preventDefault();
            name.setCustomValidity("Your name is too short. Enter at least 3 characters.");
        } else {
            name.setCustomValidity("");
        }
    });


    //dodaję powiadomienie o niepoprawnie wypełnionym polu email
    emailData.addEventListener("input", function (e) {
        if (emailData.validity.typeMismatch) {
            emailData.setCustomValidity("It's probably not an email");
            e.preventDefault()
        } else {
            emailData.setCustomValidity("");
        }
    });


    //dodaję powiadomienie o wymaganej długoci wiadomoci -> min 4 znaki
    textArea.addEventListener("input",function (e) {
        if (textArea.value.length <= 3) {
            e.preventDefault();
            textArea.setCustomValidity("Your message is too short. Write us something more ;).");
        } else {
            textArea.setCustomValidity("");
        }
    });


    // obsługa "submit"
    form.addEventListener("submit", function (e) {
        let hello = document.getElementById("hello");
        e.preventDefault();
        hello.innerHTML = "<p>thank you!</p>";
        fnames.forEach(elem => elem.value = "");
    });
};
