# UAE | MENA Software Dev Group - Community Landing Page

A modern, professional landing page for UAE | MENA Software Dev Group, the premier tech community for software engineers and QA professionals across the UAE and MENA region.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with professional styling
- **Responsive**: Mobile-first approach with perfect rendering on all devices
- **Performance Optimized**: Built with Vite for fast loading and optimal Core Web Vitals
- **SEO Ready**: Proper meta tags, structured data, and social sharing optimization
- **Accessible**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠 Tech Stack

- **React.js** - Modern JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **GitHub Pages** - Static site hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   └── Footer.jsx          # Footer with links and contact info
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── About.jsx           # Community story and mission
│   │   ├── Mission.jsx         # Value proposition and goals
│   │   ├── Founders.jsx        # Team profiles with LinkedIn links
│   │   ├── Stats.jsx           # Community growth statistics
│   │   ├── Events.jsx          # Events and Luma integration
│   │   └── JoinUs.jsx          # Call-to-action section
│   └── ui/
│       ├── Button.jsx          # Reusable button component
│       ├── Card.jsx            # Card component with variants
│       └── Badge.jsx           # Badge component for labels
├── styles/
│   └── globals.css             # Global styles and Tailwind imports
├── App.jsx                     # Main application component
└── main.jsx                    # Application entry point
```

## 🏗 Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AshokNaik009/community-landing-page.git
cd community-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the main branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the built files ready for deployment to any static hosting service.

## 🔧 Configuration

### Base URL
The project is configured for GitHub Pages deployment with the base URL `/community-landing-page/`. To change this:

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this
})
```

### Styling
- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/styles/globals.css`
- Custom color scheme and animations defined in Tailwind config

## 🌐 Live Demo

Visit the live site: [UAE | MENA Software Dev Group](https://ashoknaik009.github.io/community-landing-page/)

## 📋 Community Information

- **LinkedIn**: [UAE MENA Software Engineers QA](https://www.linkedin.com/company/uae-mena-software-engineers-qa/)
- **Events**: [Luma Events Page](https://lu.ma/3newinli)
- **Founded**: 2023
- **Focus**: Software Engineering & Quality Assurance
- **Coverage**: UAE and MENA region

## 👥 Team Behind UAE | MENA Software Dev Group

- **Ashok Naik** - Senior Software Engineer (5+ years) - [LinkedIn](https://www.linkedin.com/in/ashok-naik-82513b111/)
- **Muhammad Shahid Rafi C P** - Senior Software Engineer (5+ years) - [LinkedIn](https://www.linkedin.com/in/muhammadshahidraficp/)

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions about the community or this website:
- Visit our [LinkedIn page](https://www.linkedin.com/company/uae-mena-software-engineers-qa/)
- Check upcoming [events on Luma](https://lu.ma/3newinli)

---

Built with ❤️ for the UAE tech community | UAE | MENA Software Dev Group © 2023