class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: relative;
          z-index: 50;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: #f48fb1;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo-icon {
          width: 24px;
          height: 24px;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-link {
          color: #4a5568;
          text-decoration: none;
          font-size: 0.95rem;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: #f48fb1;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #f48fb1;
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 1rem;
          }
          
          .logo {
            margin-bottom: 1rem;
          }
          
          .nav-links {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      </style>
      <nav>
        <a href="#" class="logo">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          WAKOCI
        </a>
        <ul class="nav-links">
          <li><a href="#order" class="nav-link">Pesan</a></li>
          <li><a href="#pricing" class="nav-link">Harga</a></li>
          <li><a href="#faq" class="nav-link">FAQ</a></li>
          <li><a href="#contact" class="nav-link">Kontak</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);