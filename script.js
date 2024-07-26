document.addEventListener('DOMContentLoaded', function () {
    // This function will be executed after the DOM is fully loaded
    var buttons = document.querySelectorAll('.btn-custom');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            login();
            this.classList.toggle('highlight');
        });
    });

    function login() {
        // Your login logic goes here
        console.log('Login function called');
    }
});
