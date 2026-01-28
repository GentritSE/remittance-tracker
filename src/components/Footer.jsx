import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#F8F9FA] dark:bg-[#1C1F26] border-t border-[#E5E7EB] dark:border-[#2F3336] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-3 transition-colors duration-300">
              💸 Remittance Tracker
            </h3>
            <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
              {t('footer.description')}
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-3 transition-colors duration-300">
              ⚠️ Disclaimer
            </h3>
            <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#E5E7EB] dark:border-[#2F3336] text-center transition-colors duration-300">
          <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
