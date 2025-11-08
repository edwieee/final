# Real Estate Website

A modern, responsive real estate website built with Next.js 16, React 19, and TypeScript. Features a clean UI with K-RERA certification information, property listings, and contact forms.

## Features

- 🏠 K-RERA Registered Real Estate Agent showcase
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎨 Modern UI with Tailwind CSS
- 📄 Multiple pages: Home, About, Properties, Contact, K-RERA

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Deploy to Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- **Netlify**: Connect your GitHub repo and use the build command `npm run build` and publish directory `.next`
- **Railway**: Connect your repo, Railway will auto-detect Next.js
- **AWS/GCP/Azure**: Use Docker or follow Next.js standalone output instructions

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   └── lib/             # Utility functions
├── public/              # Static assets
└── package.json         # Dependencies
```

## Tech Stack

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion

## License

Private project
