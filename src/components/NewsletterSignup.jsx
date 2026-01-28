import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export default function NewsletterSignup() {
  const { t, language } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    
    setStatus('submitting')
    
    // TODO: Backend integration later (Google Sheets, Mailchimp, etc.)
    // For now, store in localStorage and show success
    console.log('Newsletter signup:', email)
    localStorage.setItem('newsletter_email', email)
    
    // Simulate success
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setEmail('')
        setStatus('idle')
      }, 3000)
    }, 1000)
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mt-10 mb-10">
      <div className="flex items-start gap-4">
        <span className="text-4xl">📩</span>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2">
            {language === 'sq' 
              ? 'Merr Alert për Kursin & Tarifat Më të Mira!'
              : 'Get Alerts for Best Rates & Fees!'
            }
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {language === 'sq'
              ? 'Ne nuk e shesim email-in tuaj. Vetëm për updates & alerts.'
              : 'We don\'t sell your email. Only for updates & alerts.'
            }
          </p>
          
          {status === 'success' ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg flex items-center gap-2">
              <span className="text-xl">✓</span>
              <span>
                {language === 'sq' 
                  ? 'Faleminderit! Do të merrni alerts së shpejti.' 
                  : 'Thank you! You\'ll receive alerts soon.'
                }
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'sq' ? 'Email adresa juaj' : 'Your email address'}
                required
                disabled={status === 'submitting'}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'submitting' 
                  ? '...'
                  : language === 'sq' ? 'Subscribe →' : 'Subscribe →'
                }
              </button>
            </form>
          )}
          
          {status === 'error' && (
            <p className="text-red-600 dark:text-red-400 text-sm mt-2">
              {language === 'sq' ? 'Ju lutem vendosni një email të vlefshëm.' : 'Please enter a valid email.'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
