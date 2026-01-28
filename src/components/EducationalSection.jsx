import { useLanguage } from '../hooks/useLanguage'

export default function EducationalSection() {
  const { language } = useLanguage()
  
  const section1Content = {
    sq: {
      title: "Pse çmimet ndryshojnë?",
      paragraphs: [
        "Çdo vit, diaspora shqiptare dërgon mbi €1.2 miliardë në Kosovë - një shumë që mbështet mijëra familje. Por jo të gjitha shërbimet ofrojnë të njëjtin çmim.",
        "Disa kompani aplikojnë tarifa fikse, të tjera marrin një përqindje të shumës, dhe shumë kombinojnë të dyja. Wise zakonisht ofron tarifen më të ulët (0.41%), ndërsa Western Union mund të kushtojë deri në 3.5% - një ndryshim i madh kur dërgon €500 ose më shumë.",
        "Shpejtësia gjithashtu luan rol: transfertat e shpejta (minuta deri në 1 ditë) kushtojnë më shumë se ato standarde (1-3 ditë). Nëse nuk nxitoni, zgjidhni opsionin më të ngadaltë dhe kurseni para."
      ]
    },
    en: {
      title: "Why do prices differ?",
      paragraphs: [
        "Every year, the Albanian diaspora sends over €1.2 billion to Kosovo - an amount that supports thousands of families. But not all services offer the same price.",
        "Some companies apply flat fees, others take a percentage of the amount, and many combine both. Wise typically offers the lowest fee (0.41%), while Western Union can cost up to 3.5% - a big difference when sending €500 or more.",
        "Speed also plays a role: fast transfers (minutes to 1 day) cost more than standard ones (1-3 days). If you're not in a hurry, choose the slower option and save money."
      ]
    }
  }
  
  const section2Content = {
    sq: {
      title: "Si zgjedh shërbimin më të mirë?",
      intro: "Për diasporën tonë, çdo euro ka rëndësi. Këtu janë këshilla nga përdoruesit tanë:",
      tips: [
        {
          icon: "✓",
          title: "Shiko shumën që arrin në Kosovë",
          desc: "Nuk ka rëndësi sa paguani ju - e rëndësishme është sa marrin familjarët tuaj në dorë. Wise shpesh fiton këtu."
        },
        {
          icon: "✓",
          title: "Krahasoni shpejtësinë me koston",
          desc: "Dërgoni para për emergjencë? Western Union arrin në minuta. Dërgoni rregullisht çdo muaj? Zgjidhni Wise ose Remitly që janë më të lira."
        },
        {
          icon: "✓",
          title: "Verifikoni disponueshmërinë",
          desc: "Në Gjermani dhe Zvicër, të gjitha këto shërbime funksionojnë. Por kontrolloni gjithmonë nëse shërbimi është i disponueshëm në vendin tuaj."
        },
        {
          icon: "✓",
          title: "Përdorni llogari bankare, jo cash pickup",
          desc: "Transfertat në llogari janë më të lira se pickups në Western Union ose Ria. Nëse familja ka llogari bankare në Kosovë, përdoreni atë."
        },
        {
          icon: "✓",
          title: "Regjistrohuni për alerts",
          desc: "Tarifat ndryshojnë. Kompanit shpesh ofrojnë promocione. Regjistrohuni më sipër për të marrë njoftimet më të reja."
        }
      ]
    },
    en: {
      title: "How to choose the best service?",
      intro: "For our diaspora, every euro matters. Here are tips from our users:",
      tips: [
        {
          icon: "✓",
          title: "Check the amount that arrives in Kosovo",
          desc: "It doesn't matter how much you pay - what matters is how much your family receives. Wise often wins here."
        },
        {
          icon: "✓",
          title: "Compare speed with cost",
          desc: "Sending money for an emergency? Western Union arrives in minutes. Sending regularly every month? Choose Wise or Remitly which are cheaper."
        },
        {
          icon: "✓",
          title: "Verify availability",
          desc: "In Germany and Switzerland, all these services work. But always check if the service is available in your country."
        },
        {
          icon: "✓",
          title: "Use bank accounts, not cash pickup",
          desc: "Bank transfers are cheaper than pickups at Western Union or Ria. If your family has a bank account in Kosovo, use that."
        },
        {
          icon: "✓",
          title: "Sign up for alerts",
          desc: "Fees change. Companies often offer promotions. Sign up above to get the latest notifications."
        }
      ]
    }
  }
  
  const content1 = language === 'sq' ? section1Content.sq : section1Content.en
  const content2 = language === 'sq' ? section2Content.sq : section2Content.en
  
  return (
    <section className="mt-12 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Section 1: Why prices differ */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <span className="text-4xl">💡</span>
          {content1.title}
        </h2>
        
        <div className="space-y-4">
          {content1.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      
      {/* Section 2: How to choose */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          {content2.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          {content2.intro}
        </p>
        
        <div className="space-y-5">
          {content2.tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-green-500 dark:text-green-400 text-2xl mt-1 flex-shrink-0">
                {tip.icon}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-lg">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
