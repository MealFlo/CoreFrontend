import TopBar from '@/components/Menu/TopBar';
import MenuNavBar from '@/components/Menu/MenuNavBar';
import ItemCard from '@/components/Menu/ItemCard';
import Categories from '@/components/Menu/Categories';
import Head from 'next/head';

export default function Page() {
  const menuCategories = [
    'Appetizers',
    'Entrees',
    'Desserts',
    'Drinks',
    'Wine',
    'Beer',
    'Cocktails',
    'Non-Alcoholic',
    'Specials',
    'Kids',
    'Sides',
  ];

  const menuItems = [
    {
      name: 'Beef Burger',
      description:
        'A juicy beef patty topped with lettuce, tomato, onion, and your choice of cheese, served on a freshly toasted bun.',
      price: 9.99,
      imageUrl: NaN,
    },
    {
      name: 'Caesar Salad',
      description:
        'Crisp romaine lettuce, garlic croutons, and shaved Parmesan, tossed in a creamy Caesar dressing.',
      price: 7.99,
      imageUrl: NaN,
    },
    {
      name: 'Chocolate Cake',
      description: 'Rich, moist chocolate cake with a decadent chocolate frosting.',
      price: 5.99,
      imageUrl: NaN,
    },
    // Add more menu items as needed
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Fix the page to the aspect ratio of a mobile using Tailwind */}
      <div className="fixed inset-0 bg-gray-100 overflow-y-scroll">
        <div className="flex flex-col">
          <TopBar restaurantName="My Restaurant" tableNumber={12} />
          <MenuNavBar categories={menuCategories} />
          {/* Rest of the page content */}
          <div className="p-4">
            <Categories title="Appetizers" menuItems={menuItems.slice(0, 3)} />
            <Categories title="Entrees" menuItems={menuItems.slice(3, 6)} />
            <Categories title="Desserts" menuItems={menuItems.slice(6, 9)} />
            {/* Add more categories as needed */}
          </div>
        </div>
      </div>
    </>
  );
}