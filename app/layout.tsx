import "./globals.css";

export const metadata = {
  title: "Krisna — Portfolio",
  description: "Web & IoT Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}