import "@/styles/globals.css";
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            {/* min-h-screen flex flex-col ใน body เพื่อให้ body มีความสูงเต็มหน้าจอและใช้ flexbox แนวตั้ง */}
            {/* flex-1 ใน main เพื่อให้ main ขยายเต็มพื้นที่ที่เหลือ ทำให้ footer ถูกดันลงไปอยู่ล่างสุด */}
            <body className="min-h-screen flex flex-col">
                <header className="p-4 bg-blue-100 border-b text-6xl">Wongnok</header>
                <main className="p-4 flex-1">{children}</main>
                <footer className="p-4 text-center bg-blue-100 text-sm text-gray-400">&copy; {new Date().getFullYear()} Odds Team Inc.</footer>
            </body>
        </html>
    );
}
