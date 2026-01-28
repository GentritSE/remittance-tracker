import { useLanguage } from '../hooks/useLanguage'
import { formatCurrency } from '../utils/calculations'
import { trackAffiliateLinkClicked } from '../utils/analytics'
import { currencies, convertCurrency } from '../utils/exchangeRates'

const serviceIcons = {
  wise: '🟢',
  remitly: '🔵',
  westernunion: '🟡',
  xoom: '🟣',
  ria: '🔴'
}

export default function ComparisonCard({ service, amount, isBestValue, savingsAmount, worstServiceName, selectedCurrency }) {
  const { t } = useLanguage()

  // Calculate conversions for display
  const amountUSD = convertCurrency(service.recipientReceives, 'EUR', 'USD')
  const amountCHF = convertCurrency(service.recipientReceives, 'EUR', 'CHF')

  const handleClick = () => {
    trackAffiliateLinkClicked(service.name, amount, service.recipientReceives)
    window.open(service.affiliateLink, '_blank', 'noopener,noreferrer')
  }

  const formatTransferTime = () => {
    const { min, max, unit } = service.transferTime
    if (min === max) {
      return `${min} ${t('results.' + unit)}`
    }
    return `${min}-${max} ${t('results.' + unit)}`
  }

  return (
    <article className="bg-[#F8F9FA] dark:bg-[#1C1F26] rounded-xl shadow-md hover:shadow-lg border border-[#E5E7EB] dark:border-[#2F3336] p-6 transition-all duration-300 relative">
      {/* Best Value Badge */}
      {isBestValue && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
          {t('results.bestValue')}
        </div>
      )}

      {/* Service Icon and Name */}
      <div className="flex items-center mb-4 mt-2">
        <span className="text-3xl mr-3" aria-hidden="true">
          {serviceIcons[service.id] || '⚪'}
        </span>
        <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] transition-colors duration-300">
          {service.name}
        </h3>
      </div>

      {/* Savings Amount (for best value) */}
      {isBestValue && savingsAmount && parseFloat(savingsAmount) > 0 && (
        <div className="text-green-600 dark:text-green-400 font-semibold text-sm mb-4">
          {t('results.saveVs', { amount: formatCurrency(savingsAmount), service: worstServiceName })}
        </div>
      )}

      {/* Recipient Receives */}
      <div className="mb-4">
        <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-1 transition-colors duration-300">
          {t('results.recipientReceives')}
        </p>
        <p className="text-3xl font-bold text-[#0066FF] dark:text-[#1D9BF0] transition-colors duration-300">
          {formatCurrency(service.recipientReceives)}
        </p>
        {/* Show approximate in other currencies */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {t('currency.approximate')} ${amountUSD} USD • Fr. {amountCHF} CHF
        </div>
      </div>

      {/* Fee */}
      <div className="mb-4">
        <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-1 transition-colors duration-300">
          {t('results.fee')}
        </p>
        <p className="text-lg font-semibold text-[#1A1A1A] dark:text-[#E7E9EA] transition-colors duration-300">
          {formatCurrency(service.fee)} ({service.feePercentage}%)
        </p>
      </div>

      {/* Exchange Rate */}
      <div className="mb-4">
        <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-1 transition-colors duration-300">
          {t('results.rate')}
        </p>
        <p className="text-lg font-medium text-[#1A1A1A] dark:text-[#E7E9EA] transition-colors duration-300">
          1 EUR = {service.exchangeRate.toFixed(2)} EUR
        </p>
      </div>

      {/* Transfer Time */}
      <div className="mb-6">
        <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] mb-1 transition-colors duration-300">
          {t('results.time')}
        </p>
        <p className="text-lg font-medium text-[#1A1A1A] dark:text-[#E7E9EA] transition-colors duration-300">
          {formatTransferTime()}
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleClick}
        aria-label={`${t('results.useService')} ${service.name}`}
        className="w-full px-6 py-3 text-base font-semibold text-white bg-[#0066FF] dark:bg-[#1D9BF0] hover:bg-[#0052CC] dark:hover:bg-[#1A8CD8] rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF] dark:focus:ring-[#1D9BF0] focus:ring-offset-2"
      >
        {t('results.useService')} {service.name} →
      </button>
    </article>
  )
}
