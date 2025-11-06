//Puxando campos necessários.
const controles = document.getElementById("controles");
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener("change", handleChange);


//Função que faz a alteração de cada campo. Utilzizada como varios objetos e passando element no começo para pegar o 'btn'
//Utilizar como objeto nos da liberdade de configurar cada campo e como aquele valor será tratado. como adicionar 'px' ou 'rem' no
//final de cada resgate de valor.

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
};

//função central.
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

//Conteito de LocalStorage
//Essa função SOMENTE SALVA os valores.
function saveValues(name, value) {
    localStorage[name] = value;
}

// Essa função atualiza os valores quando a pagina é recarregada.
function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    if (handleStyle[propertie]) {
      handleStyle[propertie](localStorage[propertie]);
      controles.elements[propertie].value = localStorage[propertie];
    }
  });
  showCss();
}

setValues();
// Ambas as funções acima se complementam! Uma salva e a outra resgata os valores sempre que o browser é recarregado.

//função que atualiza para mostrar CSS no site.
function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
};

