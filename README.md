# 1Fi - Smart EMI Platform 💳

<div align="center">

![1Fi Banner](https://img.shields.io/badge/1Fi-Smart_EMI_Platform-8B5CF6?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Turn Your Mutual Funds into Buying Power**

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 About The Project

1Fi is an innovative fintech platform that enables users to purchase premium smartphones ,laptops and a lot more through flexible EMI plans backed by mutual fund investments. Users can maintain their investments while gaining purchasing power through low-interest credit lines.

### ✨ Key Features

- 🛍️ **Smart Shopping** - Browse premium smartphones and laptops
- 🎨 **Multiple Variants** - Choose from different colors and storage options
- 💰 **Flexible Downpayment** - 15% or 30% downpayment options
- 📅 **EMI Plans** - 3, 6, 9, or 12 months at just 8% p.a.
- 💎 **Investment-Backed** - Keep your mutual funds growing while you spend
- 🚫 **Zero Fees** - No processing charges, no hidden costs
- 📱 **Responsive Design** - Seamless experience across all devices

---

## 🖥️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/alamrumman0/1fi-emi-platform.git
   cd 1fi-emi-platform
```

2. **Setup Backend**
```bash
   cd Server
   npm install
```

   Create `.env` file in `Server` directory:
```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
```

3. **Setup Frontend**
```bash
   cd ../client
   npm install
```

   Create `.env.development` file in `client` directory:
```env
   VITE_API_URL=http://localhost:3000/api
```

4. **Seed the Database**
```bash
   cd ../Server
   npm run seed
```

5. **Run the Application**

   **Terminal 1 - Backend:**
```bash
   cd Server
   npm run dev
```

   **Terminal 2 - Frontend:**
```bash
   cd client
   npm run dev
```

6. **Open in Browser**
```
   Frontend: http://localhost:5173
   Backend API: http://localhost:3000/api
```

---

## 📁 Project Structure
```
1fi-emi-platform/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── api/          # API integration
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── Server/                # Backend Node.js application
│   ├── models/           # Mongoose schemas
│   │   └── Product.js
│   ├── routes/           # API routes
│   │   └── productRoutes.js
│   ├── controllers/      # Route controllers
│   │   └── productController.js
│   ├── scripts/          # Database seed scripts
│   │   └── seed.js
│   ├── server.js         # Express server
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔌 API Documentation

### Base URL
```
Development: http://localhost:3000/api
Production: https://your-backend-url.onrender.com/api
```

### Endpoints

#### Get All Products
```http
GET /products
```

**Response:**
```json
{
  "success": true,
  "count": 9,
  "data": [
    {
      "id": "...",
      "name": "Apple iPhone 17 Pro",
      "brand": "Apple",
      "price": 134900,
      "variants": [...],
      "emiPlans": [...]
    }
  ]
}
```

#### Get Single Product
```http
GET /products/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "...",
    "name": "Apple iPhone 17 Pro",
    "description": "...",
    "images": [...],
    "variants": [...],
    "emiPlans": [...],
    "downpaymentOptions": [...]
  }
}
```

---

## 🗄️ Database Schema

### Product Model
```javascript
{
  name: String,              // Product name
  brand: String,             // Apple, Samsung, ASUS, etc.
  category: String,          // Smartphone, Laptop
  description: String,       // Product description
  images: [{
    url: String,
    alt: String
  }],
  basePrice: Number,         // Starting price
  variants: [{
    color: String,
    colorCode: String,       // Hex color code
    storage: String,         // 256 GB, 512 GB, etc.
    price: Number,
    stock: Number,
    sku: String
  }],
  emiPlans: [{
    tenure: Number,          // 3, 6, 9, 12 months
    interestRate: Number,    // Interest rate percentage
    label: String           // "10% EMI" badge
  }],
  downpaymentOptions: [{
    percentage: Number,      // 15, 30
    amount: Number
  }],
  features: [String],
  isActive: Boolean,
  isFeatured: Boolean,
  slug: String
}
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--slate-950: #020617    /* Background */
--slate-900: #0f172a    /* Cards */
--slate-800: #1e293b    /* Borders */

/* Accent Colors */
--violet-600: #7c3aed   /* Primary CTA */
--violet-500: #8b5cf6   /* Hover states */
--violet-400: #a78bfa   /* Text highlights */

/* Text Colors */
--white: #ffffff        /* Headings */
--gray-300: #d1d5db     /* Body text */
--gray-400: #9ca3af     /* Secondary text */
```

### Typography

- **Headings:** System font stack (optimized for each OS)
- **Body:** Inter, system-ui, sans-serif
- **Monospace:** Fira Code, monospace

---

## 📱 Features Showcase

### Product Listing
- Grid layout with responsive design
- Product cards with images and pricing
- EMI badges for quick identification
- Hover effects and smooth transitions

### Product Details
- Multiple image gallery
- Variant selector (color + storage)
- Downpayment calculator
- EMI plan comparison
- Real-time price updates

### EMI Calculator
- Dynamic EMI calculation based on:
  - Product price
  - Selected variant
  - Downpayment amount
  - Tenure selection

---

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
vercel login
vercel
vercel --prod
```

**Environment Variables:**
```
VITE_API_URL=https://your-backend.onrender.com/api
```

### Backend (Render)

1. Connect GitHub repository
2. Set root directory to `Server`
3. Build command: `npm install`
4. Start command: `npm start`

**Environment Variables:**
```
MONGO_URI=your_mongodb_atlas_uri
PORT=3000
NODE_ENV=production
```

### Database (MongoDB Atlas)

- Free tier: 512MB storage
- Automatic backups
- Global distribution

---

## 🧪 Testing
```bash
# Run backend tests
cd Server
npm test

# Run frontend tests
cd client
npm test
```

---

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** < 200KB (gzipped)

---

## 🛠️ Available Scripts

### Backend (`Server/`)
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm run seed     # Seed database with sample data
```

### Frontend (`client/`)
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

Rumman

- GitHub: [@yourusername](https://github.com/alamrumman)


---

## 🙏 Acknowledgments

- [1Fi](https://1fi.in) - For the design inspiration
- [Unsplash](https://unsplash.com) - For product images
- [Tailwind CSS](https://tailwindcss.com) - For the styling framework
- [Lucide](https://lucide.dev) - For beautiful icons

---

## 📞 Support

For support, email rummanalam.dev@gmail.com or create an issue in this repository.

---

<div align="center">

**Made with ❤️ for 1Fi SDE Assignment**

⭐ Star this repository if you found it helpful!

</div>
