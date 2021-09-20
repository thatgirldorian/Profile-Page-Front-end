//function to change the user's name
function changeName() {
    document.getElementById("user-name").innerHTML = "Chinwe Kalu";
}

//function to remove user from request list
function removeRequest() {
    var removeButton = document.getElementById("req-btn");
    removeButton.classList.toggle("hidden");
}

function removeRequest2() {
    var removeButton = document.getElementById("req-btn2");
    removeButton.classList.toggle("hidden");
}
