import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Source+Sans+Pro:wght@300&family=VT323&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="h-full bg-black-light font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
