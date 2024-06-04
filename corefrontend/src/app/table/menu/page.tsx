'use client'; 
import TopBar from '@/components/Menu/TopBar';
import MenuNavBar from '@/components/Menu/MenuNavBar';
import MenuItemCard from '@/components/Menu/MenuItemCard';
import Categories from '@/components/Menu/Categories';
import Head from 'next/head';
import { useState } from 'react';
import client from '../../../../db.js';
import { randomInt } from 'crypto';


export default function Page() {
  
  // replace with actual categories from the database
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

  // replace with actual menu items from the database
  const menuItems = [
    {
      id: 1, 
      name: 'Beef Burger',
      description:
        'A juicy beef patty topped with lettuce, tomato, onion, and your choice of cheese, served on a freshly toasted bun.',
      price: 9.99,
      imageUrl: NaN,
      category: 'Entrees',
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description:
        'Crisp romaine lettuce, garlic croutons, and shaved Parmesan, tossed in a creamy Caesar dressing.',
      price: 7.99,
      imageUrl: NaN,
      category: 'Appetizers',
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      description: 'Rich, moist chocolate cake with a decadent chocolate frosting.',
      price: 5.99,
      imageUrl: NaN,
      category: 'Desserts',
    },
    // Add more menu items as needed
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);  
  const [totalItems, setTotalItems] = useState(0);

  const handleItemSelect = (item) => {
    
    setTotalItems(totalItems + 1);
    const existingItem = selectedItems.find((i) => i.id === item.id);

    if (existingItem) {
      setSelectedItems(
        selectedItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
      setTotalPrice(totalPrice + item.price);
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
      setTotalPrice(totalPrice + item.price);
    }
  };


  // const handleItemSelect = (item) => {
  //   if (item) {
  //   setSelectedItems([...selectedItems, item]);
  //   setTotalPrice(totalPrice + item.price);
  //   }

  // };

  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price , 0);
  };

  const handleGoToCart = async () => {
    console.log('Placing order...', selectedItems);
  }; 

  // Adding the order to the database, replace with API call
  // const handleGoToCart   = async () => {
  //   try {
  //     // Insert the order into the database
  //     const orderId = await client.insert('orders', {
  //       table_id: 1, // Replace with the actual table ID
  //       user_id: 'user123', // Replace with the actual user ID
  //       status: 'pending',
  //       total_price: calculateTotalPrice(),
  //     });

  //     // Insert the order items into the database
  //     for (const item of selectedItems) {
  //       await client.insert('order_items', {
  //         order_id: randomInt(1, 1000), // Replace with the actual order ID
  //         menu_item_id: 1, // Replace with the actual menu item ID
  //         quantity: 1, // Assuming one of each item for now
  //         price: item.price,
  //         special_instructions: '', // Add any special instructions if needed
  //       });
  //     }

  //     // Optionally, you can clear the selectedItems state after the order is placed
  //     setSelectedItems([]);
  //     setTotalPrice(0);
  //   } catch (error) {
  //     console.error('Error placing order:', error);
  //     // Handle the error, e.g., display an error message to the user
  //   }
  // };


  const showMenu = () => {

    const categoriesWithItems = () => {
      const categories = menuItems.map((item) => item.category);
      return [...categories];
    };

    return categoriesWithItems().map((category, index) => (
      <Categories
        key={index}
        title={category}
        menuItems={menuItems.filter((item) => item.category === category)}
        onItemSelect={handleItemSelect}
      />
    ));
  }; 

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Fix the page to the aspect ratio of a mobile using Tailwind */}
      <div className="fixed inset-0 bg-gray-100 overflow-y-scroll pb-24">
        <div className="flex flex-col">
          <TopBar restaurantName="My Restaurant" tableNumber={12} />
          <MenuNavBar categories={menuCategories} />
          {/* Rest of the page content */}
          <div className="p-4">
            {showMenu()} 
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-between items-center">
        <div>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <p>Items: {totalItems}</p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleGoToCart}
        >
          Go to Cart 
        </button>
      </footer>
    </>
  );
}