// components/LanguageSwitcher.tsx
"use client"; // Important to add for client-side code

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router'; // Adjusted for dynamic routing

export default function LanguageSwitcher() {
  const pathname = usePathname(); // Get current path
  const searchParams = useSearchParams(); // Get current search params (query)
  const locale = searchParams.get('locale') || 'en'; // Default to English if no locale is set

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en';
    const newUrl = `${pathname}?locale=${nextLocale}`;
    window.location.href = newUrl; // Redirect to the new locale URL
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
    >
      {locale === "en" ? "Français" : "English"}
    </button>
  );
}
