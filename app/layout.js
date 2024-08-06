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
      <body className={`${inter.className} bg-slate-100 `}>
        {/* Component Documentation for Unpopular-js */}
        <div className="fixed p-4 top-0 left-0 min-h-[100vh] w-[250px] bg-gradient-to-r from-slate-800 to-slate-700 text-white">
          <nav className="min-h-full overflow-y-auto">
            <div className="mb-4 bg-white rounded-md text-center py-3">
              <h1 className="text-xl font-bold text-slate-800">Unpopular-js</h1>
            </div>
            <h3 className="text-[15px] font-bold mt-4 text-slate-300 uppercase tracking-widest text-center mb-8 border-b pb-2">
              React Documentation
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
