# 💸 Remittance Tracker - Kosovo

Compare money transfer services and save money when sending to Kosovo.

## 🚀 Features

- 💰 Compare 5+ money transfer services
- 🌓 Light/Dark mode with system preference detection
- 🌍 Bilingual support (Albanian/English)
- 📱 Mobile-first responsive design
- ⚡ Fast loading (<1.5s)
- ♿ WCAG AA accessible
- 📊 Google Analytics integration

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Google Analytics 4

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/GentritSE/remittance-tracker.git

# Navigate to project directory
cd remittance-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Environment Variables (Optional)

If using Google Analytics, add in Vercel:
- `VITE_GA_MEASUREMENT_ID` = Your GA4 Measurement ID

## 📁 Project Structure

```
remittance-tracker/
├── src/
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── locales/        # Translation files
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies
```

## 🌐 Supported Services

- Wise (TransferWise)
- Remitly
- Western Union
- Xoom (PayPal)
- Ria Money Transfer

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📝 License

MIT License - feel free to use this project!

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

## 📧 Contact

For questions or support, please open an issue on GitHub.