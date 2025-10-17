'use client';

import Image from 'next/image';

const culturalHighlights = [
  {
    title: 'Buddhist Temples (Wats)',
    description: 'Laos is home to thousands of Buddhist temples, each telling stories of spirituality and art. Wat Xieng Thong in Luang Prabang and Wat Si Saket in Vientiane showcase intricate mosaics, golden Buddhas, and traditional Lao architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Wat_Xieng_Thong_in_Luang_Prabang.jpg/1280px-Wat_Xieng_Thong_in_Luang_Prabang.jpg',
    credit: 'Photo from Wikimedia Commons',
  },
  {
    title: 'Alms Giving Ceremony (Tak Bat)',
    description: 'Every morning, saffron-robed monks walk through the streets collecting offerings from locals. This sacred daily ritual, especially prominent in Luang Prabang, reflects the deep Buddhist traditions of giving and merit-making.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Tak_Bat_in_Luang_Prabang.jpg/1280px-Tak_Bat_in_Luang_Prabang.jpg',
    credit: 'Photo from Wikimedia Commons',
  },
  {
    title: 'Baci Ceremony',
    description: 'The Baci (also Sou Khwan) is an animist ceremony performed to celebrate important events. White cotton strings are tied around wrists to "bind" good spirits and bring good fortune. The ritual includes chanting, prayers, and communal celebration.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Baci_ceremony.jpg/1280px-Baci_ceremony.jpg',
    credit: 'Photo from Wikimedia Commons',
  },
  {
    title: 'Traditional Textiles',
    description: 'Lao silk weaving is a centuries-old art form. Each region has distinctive patterns - geometric designs in the north, floral motifs in the south. The intricate sinh (traditional skirt) can take months to weave by hand.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Traditional_Lao_weaving.jpg/1280px-Traditional_Lao_weaving.jpg',
    credit: 'Photo from Wikimedia Commons',
  },
  {
    title: 'Lao New Year (Pi Mai)',
    description: 'Celebrated in April, Pi Mai is the biggest festival in Laos. Streets transform into giant water fights symbolizing cleansing and renewal. Temples are decorated, Buddha statues are bathed, and families gather for feasts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lao_New_Year_Festival.jpg/1280px-Lao_New_Year_Festival.jpg',
    credit: 'Photo from Wikimedia Commons',
  },
  {
    title: 'Traditional Music & Dance',
    description: 'The khene (bamboo mouth organ) is Laos\' national instrument, producing ethereal melodies. Classical Lao dance features graceful hand movements telling stories from Buddhist Jataka tales and Hindu epics.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Khene_player.jpg/1280px-Khene_player.jpg',
    credit: 'Photo from Wikimedia Commons',
  },
];

const etiquette = [
  {
    icon: '🙏',
    title: 'Respectful Greetings',
    tip: 'Use the "nop" - press palms together at chest level and bow slightly. The higher the hands, the more respect shown.',
  },
  {
    icon: '👗',
    title: 'Temple Dress Code',
    tip: 'Cover shoulders and knees when visiting temples. Remove shoes before entering. Women should never touch monks or hand them items directly.',
  },
  {
    icon: '👣',
    title: 'Feet and Head',
    tip: 'The head is sacred, the feet are lowly. Never touch someone\'s head or point your feet at people or Buddha images.',
  },
  {
    icon: '🍽️',
    title: 'Dining Customs',
    tip: 'Wait for the eldest to begin eating. Sticky rice is eaten with hands, other dishes with a spoon (held in right hand) and fork (left hand).',
  },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#3B755F] to-[#5B9AA0]">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Lao Culture & Traditions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover the spiritual depth, artistic heritage, and welcoming customs of the Lao people
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Cultural Highlights
        </h2>

        <div className="space-y-16">
          {culturalHighlights.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">{item.credit}</p>
              </div>

              {/* Content */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-[#3B755F] mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Etiquette Tips */}
      <section className="bg-[#F5F5DC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Cultural Etiquette Tips
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Respect local customs to enhance your travel experience and show appreciation for Lao culture
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquette.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Experience Authentic Lao Culture
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Ready to immerse yourself in these rich traditions? Explore our destinations and plan your cultural journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/destinations"
            className="bg-[#3B755F] hover:bg-[#2d5a49] text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-md"
          >
            Explore Destinations
          </a>
          <a
            href="/blog"
            className="bg-white hover:bg-gray-50 text-[#3B755F] font-semibold py-4 px-8 rounded-lg border-2 border-[#3B755F] transition-colors"
          >
            Read Culture Articles
          </a>
        </div>
      </section>
    </div>
  );
}
