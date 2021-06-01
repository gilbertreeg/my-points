This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install packages and generate test data

```bash
cd scripts
# intall dependencies for data generation
npm install
# run script to generate test data
node fakeData
# navigate to the "next" directory
cd ../next
# install dependencies for next app
npm install
```

Run the development server from the "next" directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Graphql playground can be accessed at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).

## App Requirements:

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

- Use React JS
- Make up a data set to best demonstrate your solution
- Utilize APIs with your solution
- Check solution into GitHub
