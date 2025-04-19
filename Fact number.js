let searchInputEl = document.getElementById("userInput");
let spinnerElement = document.getElementById("spinner");
let factText = document.getElementById("fact");


function facts(event) {
    if (event.key === "Enter") {
        let value = searchInputEl.value;
        if (value === "") {
            alert("Enter a Number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + value;
        let options = {
            method: "GET"
        };
        spinnerElement.classList.remove("d-none");
        factText.classList.add("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                factText.classList.remove("d-none");
                spinnerElement.classList.add("d-none");
                let {
                    fact
                } = jsonData;
                factText.textContent = fact;
            });
    }


}



searchInputEl.addEventListener("keyup", facts);