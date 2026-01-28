import { useState, useEffect } from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'
import ComparisonCard from './components/ComparisonCard'
import EducationalSection from './components/EducationalSection'
import Footer from './components/Footer'
import { useLanguage } from './hooks/useLanguage'
import { sortServicesByValue } from './utils/calculations'
import { serviceData } from './utils/exchangeRates'
import { initGA } from './utils/analytics'

function App() {
  const [results, setResults] = useState(null)
  const { t } = useLanguage()

  // Initialize Google Analytics if measurement ID is provided
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (measurementId) {
      initGA(measurementId)
    }
  }, [])

  const handleCalculate = (amount, fromCountry) => {
    const sortedServices = sortServicesByValue(serviceData, amount)
    setResults({
      services: sortedServices,
      amount: amount,
      fromCountry
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1419] transition-colors duration-300">
      <Header />
      
      <main>
        <Calculator onCalculate={handleCalculate} />
        
        {/* Results Section */}
        {results && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-8 text-center transition-colors duration-300">
              {t('results.comparisonTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.services.map((service, index) => (
                <ComparisonCard
                  key={service.id}
                  service={service}
                  amount={results.amount}
                  isBestValue={index === 0}
                />
              ))}
            </div>
          </section>
        )}
        
        <EducationalSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
