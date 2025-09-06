import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "RestaurantMS - Professional Management System",
  description: "Complete restaurant management solution with orders, tables, inventory, and staff management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:opsz,wght@14..32,100..900&family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={"bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 font-[Inter] text-sm text-[#374151]"}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
