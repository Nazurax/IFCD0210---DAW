document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const notificacion = document.getElementById('notificacion');
    const mensaje = document.getElementById('mensaje');
    const cerrarBtn = document.getElementById('cerrarNotificacion');
    
    // Campos del formulario
    const nombre = document.getElementById('nombre');
    const primerApellido = document.getElementById('primerApellido');
    const segundoApellido = document.getElementById('segundoApellido');
    const telefono = document.getElementById('telefono');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const email = document.getElementById('email');
    const privacidad = document.getElementById('privacidad');
    
    // Función para mostrar notificación
    function mostrarNotificacion(texto, tipo) {
        mensaje.textContent = texto;
        notificacion.className = `notificacion ${tipo}`;
        notificacion.style.display = 'block';
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            notificacion.style.display = 'none';
        }, 5000);
    }
    
    // Función para mostrar error en campo específico
    function mostrarError(campo, mensaje) {
        const errorDiv = document.getElementById(`error-${campo.name}`);
        if (errorDiv) {
            errorDiv.textContent = mensaje;
            errorDiv.style.display = 'block';
            campo.classList.add('error');
        }
    }
    
    // Función para limpiar error de campo específico
    function limpiarError(campo) {
        const errorDiv = document.getElementById(`error-${campo.name}`);
        if (errorDiv) {
            errorDiv.style.display = 'none';
            campo.classList.remove('error');
        }
    }
    
    // Función para validar solo texto (sin números ni símbolos)
    function validarTexto(texto) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return regex.test(texto);
    }
    
    // Función para validar teléfono (solo números, exactamente 9 dígitos)
    function validarTelefono(telefono) {
        const regex = /^[0-9]{9}$/;
        return regex.test(telefono);
    }
    
    // Función para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Validación en tiempo real para campos de texto
    [nombre, primerApellido, segundoApellido].forEach(campo => {
        campo.addEventListener('input', function() {
            if (this.value.trim() === '') {
                limpiarError(this);
                return;
            }
            
            if (!validarTexto(this.value)) {
                mostrarError(this, 'Solo se permiten letras y espacios');
            } else {
                limpiarError(this);
            }
        });
    });
    
    // Validación en tiempo real para teléfono
    telefono.addEventListener('input', function() {
        // Eliminar caracteres no numéricos
        this.value = this.value.replace(/[^0-9]/g, '');
        
        if (this.value.length === 0) {
            limpiarError(this);
            return;
        }
        
        if (!validarTelefono(this.value)) {
            if (this.value.length < 9) {
                mostrarError(this, 'Debe tener exactamente 9 números');
            } else if (this.value.length > 9) {
                mostrarError(this, 'Máximo 9 números');
                this.value = this.value.substring(0, 9);
            }
        } else {
            limpiarError(this);
        }
    });
    
    // Validación en tiempo real para email (solo si tiene contenido)
    email.addEventListener('input', function() {
        if (this.value.trim() === '') {
            limpiarError(this);
            return;
        }
        
        if (!validarEmail(this.value)) {
            mostrarError(this, 'Por favor ingresa un email válido');
        } else {
            limpiarError(this);
        }
    });
    
    // Cerrar notificación
    cerrarBtn.addEventListener('click', function() {
        notificacion.style.display = 'none';
    });
    
    // Validación del formulario al enviar
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let esValido = true;
        
        // Limpiar errores anteriores
        [nombre, primerApellido, segundoApellido, telefono, fechaNacimiento, email].forEach(campo => {
            limpiarError(campo);
        });
        
        // Validar nombre
        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'El nombre es obligatorio');
            esValido = false;
        } else if (!validarTexto(nombre.value)) {
            mostrarError(nombre, 'Solo se permiten letras y espacios');
            esValido = false;
        }
        
        // Validar primer apellido
        if (primerApellido.value.trim() === '') {
            mostrarError(primerApellido, 'El primer apellido es obligatorio');
            esValido = false;
        } else if (!validarTexto(primerApellido.value)) {
            mostrarError(primerApellido, 'Solo se permiten letras y espacios');
            esValido = false;
        }
        
        // Validar segundo apellido (solo si tiene contenido)
        if (segundoApellido.value.trim() !== '' && !validarTexto(segundoApellido.value)) {
            mostrarError(segundoApellido, 'Solo se permiten letras y espacios');
            esValido = false;
        }
        
        // Validar teléfono
        if (telefono.value.trim() === '') {
            mostrarError(telefono, 'El teléfono es obligatorio');
            esValido = false;
        } else if (!validarTelefono(telefono.value)) {
            mostrarError(telefono, 'Debe tener exactamente 9 números');
            esValido = false;
        }
        
        // Validar fecha de nacimiento
        if (fechaNacimiento.value === '') {
            mostrarError(fechaNacimiento, 'La fecha de nacimiento es obligatoria');
            esValido = false;
        }
        
        // Validar email (solo si tiene contenido)
        if (email.value.trim() !== '' && !validarEmail(email.value)) {
            mostrarError(email, 'Por favor ingresa un email válido');
            esValido = false;
        }
        
        // Validar checkbox de privacidad
        if (!privacidad.checked) {
            mostrarNotificacion('Debes aceptar la política de privacidad', 'error');
            esValido = false;
        }
        
        // Mostrar resultado
        if (esValido) {
            mostrarNotificacion('Formulario enviado correctamente', 'exito');
            // Aquí podrías enviar los datos al servidor
            formulario.reset();
        } else {
            mostrarNotificacion('Por favor, corrige los errores en el formulario', 'error');
        }
    });
});