# Sistema de Gestión de Trámites UTEQ (SGTT) - Prototipo

## Descripción
Sistema web para la gestión de trámites estudiantiles de la Universidad Técnica Estatal de Quevedo (UTEQ). Este prototipo incluye un sistema completo de roles y permisos para diferentes tipos de usuarios.

## Características Principales

### 🎭 Sistema de Roles y Permisos

El sistema cuenta con 4 tipos de usuarios, cada uno con acceso específico a diferentes módulos y funcionalidades:

#### 1. Estudiante 👨‍🎓
- **Icono**: `fas fa-user-graduate`
- **Color**: Azul (#2196f3)
- **Acceso a módulos**:
  - Dashboard (vista personalizada)
  - Nueva Solicitud
  - Mis Trámites (seguimiento)
  - Asistente IA
  - Notificaciones
- **Permisos**:
  - ✅ Crear solicitudes
  - ✅ Ver sus propias solicitudes
  - ❌ Ver reportes avanzados
  - ❌ Administrar usuarios

#### 2. Coordinador 👨‍💼
- **Icono**: `fas fa-user-tie`
- **Color**: Naranja (#ff9800)
- **Acceso a módulos**:
  - Dashboard con estadísticas
  - Nueva Solicitud
  - Seguimiento (todas las solicitudes del programa)
  - Reportes
  - Asistente IA
  - Notificaciones
- **Permisos**:
  - ✅ Crear solicitudes
  - ✅ Ver todas las solicitudes del programa
  - ✅ Aprobar solicitudes
  - ✅ Ver reportes
  - ✅ Gestionar programa académico
  - ❌ Administrar usuarios del sistema

#### 3. Decano 👑
- **Icono**: `fas fa-user-crown`
- **Color**: Púrpura (#9c27b0)
- **Acceso a módulos**:
  - Dashboard ejecutivo
  - Seguimiento (todas las solicitudes de la facultad)
  - Reportes avanzados
  - Gestión de usuarios (facultad)
  - Asistente IA
  - Notificaciones
- **Permisos**:
  - ✅ Ver todas las solicitudes de la facultad
  - ✅ Aprobar solicitudes de alto nivel
  - ✅ Ver reportes avanzados
  - ✅ Gestionar usuarios de la facultad
  - ✅ Gestionar programas académicos
  - ❌ Acceso completo al sistema

#### 4. Administrador 🛡️
- **Icono**: `fas fa-user-shield`
- **Color**: Rojo (#f44336)
- **Acceso a módulos**:
  - Dashboard completo
  - Seguimiento (todas las solicitudes)
  - Sistema de administración
  - Reportes completos
  - Asistente IA
  - Notificaciones
- **Permisos**:
  - ✅ Acceso completo al sistema
  - ✅ Gestionar todos los usuarios
  - ✅ Ver registros del sistema
  - ✅ Gestionar roles y permisos
  - ✅ Configuración del sistema

## 🚀 Credenciales de Demostración

Para probar el sistema, puedes usar estas credenciales o los botones de acceso rápido en la página de login:

### Estudiantes
- Usuario: `estudiante` | Contraseña: `1111`
- Usuario: `maria.lopez` | Contraseña: `estudiante123`
- Usuario: `demo` | Contraseña: `demo`

### Coordinadores
- Usuario: `coordinador` | Contraseña: `coord123`
- Usuario: `coord.sistemas` | Contraseña: `sistemas123`

### Decanos
- Usuario: `decano` | Contraseña: `decano123`
- Usuario: `decano.ingenieria` | Contraseña: `ing123`

### Administradores
- Usuario: `admin` | Contraseña: `admin123`
- Usuario: `superadmin` | Contraseña: `super123`

## 🏗️ Estructura del Proyecto

```
SGTT-prototype/
├── index.html                  # Página principal
├── login.html                  # Página de inicio de sesión
├── dashboard.html              # Panel principal
├── registro-solicitudes.html   # Formulario de solicitudes
├── seguimiento.html           # Seguimiento de trámites
├── atencion-ia.html           # Asistente IA
├── reportes.html              # Reportes y estadísticas
├── notificaciones.html        # Centro de notificaciones
├── admin.html                 # Panel de administración
├── auth.js                    # Sistema de autenticación y permisos
├── login-script.js            # Lógica de login
├── script.js                  # Scripts generales
├── login-styles.css           # Estilos del login
├── demo-styles.css            # Estilos para botones de demo
├── styles.css                 # Estilos generales
└── recursos/
    ├── sidebar.js             # Sidebar adaptativo por rol
    ├── sidebar.css            # Estilos del sidebar
    ├── logo.png              # Logo UTEQ
    ├── fondo.png             # Imagen de fondo
    └── avatar-placeholder.png # Avatar predeterminado
```

## 🔧 Funcionalidades Técnicas

### Sistema de Autenticación
- Login con validación de credenciales
- Almacenamiento seguro de sesión en localStorage
- Verificación automática de autenticación en todas las páginas
- Sistema de logout con limpieza de sesión

### Sidebar Adaptativo
- Menú de navegación que se adapta según el rol del usuario
- Iconos y colores específicos por tipo de usuario
- Secciones organizadas según permisos
- Información del usuario en tiempo real

### Dashboard Personalizado
- Contenido que se muestra/oculta según permisos
- Estadísticas específicas por rol
- Acciones rápidas filtradas por permisos
- Widgets adaptativos

### Sistema de Permisos
- Control granular de funcionalidades
- Validación del lado del cliente
- Restricciones visuales automáticas
- API de permisos para desarrollo futuro

## 🎨 Interfaz de Usuario

- **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- **Tema UTEQ**: Colores institucionales (verde, naranja)
- **Iconografía Font Awesome**: Iconos modernos y consistentes
- **Animaciones sutiles**: Transiciones suaves en hover y clic
- **Notificaciones**: Sistema de alerts para feedback del usuario

## 🔮 Próximas Mejoras

- [ ] Integración con base de datos real
- [ ] Autenticación con JWT
- [ ] Sistema de notificaciones en tiempo real
- [ ] Carga de archivos para documentos
- [ ] Workflow de aprobación automatizado
- [ ] Reportes exportables (PDF, Excel)
- [ ] Dashboard con gráficos interactivos
- [ ] Sistema de mensajería interna
- [ ] Historial detallado de actividades
- [ ] API RESTful completa

## 📱 Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles (responsive)

## 🚀 Cómo Ejecutar

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Usa las credenciales de demostración para probar diferentes roles
4. Explora las funcionalidades según el tipo de usuario

## 👥 Equipo de Desarrollo

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **UI/UX**: Diseño moderno responsive
- **Iconografía**: Font Awesome 6.0
- **Prototipado**: Sistema completo de roles

---

**Desarrollado para la Universidad Técnica Estatal de Quevedo (UTEQ)**  
*Prototipo de Sistema de Gestión de Trámites Estudiantiles*

## Descripción del Proyecto

Este es un prototipo de aplicación web para un Sistema de Gestión de Trámites Estudiantiles que implementa todos los módulos requeridos con una interfaz moderna y funcional. El sistema está diseñado para facilitar la gestión de trámites académicos con características avanzadas como IA integrada, notificaciones inteligentes y reportes dinámicos.

## Módulos Implementados

### 1. **Módulo de Registro de Solicitudes** (`registro-solicitudes.html`)
- ✅ Formularios adaptativos por tipo de solicitud
- ✅ Validación de formato y tamaño de archivos
- ✅ Registro mediante cuenta institucional o correo personal
- ✅ Tipos de solicitudes: Certificados, Homologaciones, Reingresos, Cambios de programa, Grado, Otros

### 2. **Módulo de Atención Automatizada (IA)** (`atencion-ia.html`)
- ✅ Chatbot integrado basado en IA
- ✅ Respuestas a preguntas frecuentes
- ✅ Guía paso a paso para usuarios
- ✅ Escalamiento a atención humana
- ✅ Aprendizaje automático para mejora continua
- ✅ Disponibilidad 24/7

### 3. **Módulo de Seguimiento de Trámites** (`seguimiento.html`)
- ✅ Consulta de estado actualizado en tiempo real
- ✅ Comunicación directa con responsables
- ✅ Visualización de historial y documentos
- ✅ Timeline de progreso del trámite
- ✅ Sistema de mensajería integrado

### 4. **Módulo de Notificaciones Inteligentes** (`notificaciones.html`)
- ✅ Notificaciones configurables por evento
- ✅ Envío por correo electrónico y/o SMS
- ✅ Resumen semanal/mensual de estado
- ✅ Configuración personalizada de alertas
- ✅ Notificaciones push en navegador

### 5. **Módulo de Reportes y Analítica** (`reportes.html`)
- ✅ Reportes personalizados por fechas, estado, áreas, responsables
- ✅ Indicadores clave (KPIs): tiempo promedio de resolución, % solicitudes resueltas
- ✅ Dashboard con visualizaciones dinámicas
- ✅ Integración con herramientas de BI (Power BI)
- ✅ Gráficos interactivos con Chart.js

### 6. **Panel Administrativo** (`admin.html`)
- ✅ Gestión completa del sistema para administradores
- ✅ Gestión de usuarios y solicitudes
- ✅ Configuración de parámetros del sistema
- ✅ Administración del chatbot IA
- ✅ Auditoría y logs del sistema

## Estructura del Proyecto

```
prototipo/
├── index.html                    # Página principal con dashboard
├── registro-solicitudes.html     # Módulo de registro de solicitudes
├── atencion-ia.html             # Módulo de chatbot IA
├── seguimiento.html             # Módulo de seguimiento
├── notificaciones.html          # Módulo de notificaciones
├── reportes.html                # Módulo de reportes y analítica
├── admin.html                   # Panel administrativo
├── styles.css                   # Estilos CSS globales
├── script.js                    # JavaScript global
└── README.md                    # Documentación del proyecto
```

## Características Técnicas

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica y moderna
- **CSS3**: Diseño responsivo con gradientes y animaciones
- **JavaScript ES6+**: Funcionalidad interactiva
- **Chart.js**: Gráficos y visualizaciones
- **Font Awesome**: Iconografía
- **CSS Grid & Flexbox**: Layout responsivo

### Diseño Responsivo
- ✅ Adaptable a dispositivos móviles, tablets y desktop
- ✅ Navegación intuitiva y accesible
- ✅ Interfaz moderna con gradientes y efectos visuales

### Funcionalidades Implementadas
- ✅ Navegación entre páginas
- ✅ Formularios dinámicos según tipo de solicitud
- ✅ Simulación de chatbot con respuestas inteligentes
- ✅ Sistema de notificaciones con toast messages
- ✅ Visualización de datos con gráficos
- ✅ Panel administrativo completo
- ✅ Validación de archivos y formularios

## Cómo Usar el Sistema

### 1. Página Principal
- Accede a `index.html` para ver el dashboard principal
- Navega entre los módulos haciendo clic en las tarjetas

### 2. Registro de Solicitudes
- Selecciona el tipo de trámite
- Completa el formulario dinámico
- Carga los documentos requeridos
- Envía la solicitud

### 3. Seguimiento
- Consulta el estado de tus trámites
- Comunícate con responsables
- Descarga documentos listos

### 4. Atención IA
- Haz preguntas al chatbot
- Usa botones de consultas rápidas
- Recibe guía paso a paso

### 5. Notificaciones
- Configura tus preferencias
- Revisa notificaciones recientes
- Consulta resúmenes de actividad

### 6. Reportes
- Visualiza KPIs y estadísticas
- Genera reportes personalizados
- Exporta datos en diferentes formatos

### 7. Panel Administrativo
- Gestiona solicitudes pendientes
- Administra usuarios del sistema
- Configura parámetros
- Consulta logs de auditoría

## Instalación y Ejecución

1. **Descargar el proyecto**
   ```bash
   # Los archivos ya están en el directorio actual
   ```

2. **Abrir en navegador**
   - Abre `index.html` en cualquier navegador web moderno
   - No requiere servidor web (funciona con file://)

3. **Para desarrollo local (opcional)**
   ```bash
   # Usar Live Server en VS Code o cualquier servidor local
   python -m http.server 8000
   # Luego acceder a http://localhost:8000
   ```

## Características del Diseño

### Paleta de Colores
- **Primario**: Gradiente azul-púrpura (#667eea - #764ba2)
- **Secundario**: Blanco con sombras sutiles
- **Acentos**: Verde para éxito, Rojo para errores, Amarillo para advertencias
- **Administrativo**: Gradiente rojo-naranja (#ff6b6b - #ee5a24)

### Tipografía
- **Familia**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tamaños**: Jerárquicos para mejor legibilidad

### Efectos Visuales
- Gradientes de fondo
- Sombras y elevaciones
- Transiciones suaves
- Efectos hover interactivos
- Animaciones de entrada/salida

## Navegación del Sistema

### Flujo Principal
1. **Inicio** → Dashboard principal con resumen
2. **Registro** → Crear nueva solicitud
3. **Seguimiento** → Ver estado de trámites
4. **IA** → Obtener ayuda automatizada
5. **Notificaciones** → Configurar alertas
6. **Reportes** → Analizar datos
7. **Admin** → Gestión administrativa (solo administradores)

### Botones de Navegación
- Cada página tiene botón "Volver" para regresar
- Header con navegación global
- Links internos entre módulos relacionados

## Datos de Ejemplo

El sistema incluye datos ficticios para demostración:
- Solicitudes de ejemplo con diferentes estados
- Conversaciones de chatbot predefinidas
- Notificaciones simuladas
- Gráficos con datos representativos
- Usuarios y roles de ejemplo

## Próximos Pasos (No implementados en este prototipo)

Para convertir esto en un sistema completo, se necesitaría:
- Backend con base de datos
- Autenticación real de usuarios
- Integración con sistemas académicos existentes
- IA real entrenada con datos institucionales
- Integración con servicios de email/SMS
- API REST para comunicación frontend-backend
- Sistema de archivos para documentos
- Integración real con Power BI

## Compatibilidad

### Navegadores Soportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Móvil (320px - 767px)

---

**Desarrollado como prototipo funcional para Sistema de Gestión de Trámites Estudiantiles**
*Agosto 2025*
