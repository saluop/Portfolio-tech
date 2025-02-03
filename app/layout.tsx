import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Orbitron } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'Salman Mustansar | Full Stack Developer',
  description: 'Portfolio website showcasing my work and experience as a Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans`}>{children}</body>
    </html>
  );
}