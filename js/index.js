function login() {  
    var username = document.getElementById('username').value;  
    var password = document.getElementById('password').value;  
  
    // 这里只是模拟验证过程，实际开发中应该与服务器进行交互  
    if (username === "hanzhuoru" && password === "521910") {  
        // 登录成功，跳转到另一个页面  
        window.location.href = "photo.html";  
    } else {  
        // 登录失败，可以在这里显示错误信息  
        alert("Username or password is incorrect!");  
    }  
}
