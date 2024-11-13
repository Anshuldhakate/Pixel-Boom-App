import React from 'react';
import './MainComponent.css';
import image1 from '../components/images/img 1.png';
import image2 from '../components/images/img 2.jpg';
import image3 from '../components/images/img 3.jpg';
import image4 from '../components/images/img 4.jpg';
import image5 from '../components/images/img 5.jpg';
import image6 from '../components/images/img 6.jpg';
import image7 from '../components/images/img 7.jpg';
import image8 from '../components/images/img 8.jpg';

import logo from '../components/images/logo.jpg'
import user from '../components/images/user.jpg'

const MainComponent = () => {
  return (
    <main>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar__top">
          <div className="navbar__logo">
            <span>ui</span>
          </div>
          <nav className="navbar__menu">
            <a href="#explore" className="navbar__link">Explore</a>
            <a href="#faqs" className="navbar__link">FAQs</a>
            <a href="#pricing" className="navbar__link">Pricing</a>
          </nav>
          <div className="navbar__actions">
            <button className="navbar__feedback">Give feedback</button>
            <button className="navbar__cart">Add to cart $20</button>
          </div>
        </div>

        <div className="navbar__content">
          <h2 className="section-title">Pixel Bloom: AI Website Agency</h2>
          <p className="section-description">
            Crafting Next-Gen AI Models with Fully Responsive Design.
          </p>
        </div>
      </header>

      {/* Image Grid */}
      <section className="image-grid-section">
        <div className="image-grid">
          <div className="image-card"><img src={image1} alt="Image 1" /></div>
          <div className="image-card"><img src={image2} alt="Image 2" /></div>
          <div className="image-card"><img src={image3} alt="Image 3" /></div>
          <div className="image-card"><img src={image4} alt="Image 4" /></div>
          <div className="image-card"><img src={image5} alt="Image 5" /></div>
          <div className="image-card"><img src={image6} alt="Image 6" /></div>
          <div className="image-card"><img src={image7} alt="Image 7" /></div>
          <div className="image-card"><img src={image8} alt="Image 8" /></div>
        </div>
      </section>

      {/* New Section */}
      <section className="info-section">
        <div className="info-content">
          <div className="description">
            <h2>Description</h2>
            <p>Hello Friends 👋</p>
            <p>
              Achieving your goals is now simpler than ever with Beetroot. Take control of your habits
              by setting personalized goals, receiving timely reminders, and effortlessly tracking your
              progress. The app records your journey and provides insights to help you build a healthier,
              more organized life.
            </p>
            <p>
              Your path to a better you has never been this straightforward! Feel free to comment!
            </p>
            <p>🔥 Checkout our other product:</p>
            <a href="https://ui8.net/omega-orion/products/forgo---quit-smoking-app" target="_blank" rel="noopener noreferrer">
              Quit Smoking App
            </a>
          </div>
        <div>
          <div className="features">
            <h2>Features</h2>
            <ul>
              <li>✔ 120+ Screens</li>
              <li>✔ Fully customizable designs</li>
              <li>✔ Organized Design system</li>
              <li>✔ Light & Dark mode</li>
              <li>✔ Customized Illustration</li>
              <li>✔ Neatly Organized layers</li>
            </ul>
          </div>

          <div className="format">
            <h2>Format</h2>
            <div className="format-info">
              <span className="format-icon">🎨</span>
              <span>15.2mb</span>
            </div>
          </div>
          </div>
          
        </div>
      </section>



      <div class="comments-section">
  <h2>Comments</h2>
  
  <div class="comment">
    <img src={user} alt="User Avatar" class="comment-avatar" />
    <div class="comment-content">
      <h3>Kristie Robson</h3>
      <p class="comment-date">Gave feedback on 17th Sept 2024</p>
      <p>
        The template I bought looked great in the preview, but the actual file
        was poorly designed and hard to customize. Definitely not worth the price.
      </p>
    </div>
  </div>

  <div class="comment-input">
    <input type="text" placeholder="Drop a comment, be helpful" />
    <button type="submit" class="comment-submit">Submit</button>
  </div>
</div>


<footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <img src={logo} alt="Company Logo" class="footer-logo-img" />
    </div>
    
    <div class="footer-links">
      <h3>Explore</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </div>
    
    <div class="footer-links">
      <h3>Licensing</h3>
      <ul>
        <li><a href="#">Terms of use</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </div>
    
    <div class="footer-newsletter">
      <h3>Join our monthly newsletter 🙌</h3>
      <form class="newsletter-form">
        <input type="email" placeholder="designer@example.com" />
        <button type="submit">→</button>
      </form>
    </div>

    <div class="footer-social">
      <h3>Connect with us 🤝</h3>
      <div class="social-icons">
        <a href="#"><i class="icon-dribbble"></i></a>
        <a href="#"><i class="icon-instagram"></i></a>
        <a href="#"><i class="icon-behance"></i></a>
        <a href="#"><i class="icon-mail"></i></a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>© 2024, Omega Orion Pvt. Ltd.</p>
  </div>
</footer>


    </main>
  );
};

export default MainComponent;
