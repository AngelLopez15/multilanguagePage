'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Tipado del objeto de traducciones
const routeTranslations: Record<string, string> = {
  '/es/somos': '/en/weare',
  '/es/contacto': '/en/contact',
  '/en/weare': '/es/somos',
  '/en/contact': '/es/contacto',
};

export default function Navbar() {
  const pathname = usePathname();

  // Detecta el idioma actual
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';

  // Genera la ruta traducida (si existe en el mapa)
  const translatedPath = routeTranslations[pathname] || `/${currentLocale === 'en' ? 'es' : 'en'}`;

  return (
    <nav className="p-4 bg-gray-200">
      <ul className="flex space-x-4">
        {/* Enlaces de navegación */}
        <li>
          <Link href={`/${currentLocale === 'en' ? 'en/weare' : 'es/somos'}`}>
            {currentLocale === 'en' ? 'We are' : 'Somos'}
          </Link>
        </li>
        <li>
          <Link href={`/${currentLocale === 'en' ? 'en/contact' : 'es/contacto'}`}>
            {currentLocale === 'en' ? 'Contact' : 'Contacto'}
          </Link>
        </li>
        {/* Botón para cambiar de idioma */}
        <li>
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded"
            onClick={() => {
              window.location.href = translatedPath;
            }}
          >
            {currentLocale === 'en' ? 'Español' : 'English'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
