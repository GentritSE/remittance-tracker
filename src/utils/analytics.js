// Google Analytics 4 Integration
export function initGA(measurementId) {
  if (!window.gtag) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
    
    window.dataLayer = window.dataLayer || []
    window.gtag = function() { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', measurementId)
  }
}

export function trackEvent(eventName, eventParams = {}) {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
  // Fallback for development
  console.log('Analytics Event:', eventName, eventParams)
}

// Predefined events
export const trackCalculatorUsed = (amount, fromCountry) => {
  trackEvent('calculator_used', {
    amount,
    from_country: fromCountry,
    to_country: 'Kosovo'
  })
}

export const trackServiceClicked = (serviceName, amount) => {
  trackEvent('service_clicked', {
    service_name: serviceName,
    amount
  })
}

export const trackAffiliateLinkClicked = (serviceName, amount, recipientReceives) => {
  trackEvent('affiliate_link_clicked', {
    service_name: serviceName,
    amount,
    recipient_receives: recipientReceives,
    value: recipientReceives // For conversion tracking
  })
}

export const trackLanguageChanged = (newLanguage) => {
  trackEvent('language_changed', {
    language: newLanguage
  })
}

export const trackThemeChanged = (newTheme) => {
  trackEvent('theme_changed', {
    theme: newTheme
  })
}
