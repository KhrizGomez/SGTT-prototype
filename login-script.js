// Variables globales
let isPasswordVisible = false;

// Función para mostrar/ocultar contraseña
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    
    if (isPasswordVisible) {
        passwordInput.type = 'password';
        passwordIcon.className = 'fas fa-eye';
        isPasswordVisible = false;
    } else {
        passwordInput.type = 'text';
        passwordIcon.className = 'fas fa-eye-slash';
        isPasswordVisible = true;
    }
}

// Función para manejar el login
function handleLogin(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    
    if (!usuario || !password) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Mostrar loading
    const loginBtn = document.querySelector('.btn-iniciar-sesion');
    if (loginBtn) {
        loginBtn.classList.add('loading');
        loginBtn.innerHTML = '<i class="fas fa-spinner"></i> Iniciando sesión...';
    }
    
    // Simular validación de credenciales
    setTimeout(() => {
        // Credenciales de demostración para los 4 tipos de usuario
        const validCredentials = [
            // Estudiantes
            { user: 'estudiante', pass: '1111', role: 'estudiante', name: 'Juan Pérez' },
            { user: 'maria.lopez', pass: 'estudiante123', role: 'estudiante', name: 'María López' },
            { user: 'demo', pass: 'demo', role: 'estudiante', name: 'Usuario Demo' },
            
            // Coordinadores
            { user: 'coordinador', pass: 'coord123', role: 'coordinador', name: 'Dr. Carlos Rodríguez' },
            { user: 'coord.sistemas', pass: 'sistemas123', role: 'coordinador', name: 'Ing. Ana Martínez' },
            
            // Decanos
            { user: 'decano', pass: 'decano123', role: 'decano', name: 'Dr. Roberto Gonzalez' },
            { user: 'decano.ingenieria', pass: 'ing123', role: 'decano', name: 'Dr. Patricia Vargas' },
            
            // Administradores
            { user: 'admin', pass: 'admin123', role: 'administrador', name: 'Administrador Sistema' },
            { user: 'superadmin', pass: 'super123', role: 'administrador', name: 'Super Administrador' }
        ];
        
        const credential = validCredentials.find(cred => 
            cred.user === usuario && cred.pass === password
        );
        
        if (credential) {
            // Login exitoso
            showNotification('¡Inicio de sesión exitoso!', 'success');
            
            // Guardar datos de sesión en el formato correcto
            const userSession = {
                username: usuario,
                role: credential.role,
                loginTime: new Date().toISOString(),
                isLoggedIn: true
            };
            
            localStorage.setItem('userSession', JSON.stringify(userSession));
            // Mantener compatibilidad con código existente
            localStorage.setItem('userRole', credential.role);
            localStorage.setItem('userName', usuario);
            localStorage.setItem('isLoggedIn', 'true');
            
            // Redirigir después de un momento
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        } else {
            // Login fallido
            showNotification('Usuario o contraseña incorrectos', 'error');
            
            // Restaurar botón
            if (loginBtn) {
                loginBtn.classList.remove('loading');
                loginBtn.innerHTML = 'Iniciar Sesión';
            }
            
            // Limpiar campos
            document.getElementById('password').value = '';
        }
    }, 2000);
}

// Función para login como estudiante (demo)
function loginAsStudent() {
    // Login directo sin formulario
    const userSession = {
        username: 'estudiante',
        role: 'estudiante',
        loginTime: new Date().toISOString(),
        isLoggedIn: true
    };
    
    localStorage.setItem('userSession', JSON.stringify(userSession));
    localStorage.setItem('userRole', 'estudiante');
    localStorage.setItem('userName', 'estudiante');
    localStorage.setItem('isLoggedIn', 'true');
    
    showNotification('¡Inicio de sesión como estudiante exitoso!', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Función para login como admin (demo)
function loginAsAdmin() {
    // Login directo sin formulario
    const userSession = {
        username: 'admin',
        role: 'administrador',
        loginTime: new Date().toISOString(),
        isLoggedIn: true
    };
    
    localStorage.setItem('userSession', JSON.stringify(userSession));
    localStorage.setItem('userRole', 'administrador');
    localStorage.setItem('userName', 'admin');
    localStorage.setItem('isLoggedIn', 'true');
    
    showNotification('¡Inicio de sesión como administrador exitoso!', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Función para mostrar modal de crear cuenta
function showCreateAccount() {
    document.getElementById('createAccountModal').style.display = 'block';
}

// Función para mostrar modal de recuperar contraseña
function showForgotPassword() {
    document.getElementById('forgotPasswordModal').style.display = 'block';
}

// Función para cerrar modales
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para crear cuenta
function createAccount() {
    const newUsuario = document.getElementById('newUsuario').value;
    const email = document.getElementById('email').value;
    const cedula = document.getElementById('cedula').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userType = document.getElementById('userType').value;
    
    // Validaciones
    if (!newUsuario || !email || !cedula || !newPassword || !confirmPassword || !userType) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showNotification('Las contraseñas no coinciden', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
        return;
    }
    
    // Validar formato de email UTEQ
    if (!email.includes('@uteq.edu.ec') && !email.includes('@estudiante.uteq.edu.ec')) {
        showNotification('Debes usar un correo institucional de UTEQ', 'error');
        return;
    }
    
    // Validar cédula ecuatoriana (10 dígitos)
    if (!/^\d{10}$/.test(cedula)) {
        showNotification('La cédula debe tener 10 dígitos', 'error');
        return;
    }
    
    // Simular creación de cuenta
    showNotification('Cuenta creada exitosamente. Puedes iniciar sesión.', 'success');
    
    // Cerrar modal y limpiar formulario
    closeModal('createAccountModal');
    document.getElementById('createAccountForm').reset();
    
    // Llenar campos de login con los nuevos datos
    document.getElementById('usuario').value = newUsuario;
    document.getElementById('password').value = newPassword;
}

// Función para enviar email de recuperación
function sendRecoveryEmail() {
    const recoveryEmail = document.getElementById('recoveryEmail').value;
    
    if (!recoveryEmail) {
        showNotification('Por favor, ingresa tu correo electrónico', 'error');
        return;
    }
    
    if (!recoveryEmail.includes('@uteq.edu.ec') && !recoveryEmail.includes('@estudiante.uteq.edu.ec')) {
        showNotification('Debes usar un correo institucional de UTEQ', 'error');
        return;
    }
    
    // Simular envío de email
    showNotification('Se han enviado las instrucciones a tu correo electrónico', 'success');
    
    // Cerrar modal
    closeModal('forgotPasswordModal');
    document.getElementById('forgotPasswordForm').reset();
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 4000);
}

// Función para validar email en tiempo real
function validateEmail(input) {
    const email = input.value;
    const isValid = email.includes('@uteq.edu.ec') || email.includes('@estudiante.uteq.edu.ec');
    
    if (email && !isValid) {
        input.style.borderColor = '#f44336';
        input.style.background = '#ffebee';
    } else {
        input.style.borderColor = '#e0e0e0';
        input.style.background = '#f9f9f9';
    }
}

// Función para validar cédula en tiempo real
function validateCedula(input) {
    const cedula = input.value;
    const isValid = /^\d{10}$/.test(cedula);
    
    if (cedula && !isValid) {
        input.style.borderColor = '#f44336';
        input.style.background = '#ffebee';
    } else {
        input.style.borderColor = '#e0e0e0';
        input.style.background = '#f9f9f9';
    }
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Manejar tecla Enter en campos
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        
        // Si está en el formulario de login
        if (activeElement.closest('#loginForm')) {
            handleLogin(event);
        }
        // Si está en modal de crear cuenta
        else if (activeElement.closest('#createAccountForm')) {
            createAccount();
        }
        // Si está en modal de recuperar contraseña
        else if (activeElement.closest('#forgotPasswordForm')) {
            sendRecoveryEmail();
        }
    }
});

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si ya está logueado
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showNotification('Ya tienes una sesión activa', 'info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return;
    }
    
    // Agregar validaciones en tiempo real
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('input', () => validateEmail(input));
    });
    
    const cedulaInput = document.getElementById('cedula');
    if (cedulaInput) {
        cedulaInput.addEventListener('input', () => validateCedula(cedulaInput));
    }
    
    // Efecto de escritura en el título
    const title = document.querySelector('.logo-container h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.opacity = '1';
        
        let i = 0;
        const typeEffect = setInterval(() => {
            title.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typeEffect);
            }
        }, 50);
    }
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        showNotification('Bienvenido al Sistema de Gestión de Trámites UTEQ', 'info');
    }, 1000);
});

// Función para login como coordinador (demo)
function loginAsCoordinador() {
    const userSession = {
        username: 'coordinador',
        role: 'coordinador',
        loginTime: new Date().toISOString(),
        isLoggedIn: true
    };
    
    localStorage.setItem('userSession', JSON.stringify(userSession));
    localStorage.setItem('userRole', 'coordinador');
    localStorage.setItem('userName', 'coordinador');
    localStorage.setItem('isLoggedIn', 'true');
    
    showNotification('¡Inicio de sesión como coordinador exitoso!', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Función para login como decano (demo)
function loginAsDecano() {
    const userSession = {
        username: 'decano',
        role: 'decano',
        loginTime: new Date().toISOString(),
        isLoggedIn: true
    };
    
    localStorage.setItem('userSession', JSON.stringify(userSession));
    localStorage.setItem('userRole', 'decano');
    localStorage.setItem('userName', 'decano');
    localStorage.setItem('isLoggedIn', 'true');
    
    showNotification('¡Inicio de sesión como decano exitoso!', 'success');
    
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

// Agregar animación CSS para slideOutRight
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
