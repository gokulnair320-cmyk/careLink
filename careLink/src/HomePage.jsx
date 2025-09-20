import React, { useState} from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBuildingShield, faChartSimple, faFireExtinguisher, faHeart, faHospitalUser, faQrcode, faTruckMedical, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import {faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
import { 
  Heart, Globe, Bell, Phone, Mail, MapPin, Menu, X, 
  Calendar, Clock, Shield, Users, Star, ArrowRight, 
  Activity, FileText, Pill, Stethoscope, Ambulance,
  Video, MessageCircle, Download, Upload, CreditCard,
  Smartphone, Wifi, Lock, Eye, TrendingUp, AlertCircle,
  CheckCircle, Play, Pause, Volume2, Search, Filter,
  Share2, Bookmark, ThumbsUp, Award, Target, Zap,
  Laptop
} from 'lucide-react';

const HomePage = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [activeNav, setActiveNav] = useState('Home');
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const [currentLanguage, setCurrentLanguage] = useState('English');
  // const [notifications, setNotifications] = useState(5);

  // const navItems = [
  //   { name: 'Home', icon: null },
  //   { name: 'Health Card', icon: '🏥' },
  //   { name: 'Medical Records', icon: '📋' },
  //   { name: 'Find Doctors', icon: '👨‍⚕️' },
  //   { name: 'Health Surveillance', icon: '🔍' },
  //   { name: 'Emergency', icon: '🚨' },
  //   { name: 'Telemedicine', icon: '💻' }
  // ];

  // const languages = ['English', 'Malayalam', 'Tamil', 'Hindi', 'Telugu'];

  // const testimonials = [
  //   {
  //     name: "Rajesh Kumar",
  //     role: "Construction Worker",
  //     image: "👨‍🔧",
  //     text: "careLink helped me access my medical records instantly during an emergency. Life-saving service!",
  //     rating: 5
  //   },
  //   {
  //     name: "Priya Nair",
  //     role: "Domestic Worker",
  //     image: "👩‍💼",
  //     text: "I can now book doctor appointments in my native language. Very helpful for migrants like me.",
  //     rating: 5
  //   },
  //   {
  //     name: "Ahmed Hassan",
  //     role: "Delivery Partner",
  //     image: "🚴‍♂️",
  //     text: "The health monitoring features keep track of my fitness. Perfect for my active job!",
  //     rating: 4
  //   }
  // ];

  const healthMetrics = [
  { label: 'Active Users', value: '25,000+', icon: Users, color: 'text-blue-600' },
  { label: 'Doctors Available', value: '500+', icon: Stethoscope, color: 'text-green-600' },
  { label: 'Records Managed', value: '100K+', icon: FileText, color: 'text-purple-600' },
  { label: 'Emergency Responses', value: '1,200+', icon: Ambulance, color: 'text-red-600' }
];

  const emergencyServices = [
    { name: 'Ambulance', icon: faAmbulance, number: '108', color: 'bg-red-100' },
    { name: 'Fire', icon: faFireExtinguisher, number: '101', color: 'bg-orange-500' },
    { name: 'Police', icon: faBuildingShield, number: '100', color: 'bg-blue-500' },
    { name: 'Women Helpline', icon: faUserNurse, number: '1091', color: 'bg-pink-500' }
  ];

  const images = [
    { src: '/worker1.png', alt: 'Construction worker with safety helmet giving thumbs up' },
    { src: '/worker2.png', alt: 'Smiling construction worker in orange hard hat' },
    { src: '/worker3.png', alt: 'Professional construction worker in safety vest' },
    { src: '/worker4.png', alt: 'Construction worker with tools at building site' }
  ];

  const doubledImages = [...images, ...images];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 3000); 
  //   return () => clearInterval(timer);
  // }, [testimonials.length]);

  // const handleNavClick = (item) => {
  //   setActiveNav(item);
  //   setIsMobileMenuOpen(false);
  // };

  // const handleLanguageChange = (lang) => {
  //   setCurrentLanguage(lang);
  // };

  // const clearNotifications = () => {
  //   setNotifications(0);
  // };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark-theme');
  };

  return (
    // <div className="container">
    <div className="homepage-root">

      {/* <header className="main-header">
        <div className="header-container">
          <div className="header-row">
            
            <div className="logo-row">
              <div className="logo-bg">
                <Heart className="logo-icon" fill="white" />
              </div>
              <div>
                <h1 className="logo-title">careLink</h1>
                <p className="logo-subtitle">Digital Health Records</p>
              </div>
            </div>

          
            <nav className="nav-bar">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`nav-btn${activeNav === item.name ? ' nav-btn-active' : ''}`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            
            <div className="header-controls">
              
              <div className="search-bar">
                <Search className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search doctors, services..." 
                  className="search-input"
                />
              </div>

              
              <div className="lang-select-wrap">
                <select 
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="lang-select"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
                <Globe className="lang-globe" />
              </div>

              
              <div className="notif-bell" onClick={clearNotifications}>
                <Bell className="notif-bell-icon" />
                {notifications > 0 && (
                  <div className="notif-bell-badge">
                    <span className="notif-bell-count">{notifications}</span>
                  </div>
                )}
              </div>

             
              <button className="login-btn">
                Login
              </button>
              <button className="register-btn">
                Register
              </button>

              
              <button
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="mobile-menu-icon" />
                ) : (
                  <Menu className="mobile-menu-icon" />
                )}
              </button>
            </div>
          </div>
        </div>

      
        {isMobileMenuOpen && (
          <div className="mobile-nav-wrap">
            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`mobile-nav-btn${activeNav === item.name ? ' mobile-nav-btn-active' : ''}`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header> */}

      {/* Main Content */}
  <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-container">
            <div className="hero-row">
              <div>
                <h1 className="hero-title">
                  Your Health, <span className="text-blue-600">Simplified</span>
                </h1>
                <p className="hero-desc">
                  Comprehensive digital healthcare for migrant workers in Kerala. Access your records, find doctors, and monitor your health - all in one secure platform.
                </p>
                <div className="hero-btn-row">
                  <button className="hero-btn hero-btn-primary">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="hero-btn hero-btn-primary">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                  <button 
                    onClick={toggleTheme}
                    className="hero-btn hero-btn-secondary"
                    title={isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
                  >
                    {isDarkTheme ? "☀️" : "🌙"} {isDarkTheme ? "Light" : "Dark"}
                  </button>
                </div>
              </div>
              
              {/* Hero Image/Video Section */}
              <div className="hero-media-wrap">
                <div className="hero-media-bg">
                  <div className="hero-media-content">
                    {!isVideoPlaying ? (
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="hero-play-btn"
                      >
                        <Play className="h-8 w-8 text-blue-600" fill="currentColor" />
                      </button>
                    ) : (
                      <div className="hero-video-playing">
                        <div className="hero-video-center">
                          <Volume2 className="hero-video-icon" />
                          <p>Demo Video Playing...</p>
                          <button 
                            onClick={() => setIsVideoPlaying(false)}
                            className="hero-pause-btn"
                          >
                            <Pause className="hero-pause-icon" />
                            Pause
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats-container">
            <div className="stats-row">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="stats-card">
                  <div className="stats-icon-bg">
                    <FontAwesomeIcon icon={metric.icon} className={`stats-icon ${metric.color}`} />
                  </div>
                  <div className="stats-value">{metric.value}</div>
                  <div className="stats-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
  <div className="features-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="features-header">
              <h2 className="features-title">
                Comprehensive Healthcare Features
              </h2>
              <p className="features-desc">
                Everything you need for complete healthcare management in one platform
              </p>
            </div>

            <div className="features-row">
              {/* Core Features */}
              <div className="feature-card">
                <div className="feature-emoji"><FontAwesomeIcon icon={faHospitalUser}/></div>
                <h3 className="feature-title">Digital Health Card</h3>
                <p className="feature-desc">QR code enabled health cards with instant access to your medical information.</p>
                <div className="feature-badge">
                  <CheckCircle className="feature-badge-icon" />
                  <span>Instant verification</span>
                </div>
                <button className="feature-btn">
                  Get Your Card <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faLaptopMedical}/>
                </div>
                <h3 className="feature-title">Smart Medical Records</h3>
                <p className="feature-desc">AI-powered organization with automatic categorization and smart search.</p>
                <div className="feature-badge">
                  <Zap className="feature-badge-icon" />
                  <span>AI-powered insights</span>
                </div>
                <button className="feature-btn">
                  View Records <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faQrcode}/>
                </div>
                <h3 className="feature-title">Digital Health Card</h3>
                <p className="feature-desc">QR code enabled health cards with instant access to your medical information.</p>
                <div className="feature-badge">
                  <CheckCircle className="feature-badge-icon" />
                  <span>Instant verification</span>
                </div>
                <button className="feature-btn">
                  Get Your Card <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              {/* New Advanced Features */}
              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faUserNurse}/>
                </div>
                <h3 className="feature-title">Telemedicine</h3>
                <p className="feature-desc">Video consultations with certified doctors, available 24/7 in multiple languages.</p>
                <div className="feature-badge">
                  <Video className="feature-badge-icon" />
                  <span>HD video calls</span>
                </div>
                <button className="feature-btn">
                  Start Consultation <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faCapsules}/>
                </div>
                <h3 className="feature-title">Medicine Tracker</h3>
                <p className="feature-desc">Smart reminders, drug interactions checker, and pharmacy locator with delivery.</p>
                <div className="feature-badge">
                  <Bell className="feature-badge-icon" />
                  <span>Smart reminders</span>
                </div>
                <button className="feature-btn">
                  Track Medicine <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faChartSimple}/>
                </div>
                <h3 className="feature-title">Health Analytics</h3>
                <p className="feature-desc">Comprehensive health insights with predictive analytics and personalized recommendations.</p>
                <div className="feature-badge">
                  <TrendingUp className="feature-badge-icon" />
                  <span>Predictive insights</span>
                </div>
                <button className="feature-btn">
                  View Analytics <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faTruckMedical}/>
                </div>
                <h3 className="feature-title">Emergency Services</h3>
                <p className="feature-desc">One-tap emergency contacts, location sharing, and instant medical alert system.</p>
                <div className="feature-badge feature-badge-red">
                  <AlertCircle className="feature-badge-icon" />
                  <span>Instant response</span>
                </div>
                <button className="feature-btn feature-btn-red">
                  Emergency Help <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faAddressCard}/>
                </div>
                <h3 className="feature-title">Insurance Manager</h3>
                <p className="feature-desc">Manage health insurance claims, track coverage, and direct billing with hospitals.</p>
                <div className="feature-badge">
                  <Shield className="feature-badge-icon" />
                  <span>Secure transactions</span>
                </div>
                <button className="feature-btn">
                  Manage Insurance <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>

              <div className="feature-card">
                <div className="feature-emoji">
                  <FontAwesomeIcon icon={faHeart}/>
                </div>
                <h3 className="feature-title">Fitness Tracking</h3>
                <p className="feature-desc">Integration with wearables, step counting, and workplace health challenges.</p>
                <div className="feature-badge">
                  <Activity className="feature-badge-icon" />
                  <span>Real-time monitoring</span>
                </div>
                <button className="feature-btn">
                  Start Tracking <ArrowRight className="feature-btn-arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Services Quick Access */}
        <div className="emergency-section">
          <div className="emergency-container">
            <div className="emergency-header">
              <h2 className="emergency-title">
                Emergency Services
              </h2>
              <p className="emergency-desc">
                Quick access to emergency services - tap to call instantly
              </p>
            </div>
            <div className="emergency-row">
              {emergencyServices.map((service, index) => (
                <button 
                  key={index}
                  className={`emergency-btn ${service.color}`}
                >
                  <div className="emergency-icon">
                    {/* {typeof service.icon === 'string' ? service.icon : <service.icon className="emergency-icon-svg" />} */}
                    <FontAwesomeIcon icon={service.icon} className="emergency-icon-svg" />
                  </div>
                  <div className="emergency-name">{service.name}</div>
                  <div className="emergency-number">{service.number}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <h2 className="testimonials-title">
                What Our Users Say
              </h2>
              <p className="testimonials-desc">
                Real stories from migrant workers who trust careLink
              </p>
            </div>
            <div className="testimonials-main">
              <div className="testimonial-carousel">
                <div
                  className="testimonial-carousel-track"
                  style={{
                    display: 'flex',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                    width: `${testimonials.length * 100}%`
                  }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="testimonial-card"
                      style={{ flex: '0 0 100%', maxWidth: '100%' }}
                    >
                      <div className="testimonial-emoji">{testimonial.image}</div>
                      <div className="testimonial-stars">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="testimonial-star" />
                        ))}
                      </div>
                      <blockquote className="testimonial-text">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-role">{testimonial.role}</div>
                    </div>
                  ))}
                </div>
              </div>
             
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`testimonial-dot${index === currentTestimonial ? ' testimonial-dot-active' : ''}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className="slider-container">
      <div className="slider-header">
        <h2 className="slider-title">
          What our Users say
        </h2>
        <p className="slider-subtitle">
          Real stories from migrant workers who trust careLink
        </p>
      </div>
      
      <div className="slider-track-container">
        {/* Sliding track */}
        <div className="slider-track">
          {doubledImages.map((image, index) => (
            <div key={index} className="slider-item">
              <img
                src={image.src}
                alt={image.alt}
                className="slider-image"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for seamless edges */}
        <div className="slider-gradient-left" />
        <div className="slider-gradient-right" />
      </div>
      
      {/* Indicators */}
      <div className="slider-indicators">
        {images.map((_, index) => (
          <div key={index} className="slider-indicator" />
        ))}
      </div>
    </div>

        {/* App Download Section */}
        <div className="app-download-section">
          <div className="app-download-container">
            <div className="app-download-row">
              <div className="app-download-info">
                <h2 className="app-download-title">
                  Get the careLink Mobile App
                </h2>
                <p className="app-download-desc">
                  Access your health records on the go. Available for iOS and Android with offline sync capabilities.
                </p>
                <div className="app-download-features">
                  <div className="app-download-feature">
                    <Smartphone className="app-download-feature-icon" />
                    <span>Works offline - no internet required</span>
                  </div>
                  <div className="app-download-feature">
                    <Lock className="app-download-feature-icon" />
                    <span>Biometric security (Face ID, Fingerprint)</span>
                  </div>
                  <div className="app-download-feature">
                    <Bell className="app-download-feature-icon" />
                    <span>Smart health reminders and alerts</span>
                  </div>
                </div>
                <div className="app-download-btn-row">
                  <button className="app-download-btn">
                    <span>📱</span>
                    <div className="app-download-btn-text">
                      <div className="app-download-btn-xs">Download on the</div>
                      <div className="app-download-btn-bold">App Store</div>
                    </div>
                  </button>
                  <button className="app-download-btn">
                    {/* <span>
                      <FontAwesomeIcon icon={fagoogleplay }  />
                    </span> */}
                    <div className="app-download-btn-text">
                      <div className="app-download-btn-xs">Get it on</div>
                      <div className="app-download-btn-bold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="app-download-image-wrap">
                <div className="app-download-image-bg">
                  <div className="app-download-image-content">
                    <Smartphone className="app-download-image-icon" />
                    <div className="app-download-image-title">careLink</div>
                    <div className="app-download-image-desc">Mobile App</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">
              Ready to Take Control of Your Health?
            </h2>
            <p className="cta-desc">
              Join thousands of migrant workers in Kerala who trust careLink for their healthcare needs.
            </p>
            <div className="cta-btn-row">
              <button className="cta-btn cta-btn-primary">
                Register Now
              </button>
              <button className="cta-btn cta-btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>      
    </div>
    // </div>
  );
};

export default HomePage;