import { useState, useEffect } from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'
import ComparisonCard from './components/ComparisonCard'
import NewsletterSignup from './components/NewsletterSignup'
import EducationalSection from './components/EducationalSection'
import Footer from './components/Footer'
import { useLanguage } from './hooks/useLanguage'
import { sortServicesByValue } from './utils/calculations'
import { serviceData, countries } from './utils/exchangeRates'
import { initGA } from './utils/analytics'
import { formatCurrency } from './utils/calculations'

function App() {
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { language, t } = useLanguage()

  // Initialize Google Analytics if measurement ID is provided
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (measurementId) {
      initGA(measurementId)
    }
  }, [])

  // Load default results on mount
  useEffect(() => {
    const defaultAmount = 500
    const defaultCountry = 'DE'
    const defaultCurrency = 'EUR'
    const sortedServices = sortServicesByValue(serviceData, defaultAmount)
    setResults({
      services: sortedServices,
      amount: defaultAmount,
      fromCountry: defaultCountry,
      selectedCurrency: defaultCurrency
    })
  }, [])

  const handleCalculate = (amount, fromCountry, selectedCurrency) => {
    setIsLoading(true)
    
    // Simulate loading state for better UX (600ms provides perceived performance without feeling sluggish)
    setTimeout(() => {
      const sortedServices = sortServicesByValue(serviceData, amount)
      setResults({
        services: sortedServices,
        amount: amount,
        fromCountry,
        selectedCurrency
      })
      setIsLoading(false)
    }, 600)
  }

  // Get country name for display
  const getCountryName = (countryCode) => {
    const country = countries.find(c => c.code === countryCode)
    return country ? country.name[language] : countryCode
  }

  // Calculate savings
  const calculateSavings = () => {
    if (!results || !results.services.length) return null
    
    const bestService = results.services[0]
    const worstService = results.services[results.services.length - 1]
    const savingsAmount = (worstService.fee - bestService.fee).toFixed(2)
    
    // Only show savings if there's actually a difference
    if (parseFloat(savingsAmount) <= 0) return null
    
    return {
      amount: savingsAmount,
      worstServiceName: worstService.name
    }
  }

  const savings = results ? calculateSavings() : null

  return (
    <p>Impact-Site-Verification: 347affb7-c7dc-49c3-9225-cba330cc770a</p>
    <div className="min-h-screen bg-white dark:bg-[#0F1419] transition-colors duration-300">
      <Header />
      
      <main>
        <Calculator onCalculate={handleCalculate} isLoading={isLoading} />
        
        {/* Results Section */}
        {results && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-4 text-center transition-colors duration-300">
              {t('results.comparisonTitle')}
            </h2>
            
            {/* Visual Indicator for Default Results */}
            <p className="text-center text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-6">
              {t('calculator.showingResults', { 
                amount: formatCurrency(results.amount),
                country: getCountryName(results.fromCountry)
              })}
            </p>

            {/* Summary Card */}
            {!isLoading && savings && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('summary.sending')}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {formatCurrency(results.amount)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('summary.bestOption')}
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {results.services[0].name}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('summary.youSave')}
                    </div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(savings.amount)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Loading Skeleton */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: Object.keys(serviceData).length }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl h-96 transition-colors duration-300" />
                ))}
              </div>
            ) : (
              /* Results Grid - Desktop */
              <>
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                  {results.services.map((service, index) => (
                    <ComparisonCard
                      key={service.id}
                      service={service}
                      amount={results.amount}
                      isBestValue={index === 0}
                      savingsAmount={savings?.amount}
                      worstServiceName={savings?.worstServiceName}
                      selectedCurrency={results.selectedCurrency}
                    />
                  ))}
                </div>

                {/* Results Swipeable - Mobile */}
                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide animate-fadeIn">
                  {results.services.map((service, index) => (
                    <div key={service.id} className="flex-none w-[85vw] snap-center">
                      <ComparisonCard
                        service={service}
                        amount={results.amount}
                        isBestValue={index === 0}
                        savingsAmount={savings?.amount}
                        worstServiceName={savings?.worstServiceName}
                        selectedCurrency={results.selectedCurrency}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination Dots for Mobile */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                  {results.services.map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
                      aria-label={`Card ${i + 1} of ${results.services.length}`}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        )}
        
        {/* Newsletter Signup - Add after results */}
        {results && <NewsletterSignup />}
        
        <EducationalSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
