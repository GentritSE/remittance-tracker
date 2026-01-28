import { useLanguage } from '../hooks/useLanguage'

export default function EducationalSection() {
  const { t } = useLanguage()

  const whyDifferent = t('education.whyDifferent')
  const howToChoose = t('education.howToChoose')

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Why Prices Differ */}
        <article className="bg-[#F8F9FA] dark:bg-[#1C1F26] rounded-xl shadow-md p-6 md:p-8 border border-[#E5E7EB] dark:border-[#2F3336] transition-colors duration-300">
          <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-4 transition-colors duration-300">
            {whyDifferent.title}
          </h2>
          <p className="text-base text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed transition-colors duration-300">
            {whyDifferent.content}
          </p>
        </article>

        {/* How to Choose */}
        <article className="bg-[#F8F9FA] dark:bg-[#1C1F26] rounded-xl shadow-md p-6 md:p-8 border border-[#E5E7EB] dark:border-[#2F3336] transition-colors duration-300">
          <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#E7E9EA] mb-4 transition-colors duration-300">
            {howToChoose.title}
          </h2>
          <ul className="space-y-4">
            {howToChoose.points.map((point, index) => (
              <li key={index}>
                <h3 className="font-semibold text-[#1A1A1A] dark:text-[#E7E9EA] mb-1 transition-colors duration-300">
                  {point.title}:
                </h3>
                <p className="text-base text-[#4B5563] dark:text-[#9CA3AF] transition-colors duration-300">
                  {point.content}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
