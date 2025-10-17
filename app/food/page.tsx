'use client';

import Image from 'next/image';
import { Utensils, Leaf, MapPin } from 'lucide-react';

const dishes = [
  {
    name: 'Laap (ລາບ)',
    type: 'National Dish',
    description: 'Minced meat salad with lime, fish sauce, roasted rice powder, fresh herbs, and chilies. The quintessential Lao dish, often served with sticky rice.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lao_larb.jpg/1280px-Lao_larb.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Available everywhere, especially night markets',
    isVegetarian: false,
  },
  {
    name: 'Tam Mak Hoong (ตำหมากหุ่ง)',
    type: 'Street Food',
    description: 'Spicy green papaya salad pounded with mortar and pestle. Made with lime, chilies, tomatoes, fermented fish sauce, and peanuts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Green_papaya_salad.jpg/1280px-Green_papaya_salad.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Street vendors, night markets, and restaurants',
    isVegetarian: true,
  },
  {
    name: 'Khao Niao (ເຂົ້າໜຽວ)',
    type: 'Staple Food',
    description: 'Sticky rice - the staple of Lao cuisine. Steamed in bamboo baskets and eaten with your hands, used to scoop up other dishes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sticky_rice_in_Laos.jpg/1280px-Sticky_rice_in_Laos.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Served with every meal across Laos',
    isVegetarian: true,
  },
  {
    name: 'Mok Pa (ໝົກປາ)',
    type: 'Traditional',
    description: 'Fish steamed in banana leaves with herbs, lemongrass, galangal, and coconut. The banana leaves impart a subtle smoky flavor.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fish_steamed_in_banana_leaf.jpg/1280px-Fish_steamed_in_banana_leaf.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Luang Prabang and riverside restaurants',
    isVegetarian: false,
  },
  {
    name: 'Khao Poon (ເຂົ້າປຸ້ນ)',
    type: 'Noodle Soup',
    description: 'Spicy rice noodle soup with coconut milk, fermented fish paste, vegetables, and herbs. A comfort food favorite.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Lao_noodle_soup.jpg/1280px-Lao_noodle_soup.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Morning markets and noodle shops',
    isVegetarian: false,
  },
  {
    name: 'Sai Oua (ໄສ້ອົ່ວ)',
    type: 'Street Food',
    description: 'Grilled Lao sausage flavored with lemongrass, galangal, kaffir lime leaves, shallots, and chilies. Smoky and aromatic.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Grilled_Lao_sausage.jpg/1280px-Grilled_Lao_sausage.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Night markets and street vendors',
    isVegetarian: false,
  },
  {
    name: 'Khao Jee (ເຂົ້າຈີ່)',
    type: 'Breakfast',
    description: 'Grilled baguette sandwich - a French colonial legacy stuffed with pâté, vegetables, herbs, and your choice of meat or eggs.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lao_French_baguette.jpg/1280px-Lao_French_baguette.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Morning street carts in every town',
    isVegetarian: false,
  },
  {
    name: 'Or Lam (ອໍ່ລາມ)',
    type: 'Northern Specialty',
    description: 'Hearty stew from Luang Prabang made with dried buffalo meat, eggplant, wood ear mushrooms, and bitter greens. Rich and flavorful.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lao_stew_or_lam.jpg/1280px-Lao_stew_or_lam.jpg',
    credit: 'Photo from Wikimedia Commons',
    whereToTry: 'Luang Prabang traditional restaurants',
    isVegetarian: false,
  },
];

const drinks = [
  {
    name: 'Lao Coffee',
    description: 'Strong, dark coffee from the Bolaven Plateau, often served with condensed milk over ice.',
    icon: '☕',
  },
  {
    name: 'Beer Lao',
    description: 'Laos\' national beer - a crisp lager perfect for hot days. The most popular beer in the country.',
    icon: '🍺',
  },
  {
    name: 'Lao Lao',
    description: 'Traditional rice whiskey - potent and smooth. Often infused with herbs or scorpions.',
    icon: '🥃',
  },
  {
    name: 'Fresh Fruit Shakes',
    description: 'Mango, pineapple, dragon fruit, and more blended with ice - refreshing and everywhere.',
    icon: '🥤',
  },
];

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#E89A3C] to-[#3B755F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Utensils className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Lao Cuisine & Food Culture
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the bold flavors, fresh herbs, and sticky rice traditions of Laotian cuisine - a hidden gem of Southeast Asian food
          </p>
        </div>
      </section>

      {/* Food Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-[#A7C957]" />
            <h3 className="text-xl font-bold mb-3">Fresh & Herbal</h3>
            <p className="text-gray-600">
              Lao food emphasizes fresh herbs, vegetables, and aromatic spices like lemongrass, galangal, and kaffir lime.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🌶️</div>
            <h3 className="text-xl font-bold mb-3">Bold & Spicy</h3>
            <p className="text-gray-600">
              Expect vibrant flavors - sour lime, fermented fish sauce, fiery chilies, and the balance of sweet and savory.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl mb-4">🍚</div>
            <h3 className="text-xl font-bold mb-3">Sticky Rice Culture</h3>
            <p className="text-gray-600">
              Sticky rice (khao niao) is central to Lao identity. It&apos;s eaten with your hands and accompanies every meal.
            </p>
          </div>
        </div>
      </section>

      {/* Must-Try Dishes */}
      <section className="bg-[#F5F5DC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            8 Must-Try Lao Dishes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From street food to traditional feasts, these dishes define Lao cuisine
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 bg-[#A7C957] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {dish.type}
                  </div>
                  {dish.isVegetarian && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <Leaf size={12} />
                      Veg
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {dish.description}
                  </p>
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#3B755F]" />
                    <span>{dish.whereToTry}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{dish.credit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Traditional Drinks
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Refresh yourself with these local beverages
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#3B755F]/10 to-[#5B9AA0]/10 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4">{drink.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {drink.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {drink.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Food Tours CTA */}
      <section className="bg-gradient-to-r from-[#E89A3C] to-[#d88a2c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🍜 Join a Lao Food Tour
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Taste your way through markets, street stalls, and family kitchens with local guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.viator.com/Laos/Food-Tours/d351-g6"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white text-[#E89A3C] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
            >
              Book Food Tours
            </a>
            <a
              href="/destinations"
              className="bg-[#3B755F] hover:bg-[#2d5a49] text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Dining Etiquette */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Lao Dining Etiquette
        </h2>
        <div className="bg-[#F5F5DC] rounded-xl p-8 space-y-4">
          <div className="flex items-start gap-4">
            <span className="text-2xl">👉</span>
            <div>
              <strong>Sticky Rice Technique:</strong> Take a small amount with your right hand, roll into a ball, and use it to scoop up other dishes.
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🥄</span>
            <div>
              <strong>Utensils:</strong> Use a spoon in your right hand and fork in your left. The fork pushes food onto the spoon.
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🍛</span>
            <div>
              <strong>Sharing is Caring:</strong> Lao meals are communal. Dishes are shared family-style from the center of the table.
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🌶️</span>
            <div>
              <strong>Spice Level:</strong> Don&apos;t be shy to ask for &quot;baw pet&quot; (not spicy) - vendors are happy to adjust heat levels.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
