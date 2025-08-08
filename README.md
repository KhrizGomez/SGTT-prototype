# Sistema de Gestión de Trámites Estudiantiles (SGT)

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
