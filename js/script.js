
window.onload = function () {



    //dodaję atrybut "required" do wszystkich pól formularza po ustawieniu focus na którymkolwiek z nich
    let fnames = document.getElementsByName("fname");
    let i = 0;
    let fname = fnames[i];

    for (i = 0; i < fnames.length; i++) {
        let onInputFocus = function () {
            for (let j = 0; j < fnames.length; j++) {
                fnames[j].setAttribute("required", "")
            }
        };
        fname.addEventListener("focus", onInputFocus);
    }


    //dodaję powiadomienie o niepoprawnie wypełnionym polu email
    let emailData = document.getElementById("emailData");
    emailData.addEventListener("input", function (e) {
        if (emailData.validity.typeMismatch) {
            emailData.setCustomValidity("It's probably not an email");
            e.preventDefault()
        } else {
            emailData.setCustomValidity("");
        }
    });



    //obsługa "submit"
    let form = document.getElementById("form");
    form.addEventListener("submit", function (event) {

        //sprawdzam czy "fname" nie są puste
        for (i = 0; i < fnames.length; i++) {
            let fname = fnames[i];
            let hello = document.getElementById("hello");
            if (fname.value === "") {
                event.preventDefault();
                hello.innerHTML = "<p>Oops, where is your message?</p>";
                break;
            } else {
                hello.innerHTML = "<p>thank you!</p>";
            }
        }

    });



// Window.onload()
};













