// Currency definitions with exchange rates
export const currencies = {
  EUR: { 
    code: 'EUR',
    symbol: '€', 
    rate: 1.00, 
    name: 'Euro', 
    flag: '🇪🇺' 
  },
  USD: { 
    code: 'USD',
    symbol: '$', 
    rate: 1.10,  // €1 = $1.10 (hardcoded for MVP)
    name: 'US Dollar', 
    flag: '🇺🇸' 
  },
  CHF: { 
    code: 'CHF',
    symbol: 'Fr.', 
    rate: 0.95,  // €1 = Fr. 0.95 (hardcoded for MVP)
    name: 'Swiss Franc', 
    flag: '🇨🇭' 
  }
}

// Smart default currency by country
export const countryDefaultCurrency = {
  DE: 'EUR',  // Germany
  CH: 'CHF',  // Switzerland
  AT: 'EUR',  // Austria
  IT: 'EUR',  // Italy
  SE: 'EUR',  // Sweden
  GB: 'EUR'   // UK
}

// Convert amount between currencies
export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) return amount
  
  // Convert to EUR first (base currency)
  const amountInEUR = fromCurrency === 'EUR' 
    ? amount 
    : amount / currencies[fromCurrency].rate
  
  // Convert from EUR to target currency
  const result = toCurrency === 'EUR'
    ? amountInEUR
    : amountInEUR * currencies[toCurrency].rate
    
  return parseFloat(result.toFixed(2))
}

// NOTE: Replace the placeholder affiliate codes below with actual affiliate links before deployment
// YOUR_CODE, YOUR_REFERRAL, YOUR_LINK, YOUR_ID, YOUR_CODE need to be replaced with real values
export const serviceData = {
  wise: {
    id: 'wise',
    name: 'Wise',
    feePercentage: 0.9,
    flatFee: 0.5,
    transferTime: { min: 1, max: 2, unit: 'days' },
    exchangeRate: 1.0,
    affiliateLink: 'https://wise.com/invite/u/YOUR_CODE?utm_source=remittance_tracker&utm_medium=comparison'
  },
  remitly: {
    id: 'remitly',
    name: 'Remitly',
    feePercentage: 1.5,
    flatFee: 2.0,
    transferTime: { min: 0, max: 1, unit: 'days' },
    exchangeRate: 1.0,
    affiliateLink: 'https://remit.ly/YOUR_REFERRAL?utm_source=remittance_tracker&utm_medium=comparison'
  },
  westernunion: {
    id: 'westernunion',
    name: 'Western Union',
    feePercentage: 3.5,
    flatFee: 5.0,
    transferTime: { min: 0, max: 1, unit: 'days' },
    exchangeRate: 1.0,
    affiliateLink: 'https://wumt.co/YOUR_LINK?utm_source=remittance_tracker&utm_medium=comparison'
  },
  xoom: {
    id: 'xoom',
    name: 'Xoom',
    feePercentage: 2.0,
    flatFee: 3.0,
    transferTime: { min: 0, max: 1, unit: 'days' },
    exchangeRate: 1.0,
    affiliateLink: 'https://xoom.com/ref/YOUR_ID?utm_source=remittance_tracker&utm_medium=comparison'
  },
  ria: {
    id: 'ria',
    name: 'Ria Money Transfer',
    feePercentage: 2.5,
    flatFee: 3.5,
    transferTime: { min: 0, max: 1, unit: 'days' },
    exchangeRate: 1.0,
    affiliateLink: 'https://ria.com/ref/YOUR_CODE?utm_source=remittance_tracker&utm_medium=comparison'
  }
}

// NOTE: In a production app, this should be fetched from an API that provides real-time exchange rates
// For MVP purposes, this timestamp is generated at build time
export const lastUpdated = new Date().toISOString()

export const countries = [
  { code: 'DE', name: { sq: '🇩🇪 Gjermania', en: '🇩🇪 Germany' } },
  { code: 'CH', name: { sq: '🇨🇭 Zvicra', en: '🇨🇭 Switzerland' } },
  { code: 'AT', name: { sq: '🇦🇹 Austria', en: '🇦🇹 Austria' } },
  { code: 'IT', name: { sq: '🇮🇹 Italia', en: '🇮🇹 Italy' } },
  { code: 'SE', name: { sq: '🇸🇪 Suedia', en: '🇸🇪 Sweden' } },
  { code: 'GB', name: { sq: '🇬🇧 Mbretëria e Bashkuar', en: '🇬🇧 United Kingdom' } }
]
