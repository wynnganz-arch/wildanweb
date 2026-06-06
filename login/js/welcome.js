document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("username");

    const userInfo = document.getElementById("userInfo");
    const authBtn = document.getElementById("authBtn");

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    if (!userInfo || !authBtn) {
        console.error("userInfo atau authBtn tidak ditemukan");
        return;
    }

    if (user) {
        userInfo.textContent = "Halo, " + user;
        authBtn.textContent = "Logout";
        authBtn.onclick = logout;
    } else {
        authBtn.textContent = "Login";
        authBtn.onclick = goLogin;
    }
});