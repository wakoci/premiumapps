class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: white;
          color: #4a5568;
          padding: 3rem 2rem 2rem;
          text-align: center;
          margin-top: 4rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          position: relative;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #f48fb1 0%, #64b5f6 100%);
          border-radius: 0 0 4px 4px;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          color: #f48fb1;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-link {
          color: #4a5568;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-link:hover {
          color: #f48fb1;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .social-link {
          color: #718096;
          transition: color 0.2s, transform 0.2s;
        }
        
        .social-link:hover {
          color: #f48fb1;
          transform: translateY(-2px);
        }
        
        .copyright {
          font-size: 0.875rem;
          color: #718096;
        }
        
        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-logo">WAKOCI</div>
          <div class="footer-links">
            <a href="#" class="footer-link">Home</a>
            <a href="#" class="footer-link">Pricing</a>
            <a href="#" class="footer-link">FAQ</a>
            <a href="#" class="footer-link">Contact</a>
            <a href="#" class="footer-link">Terms</a>
          </div>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/wakociers" target="_blank" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
<a href="#" class="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 8s-7-1.5-10-5.5S2 8 2 8s3 6.5 10 6.5S22 8 22 8z"></path>
                <circle cx="12" cy="8" r="3"></circle>
              </svg>
            </a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} WAKOCI Premium. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);