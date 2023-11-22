import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/SessionProviders";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/Header";
export const metadata = {
  title: "Nutritionist",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${inter.className} relative h-full`}>
        <AuthProvider>
          <main className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 flex-grow">{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
