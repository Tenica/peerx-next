import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PeerX",
  description: "Exchange fintech",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
       
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
