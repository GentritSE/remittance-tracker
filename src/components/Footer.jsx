import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { language } = useLanguage()
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          
          {/* About */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
              🇽🇰 Remittance Tracker
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {language === 'sq' 
                ? 'Ne nuk shesim shërbime, thjesht i krahasojmë për ju. Neutral. Transparent. Pa kosto.'
                : 'We don\'t sell services, we just compare them for you. Neutral. Transparent. Free.'
              }
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">
              {language === 'sq' ? 'Linqe' : 'Links'}
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {language === 'sq' ? 'Rreth Nesh' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {language === 'sq' ? 'Termat e Përdorimit' : 'Terms of Service'}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">
              💡 {language === 'sq' ? 'Ndihmoni' : 'Help'}
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                <button 
                  onClick={() => alert(language === 'sq' ? 'Feedback form së shpejti!' : 'Feedback form coming soon!')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                >
                  📊 {language === 'sq' ? 'Raporto Tarifa të Gabuara' : 'Report Incorrect Fees'}
                </button>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  ❓ FAQ
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright - EXACT WORDING AS REQUESTED */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Remittance Tracker • Made with 💚 for Kosovo diaspora
          </p>
        </div>
      </div>
    </footer>
  )
}
