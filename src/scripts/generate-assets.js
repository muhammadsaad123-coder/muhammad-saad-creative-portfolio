const fs = require('fs');
const path = require('path');

// 1. MS Logo
const msLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="20" fill="#171717" stroke="#292929" stroke-width="2"/>
  <path d="M26 68 V32 L40 48 L50 38 L50 68" fill="none" stroke="#F5F5F5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M74 40 C74 34 62 32 60 40 C58 48 76 50 74 60 C72 68 58 66 56 62" fill="none" stroke="#C7F36B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="78" cy="30" r="3" fill="#C7F36B"/>
</svg>`;

// 2. Saad Avatar / Creative Emblem
const saadAvatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1A1A"/>
      <stop offset="50%" stop-color="#111111"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C7F36B" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#C7F36B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" rx="32" fill="url(#avatarBg)" stroke="#292929" stroke-width="2"/>
  <circle cx="200" cy="200" r="140" fill="url(#glow)"/>
  <circle cx="200" cy="200" r="110" fill="none" stroke="#292929" stroke-width="2" stroke-dasharray="6 6"/>
  <circle cx="200" cy="200" r="90" fill="#171717" stroke="#C7F36B" stroke-width="2"/>
  <text x="200" y="218" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="54" fill="#F5F5F5" letter-spacing="2">MS</text>
  <circle cx="245" cy="180" r="6" fill="#C7F36B"/>
  <rect x="90" y="325" width="220" height="36" rx="18" fill="#111111" stroke="#292929" stroke-width="1.5"/>
  <text x="200" y="348" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" fill="#A1A1AA" letter-spacing="1.5">CREATIVE &amp; AI CREATOR</text>
</svg>`;

// 3. Dynamic Business Suite Thumbnail (16:9 landscape)
const dbsThumbSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="dbsBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141416"/>
      <stop offset="50%" stop-color="#0E0E10"/>
      <stop offset="100%" stop-color="#080809"/>
    </linearGradient>
    <radialGradient id="dbsGlow" cx="70%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#C7F36B" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#C7F36B" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#292929" stroke-width="0.75" stroke-opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="1280" height="720" fill="url(#dbsBg)"/>
  <rect width="1280" height="720" fill="url(#grid)"/>
  <rect width="1280" height="720" fill="url(#dbsGlow)"/>

  <!-- Top Badges -->
  <g transform="translate(80, 70)">
    <rect width="180" height="36" rx="18" fill="#171717" stroke="#292929"/>
    <circle cx="20" cy="18" r="5" fill="#C7F36B"/>
    <text x="35" y="23" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F5F5F5" letter-spacing="1">AI VIDEO PRODUCTION</text>

    <rect x="200" width="140" height="36" rx="18" fill="#171717" stroke="#292929"/>
    <text x="270" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#A1A1AA">16:9 PROMO</text>
  </g>

  <!-- Left Content Area -->
  <g transform="translate(80, 190)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#C7F36B" letter-spacing="3">DYNAMIC SOLUTIONS PAKISTAN</text>
    <text x="0" y="55" font-family="system-ui, sans-serif" font-size="52" font-weight="800" fill="#F5F5F5">Dynamic Business Suite</text>
    <text x="0" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="500" fill="#A1A1AA">Software Promotional Video &amp; Feature Walkthrough</text>
    
    <!-- Feature Chips -->
    <g transform="translate(0, 160)">
      <rect x="0" y="0" width="160" height="42" rx="10" fill="#171717" stroke="#292929"/>
      <text x="80" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#F5F5F5">CRM &amp; Invoicing</text>

      <rect x="180" y="0" width="190" height="42" rx="10" fill="#171717" stroke="#292929"/>
      <text x="275" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#F5F5F5">WhatsApp Alerts</text>

      <rect x="390" y="0" width="160" height="42" rx="10" fill="#171717" stroke="#292929"/>
      <text x="470" y="26" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#F5F5F5">Payment Tracking</text>
    </g>

    <!-- Creator Tag -->
    <g transform="translate(0, 240)">
      <text x="0" y="20" font-family="system-ui, sans-serif" font-size="14" font-weight="400" fill="#71717A">Directed &amp; Produced by <tspan fill="#F5F5F5" font-weight="600">Muhammad Saad</tspan> • Tools: Google Flow, Canva, CapCut</text>
    </g>
  </g>

  <!-- Right Visual Mockup & Play Circle -->
  <g transform="translate(820, 180)">
    <!-- Dashboard card mockup -->
    <rect x="0" y="0" width="380" height="300" rx="16" fill="#171717" stroke="#292929" stroke-width="2"/>
    <rect x="0" y="0" width="380" height="46" rx="16" fill="#1E1E22"/>
    <circle cx="24" cy="23" r="6" fill="#EF4444"/>
    <circle cx="44" cy="23" r="6" fill="#F59E0B"/>
    <circle cx="64" cy="23" r="6" fill="#10B981"/>
    <text x="190" y="28" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#A1A1AA">Business Dashboard UI</text>

    <!-- Card Interior Mockups -->
    <rect x="25" y="70" width="155" height="90" rx="8" fill="#222226" stroke="#2E2E34"/>
    <text x="40" y="96" font-family="system-ui, sans-serif" font-size="11" fill="#71717A">Total Revenue</text>
    <text x="40" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#C7F36B">Rs. 2.45M</text>

    <rect x="200" y="70" width="155" height="90" rx="8" fill="#222226" stroke="#2E2E34"/>
    <text x="215" y="96" font-family="system-ui, sans-serif" font-size="11" fill="#71717A">Paid Invoices</text>
    <text x="215" y="125" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#38BDF8">98.4%</text>

    <rect x="25" y="180" width="330" height="90" rx="8" fill="#1C2719" stroke="#2D4823"/>
    <text x="40" y="210" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#C7F36B">WhatsApp Auto-Notification</text>
    <text x="40" y="235" font-family="system-ui, sans-serif" font-size="12" fill="#E4E4E7">"Invoice #1042 successfully cleared. Thank you!"</text>

    <!-- Play Button Overlay -->
    <g transform="translate(190, 150)">
      <circle cx="0" cy="0" r="46" fill="#0A0A0A" fill-opacity="0.9" stroke="#C7F36B" stroke-width="3"/>
      <polygon points="-8,-16 16,0 -8,16" fill="#C7F36B"/>
    </g>
  </g>

  <!-- Bottom Timeline Bar -->
  <g transform="translate(80, 620)">
    <line x1="0" y1="0" x2="1120" y2="0" stroke="#292929" stroke-width="2"/>
    <line x1="0" y1="0" x2="480" y2="0" stroke="#C7F36B" stroke-width="3"/>
    <text x="0" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#A1A1AA">00:45 / 01:15</text>
    <text x="1120" y="25" text-anchor="end" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#C7F36B">ULTRA HD 60FPS</text>
  </g>
</svg>`;

// 4. Dynamic ERP Next Thumbnail (9:16 vertical smartphone reel)
const erpThumbSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 1280" width="100%" height="100%">
  <defs>
    <linearGradient id="erpBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121820"/>
      <stop offset="50%" stop-color="#0A0F16"/>
      <stop offset="100%" stop-color="#05080C"/>
    </linearGradient>
    <radialGradient id="erpGlow" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="720" height="1280" fill="url(#erpBg)"/>
  <rect width="720" height="1280" fill="url(#erpGlow)"/>

  <!-- Top Status bar -->
  <g transform="translate(60, 60)">
    <rect width="180" height="38" rx="19" fill="#171717" stroke="#292929"/>
    <circle cx="20" cy="19" r="5" fill="#38BDF8"/>
    <text x="35" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F5F5F5">9:16 REEL / SHORT</text>

    <rect x="420" width="180" height="38" rx="19" fill="#171717" stroke="#292929"/>
    <text x="510" y="24" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#38BDF8">URDU EXPLAINER</text>
  </g>

  <!-- Brand & Main Title -->
  <g transform="translate(60, 160)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#38BDF8" letter-spacing="2">DYNAMIC SOLUTIONS PAKISTAN</text>
    <text x="0" y="60" font-family="system-ui, sans-serif" font-size="44" font-weight="800" fill="#F5F5F5">Dynamic ERP Next</text>
    <text x="0" y="115" font-family="system-ui, sans-serif" font-size="28" font-weight="600" fill="#C7F36B">WhatsApp &amp; AI Integration</text>
  </g>

  <!-- Smartphone Mockup Preview in Center -->
  <g transform="translate(135, 330)">
    <rect width="450" height="600" rx="36" fill="#141416" stroke="#2E3440" stroke-width="3"/>
    
    <!-- Phone top notch -->
    <rect x="155" y="14" width="140" height="22" rx="11" fill="#0A0A0A"/>
    
    <!-- WhatsApp Chat UI inside phone -->
    <g transform="translate(30, 70)">
      <rect width="390" height="64" rx="12" fill="#1F2C34"/>
      <circle cx="35" cy="32" r="18" fill="#00A884"/>
      <text x="35" y="38" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">ERP</text>
      <text x="68" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#E9EDEF">Dynamic ERP Assistant</text>
      <text x="68" y="48" font-family="system-ui, sans-serif" font-size="12" fill="#00A884">AI Business Bot • Online</text>

      <!-- Message bubble 1 -->
      <rect x="10" y="90" width="310" height="75" rx="12" fill="#202C33"/>
      <text x="25" y="116" font-family="system-ui, sans-serif" font-size="13" fill="#E9EDEF">نئی انوائس #5820 کسٹمر کو</text>
      <text x="25" y="138" font-family="system-ui, sans-serif" font-size="13" fill="#00A884">واٹس ایپ پر روانہ کر دی گئی ہے!</text>
      <text x="270" y="152" font-family="system-ui, sans-serif" font-size="10" fill="#8696A0">10:42 AM</text>

      <!-- AI badge -->
      <g transform="translate(10, 190)">
        <rect width="370" height="120" rx="16" fill="#1E2A38" stroke="#38BDF8" stroke-width="1.5"/>
        <text x="20" y="32" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#38BDF8">AI Business Intelligence</text>
        <text x="20" y="62" font-family="system-ui, sans-serif" font-size="13" fill="#F5F5F5">Daily Sales Forecast: +18.5% Growth</text>
        <text x="20" y="92" font-family="system-ui, sans-serif" font-size="12" fill="#A1A1AA">Automated stock reorder recommended for Zone 1</text>
      </g>
    </g>

    <!-- Play button overlay -->
    <g transform="translate(225, 430)">
      <circle cx="0" cy="0" r="44" fill="#0A0A0A" fill-opacity="0.85" stroke="#38BDF8" stroke-width="3"/>
      <polygon points="-8,-15 15,0 -8,15" fill="#38BDF8"/>
    </g>
  </g>

  <!-- Urdu Tagline & Creator Bottom Card -->
  <g transform="translate(60, 990)">
    <rect width="600" height="160" rx="20" fill="#171717" stroke="#292929"/>
    <text x="300" y="45" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#F5F5F5">بزنس کا مستقبل: خودکار واٹس ایپ اور AI</text>
    <text x="300" y="85" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#A1A1AA">AI Presenter • Urdu Script • CapCut Editing</text>
    <line x1="60" y1="110" x2="540" y2="110" stroke="#292929" stroke-width="1"/>
    <text x="300" y="138" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#C7F36B">Produced by Muhammad Saad</text>
  </g>
</svg>`;

// 5. Dar Electronics Digital Payment Thumbnail (16:9)
const darThumbSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="darBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B1710"/>
      <stop offset="50%" stop-color="#100E0A"/>
      <stop offset="100%" stop-color="#080705"/>
    </linearGradient>
    <radialGradient id="darGlow" cx="30%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1280" height="720" fill="url(#darBg)"/>
  <rect width="1280" height="720" fill="url(#darGlow)"/>

  <!-- Top Bar -->
  <g transform="translate(80, 70)">
    <rect width="260" height="36" rx="18" fill="#171717" stroke="#292929"/>
    <circle cx="20" cy="18" r="5" fill="#F59E0B"/>
    <text x="35" y="23" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F5F5F5">CUSTOMER AWARENESS CAMPAIGN</text>

    <rect x="280" width="180" height="36" rx="18" fill="#171717" stroke="#292929"/>
    <text x="370" y="23" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#F59E0B">1BILL &amp; RAAST GUIDE</text>
  </g>

  <!-- Main Campaign Info -->
  <g transform="translate(80, 180)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#F59E0B" letter-spacing="3">DAR ELECTRONICS</text>
    <text x="0" y="60" font-family="system-ui, sans-serif" font-size="48" font-weight="800" fill="#F5F5F5">Digital Installment Payments</text>
    <text x="0" y="115" font-family="system-ui, sans-serif" font-size="26" font-weight="500" fill="#A1A1AA">Pay Online Anytime from Mobile Banking • Zero Bank Queues</text>

    <!-- Visual Benefit Pillars -->
    <g transform="translate(0, 160)">
      <rect x="0" y="0" width="220" height="85" rx="12" fill="#1C1813" stroke="#332A1C"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#F59E0B">NO PHYSICAL QUEUES</text>
      <text x="20" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#F5F5F5">Skip the bank counter</text>

      <rect x="240" y="0" width="220" height="85" rx="12" fill="#1C1813" stroke="#332A1C"/>
      <text x="260" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#F59E0B">INSTANT 1BILL &amp; RAAST</text>
      <text x="260" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#F5F5F5">Direct mobile app transfer</text>

      <rect x="480" y="0" width="220" height="85" rx="12" fill="#1C1813" stroke="#332A1C"/>
      <text x="500" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#F59E0B">24/7 AVAILABILITY</text>
      <text x="500" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#F5F5F5">Anytime, from home</text>
    </g>

    <text x="0" y="300" font-family="system-ui, sans-serif" font-size="14" fill="#71717A">Concept, Urdu Voiceover Script &amp; Video Production by <tspan fill="#F5F5F5" font-weight="600">Muhammad Saad</tspan></text>
  </g>

  <!-- Right Visual Payment Phone Graphic -->
  <g transform="translate(860, 160)">
    <rect width="340" height="420" rx="24" fill="#171717" stroke="#292929" stroke-width="2"/>
    <rect x="20" y="30" width="300" height="70" rx="14" fill="#241E15" stroke="#45341C"/>
    <text x="40" y="58" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#F59E0B">DAR INSTALLMENT PAID</text>
    <text x="40" y="82" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#10B981">Rs. 8,500 - SUCCESS</text>

    <!-- Payment Gateway Logos Area -->
    <rect x="20" y="120" width="140" height="50" rx="10" fill="#1C1C1F"/>
    <text x="90" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#F59E0B">1BILL</text>

    <rect x="180" y="120" width="140" height="50" rx="10" fill="#1C1C1F"/>
    <text x="250" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#10B981">RAAST</text>

    <!-- Play button in card -->
    <g transform="translate(170, 280)">
      <circle cx="0" cy="0" r="45" fill="#0A0A0A" fill-opacity="0.9" stroke="#F59E0B" stroke-width="3"/>
      <polygon points="-8,-16 16,0 -8,16" fill="#F59E0B"/>
    </g>
    <text x="170" y="360" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#A1A1AA">Watch Campaign Video</text>
  </g>

  <!-- Bottom Details -->
  <g transform="translate(80, 640)">
    <line x1="0" y1="0" x2="1120" y2="0" stroke="#292929" stroke-width="1"/>
    <text x="0" y="30" font-family="system-ui, sans-serif" font-size="13" fill="#A1A1AA">Video Production Tools: Google Flow • Canva • CapCut</text>
    <text x="1120" y="30" text-anchor="end" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F59E0B">DURATION: 1:10</text>
  </g>
</svg>`;

// 6. DirectPay Digital Payment Design (1:1 Square)
const directPayThumbSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="dpBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111B17"/>
      <stop offset="50%" stop-color="#0B1310"/>
      <stop offset="100%" stop-color="#060A08"/>
    </linearGradient>
    <radialGradient id="dpGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#10B981" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1000" height="1000" fill="url(#dpBg)"/>
  <rect width="1000" height="1000" fill="url(#dpGlow)"/>

  <!-- Top Branding -->
  <g transform="translate(80, 90)">
    <rect width="200" height="42" rx="21" fill="#171717" stroke="#292929"/>
    <circle cx="24" cy="21" r="6" fill="#10B981"/>
    <text x="42" y="27" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#F5F5F5">GRAPHIC DESIGN</text>

    <rect x="680" width="160" height="42" rx="21" fill="#171717" stroke="#292929"/>
    <text x="760" y="27" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#10B981">CANVA ASSETS</text>
  </g>

  <!-- Typography & Messaging -->
  <g transform="translate(80, 200)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#10B981" letter-spacing="3">DIRECTPAY / DYNAMIC SOLUTIONS</text>
    <text x="0" y="70" font-family="system-ui, sans-serif" font-size="58" font-weight="900" fill="#F5F5F5">Fast. Frictionless.</text>
    <text x="0" y="140" font-family="system-ui, sans-serif" font-size="58" font-weight="900" fill="#C7F36B">Digital Checkout.</text>
    <text x="0" y="200" font-family="system-ui, sans-serif" font-size="22" font-weight="400" fill="#A1A1AA">Promotional Social Media Creative &amp; Brand Hierarchy</text>
  </g>

  <!-- Center Card UI -->
  <g transform="translate(80, 470)">
    <!-- Main Card -->
    <rect width="840" height="340" rx="24" fill="#171717" stroke="#292929" stroke-width="2"/>
    
    <g transform="translate(50, 60)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#71717A">INTEGRATED PAYMENT SOLUTION</text>
      <text x="0" y="40" font-family="system-ui, sans-serif" font-size="34" font-weight="800" fill="#F5F5F5">DirectPay Gateway</text>
      
      <rect x="0" y="70" width="400" height="60" rx="12" fill="#102D22" stroke="#165B43"/>
      <text x="25" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#10B981">✓ 99.9% Uptime • Instant Verification</text>
      
      <text x="0" y="175" font-family="system-ui, sans-serif" font-size="15" fill="#A1A1AA">Optimized for Instagram, LinkedIn &amp; Web Banners</text>
    </g>

    <!-- Credit card aesthetic graphic -->
    <g transform="translate(520, 50)">
      <rect width="270" height="170" rx="16" fill="#1E2824" stroke="#2D4D3E" stroke-width="2"/>
      <circle cx="45" cy="45" r="14" fill="#10B981"/>
      <circle cx="70" cy="45" r="14" fill="#C7F36B" fill-opacity="0.7"/>
      <text x="35" y="110" font-family="monospace" font-size="16" fill="#E4E4E7">••••  ••••  ••••  4092</text>
      <text x="35" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#A1A1AA">EXPIRES 08/29</text>
      <text x="200" y="145" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#10B981">PAY</text>
    </g>
  </g>

  <!-- Footer Tag -->
  <g transform="translate(80, 880)">
    <line x1="0" y1="0" x2="840" y2="0" stroke="#292929" stroke-width="1.5"/>
    <text x="0" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#F5F5F5">Layout Design &amp; Brand Styling by Muhammad Saad</text>
    <text x="840" y="45" text-anchor="end" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#10B981">1080 x 1080 FEED ASSET</text>
  </g>
</svg>`;

// Write all SVGs
fs.writeFileSync(path.join('public', 'images', 'branding', 'ms-logo.svg'), msLogoSvg);
fs.writeFileSync(path.join('public', 'images', 'profile', 'saad-avatar.svg'), saadAvatarSvg);
fs.writeFileSync(path.join('public', 'images', 'thumbnails', 'dynamic-business-suite.svg'), dbsThumbSvg);
fs.writeFileSync(path.join('public', 'images', 'thumbnails', 'dynamic-erp.svg'), erpThumbSvg);
fs.writeFileSync(path.join('public', 'images', 'thumbnails', 'dar-electronics.svg'), darThumbSvg);
fs.writeFileSync(path.join('public', 'images', 'thumbnails', 'directpay.svg'), directPayThumbSvg);

console.log('Successfully generated SVGs');
