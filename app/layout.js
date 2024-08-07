import { Inter } from "next/font/google";
import AuthProvider from "@/component/AuthProvider";
import "./globals.css";
import { SidebarProvider } from "@/context/useSidebarContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Connectify",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SidebarProvider>
           {children}
         </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
