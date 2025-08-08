// Función para navegar entre páginas
function navigateToPage(page) {
    window.location.href = page;
}

// Función para ir atrás
function goBack() {
    window.history.back();
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Funciones para formularios
function submitForm(formType) {
    showNotification(`${formType} enviado exitosamente`, 'success');
    setTimeout(() => {
        navigateToPage('seguimiento.html');
    }, 1500);
}

// Función para chat bot
function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    
    if (input && input.value.trim()) {
        // Mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = input.value;
        messages.appendChild(userMessage);
        
        const userInput = input.value.toLowerCase();
        input.value = '';
        
        // Simular respuesta del bot
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            
            // Respuestas predefinidas basadas en palabras clave
            let response = getAIResponse(userInput);
            
            botMessage.textContent = response;
            messages.appendChild(botMessage);
            
            // Scroll al final
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
        
        // Scroll al final
        messages.scrollTop = messages.scrollHeight;
    }
}

// Respuestas del chatbot basadas en palabras clave
function getAIResponse(input) {
    const responses = {
        'solicitud': 'Para crear una nueva solicitud, ve al módulo "Registro de Solicitudes" desde el menú principal. Allí encontrarás formularios específicos para cada tipo de trámite.',
        'certificado': 'Los certificados académicos se procesan en 3-5 días hábiles. Puedes solicitarlos en el módulo de Registro de Solicitudes.',
        'estado': 'Puedes consultar el estado de tus trámites en el módulo "Seguimiento de Trámites". Allí verás el progreso en tiempo real.',
        'documento': 'Los documentos deben estar en formato PDF o JPG, con un tamaño máximo de 5MB. Asegúrate de que sean legibles.',
        'tiempo': 'Los tiempos de procesamiento varían según el tipo de trámite: Certificados (3-5 días), Homologaciones (10-15 días), Solicitudes especiales (5-10 días).',
        'requisitos': 'Los requisitos específicos dependen del tipo de trámite. En cada formulario encontrarás la lista completa de documentos necesarios.',
        'contacto': 'Puedes contactar directamente con los responsables desde el módulo de Seguimiento, o enviar un correo a tramites@universidad.edu',
        'notificaciones': 'Las notificaciones se envían por correo electrónico y SMS. Puedes configurar tus preferencias en el módulo de Notificaciones.',
        'ayuda': 'Estoy aquí para ayudarte con cualquier duda sobre el sistema. También puedes consultar nuestra sección de preguntas frecuentes.',
        'login': 'Para acceder al sistema, utiliza tu número de documento y la contraseña proporcionada por la institución.'
    };
    
    // Buscar respuesta basada en palabras clave
    for (let keyword in responses) {
        if (input.includes(keyword)) {
            return responses[keyword];
        }
    }
    
    // Respuesta por defecto
    return 'Gracias por tu consulta. ¿Podrías ser más específico? Puedo ayudarte con información sobre solicitudes, certificados, estado de trámites, documentos requeridos, tiempos de procesamiento y más.';
}

// Función para manejar Enter en el chat
function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Función para actualizar estado de trámite
function updateStatus(tramiteId, newStatus) {
    showNotification(`Estado del trámite ${tramiteId} actualizado a: ${newStatus}`, 'success');
    
    // Actualizar en la interfaz
    const statusElement = document.getElementById(`status-${tramiteId}`);
    if (statusElement) {
        statusElement.textContent = newStatus;
        statusElement.className = `status ${newStatus.toLowerCase().replace(' ', '-')}`;
    }
}

// Función para descargar documento
function downloadDocument(docName) {
    showNotification(`Descargando ${docName}...`, 'info');
    // Aquí se implementaría la lógica real de descarga
}

// Función para enviar mensaje a responsable
function sendMessageToResponsible(tramiteId) {
    const message = document.getElementById('messageText').value;
    if (message.trim()) {
        showNotification('Mensaje enviado al responsable', 'success');
        document.getElementById('messageText').value = '';
        
        // Simular respuesta
        setTimeout(() => {
            addMessageToHistory('Responsable', 'Hemos recibido tu consulta. Te responderemos en las próximas 24 horas.');
        }, 2000);
    }
}

// Función para agregar mensaje al historial
function addMessageToHistory(sender, message) {
    const historyContainer = document.getElementById('messageHistory');
    if (historyContainer) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-item';
        messageDiv.innerHTML = `
            <div class="message-sender">${sender}</div>
            <div class="message-content">${message}</div>
            <div class="message-time">${new Date().toLocaleString()}</div>
        `;
        historyContainer.appendChild(messageDiv);
    }
}

// Función para configurar notificaciones
function saveNotificationSettings() {
    showNotification('Configuración de notificaciones guardada', 'success');
}

// Función para generar reporte
function generateReport() {
    showNotification('Generando reporte... Esto puede tomar unos minutos.', 'info');
    
    setTimeout(() => {
        showNotification('Reporte generado exitosamente', 'success');
    }, 3000);
}

// Función para exportar datos
function exportData(format) {
    showNotification(`Exportando datos en formato ${format.toUpperCase()}...`, 'info');
    
    setTimeout(() => {
        showNotification(`Archivo ${format.toUpperCase()} descargado`, 'success');
    }, 2000);
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar estilos para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .status {
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
        }
        
        .status.en-revision {
            background: #fef3c7;
            color: #92400e;
        }
        
        .status.aprobado {
            background: #d1fae5;
            color: #065f46;
        }
        
        .status.rechazado {
            background: #fee2e2;
            color: #991b1b;
        }
        
        .status.pendiente {
            background: #e0e7ff;
            color: #3730a3;
        }
        
        .message-item {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        
        .message-sender {
            font-weight: 600;
            color: #667eea;
            margin-bottom: 0.5rem;
        }
        
        .message-content {
            color: #333;
            margin-bottom: 0.5rem;
        }
        
        .message-time {
            font-size: 0.8rem;
            color: #666;
        }
    `;
    document.head.appendChild(style);
});

// Función para subir archivo
function uploadFile(input) {
    const file = input.files[0];
    if (file) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            showNotification('El archivo es demasiado grande. Máximo 5MB permitido.', 'error');
            input.value = '';
            return;
        }
        
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
            showNotification('Tipo de archivo no permitido. Use PDF, JPG o PNG.', 'error');
            input.value = '';
            return;
        }
        
        showNotification(`Archivo "${file.name}" cargado exitosamente`, 'success');
    }
}
