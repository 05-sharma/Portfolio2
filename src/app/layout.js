import "./globals.css";

export const metadata = {
  title: "Kavita Sharma | Portfolio",
  description: "UI/UX Designer, Programmer & Graphic Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
