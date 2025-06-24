import { AppProvider } from "context/AppProvider";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={openSans.className}>
      <body className={`antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
