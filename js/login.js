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
    /* ID, 암호 확인 레이어 팝업 예시 */
    /* if(userid != "admin" && userpw != "1234" && userid != "" && userpw != "") {
       fail1.style.display = "flex";
       fail2.style.display = "flex";
       mask.style.display = "block";
    } */
    /* 입력하신 회원 정보를 찾지 못했습니다. ID와 비밀번호를 다시 확인해주세요. */
    
}

/** 팝업 닫기 */

function remove() {
    var remove1 = document.getElementById("layer1");
    var mask = document.getElementById("mask");

    remove1.style.display = "none";
    mask.style.display = "none";
}
