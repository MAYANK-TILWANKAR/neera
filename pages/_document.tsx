import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Neera Guesthouse - Your comfortable stay in Ujjain, Madhya Pradesh. Experience local charm and modern amenities."
        />
        <meta
          name="keywords"
          content="Neera Guesthouse, Ujjain, accommodation, Madhya Pradesh, travel"
        />
        <link rel="canonical" href="https://www.neeraguesthouse.com" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Neera Guesthouse - Your Home in Ujjain"
        />
        <meta
          property="og:description"
          content="Experience comfort and local charm at Neera Guesthouse in Ujjain, Madhya Pradesh."
        />
        <meta
          property="og:image"
          content="https://www.neeraguesthouse.com/images/neera-guesthouse.jpg"
        />
        <meta property="og:url" content="https://www.neeraguesthouse.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
