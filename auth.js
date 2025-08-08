// Script de autenticación compartido para todas las páginas
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return false;
    }
    
    return { userName, userRole };
}

function logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        showNotification('Sesión cerrada exitosamente', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
}

function updateUserInfo() {
    const auth = checkAuth();
    if (!auth) return;
    
    const userInfo = document.getElementById('userInfo');
    if (userInfo && auth.userName) {
        userInfo.innerHTML = `<i class="fas fa-user"></i> ${auth.userName}`;
    }
    
    // Ocultar panel admin si no es admin
    if (auth.userRole !== 'admin') {
        const adminCards = document.querySelectorAll('.admin-card, .admin-module-card');
        adminCards.forEach(card => {
            if (card) card.style.display = 'none';
        });
    }
}

// Ejecutar verificación de autenticación al cargar cualquier página
document.addEventListener('DOMContentLoaded', function() {
    // Solo verificar en páginas que no sean login
    if (!window.location.pathname.includes('login.html')) {
        updateUserInfo();
    }
});
