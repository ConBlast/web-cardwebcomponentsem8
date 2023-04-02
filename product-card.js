export default class CardNFT extends HTMLElement {
  constructor() {
    console.log('Constructor ejecutado');
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@1,500&display=swap');

    .card {
      display: block;
      position: relative;
      transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
      cursor: pointer;
      width: 100%;
      color: white;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 50px -17px rgba(0,0,0,.3), 0 3px 20px rgba(0,0,0,.1);
      border-radius: 30px;
    }

    .card-content {
      display: flex;
      border-radius: 30px;
      background-color: #fff;
      overflow: hidden;
      background-color: rgb(32, 32, 32);
    }

    .img {
      width: 40%;
      object-fit: cover;
      display: block;
    }

    .descripcion {
      padding: 1rem;
      width: 100%;
      text-align: left;
      font-family: 'Poppins', sans-serif;
    }

    .descripcion h2 {
      font-size: 3rem;
      margin-top: 0;
      font-weight: 900;
    }

    .descripcion p {
      margin: 0;
      font-size: 1.5rem;
    }
  </style>

  <article class="card">
    <div class="card-content">
      <img src="${this.getAttribute('imageSrc')}" class="img" />
      <div class="descripcion">
        <h2>${this.getAttribute('name')}</h2>
        <p>${this.getAttribute('description')}</p>
      </div>
    </div>
  </article>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('product-card', CardNFT);