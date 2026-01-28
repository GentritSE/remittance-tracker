import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const [theme, toggleTheme] = useTheme()

  return (
    <header className="bg-white dark:bg-[#0F1419] border-b border-[#E5E7EB] dark:border-[#2F3336] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] transition-colors duration-300">
              Impact-Site-Verification: 347affb7-c7dc-49c3-9225-cba330cc770a
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-3 py-2 text-sm font-medium text-[#1A1A1A] dark:text-[#E7E9EA] bg-[#F8F9FA] dark:bg-[#1C1F26] hover:bg-[#E5E7EB] dark:hover:bg-[#2F3336] border border-[#E5E7EB] dark:border-[#2F3336] rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:focus:ring-[#1D9BF0]"
            >
              {language === 'sq' ? '🇦🇱 Shqip' : '🇬🇧 English'}
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 text-[#1A1A1A] dark:text-[#E7E9EA] bg-[#F8F9FA] dark:bg-[#1C1F26] hover:bg-[#E5E7EB] dark:hover:bg-[#2F3336] border border-[#E5E7EB] dark:border-[#2F3336] rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:focus:ring-[#1D9BF0]"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="mt-8 md:mt-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-4 transition-colors duration-300">
            {t('hero.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </header>
  )
}
