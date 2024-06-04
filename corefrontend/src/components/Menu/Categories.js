import MenuItemCard from './MenuItemCard';


const Categories = ({ title, menuItems, onItemSelect}) => {

  const handleItemClick = (item) => {
    onItemSelect(item);
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <MenuItemCard
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
            category={item.category}
            onSelect = {handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;