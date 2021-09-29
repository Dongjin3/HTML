var registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener('click', register);

var email = document.getElementById("email");
var name1 = document.getElementById("name");
var nick = document.getElementById("nick");
var phone = document.getElementById("phone");

var eMsg = document.getElementById("eMsg");
var nameMsg = document.getElementById("nameMsg");
var nickMsg = document.getElementById("nickMsg");
var phoneMsg = document.getElementById("phoneMsg");
var notAccess = document.getElementById("notAccess");


function register() {
/** 이메일 검사 */
    if (email.value == "") {
        eMsg.innerText = "이메일을 입력해주세요";
    } else {
        eMsg.innerText = "";
    }
    /** 이메일 형식 검사 */
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.com+/;

    
    if (exptext.test(email.value) === false && email.value != "") {
        eMsg.innerText = "이메일 형식에 어긋납니다."
    }
    /** 이메일 형식 검사 */
/** 이메일 검사 */
/** 이름 검사 */
    if (name1.value == "") {
        nameMsg.innerText = "이름을 입력해주세요";
    } else {
        nameMsg.innerText = "";
    }
/** 이름 검사 */
/** 닉네임 검사 */
    if (nick.value == "") {
        nickMsg.innerText = "닉네임을 입력해주세요";
    } else {
        nickMsg.innerText = "";
    }
/** 닉네임 검사 */

/** 비밀번호 검사 */

    var pw1 = document.getElementById("pw1");
    var pw2 = document.getElementById("pw2");
    var pw1Msg = document.getElementById("pw1Msg");
    var pw2Msg = document.getElementById("pw2Msg");

    var pwa = pw1.value;
    var pwb = pw2.value;

    var num1 = pwa.search(/[0-9]/g);
    var eng1 = pwa.search(/[a-z]/ig);
    var spe1 = pwa.search(/[`~!@@#$%^&*|\\\'\";:\/?]/gi);
    var num2 = pwb.search(/[0-9]/g);
    var eng2 = pwb.search(/[a-z]/ig);
    var spe2 = pwb.search(/[`~!@@#$%^&*|\\\'\";:\/?]/gi);

    if(pwa.length < 6 && pwa.length > 0) {
        pw1Msg.innerText = "비밀번호는 최소 6자 이상입니다"
        return false;
    } else if(pwa.search(/\s/) != -1) {
        pw1Msg.innerText = "비밀번호는 공백없이 작성해주세요"
        return false;
    } else if(num1 < 0 && eng1 < 0 && spe1 < 0) {
        pw1Msg.innerText = "비밀번호를 입력해주세요";
        return false;
    } else {
        pw1Msg.innerText = "";
    }
/** 비밀번호 검사 */

/** 비밀번호 확인 검사 */
    if(pw1.value != pw2.value) {
        pw2Msg.innerText = "비밀번호가 일치하지 않습니다";
    } else {
        pw2Msg.innerText = "";
    }
/** 비밀번호 확인 검사 */
/** 전화번호 검사 */
    if (phone.length <= 0) {
        phoneMsg.innerText("전화번호를 입력해주세요");
    } else {
        phoneMsg.innerText("");
    }
}
/** 전화번호 검사 */

function checkEmail() {
    
}

function checkNick() {

}

function checkPw() {

}

function checkPw2() {

}

function checkPhone() {

}
