document.getElementById("btuForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const metros = parseFloat(document.getElementById("metros").value);
    const pessoas = parseInt(document.getElementById("pessoas").value);
    const janelas = parseInt(document.getElementById("janelas").value);
    const sol = document.getElementById("sol").value;
  
    let btus = metros * 600;
    btus += (pessoas - 1) * 600;
    btus += janelas * 400;
  
    if (sol === "sim") {
      btus *= 1.2;
    }
  
    btus = Math.ceil(btus);
    document.getElementById("resultado").innerHTML = `Capacidade ideal: <strong>${btus} BTUs</strong>`;
  
    const msg = `Olá, gostaria de saber mais sobre a instalação de um ar-condicionado com cerca de ${btus} BTUs para um ambiente de ${metros} m².`;
    const whatsappLink = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(msg)}`;
    document.getElementById("whatsappLink").href = whatsappLink;
    document.getElementById("whatsappBtn").style.display = "block";
  });
  
  // Animações Scroll
  ScrollReveal().reveal('.overlay', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
  });
  