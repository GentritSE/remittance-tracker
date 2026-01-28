import { useState, useEffect } from 'react'
import { trackThemeChanged } from '../utils/analytics'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('preferredTheme')
    if (saved) return saved
    
    // Otherwise check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light'
  })
  
  useEffect(() => {
    // Apply theme class to html element
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('preferredTheme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    trackThemeChanged(newTheme)
  }
  
  return [theme, toggleTheme]
}
