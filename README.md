# EUROBRIDGE - Professional Visa & Immigration Consulting Website

A modern, multilingual website for EUROBRIDGE visa and immigration consulting services. Built with Next.js 15, React, TypeScript, and Tailwind CSS.

## Features

- **Multilingual Support**: English, German, and French with localStorage persistence
- **Dark Mode**: Automatic theme switching with next-themes
- **Responsive Design**: Mobile-first design optimized for all devices
- **Contact Form**: Beautiful contact form with validation and Telegram integration
- **Professional Design**: Modern UI with navy/gold color scheme
- **Smooth Animations**: Elegant transitions and scroll effects
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui
- **Form Handling**: Custom validation with server actions
- **Notifications**: Telegram API integration (optional)
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## Getting Started

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file (optional, for Telegram integration):
   ```bash
   cp .env.example .env.local
   ```

4. Add your Telegram credentials (optional):
   - Get a bot token from [@BotFather](https://t.me/botfather) on Telegram
   - Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `.env.local`

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/
├── layout.tsx              # Root layout with theme and language providers
├── page.tsx               # Main landing page
├── globals.css            # Global styles and custom animations
└── api/
    └── contact/           # Contact form API route
      └── route.ts

components/
├── Navbar.tsx             # Navigation with language and theme switcher
├── Hero.tsx               # Hero section with CTA
├── About.tsx              # About company section
├── Services.tsx           # Services showcase
├── WhyChooseUs.tsx        # Key differentiators
├── ContactForm.tsx        # Contact form component
├── Footer.tsx             # Footer with links and contact info
├── Providers.tsx          # Theme and language providers
└── ui/                    # shadcn/ui components

contexts/
└── LanguageContext.tsx    # Language management context

lib/
├── translations.ts        # Multilingual content
└── schemas.ts            # Form validation

public/
└── hero-bg.jpg           # Hero section background image
```

## Features Explained

### Multilingual System

The app supports three languages with persistent user preference:
- English (en)
- German (de)
- French (fr)

Language selection is stored in localStorage and can be changed via the globe icon in the navbar.

### Theme System

Automatic light/dark mode detection with manual override:
- Light mode (white background, dark text)
- Dark mode (navy background, light text)
- System default

### Contact Form

Professional contact form with:
- Email validation
- Phone number input
- Visa type selection
- Message textarea
- Optional Telegram notifications

Form data is validated on the client and server for security.

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized touch targets and spacing for mobile

## Customization

### Colors

Edit the color tokens in `app/globals.css`:
- Primary: Navy blue (`#1a2d4d` in light mode)
- Accent: Gold (`#c9a962`)
- Adjust via CSS custom properties

### Content

All text is managed in `lib/translations.ts`. Update translations there to change website copy.

### Company Info

- Update company name in components
- Modify contact details in Footer component
- Change service descriptions in Services component

## Environment Variables

Optional environment variables for Telegram integration:

```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

The app functions normally without these - they only enable Telegram notifications for contact form submissions.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

Works with any Node.js 18+ hosting:
- AWS Amplify
- Netlify
- DigitalOcean
- Any Node.js server

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind (no runtime overhead)
- Client-side routing for fast navigation
- Automatic code splitting
- API route caching ready

## Security

- Form validation on client and server
- SQL injection protection (no database)
- CSRF protection via Next.js
- Secure Telegram API calls with timeout
- No sensitive data stored in browser

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## License

This project is created with v0.app. Customize and use as needed.

## Support

For issues or questions:
1. Check the troubleshooting section below
2. Review component documentation in code comments
3. Check Next.js and Tailwind CSS documentation

## Troubleshooting

### Contact form not sending Telegram messages
- Verify `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are correct
- Check bot has permission to send messages to the chat
- Contact form still works, messages just won't be forwarded

### Language not persisting
- Check browser's localStorage is enabled
- Try clearing browser cache and reload

### Styles not applying
- Rebuild CSS: `pnpm dev` restarts watcher
- Clear Next.js cache: `rm -rf .next`
- Check Tailwind config is correct

### Dark mode not working
- Ensure `suppressHydrationWarning` is in html tag
- Clear browser cache
- Check next-themes installation
