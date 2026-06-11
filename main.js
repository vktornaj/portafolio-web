// Scroll animado
document.getElementsByClassName('boton-ir-abajo')[0].addEventListener('click', function() {
    window.scroll({ 
        top: 960,
        left: 0,
        behavior: 'smooth'
    });
});

// Mostrar navegacion movil
const nav_movil = document.getElementsByClassName('nav-movil')[0];
let links = document.getElementsByTagName('a');
let active = true;

links = Array.from(links).map((link) => {
  link.addEventListener('click', () => {
    active = false;
    setTimeout(() => {
      active = true;
    }, 100);
  })
});
let scrollPos = 0;
let navPos = 0;
window.addEventListener('scroll', function() {
  if (!active) {
    return;
  }
  if ((document.body.getBoundingClientRect()).top > scrollPos) { 
    // ARRIBA
    navPos -= 10;
  } else {
    // ABAJO
    navPos += 10;
  } 
  if (navPos < 0) {
      navPos = 0;
  }
  if (navPos > 70) {
    navPos = 70;
  }
  nav_movil.style.bottom = "-" + navPos + "px";
  scrollPos = (document.body.getBoundingClientRect()).top;
});

// Modo oscuro 
const switchMode = document.getElementById('switch-mode');
const root = document.documentElement;

function activarOscuro() {
  switchMode.checked = 1;
  root.style.setProperty('--color-azul-fuerte', '#121826');
  root.style.setProperty('--color-azul-claro', '#6366f1');
  root.style.setProperty('--color-azul-oscuro', '#090d16');
  root.style.setProperty('--color-azul-claro2', '#1e293b');
  root.style.setProperty('--color-azul-vivo', '#4f46e5');
  root.style.setProperty('--color-oscuro-transparente', 'rgba(18, 24, 38, 0.7)');
  root.style.setProperty('--color-fondo-textos', '#151c2c');
  root.style.setProperty('--color-texto-primario', '#f8fafc');
}

function deactivarOscuro() {
  switchMode.checked = 0;
  root.style.setProperty('--color-azul-fuerte', '#ffffff');
  root.style.setProperty('--color-azul-claro', '#3b82f6');
  root.style.setProperty('--color-azul-oscuro', '#f8fafc');
  root.style.setProperty('--color-azul-claro2', '#e2e8f0');
  root.style.setProperty('--color-azul-vivo', '#2563eb');
  root.style.setProperty('--color-oscuro-transparente', 'rgba(255, 255, 255, 0.7)');
  root.style.setProperty('--color-fondo-textos', '#ffffff');
  root.style.setProperty('--color-texto-primario', '#0f172a');
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  activarOscuro();
} else {
  deactivarOscuro();
}

switchMode.addEventListener('change', () => {
  if (switchMode.checked) {
    activarOscuro();
  } else {
    deactivarOscuro();
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
  const darkModeOn = e.matches;
  if (darkModeOn) {
    activarOscuro();
  } else {
    deactivarOscuro();
  }
});

// Portafolio con carrusel
const carruselContainer = document.getElementsByClassName('carrusel')[0];
const carrusel = document.getElementById('carruselId');
const elemento = document.getElementsByClassName('elemento-carrusel')[0];
const btnAtras = document.getElementsByClassName('carrusel-btn-atras')[0];
const btnAdelante = document.getElementsByClassName('carrusel-btn-adelante')[0];
let carruselPos = 0;
const tElemento = 270;
const nElementos = 5;
const marginR = 40;

function scroll_x(npos) {
  // console.log(carruselPos);
  carrusel.scroll({ 
    top: 0,
    left: npos,
    behavior: 'smooth'
  });
}

btnAtras.addEventListener('click', function() {
  if (carruselPos <= 0)
  return;
  carruselPos -= tElemento;
  scroll_x(carruselPos);
});

btnAdelante.addEventListener('click', function() {
  if (carruselPos >= tElemento * nElementos - marginR - carruselContainer.clientWidth)
  return;
  carruselPos += tElemento;
  scroll_x(carruselPos);
});

/* Envio de mensaje */
let inf = {};

async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
  } catch (err ) {
    throw err;
  }
}

document.getElementsByTagName('form')[0].addEventListener("click", function (event) {
  event.preventDefault();  
});

document.getElementById('send').addEventListener('click', async function() {

  const mail = document.getElementById('mail');
  const msgMail = document.getElementsByClassName('msg-invalid-email')[0];

  if (!validateEmail(mail.value)) {
    mail.classList.add('invalid-email');
    msgMail.style.setProperty('display', 'inline');
    return;
  } else {
    mail.classList.remove('invalid-email');
    msgMail.style.setProperty('display', 'none');
  }

  const button = document.getElementById('send');
  const msgEnvio = document.getElementById('msg-envio');
  
  button.disabled = true;
  msgEnvio.innerText = 'Enviando...';

  inf['name'] = document.getElementById('name').value;
  inf['email'] = mail.value;
  inf['message'] = document.getElementById('msg').value;
  inf['infoBrowser'] = getBrowserInfo();

  postData('/api/message', inf)
  .then(data => {
    // console.log(data);
    if (data.ok == true) {
      button.disabled = true;
      button.style.setProperty('background-color', 'green');
      msgEnvio.innerText = 'Enviado';
      document.getElementById('icon-successful').style.setProperty('display', 'block');
    } else if (data.ok == false) {
      button.disabled = false;
      msgEnvio.innerText = 'Enviar';
      alert(data.msg)
    }
  });
});

const getBrowserInfo = function() {
  let ua= navigator.userAgent, tem, 
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
};

const validateEmail = function (mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}

