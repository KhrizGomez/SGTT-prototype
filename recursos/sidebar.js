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

  function template(){
    return [
      '<div class="sidebar-header">',
      '  <div class="logo">',
      '    <img src="recursos/logo.png" alt="UTEQ" class="logo-img" />',
      '  </div>',
      '</div>',
      '<nav class="sidebar-nav">',
      '  <div class="nav-section">',
      '    <h3 class="nav-section-title">PRINCIPAL</h3>',
      '    <a href="dashboard.html" class="nav-item" data-key="dashboard"><i class="fas fa-home"></i>Dashboard</a>',
      '    <a href="registro-solicitudes.html" class="nav-item" data-key="registro"><i class="fas fa-file-alt"></i>Registrar Solicitud</a>',
      '    <a href="seguimiento.html" class="nav-item" data-key="seguimiento"><i class="fas fa-search"></i>Seguimiento</a>',
      '  </div>',
      '  <div class="nav-section">',
      '    <h3 class="nav-section-title">HERRAMIENTAS</h3>',
      '    <a href="atencion-ia.html" class="nav-item" data-key="ia"><i class="fas fa-robot"></i>Asistente IA</a>',
      '    <a href="reportes.html" class="nav-item" data-key="reportes"><i class="fas fa-chart-line"></i>Reportes</a>',
      '    <a href="notificaciones.html" class="nav-item" data-key="notificaciones"><i class="fas fa-bell"></i>Notificaciones</a>',
      '  </div>',
      '  <div class="nav-section">',
      '    <h3 class="nav-section-title">SISTEMA</h3>',
      '    <a href="admin.html" class="nav-item" data-key="admin"><i class="fas fa-cog"></i>Administración</a>',
      '  </div>',
      '</nav>',
      '<div class="sidebar-footer">',
      '  <div class="user-info">',
      '    <div class="user-avatar">',
      '      <i class="fas fa-user"></i>',
      '    </div>',
      '    <div class="user-details">',
      '      <div class="user-name">Estudiante UTEQ</div>',
      '      <div class="user-role">Usuario Activo</div>',
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

  // Función global de logout
  function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      // Limpiar sesión
      localStorage.removeItem('userSession');
      localStorage.removeItem('token');
      sessionStorage.clear();
      
      // Redireccionar al login
      window.location.href = 'login.html';
    }
  }

  window.initSidebar = initSidebar;
  window.logout = logout;
})();
