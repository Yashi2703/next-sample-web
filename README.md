# 🛍️ ShopHub - Modern E-commerce Website

A beautiful, responsive e-commerce website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with perfect desktop experience
- **Beautiful Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Modern Typography**: Google Fonts (Poppins, Inter) for excellent readability
- **Color Scheme**: Professional blue-purple gradient theme with consistent design language

### 🚀 Core Functionality
- **Hero Section**: Eye-catching banner with CTA buttons and animated elements
- **Category Navigation**: Organized product categories with beautiful icons
- **Product Showcase**: Featured products with hover effects and quick actions
- **Search Functionality**: Integrated search bar with real-time suggestions
- **Shopping Cart**: Cart icon with item count badge
- **Wishlist**: Heart icon for saving favorite products
- **User Authentication**: Profile management and login system

### 📱 Responsive Features
- **Sticky Navigation**: Header stays visible while scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Grid System**: Responsive product grid (1-4 columns based on screen size)
- **Touch-Friendly**: Optimized for mobile and tablet interactions

### 🎭 Interactive Elements
- **Hover Effects**: Product cards lift and show additional actions
- **Quick View**: Instant product preview on hover
- **Add to Cart**: Smooth animations for cart interactions
- **Wishlist Toggle**: Heart icon changes color when favorited
- **Dark Mode Toggle**: Switch between light and dark themes

### 📄 Complete Pages
- **Homepage**: Hero, categories, featured products
- **About Us**: Company story, team, values, statistics
- **Contact**: Contact form, map placeholder, FAQ section
- **Privacy Policy**: Comprehensive legal information
- **Product Pages**: Individual product details (ready for implementation)

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Fonts**: Google Fonts (Poppins, Inter)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Quick Start (Windows)
Double-click `startup.bat` to automatically install dependencies and start the server.

## 📁 Project Structure

```
ecommerce-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy policy page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── home/              # Homepage components
│   │   │   ├── Hero.tsx       # Hero section
│   │   │   ├── Categories.tsx # Category grid
│   │   │   └── FeaturedProducts.tsx # Product showcase
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   └── Footer.tsx     # Site footer
│   │   └── products/          # Product components
│   │       └── ProductCard.tsx # Product card component
│   └── styles/                # Additional styles
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎯 Key Components

### Header Component
- Sticky navigation with backdrop blur
- Search bar with icon
- Cart and wishlist icons with badges
- Mobile-responsive hamburger menu
- Dark mode toggle

### Hero Section
- Gradient background with animated elements
- Floating product cards
- CTA buttons (Shop Now, Explore Deals)
- Trust indicators (ratings, customer count)
- Wave SVG separator

### Product Cards
- Hover animations (lift effect)
- Quick view button
- Wishlist heart icon
- Price display with discounts
- Rating stars
- Add to cart functionality

### Categories
- Grid layout with colorful icons
- Hover effects and animations
- Product count badges
- Responsive design

### Footer
- Newsletter signup form
- Social media links
- Quick links organized by category
- Company information
- Contact details

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:

```css
:root {
  --primary: #3b82f6;        /* Main blue */
  --primary-dark: #2563eb;   /* Darker blue */
  --secondary: #f59e0b;      /* Orange accent */
  --accent: #10b981;         /* Green accent */
  --danger: #ef4444;         /* Red for errors */
  --success: #22c55e;        /* Green for success */
}
```

### Typography
- **Primary Font**: Poppins (headings, buttons)
- **Secondary Font**: Inter (body text, descriptions)

### Animations
All animations are powered by Framer Motion with consistent timing:
- **Duration**: 0.3s for micro-interactions, 0.6s for page transitions
- **Easing**: Smooth ease-out curves
- **Stagger**: Sequential animations for lists and grids

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column grid)
- **Tablet**: 640px - 1024px (2-3 column grid)
- **Desktop**: > 1024px (4 column grid)

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Hardware-accelerated CSS transforms

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📈 Future Enhancements

- **Product Management**: Admin panel for adding/editing products
- **Shopping Cart**: Full cart functionality with persistence
- **User Authentication**: Login/signup system
- **Payment Integration**: Stripe/PayPal integration
- **Order Management**: Order tracking and history
- **Reviews System**: Product reviews and ratings
- **Inventory Management**: Stock tracking and alerts
- **Analytics**: User behavior tracking
- **SEO Optimization**: Meta tags and structured data
- **PWA Features**: Offline support and app-like experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you need help or have questions:
- Create an issue in the repository
- Contact us at support@shophub.com
- Check our documentation

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Unsplash** for sample product images

---

**Made with ❤️ by the ShopHub Team**

*Ready to revolutionize your online shopping experience!*
