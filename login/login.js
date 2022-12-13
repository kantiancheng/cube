if (sessionStorage.getItem("User_Name") != "" && sessionStorage.getItem("User_Name") != null) {
    window.location = "../";
}

function login() {
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    for (let i = 0; i < User_Library.length; i++) {
        if (User_Library[i][0].toLowerCase() == Username.toLowerCase()) {
            if (Password == Password[i][1]) {
                sessionStorage.setItem("User_Name", User_Library[i][0]);
                window.location.reload();
            } else if (i == (User_Library.length - 1)) { alert("wrong password"); }
        } else if (i == (User_Library.length - 1)){
            alert("username error");
        }
    }
}