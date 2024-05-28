import Image from 'next/image';

const MenuItemCard = ({ name, description, price, imageUrl }) => {
  return (
    <div className="flex w-full max-w-md bg-pink rounded-lg shadow-md">
      <div className="w-2/3 p-4 pb-6">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-2xl font-bold">${price.toFixed(2)}</p>
      </div>
      <div className="w-1/3 pb-6">
        <Image
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover rounded-r-lg"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default MenuItemCard;