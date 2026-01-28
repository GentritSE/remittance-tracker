import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { countries } from '../utils/exchangeRates'
import { trackCalculatorUsed } from '../utils/analytics'

export default function Calculator({ onCalculate }) {
  const { language, t } = useLanguage()
  const [amount, setAmount] = useState('')
  const [fromCountry, setFromCountry] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!amount || !fromCountry) {
      setError(t('errors.fillFields'))
      return
    }

    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount < 10 || numAmount > 10000) {
      setError(t('errors.invalidAmount'))
      return
    }

    // Track analytics
    trackCalculatorUsed(numAmount, fromCountry)
    
    // Call parent handler
    onCalculate(numAmount, fromCountry)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <form 
        onSubmit={handleSubmit}
        aria-label="Money transfer calculator"
        className="bg-[#F8F9FA] dark:bg-[#1C1F26] rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Amount Input */}
          <div>
            <label 
              htmlFor="amount" 
              className="block text-sm font-medium text-[#1A1A1A] dark:text-[#E7E9EA] mb-2 transition-colors duration-300"
            >
              {t('calculator.amount')}
            </label>
            <input
              id="amount"
              type="number"
              min="10"
              max="10000"
              step="0.01"
              placeholder={t('calculator.amountPlaceholder')}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-describedby="amount-error"
              aria-invalid={error ? 'true' : 'false'}
              className="w-full px-4 py-3 text-base md:text-lg bg-white dark:bg-[#0F1419] text-[#1A1A1A] dark:text-[#E7E9EA] border border-[#E5E7EB] dark:border-[#2F3336] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:focus:ring-[#1D9BF0] transition-all duration-300"
            />
          </div>

          {/* From Country Dropdown */}
          <div>
            <label 
              htmlFor="fromCountry" 
              className="block text-sm font-medium text-[#1A1A1A] dark:text-[#E7E9EA] mb-2 transition-colors duration-300"
            >
              {t('calculator.from')}
            </label>
            <select
              id="fromCountry"
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
              aria-invalid={error ? 'true' : 'false'}
              className="w-full px-4 py-3 text-base md:text-lg bg-white dark:bg-[#0F1419] text-[#1A1A1A] dark:text-[#E7E9EA] border border-[#E5E7EB] dark:border-[#2F3336] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:focus:ring-[#1D9BF0] transition-all duration-300"
            >
              <option value="">{t('calculator.from')}</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name[language]}
                </option>
              ))}
            </select>
          </div>

          {/* To Field (Fixed) */}
          <div>
            <label 
              htmlFor="toCountry" 
              className="block text-sm font-medium text-[#1A1A1A] dark:text-[#E7E9EA] mb-2 transition-colors duration-300"
            >
              {t('calculator.to')}
            </label>
            <input
              id="toCountry"
              type="text"
              value={t('calculator.kosovo')}
              disabled
              readOnly
              className="w-full px-4 py-3 text-base md:text-lg bg-[#E5E7EB] dark:bg-[#2F3336] text-[#4B5563] dark:text-[#9CA3AF] border border-[#E5E7EB] dark:border-[#2F3336] rounded-lg transition-colors duration-300 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div 
            id="amount-error" 
            role="alert" 
            className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm transition-colors duration-300"
          >
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            aria-label="Compare transfer prices"
            className="w-full md:w-auto px-8 py-4 text-lg font-semibold text-white bg-[#0066FF] dark:bg-[#1D9BF0] hover:bg-[#0052CC] dark:hover:bg-[#1A8CD8] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:focus:ring-[#1D9BF0] focus:ring-offset-2"
          >
            {t('calculator.compare')}
          </button>
        </div>
      </form>

      {/* Exchange Rate Info */}
      <div className="mt-8 text-center">
        <div className="inline-block bg-[#F8F9FA] dark:bg-[#1C1F26] rounded-lg px-6 py-4 shadow-sm transition-colors duration-300">
          <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-1 transition-colors duration-300">
            {t('exchangeRate.title')}
          </p>
          <p className="text-2xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-2 transition-colors duration-300">
            {t('exchangeRate.euroToEuro')}
          </p>
          <p className="text-xs text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
            {t('exchangeRate.updateFrequency')}
          </p>
        </div>
      </div>
    </section>
  )
}
