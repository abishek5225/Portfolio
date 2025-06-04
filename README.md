# Blog App - Next.js Portfolio

A modern, responsive portfolio website built with Next.js, featuring a clean design and smooth animations.

## 🚀 Features

- **Next.js 14** - Latest version with App Router support
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions
- **Styled Components** - CSS-in-JS styling
- **React Icons** - Beautiful icon library
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Built-in Next.js SEO features

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Button.jsx      # Custom button component
│   ├── Skills.jsx      # Skills showcase component
│   ├── Contact.jsx     # Contact section component
│   └── Homebody.jsx    # Main content component
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper
│   ├── index.js        # Home page
│   └── cv.js           # CV/Resume page
├── public/             # Static assets
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for custom Tailwind configuration
- Update `styles/globals.css` for global styles
- Use styled-components for component-specific styling

### Content
- Update personal information in the components
- Modify the skills array in `components/Skills.jsx`
- Update education and interests data in `pages/cv.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with `railway up`
- **Heroku**: Use the Next.js buildpack

## 🔧 Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Animations**: Framer Motion
- **Styling**: Styled Components, Tailwind CSS
- **Icons**: React Icons
- **Development**: ESLint, PostCSS

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance

- **Server-Side Rendering** with Next.js
- **Optimized Images** with Next.js Image component
- **Code Splitting** for faster loading
- **SEO Optimized** with meta tags and structured data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website.

---

**Note**: This project has been converted from a React + Vite setup to Next.js for better performance, SEO, and development experience.
