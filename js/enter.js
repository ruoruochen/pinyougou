// 验证手机号
function checktel(tel) {
    // 获取元素
    var reg = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
    var tel_span = document.getElementById('tel_span')
    if (reg.test(tel) == false) {
        tel_span.className = 'wrong_tel';
        tel_span.innerHTML = ''
        return false
    }
    else {
        tel_span.className = 'right_tel';
        tel_span.innerHTML = ''
        return true;
    }
}

// 验证第一次密码
function checkpwd1(pwd1) {
    var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    var pwd1_span = document.getElementById('pwd1_span');
    if (reg2.test(pwd1) == false) {
        pwd1_span.className = 'wrong_pwd';
        return false
    }
    else {
        pwd1_span.className = 'right_pwd';
        return true;
    }
}