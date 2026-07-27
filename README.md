# Caritas Kampala Charities Department

Website for the Caritas Kampala Charities Department.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with jsx-a11y accessibility plugin
- **Sitemap**: next-sitemap

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Generate Sitemap

After building, generate the sitemap:

```bash
npm run postbuild
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable            | Description                    |
| ------------------- | ------------------------------ |
| `RESEND_API_KEY`    | API key for Resend email service |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID  |

## Project Structure

```
caritas-charities/
├── app/            # Next.js App Router pages and layouts
├── components/     # Shared UI components
├── content/        # Markdown content files
├── public/         # Static assets
└── ...
```

## License

All rights reserved.
