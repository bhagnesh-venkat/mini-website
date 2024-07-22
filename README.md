
















Your task is to create a mini-website to collect and display real-time price data:

Backend:

- Poll real-time data every few seconds for 5 stocks or crypto (ex. GOOG, BTC) from an API of your choice
- There are multiple free APIs for eg. LiveCoinWatch, CoinGecko
- Store that data in a mongoDB database

Frontend:

- Fetch the most recent 20 real-time data entries from the mongoDB database for a particular stock or crypto and display that in a table.
- The table should be dynamic and should be updating its values in real-time according to new data.
- Include a button to a modal/popup that allows you to change the stock or crypto.

Using Next.js (or Express), Typescript, and Redux is mandatory. For Redux, put all state in localStorage, avoid use of useState(), and utilize actions and selectors when necessary.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
