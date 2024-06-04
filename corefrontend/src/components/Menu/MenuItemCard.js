import Image from 'next/image';

const MenuItemCard = ({ id, name, description, price, imageUrl, category, onSelect }) => {

  const handleItemClick = () => {
    onSelect({ id, name, description, price, imageUrl, category }); 
  }; 

  return (
    <div className="flex w-full max-w-md bg-pink rounded-lg shadow-md" onClick={handleItemClick}>
      <div className="w-2/3 p-4 pb-6">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-xl font-bold">${price.toFixed(2)}</p>
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