This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Running the app will tell you the port running on.

Open [http://localhost:{port}](http://localhost:{port}) with your browser to see the app.

## Notes
I probably spent more than 2 hours on this, partly because I haven't used Next.js before (and had to figure out the intricacies of SSR vs CSR) and partly because I was having fun with the data, and I've not had that in a while!

It's not the prettiest and I definitely could have tidied that up more, but as the requirements stated it was more important to sort the functions out.

I also added the use of Jotai for state management, just because I find it really easy to use and removed a lot of prop drilling that would have otherwise been necessary.

I also didn't put and memoization around calculating the players to display (based on filters) because I ran out of time. Normally I would have transferred the loading of the data and the calculation of the display players to the jotai state to ensure they are only recalculated when state changes (which in this small app they pretty much are anyway)

## Assumptions
The requirements document didn't specify if the filters and sort order should be executed by re-calling the graph server or performed locally.

I decided that as the data set was small enough I would implement it on the front-end rather than making subsequent calls to the server.


