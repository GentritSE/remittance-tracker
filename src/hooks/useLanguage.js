import { useState, useEffect } from 'react'
import sqTranslations from '../locales/sq.json'
import enTranslations from '../locales/en.json'
import { trackLanguageChanged } from '../utils/analytics'

const translations = {
  sq: sqTranslations,
  en: enTranslations
}

export function useLanguage() {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('preferredLanguage')
    return saved || 'sq' // Default to Albanian
  })
  
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language)
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    const newLanguage = language === 'sq' ? 'en' : 'sq'
    setLanguage(newLanguage)
    trackLanguageChanged(newLanguage)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return { language, toggleLanguage, t }
}
