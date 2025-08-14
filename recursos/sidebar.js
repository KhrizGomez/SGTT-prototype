(function(){
  function inferActiveKey(){
    var p = (location.pathname || '').toLowerCase();
    if (p.indexOf('dashboard') !== -1) return 'dashboard';
    if (p.indexOf('registro-solicitudes') !== -1) return 'registro';
    if (p.indexOf('seguimiento') !== -1) return 'seguimiento';
    if (p.indexOf('atencion-ia') !== -1) return 'ia';
    if (p.indexOf('reportes') !== -1) return 'reportes';
    if (p.indexOf('notificaciones') !== -1) return 'notificaciones';
    if (p.indexOf('admin') !== -1) return 'admin';
    return '';
  }

  function getUserInfo(){
    var userRole = localStorage.getItem('userRole') || 'estudiante';
    var userName = localStorage.getItem('userName') || 'Usuario';
    return { role: userRole, name: userName };
  }

  function getRoleConfig(role){
    var configs = {
      estudiante: {
        name: 'Estudiante',
        icon: 'fas fa-user-graduate',
        color: '#2196f3',
        sections: [
          {
            title: 'PRINCIPAL',
            items: [
              { key: 'dashboard', href: 'dashboard.html', icon: 'fas fa-home', label: 'Dashboard' },
              { key: 'registro', href: 'registro-solicitudes.html', icon: 'fas fa-file-alt', label: 'Nueva Solicitud' },
              { key: 'seguimiento', href: 'seguimiento.html', icon: 'fas fa-search', label: 'Mis Trámites' }
            ]
          },
          {
            title: 'HERRAMIENTAS',
            items: [
              { key: 'ia', href: 'atencion-ia.html', icon: 'fas fa-robot', label: 'Asistente IA' },
              { key: 'notificaciones', href: 'notificaciones.html', icon: 'fas fa-bell', label: 'Notificaciones' }
            ]
          }
        ]
      },
      coordinador: {
        name: 'Coordinador',
        icon: 'fas fa-user-tie',
        color: '#ff9800',
        sections: [
          {
            title: 'PRINCIPAL',
            items: [
              { key: 'dashboard', href: 'dashboard.html', icon: 'fas fa-home', label: 'Dashboard' },
              { key: 'registro', href: 'registro-solicitudes.html', icon: 'fas fa-file-alt', label: 'Nueva Solicitud' },
              { key: 'seguimiento', href: 'seguimiento.html', icon: 'fas fa-search', label: 'Seguimiento' }
            ]
          },
          {
            title: 'GESTIÓN',
            items: [
              { key: 'reportes', href: 'reportes.html', icon: 'fas fa-chart-line', label: 'Reportes' },
              { key: 'notificaciones', href: 'notificaciones.html', icon: 'fas fa-bell', label: 'Notificaciones' }
            ]
          },
          {
            title: 'HERRAMIENTAS',
            items: [
              { key: 'ia', href: 'atencion-ia.html', icon: 'fas fa-robot', label: 'Asistente IA' }
            ]
          }
        ]
      },
      decano: {
        name: 'Decano',
        icon: 'fas fa-user-crown',
        color: '#9c27b0',
        sections: [
          {
            title: 'PRINCIPAL',
            items: [
              { key: 'dashboard', href: 'dashboard.html', icon: 'fas fa-home', label: 'Dashboard' },
              { key: 'seguimiento', href: 'seguimiento.html', icon: 'fas fa-search', label: 'Seguimiento' }
            ]
          },
          {
            title: 'GESTIÓN ACADÉMICA',
            items: [
              { key: 'reportes', href: 'reportes.html', icon: 'fas fa-chart-line', label: 'Reportes' },
              { key: 'admin', href: 'admin.html', icon: 'fas fa-users-cog', label: 'Gestión Usuarios' }
            ]
          },
          {
            title: 'HERRAMIENTAS',
            items: [
              { key: 'ia', href: 'atencion-ia.html', icon: 'fas fa-robot', label: 'Asistente IA' },
              { key: 'notificaciones', href: 'notificaciones.html', icon: 'fas fa-bell', label: 'Notificaciones' }
            ]
          }
        ]
      },
      administrador: {
        name: 'Administrador',
        icon: 'fas fa-user-shield',
        color: '#f44336',
        sections: [
          {
            title: 'PRINCIPAL',
            items: [
              { key: 'dashboard', href: 'dashboard.html', icon: 'fas fa-home', label: 'Dashboard' },
              { key: 'seguimiento', href: 'seguimiento.html', icon: 'fas fa-search', label: 'Seguimiento' }
            ]
          },
          {
            title: 'ADMINISTRACIÓN',
            items: [
              { key: 'admin', href: 'admin.html', icon: 'fas fa-cog', label: 'Sistema' },
              { key: 'reportes', href: 'reportes.html', icon: 'fas fa-chart-line', label: 'Reportes' }
            ]
          },
          {
            title: 'HERRAMIENTAS',
            items: [
              { key: 'ia', href: 'atencion-ia.html', icon: 'fas fa-robot', label: 'Asistente IA' },
              { key: 'notificaciones', href: 'notificaciones.html', icon: 'fas fa-bell', label: 'Notificaciones' }
            ]
          }
        ]
      }
    };
    return configs[role] || configs.estudiante;
  }

  function buildSectionsHTML(sections, activeKey){
    return sections.map(function(section){
      var itemsHTML = section.items.map(function(item){
        var activeClass = item.key === activeKey ? ' active' : '';
        return '<a href="' + item.href + '" class="nav-item' + activeClass + '" data-key="' + item.key + '">' +
               '<i class="' + item.icon + '"></i>' + item.label + '</a>';
      }).join('');
      
      return '<div class="nav-section">' +
             '<h3 class="nav-section-title">' + section.title + '</h3>' +
             itemsHTML +
             '</div>';
    }).join('');
  }

  function template(){
    var userInfo = getUserInfo();
    var roleConfig = getRoleConfig(userInfo.role);
    var activeKey = inferActiveKey();
    
    return [
      '<div class="sidebar-header">',
      '  <div class="logo">',
      '    <img src="recursos/logo.png" alt="UTEQ" class="logo-img" />',
      '  </div>',
      '</div>',
      '<nav class="sidebar-nav">',
      buildSectionsHTML(roleConfig.sections, activeKey),
      '</nav>',
      '<div class="sidebar-footer">',
      '  <div class="user-info">',
      '    <div class="user-avatar" style="color: ' + roleConfig.color + '">',
      '      <i class="' + roleConfig.icon + '"></i>',
      '    </div>',
      '    <div class="user-details">',
      '      <div class="user-name">' + userInfo.name + '</div>',
      '      <div class="user-role" id="userRole">' + roleConfig.name + '</div>',
      '    </div>',
      '  </div>',
      '  <button class="logout-btn" onclick="logout()">',
      '    <i class="fas fa-sign-out-alt"></i>',
      '  </button>',
      '</div>'
    ].join('');
  }

  function initSidebar(options){
    try{
      var activeKey = (options && options.active) || inferActiveKey();
      var root = document.getElementById('sidebar-root');
      if(!root){
        console.warn('[sidebar] #sidebar-root no encontrado');
        return;
      }
      root.innerHTML = template();
      root.className = 'sidebar sidebar'; // Doble clase para especificidad CSS
      
      // marcar activo
      var items = root.querySelectorAll('.nav-item');
      items.forEach(function(a){
        var key = a.getAttribute('data-key');
        if(key === activeKey){ 
          a.classList.add('active');
        }
      });
    }catch(err){ console.error('[sidebar] init error', err); }
  }

  // Función global de logout mejorada
  function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      // Limpiar sesión
      localStorage.removeItem('userSession');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');
      sessionStorage.clear();
      
      // Redireccionar al login
      window.location.href = 'login.html';
    }
  }

  window.initSidebar = initSidebar;
  window.logout = logout;
})();
