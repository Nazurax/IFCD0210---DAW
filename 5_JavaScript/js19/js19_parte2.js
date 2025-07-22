// ========================
// CONFIGURACIÓN INICIAL
// ========================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Ejercicio JS19 - Formulario iniciado');
    
    // Inicializar validación
    initializeFormValidation();
    
    // Configurar eventos
    setupEventListeners();
    
    // Configurar fecha máxima (hoy)
    setMaxDate();
});

// ========================
// CONFIGURACIÓN DE EVENTOS
// ========================

function setupEventListeners() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input');
    
    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this);
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    // Envío del formulario
    form.addEventListener('submit', handleFormSubmit);
    
    // Reset del formulario
    form.addEventListener('reset', function() {
        clearAllErrors();
        hideResult();
        console.log('🔄 Formulario reiniciado');
    });
}

// ========================
// CONFIGURACIÓN DE FECHA
// ========================

function setMaxDate() {
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    fechaNacimiento.setAttribute('max', todayString);
}

// ========================
// VALIDACIÓN DE CAMPOS
// ========================

function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    
    switch(fieldName) {
        case 'nombre':
            return validateRequired(field, 'El nombre es obligatorio');
            
        case 'primerApellido':
            return validateRequired(field, 'El primer apellido es obligatorio');
            
        case 'segundoApellido':
            return validateRequired(field, 'El segundo apellido es obligatorio');
            
        case 'telefono':
            return validatePhone(field);
            
        case 'fechaNacimiento':
            return validateDate(field);
            
        case 'email':
            return validateEmail(field);
            
        case 'privacidad':
            return validatePrivacy(field);
            
        default:
            return true;
    }
}

function validateRequired(field, message) {
    if (field.value.trim() === '') {
        showError(field, message);
        return false;
    }
    markValid(field);
    return true;
}

function validatePhone(field) {
    const phoneRegex = /^\d{9}$/;
    const value = field.value.trim();
    
    if (value === '') {
        showError(field, 'El teléfono es obligatorio');
        return false;
    }
    
    if (!phoneRegex.test(value)) {
        showError(field, 'El teléfono debe tener exactamente 9 cifras');
        return false;
    }
    
    markValid(field);
    return true;
}

function validateDate(field) {
    const value = field.value;
    
    if (value === '') {
        showError(field, 'La fecha de nacimiento es obligatoria');
        return false;
    }
    
    const selectedDate = new Date(value);
    const today = new Date();
    
    if (selectedDate > today) {
        showError(field, 'La fecha de nacimiento no puede ser futura');
        return false;
    }
    
    markValid(field);
    return true;
}

function validateEmail(field) {
    const value = field.value.trim();
    
    // El email es opcional
    if (value === '') {
        clearError(field);
        return true;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(field, 'El formato del email no es válido');
        return false;
    }
    
    markValid(field);
    return true;
}

function validatePrivacy(field) {
    if (!field.checked) {
        showError(field, 'Debe aceptar la política de privacidad');
        return false;
    }
    
    clearError(field);
    return true;
}

// ========================
// VALIDACIÓN COMPLETA DEL FORMULARIO
// ========================

function validateForm() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// ========================
// MANEJO DEL ENVÍO
// ========================

function handleFormSubmit(event) {
    event.preventDefault();
    
    console.log('📝 Intentando enviar formulario...');
    
    // Validar todo el formulario
    if (!validateForm()) {
        console.log('❌ Formulario inválido');
        showResult('Por favor, corrige los errores en el formulario', 'error');
        
        // Hacer shake en el formulario
        const form = document.getElementById('registrationForm');
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
        
        return;
    }
    
    // Verificar que se haya seleccionado la cláusula de privacidad
    const privacidadCheck = document.getElementById('privacidad');
    if (!privacidadCheck.checked) {
        showResult('No se puede enviar el formulario sin aceptar la política de privacidad', 'error');
        return;
    }
    
    // Simular envío exitoso
    console.log('✅ Formulario válido - Enviando...');
    
    // Obtener datos del formulario
    const formData = getFormData();
    
    // Simular delay de envío
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    setTimeout(() => {
        // Mostrar resultado exitoso
        showResult('¡Formulario enviado correctamente!', 'success');
        
        // Mostrar datos enviados
        displayFormData(formData);
        
        // Restaurar botón
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Formulario';
        
        console.log('📤 Formulario enviado exitosamente');
    }, 1000);
}

// ========================
// FUNCIONES DE UTILIDAD
// ========================

function getFormData() {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}

function displayFormData(data) {
    const resultado = document.getElementById('resultado');
    
    let html = '<h3>Datos enviados:</h3>';
    html += '<ul>';
    html += `<li><strong>Nombre:</strong> ${data.nombre}</li>`;
    html += `<li><strong>Primer Apellido:</strong> ${data.primerApellido}</li>`;
    html += `<li><strong>Segundo Apellido:</strong> ${data.segundoApellido}</li>`;
    html += `<li><strong>Teléfono:</strong> ${data.telefono}</li>`;
    html += `<li><strong>Fecha de Nacimiento:</strong> ${formatDate(data.fechaNacimiento)}</li>`;
    if (data.email) {
        html += `<li><strong>Email:</strong> ${data.email}</li>`;
    }
    html += `<li><strong>Política de Privacidad:</strong> Aceptada</li>`;
    html += '</ul>';
    
    resultado.innerHTML = html;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ========================
// FUNCIONES DE ERROR
// ========================

function showError(field, message) {
    const errorElement = document.getElementById(`error-${field.name}`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    field.classList.add('error');
    field.classList.remove('valid');
}

function clearError(field) {
    const errorElement = document.getElementById(`error-${field.name}`);
    if (errorElement) {
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    }
    
    field.classList.remove('error');
}

function markValid(field) {
    field.classList.add('valid');
    field.classList.remove('error');
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.classList.remove('show');
        element.textContent = '';
    });
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error', 'valid');
    });
}

// ========================
// FUNCIONES DE RESULTADO
// ========================

function showResult(message, type) {
    const resultado = document.getElementById('resultado');
    resultado.className = `resultado ${type}`;
    resultado.innerHTML = `<p>${message}</p>`;
    resultado.style.display = 'block';
    
    // Scroll al resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
}

function hideResult() {
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'none';
}

// ========================
// INICIALIZACIÓN
// ========================

function initializeFormValidation() {
    console.log('🔧 Inicializando validación del formulario');
    
    // Configurar validación inicial
    const form = document.getElementById('registrationForm');
    
    // Prevenir envío automático del navegador
    form.setAttribute('novalidate', 'true');
    
    console.log('✅ Validación inicializada correctamente');
}