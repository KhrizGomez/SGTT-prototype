// Script de autenticación compartido para todas las páginas

// Configuración de permisos por rol
const ROLE_PERMISSIONS = {
    estudiante: {
        name: 'Estudiante',
        icon: 'fas fa-user-graduate',
        modules: [
            'registro-solicitudes',
            'seguimiento',
            'atencion-ia',
            'notificaciones'
        ],
        features: {
            canCreateRequest: true,
            canViewOwnRequests: true,
            canViewReports: false,
            canManageUsers: false,
            canApproveRequests: false,
            canViewAllRequests: false,
            canViewStatistics: false
        }
    },
    coordinador: {
        name: 'Coordinador',
        icon: 'fas fa-user-tie',
        modules: [
            'registro-solicitudes',
            'seguimiento',
            'atencion-ia',
            'reportes',
            'notificaciones'
        ],
        features: {
            canCreateRequest: true,
            canViewOwnRequests: true,
            canViewReports: true,
            canManageUsers: false,
            canApproveRequests: true,
            canViewAllRequests: true,
            canViewStatistics: true,
            canManageProgram: true
        }
    },
    decano: {
        name: 'Decano',
        icon: 'fas fa-user-crown',
        modules: [
            'registro-solicitudes',
            'seguimiento',
            'atencion-ia',
            'reportes',
            'notificaciones',
            'admin'
        ],
        features: {
            canCreateRequest: true,
            canViewOwnRequests: true,
            canViewReports: true,
            canManageUsers: true,
            canApproveRequests: true,
            canViewAllRequests: true,
            canViewStatistics: true,
            canManageProgram: true,
            canManageFaculty: true,
            canViewAdvancedReports: true
        }
    },
    administrador: {
        name: 'Administrador',
        icon: 'fas fa-user-shield',
        modules: [
            'registro-solicitudes',
            'seguimiento',
            'atencion-ia',
            'reportes',
            'notificaciones',
            'admin'
        ],
        features: {
            canCreateRequest: true,
            canViewOwnRequests: true,
            canViewReports: true,
            canManageUsers: true,
            canApproveRequests: true,
            canViewAllRequests: true,
            canViewStatistics: true,
            canManageProgram: true,
            canManageFaculty: true,
            canViewAdvancedReports: true,
            canManageSystem: true,
            canAccessSystemLogs: true,
            canManageRoles: true
        }
    }
};

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

function getCurrentUserPermissions() {
    const auth = checkAuth();
    if (!auth) return null;
    
    return ROLE_PERMISSIONS[auth.userRole] || null;
}

function hasPermission(feature) {
    const permissions = getCurrentUserPermissions();
    return permissions && permissions.features[feature] === true;
}

function canAccessModule(moduleName) {
    const permissions = getCurrentUserPermissions();
    return permissions && permissions.modules.includes(moduleName);
}

function logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userSession');
        showNotification('Sesión cerrada exitosamente', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }
}

function updateUserInfo() {
    const auth = checkAuth();
    if (!auth) return;
    
    const permissions = getCurrentUserPermissions();
    if (!permissions) return;
    
    // Actualizar información del usuario en la interfaz
    const userInfo = document.getElementById('userInfo');
    if (userInfo && auth.userName) {
        userInfo.innerHTML = `<i class="${permissions.icon}"></i> ${auth.userName} (${permissions.name})`;
    }
    
    // Actualizar rol en el sidebar si existe
    const roleElement = document.getElementById('userRole');
    if (roleElement) {
        roleElement.textContent = permissions.name;
    }
    
    // Aplicar restricciones de módulos
    applyModuleRestrictions(permissions);
}

function applyModuleRestrictions(permissions) {
    // Ocultar/mostrar elementos según permisos
    
    // Ocultar tarjetas de estadísticas si no tiene permisos
    if (!hasPermission('canViewStatistics')) {
        const statCards = document.querySelectorAll('.admin-stat-card, .stats-grid');
        statCards.forEach(card => {
            if (card) card.style.display = 'none';
        });
    }
    
    // Ocultar acciones de administración
    if (!hasPermission('canManageUsers')) {
        const adminElements = document.querySelectorAll('.admin-only, [data-admin-only="true"]');
        adminElements.forEach(element => {
            if (element) element.style.display = 'none';
        });
    }
    
    // Ocultar reportes avanzados
    if (!hasPermission('canViewAdvancedReports')) {
        const advancedReports = document.querySelectorAll('.advanced-reports, [data-advanced-reports="true"]');
        advancedReports.forEach(element => {
            if (element) element.style.display = 'none';
        });
    }
    
    // Personalizar acciones rápidas según el rol
    personalizeQuickActions(permissions);
}

function personalizeQuickActions(permissions) {
    const quickActions = document.querySelector('.quick-actions');
    if (!quickActions) return;
    
    // Limpiar acciones existentes
    quickActions.innerHTML = '';
    
    // Agregar acciones según permisos
    const actions = [];
    
    if (hasPermission('canCreateRequest')) {
        actions.push({
            href: 'registro-solicitudes.html',
            icon: 'fas fa-plus',
            title: 'Nueva Solicitud',
            description: 'Crear una nueva solicitud de trámite'
        });
    }
    
    if (hasPermission('canViewOwnRequests') || hasPermission('canViewAllRequests')) {
        actions.push({
            href: 'seguimiento.html',
            icon: 'fas fa-search',
            title: 'Buscar Trámite',
            description: 'Consultar el estado de un trámite'
        });
    }
    
    actions.push({
        href: 'atencion-ia.html',
        icon: 'fas fa-robot',
        title: 'Ayuda IA',
        description: 'Asistente virtual para dudas'
    });
    
    if (hasPermission('canViewReports')) {
        actions.push({
            href: 'reportes.html',
            icon: 'fas fa-chart-bar',
            title: 'Ver Reportes',
            description: 'Estadísticas y análisis'
        });
    }
    
    if (hasPermission('canManageUsers')) {
        actions.push({
            href: 'admin.html',
            icon: 'fas fa-users-cog',
            title: 'Administrar Usuarios',
            description: 'Gestionar usuarios del sistema'
        });
    }
    
    actions.push({
        href: 'notificaciones.html',
        icon: 'fas fa-bell',
        title: 'Notificaciones',
        description: 'Ver notificaciones y alertas'
    });
    
    // Generar HTML para las acciones
    actions.forEach(action => {
        const actionElement = document.createElement('div');
        actionElement.className = 'action-item';
        actionElement.onclick = () => window.location.href = action.href;
        actionElement.innerHTML = `
            <div class="action-icon">
                <i class="${action.icon}"></i>
            </div>
            <div class="action-content">
                <h4>${action.title}</h4>
                <p>${action.description}</p>
            </div>
        `;
        quickActions.appendChild(actionElement);
    });
}

// Ejecutar verificación de autenticación al cargar cualquier página
document.addEventListener('DOMContentLoaded', function() {
    // Solo verificar en páginas que no sean login
    if (!window.location.pathname.includes('login.html')) {
        updateUserInfo();
    }
});

// Función para mostrar notificaciones (debe estar disponible en todas las páginas)
function showNotification(message, type = 'info') {
    // Crear elemento de notificación si no existe
    let notificationContainer = document.getElementById('notificationContainer');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notificationContainer';
        notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
        `;
        document.body.appendChild(notificationContainer);
    }
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
        position: relative;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notificationContainer.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}
