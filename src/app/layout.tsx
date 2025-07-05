import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from './client-layout';
import { ThemeProvider } from '../context/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata } from './metadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
                document.documentElement.style.colorScheme = theme;
              })()
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ClientLayout>
            <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
              {children}
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
