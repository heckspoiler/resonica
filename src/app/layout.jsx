import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

export const metadata = {
  title: 'RESONICA Festival 2024',
  description: `

  RESONICA Festival est destiné à la découverte et à l'expression créative Suisse et internationale. Le projet se déroule dans des lieux industriels et imprévus, combinant des dimensions créatives qui permettent une expérience unique, consciente et culturelle. L'expression musicale, et tout ce qui l'accompagne, est une grande partie de notre projet. Nous engageons également des performances de danse, des marques de vêtements locales, des installations de mapping et d’art.
  RESONICA Festival is dedicated to the discovery and creative expression of Swiss and international talent. The project takes place in industrial and unexpected locations, combining creative dimensions that allow for a unique, conscious, and cultural experience. Musical expression, and everything that accompanies it, is a major part of our project. We also engage dance performances, local clothing brands, and mapping and art installations.

  ☮ CREATED BY OZELOT.LTD & STUDIO POUBELLE ☮
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
