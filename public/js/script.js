// console.log("Message from client side script");

var weatherForm = document.querySelector("form");
var search = document.querySelector("input");
var messageOne = document.querySelector("#msg1");
var messageTwo = document.querySelector("#msg2");

var address = (str) => {
    fetch(`http://localhost:3000/weather?address=${str}`).then((response) => {
        response.json().then((data) => {
            if (data.error) messageOne.textContent = data.error;
            else {
                messageOne.textContent = data.forecast;
                messageTwo.textContent = data.location;
            }
        });
    });
};

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var location = search.value;

    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    address(location);
});
