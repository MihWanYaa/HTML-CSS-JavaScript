// ----------------------Signup Area ------------------------
var account = [["minhquan", "Quan1234"]]

function checkPass() {
    var pCreate = document.getElementById("passwordCreate").value.trim();
    var pCheck = document.getElementById("passwordCheck").value.trim();
    // Check pass bằng nhau
    if (pCheck == "" || pCreate == "") {
        document.getElementsByClassName("signup_pass_check_equal")[0].style.color = "red";
        document.getElementsByClassName('signup_pass_check_equal')[0].innerText = "Mật khẩu không khớp";
        document.getElementById("passwordCheck").style.borderColor = "red"; 
        return false;
    }
}

function signupPassCheck() { 
    var pCreate = document.getElementById("passwordCreate").value.trim();
    var pCheck = document.getElementById("passwordCheck").value.trim();
    console.log(pCreate)
    console.log(pCheck)
    if (pCheck == "" || pCreate == "") {
        document.getElementsByClassName("signup_pass_check_equal")[0].style.color = "red";
        document.getElementsByClassName('signup_pass_check_equal')[0].innerText = "Mật khẩu không khớp";
        document.getElementById("passwordCheck").style.borderColor = "red"; 
        return false;
    }
    else if (pCreate == pCheck){
        document.getElementsByClassName("signup_pass_check_equal")[0].style.color = "rgb(0, 255, 0)";
        document.getElementsByClassName("signup_pass_check_equal")[0].innerText = "Mật khẩu khớp";
        document.getElementById("passwordCheck").style.borderColor = "rgb(0, 255, 0)"; 
    }    
    else{
        document.getElementsByClassName("signup_pass_check_equal")[0].style.color = "red";
        document.getElementsByClassName('signup_pass_check_equal')[0].innerText = "Mật khẩu không khớp";
        document.getElementById("passwordCheck").style.borderColor = "red"; 
    }
}

function signup_allCheck() {
    var checkBox = document.getElementById("flexCheckDefault").checked;
    var nCheck = document.getElementById("nameCreate").value.trim();
    var uCheck = document.getElementById("usernameCreate").value.trim();
    var tCheck = document.getElementById("telCreate").value.trim();
    var pCreate = document.getElementById("passwordCreate").value.trim();
    var pCheck = document.getElementById("passwordCheck").value.trim();
    if (nCheck == "" || uCheck == "" || tCheck == "" || pCreate == "" || pCheck == "" || checkBox == false) {
        return alert("Bạn điền gần đủ thông tin rồi cố lên!");
    }
    window.location="./signin.html"
}

//  ------------------------Sign in area-----------
function check_account() {
    var uSignin = document.getElementById("signin_username").value.trim();
    var pSignin = document.getElementById("signin_password").value.trim();
    for (let index = 0; index < account.length; index++) {
        const element = account[index];
        if (uSignin==element[0] && pSignin==element[1]) {
            document.getElementById("signin_btn").setAttribute("data-bs-target", "#MyModal")
            break;
        }
        else{
            document.getElementById("signin_btn").removeAttribute("data-bs-target")
        }
    }
}
function signin_allCheck() {
    var uSignin = document.getElementById("signin_username").value.trim();
    var pSignin = document.getElementById("signin_password").value.trim();

    if (uSignin == "" || pSignin == "") {
        return alert("Bạn điền gần đủ thông tin rồi cố lên!");
    }
    check_account()
}

function signinPassCheck() {
    check_account()
}