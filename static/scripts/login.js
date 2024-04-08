function showLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
}

function hideLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == document.getElementById('loginForm')){
        document.getElementById('loginForm').style.display = 'none';
    }
}
