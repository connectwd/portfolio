# Jake Owen Portfolio

A fast and lightweight portfolio built with [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/), and [Tailwind CSS](https://tailwindcss.com/)


## Technologies Used

- Framework: [Next.js](https://nextjs.org/)
- Typography: [Vercel Geist Font](https://vercel.com/font)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Analytics: [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights)
- Deployment: [Vercel](https://vercel.com/)
- Make.com: [Make](https://make.com/)

## Features

- **Light and Dark Mode Toggle**: Switch between themes for better readability.
- **Performance Tracking**: Monitor web performance with [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights).
- **Automation** Using Make.com for haddling the automation for the contact form. Automation pipeline includes openai content moderation

## API's

- '/api/sendEmail' : Interal endpoint the sends trigger to the Make.com pipeline. Body: ``` { name: "string, required", email: "string, required", message: "string, optional" } ``` 
Auth: Beaer token, stored in Vercel.

## Installation

Portfolio uses [pnpm](https://pnpm.io/installation) for dependency management.

Start the development server:
```
pnpm dev
```

