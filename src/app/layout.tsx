import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="text-2xl md:text-4xl self-center mt-4">
          Welcome to Footium!
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="self-center mb-4">© 2025 Footium</footer>
      </div>
    </>
  );
}
