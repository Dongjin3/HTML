<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"/>
    <link href="image/icon_sample.png" rel="shortcut icon" type="image/x-icon">
    <title>자취왕</title>
</head>
<body id="body">
    <header id="top-bar">
        <div id="top-bar-wrap">
            <h4 id="top-bar-title" class="top-bar-shadow">
                <a href="main.html">
                    <img id="logo" alt="자취왕" src="image/logo.PNG">
                </a>
                <span class="membership">membership</span>
            </h4>
        </div>
    </header>
    <div class="page-container">
        <div class="login-form-container shadow">
            <div class="login-form-right-side">
                <div class="top-logo-wrap">
                    
                </div>
                <h1>로그인 해서 쏘위를 시작해요!</h1>
                <p>쏘위에서는 자취인들끼리 소통하고 공동구매를 할 수 있습니다. 공동구매를 통해 부담을 줄이고 레벨도<br>올려보세요!</p>
            </div>
            <div class="login-form-left-side">
                <div class="login-input-container">
                    <div class="login-input-wrap">
                        <i class="far fa-envelope"></i>
                        <input placeholder="Email" type="text" id="userid">
                    </div>
                    
                    <div class="login-input-wrap">
                        <i class="fas fa-key"></i>
                        <input placeholder="Password" type="password" id="userpw">
                    </div>
                </div>
                <br>
                <p id="fail" style="display : none"></p>
                <div class="login-btn-wrap">
                    <button class="login-btn" id="loginButton">로그인</button>
                    <a href="#">암호를 잊으셨나요?</a>
                    <a href="/auth/register.jsp/">회원가입</a>
                </div>
            </div>
        </div>
    </div>
</body>
<script>
var loginButton = document.getElementById("loginButton");
loginButton.addEventListener('click', loginFunc);

function loginFunc() {
    var userid = document.getElementById("userid").value;
    var userpw = document.getElementById("userpw").value;
    var not = document.getElementById("fail");
    
    if(userid == "") {
        not.innerText = "이메일을 입력하세요";
        not.style.display = "block";
    } else if(userid != "" && userpw == "") {
        not.innerText = "암호를 입력하세요";
        not.style.display = "block";
    } else if(userid,userpw != ""){
        not.style.display = "none";
    } else {
        return;
    }
}
</script>
</html>
