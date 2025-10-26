class BexelIntegration extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .bexel-badge {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: white;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .bexel-badge img {
          width: 24px;
          height: 24px;
        }
        .bexel-badge span {
          font-size: 12px;
          color: #333;
        }
      </style>
      <div class="bexel-badge">
        <img src="https://bexel-api-url.com/logo.png" alt="Bexel">
        <span>Orders tracked with Bexel</span>
      </div>
    `;
  }
}
customElements.define('bexel-integration', BexelIntegration);