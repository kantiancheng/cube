let User_Name = sessionStorage.getItem("User_Name");

if (Account_login_status == "") {
    //未登录
    window.location = "./login/";
} else if (User_Name != "") {
    //登录
    console.log("Successful automatic login!");
} 