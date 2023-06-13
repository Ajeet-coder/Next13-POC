import Navigation from "../components/Navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
