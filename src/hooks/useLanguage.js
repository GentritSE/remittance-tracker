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

  const t = (key, params = {}) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (!value) return key
    
    // Simple interpolation for {{variable}} patterns
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
        return params[variable] !== undefined ? params[variable] : match
      })
    }
    
    return value
  }
  
  return { language, toggleLanguage, t }
}
