export default function WhyEcoTravel() {
  const benefits = [
    {
      icon: '🌿',
      title: 'Pristine Nature',
      description: 'Explore waterfalls, jungles, and rivers in their natural glory. 70% forest coverage makes Laos one of Southeast Asia\'s greenest nations.',
    },
    {
      icon: '🏡',
      title: 'Community Support',
      description: 'Stay with locals, support villages directly. Your visit funds schools, clean water projects, and sustainable livelihoods.',
    },
    {
      icon: '🐘',
      title: 'Wildlife Conservation',
      description: 'Ethical animal encounters, protected habitats. Meet elephants, gibbons, and dolphins responsibly—no riding, no chains.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-soft-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-green mb-4">
            Why Choose Eco Travel in Laos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Travel that protects nature, honors culture, and creates lasting positive impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-forest-green mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
