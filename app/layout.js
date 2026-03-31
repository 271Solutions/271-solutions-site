import './globals.css';

export const metadata = {
  title: '271 Solutions | Technical Services & Field Solutions',
  description:
    '271 Solutions delivers practical technical services, field support, project execution, and problem-solving solutions for businesses, infrastructure, and facilities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
