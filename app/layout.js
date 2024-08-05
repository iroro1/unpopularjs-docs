import { Inter } from "next/font/google";
import "./globals.css";
import NavItems from "@/components/NavItems";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unpopular-js Documentation",
  description:
    "Unpopular-js Component Documentation. Learn how to use Unpopular-js in your next project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Component Documentation for Unpopular-js */}
        <div className="fixed p-4 top-0 left-0 min-h-screen w-[250px] bg-slate-800 text-white">
          <nav>
            <div className="mb-4 bg-white rounded-md text-center py-3">
              <h1 className="text-xl font-bold text-red-800">Unpopular-js</h1>
            </div>
            <h3 className="text-[15px] font-bold mt-4">
              Component Documentation
            </h3>

            <NavItems />
          </nav>
        </div>
        <main className="min-h-screen p-4 m-2 border ml-[250px]">
          {children}
        </main>
      </body>
    </html>
  );
}
