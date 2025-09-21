// ========================================
// INSTITUTO ALMA - JAVASCRIPT SIMPLES
// ========================================

// Aguarda carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Instituto ALMA carregado!');
    
    // Inicializar funcionalidades
    initDonations();
    initVolunteers();
});



// DOAÇÕES SIMPLES

function initDonations() {
    const buttons = document.querySelectorAll('.doas, .doas2, .btn_s1, .btn_s5');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.toLowerCase();
            
            if (text.includes('doar')) {
                showDonationForm();
            } else if (text.includes('voluntário')) {
                showVolunteerForm();
            }
        });
    });
}

// Formulário de doação simples
function showDonationForm() {
    const nome = prompt('Seu nome:');
    if (!nome) return;
    
    const email = prompt('Seu email:');
    if (!email) return;
    
    const valor = prompt('Valor da doação (R$):');
    if (!valor) return;
    
    // Enviar doação
    fetch('/api/doacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, valor })
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Doação registrada com sucesso!');
        } else {
            alert('Erro: ' + result.message);
        }
    })
    .catch(error => {
        alert('Erro de conexão');
    });
}


// VOLUNTÁRIOS SIMPLES

function initVolunteers() {
    // Já inicializado no initDonations
}

// Formulário de voluntário simples
function showVolunteerForm() {
    const nome = prompt('Seu nome:');
    if (!nome) return;
    
    const email = prompt('Seu email:');
    if (!email) return;
    
    const telefone = prompt('Seu telefone:');
    if (!telefone) return;
    
    const area = prompt('Área de interesse (assistencia, educacao, administrativo, eventos):');
    if (!area) return;
    
    // Enviar candidatura
    fetch('/api/voluntario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefone, area })
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Candidatura enviada com sucesso!');
        } else {
            alert('Erro: ' + result.message);
        }
    })
    .catch(error => {
        alert('Erro de conexão');
    });
}


// FUNÇÕES EXTRAS SIMPLES


// Copiar PIX
function copyPix() {
    const pixKey = '12345678000190@pix.bb.com.br';
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada!');
    });
}

// Função funcionalidade aos botões da página inicial
function setupButtons() {
    // Botão "Faça sua doação"
    const btnDoacao = document.getElementById('btn-doacao');
    if (btnDoacao) {
        btnDoacao.addEventListener('click', function() {
            window.location.href = 'ComoDoar.html';
        });
    }
    
    // Botão "Conheça nosso trabalho"
    const btnConheca = document.getElementById('btn-conheca');
    if (btnConheca) {
        btnConheca.addEventListener('click', function() {
            window.location.href = 'Sobre.html';
        });
    }
    
    // Botão "Doar Agora" na seção 5
    const btnDoaresAgora = document.querySelectorAll('.btn_s5');
    if (btnDoaresAgora && btnDoaresAgora.length > 0) {
        btnDoaresAgora[0].addEventListener('click', function() {
            window.location.href = 'ComoDoar.html';
        });
    }
}

// Função para controlar o slider horizontal
function initSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slider || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Função para mover o slider
    function moveSlider(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        // Mover o slider para a posição correta
        slider.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
    }
    
    // Configurar os botões de navegação
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            moveSlider(currentSlide - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            moveSlider(currentSlide + 1);
        });
    }
    
    // Iniciar o slider automático
    function autoSlide() {
        moveSlider(currentSlide + 1);
    }
    
    // Mudar slide a cada 5 segundos
    const slideInterval = setInterval(autoSlide, 5000);
    
    // Parar o slider automático quando o mouse estiver sobre o slider
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Reiniciar o slider automático quando o mouse sair do slider
    slider.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        setInterval(autoSlide, 5000);
    });
    
    // Inicializar o slider
    moveSlider(0);
}

// Adicionar evento aos botões PIX e inicializar funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    const pixButtons = document.querySelectorAll('.pixb');
    pixButtons.forEach(button => {
        if (button.textContent.includes('Copiar')) {
            button.addEventListener('click', copyPix);
        }
    });
    
    // Inicializar o slider automático
    initSlider();
    
    // Configurar os botões
    setupButtons();
});

console.log('Script carregado - Instituto ALMA!');