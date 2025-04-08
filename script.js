document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    'en': {
      'about-title': '============================= whoami? ============================= ',
      'about-text': ' - As a <span class="neon-bold">Cybersecurity</span> enthusiastic, I navigate the digital realm with precision, analyzing network traffic and identifying vulnerabilities where others see only noise. Firewalls are challenges to overcome, not barriers.<br><br> - Currently pursuing a <span class="neon-bold">Master\'s in Computer Science</span>, focusing on advanced system architectures and security protocols. My research blends theoretical knowledge with practical penetration testing techniques.<br><br> - <span class="neon-bold">Linux</span> is my primary environment, where I leverage the terminal\'s full potential to automate tasks, analyze systems, and maintain infrastructure. SSH connections are my daily routine.<br><br> - Beyond code and security audits, I find inspiration in the complex rhythms of <span class="neon-bold">heavy metal</span>, which mirrors the patterns I work with in cybersecurity.<br><br> - In this digital frontier where green terminals illuminate the path, I advocate for open knowledge and ethical hacking as tools to strengthen systems rather than exploit them.'
    },
    'pt': {
      'about-title': '=============================  Quem sou eu? ============================= ',
      'about-text': ' - Como entusiasta em <span class="neon-bold">Cybersecurity</span>, navego pelo mundo digital com precisão, analisando tráfego de rede e identificando vulnerabilidades onde outros veem apenas ruído. Firewalls são desafios a superar, não barreiras.<br><br> - Atualmente cursando um <span class="neon-bold">mestrado em Ciência da Computação</span>, com foco em arquiteturas de sistemas avançadas e protocolos de segurança. Minha pesquisa combina conhecimento teórico com técnicas práticas de penetration testing.<br><br> - O <span class="neon-bold">Linux</span> é meu ambiente principal, onde aproveito todo o potencial do terminal para automatizar tarefas, analisar sistemas e manter infraestruturas. Conexões SSH são minha rotina diária.<br><br> - Além de código e auditorias de segurança, encontro inspiração nos ritmos complexos do <span class="neon-bold">heavy metal</span>, que espelham os padrões com os quais trabalho em cybersecurity.<br><br> - Nesta fronteira digital onde terminais verdes iluminam o caminho, defendo o conhecimento aberto e o hacking ético como ferramentas para fortalecer sistemas, não explorá-los.'
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

