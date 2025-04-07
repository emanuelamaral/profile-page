document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    'en': {
      'about-title': 'Who am I?',
      'about-text': 'I am a digital entity powered by <span class="neon-bold">Cybersecurity</span>, navigating the depths of the network, where packets dance and firewalls try — in vain — to contain my curiosity. <br><br> Currently camouflaged in a <span class="neon-bold">Master\'s in Computer Science</span>, honing my skills to build (or destroy) systems with surgical precision. <br><br> I make <span class="neon-bold">Linux</span> my dojo. I know the power of the terminal and the silence of servers working in the darkness. SSH is my second skin. <br><br> When I\'m not deciphering packets or system vulnerabilities, I\'m immersed in the distorted sound of <span class="neon-bold">heavy metal</span>, recharging my mind with insane riffs. <br><br>Here, where green light guides the text and anonymity is a virtue, I fight for a free network, where knowledge is a weapon and freedom is the goal.'
    },
    'pt': {
      'about-title': 'Quem sou eu?',
      'about-text': 'Sou uma entidade digital movida a <span class="neon-bold">Cybersecurity</span>, navegando pelas profundezas da rede, onde pacotes dançam e firewalls tentam — em vão — conter minha curiosidade. <br><br> Atualmente camuflado em um <span class="neon-bold">mestrado em Ciência da Computação</span>, aprimoro minhas habilidades para construir (ou destruir) sistemas com precisão cirúrgica. <br><br> Faço do <span class="neon-bold">Linux</span> meu dojo. Conheço o poder do terminal e o silêncio de servidores que trabalham na escuridão. SSH é minha segunda pele. <br><br> Quando não estou decifrando pacotes ou brechas em sistemas, estou imerso no som distorcido do <span class="neon-bold">heavy metal</span>, recarregando minha mente com riffs insanos. <br><br>Aqui, onde a luz verde guia o texto e o anonimato é virtude, luto por uma rede livre, onde conhecimento é arma e liberdade é objetivo.'
    }
  };

  const titleElement = document.getElementById('about-title');
  const textElement = document.getElementById('about-text');
  const btnPT = document.getElementById('lang-pt');
  const btnEN = document.getElementById('lang-en');

  function changeLanguage(lang) {
    titleElement.textContent = translations[lang]['about-title'];
    textElement.innerHTML = translations[lang]['about-text'];
    
    if (lang === 'pt') {
      btnPT.classList.add('active');
      btnEN.classList.remove('active');
    } else {
      btnEN.classList.add('active');
      btnPT.classList.remove('active');
    }
  }

  btnPT.addEventListener('click', () => changeLanguage('pt'));
  btnEN.addEventListener('click', () => changeLanguage('en'));

  changeLanguage('en');
});
