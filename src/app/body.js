export class Body {
    constructor() {
        console.log(`This is Body constructor`);
    }

    addEditDateListener() {
        let date = document.getElementById('edit-date');
        let submit = document.getElementById('edit-validate');

        date.addEventListener("keyup", function (event) {
            if(this.validity.patternMismatch) {
                console.log("Invalid format !");
                submit.className = "btn";
            } else {
                submit.className = "btn  valid";
            }
        });
        date.addEventListener("invalid", function (event) {
            console.log("Invalid format !");
        });

        date.addEventListener("blur", function (event) {
            this.placeholder = 'DD/MM/YYYY'
        });

        date.addEventListener("focus", function (event) {
            this.placeholder = ''
        });
    }
}