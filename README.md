# GFIT - Modern Gym Management Application

A high-quality, responsive web application for gym management with seamless password reset functionality, inspired by cult.fit but with unique design elements.

## 🚀 Features

### Core Functionality
- **Password Reset System**: Complete password reset flow with validation
- **Password Strength Indicator**: Real-time password strength checking
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Beautiful animations and smooth interactions
- **Animated Loading**: High-quality loading animation with smooth transitions
- **User Authentication**: Login and signup functionality
- **App Download Integration**: Seamless mobile app promotion with QR codes
- **Mobile App Detection**: Smart prompts for mobile users to download native apps

### Pages & Components
- **Homepage**: Hero section, features, and call-to-action
- **Login Page**: User authentication with social login options
- **Signup Page**: User registration with password validation
- **Password Reset**: Comprehensive password reset workflow
- **Dashboard**: Fitness tracking and user interface
- **Fitness Page**: Workout classes and training programs
- **Header & Footer**: Navigation and branding

### Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design** for all devices
- **Modern ES6+** syntax
- **Component-based** architecture

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 📱 Mobile-First Design

The application is designed with mobile-first principles and can easily be converted to:
- **React Native** for mobile apps
- **Progressive Web App (PWA)**
- **Electron** for desktop applications

## 🎯 App Download Integration

### Features
- **App Download Section**: Prominent section on homepage with app features and download buttons
- **QR Code Generation**: Built-in tool to generate QR codes for app store links
- **Mobile Detection**: Smart prompts for mobile users to download native apps
- **Cross-Platform Support**: Android and iOS app store integration
- **App Store Ratings**: Display app ratings and download counts

### How to Use
1. **Access QR Generator**: Navigate to `/qr-generator` route
2. **Generate QR Codes**: Enter your actual app store URLs and generate QR codes
3. **Download QR Codes**: Save the generated QR codes to your project
4. **Update Links**: Replace placeholder URLs with your actual app store links
5. **Customize Content**: Modify app features, ratings, and descriptions as needed

### App Store URLs
Update these URLs in the components with your actual app store links:
- **Android**: `https://play.google.com/store/apps/details?id=com.gdinexus.gfit`
- **iOS**: `https://apps.apple.com/app/gfit/id123456789`

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamrealvinnu/GFIT.git
   cd GFIT
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── AnimatedLogo.tsx # Loading animation component
│   ├── PasswordResetForm.tsx      # Password reset form
│   ├── PasswordStrengthIndicator.tsx  # Password strength component
│   ├── AppDownloadSection.tsx    # App download promotion section
│   ├── MobileAppPrompt.tsx       # Mobile app download prompt
│   └── QRCodeGenerator.tsx       # QR code generation tool
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── LoginPage.tsx   # Login page
│   ├── SignUpPage.tsx  # Signup page
│   ├── PasswordResetPage.tsx  # Password reset page
│   ├── DashboardPage.tsx      # User dashboard
│   └── FitnessPage.tsx        # Fitness services page
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🌐 Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect your GitHub repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
3. **Environment variables** (if needed):
   - `NODE_VERSION`: `18`

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting provider

## 🔧 Configuration Files

- **`netlify.toml`**: Netlify deployment configuration
- **`_redirects`**: SPA routing for Netlify
- **`.gitignore`**: Git ignore rules
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`tsconfig.json`**: TypeScript configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Design System

- **Color Palette**: Custom primary, secondary, and neutral colors
- **Typography**: Inter and Poppins font families
- **Animations**: Smooth transitions and micro-interactions
- **Components**: Consistent design language across all elements

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [cult.fit](https://cult.fit) design principles
- Built with modern web technologies
- Designed for optimal user experience across all devices
