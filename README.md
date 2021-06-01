This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install packages and generate test data

```bash
cd scripts
# intall node packages for data generation
npm install
# run script to generate test data
node fakeData
# navigate to the "next" directory
cd ../next
# install dependencies
npm install
```

Run the development server from the "next" directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Graphql playground can be accessed at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).
