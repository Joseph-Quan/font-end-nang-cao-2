import MenuItem from "./MenuItem";

function MenuList({ items, onToggleFavorite }) {
  return (
    <div className="menu-list">
      {/* Câu 4: Dùng map() render danh sách MenuItem với key hợp lệ và duy nhất từ item.id (không dùng index) */}
      {items.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          isSpicy={item.isSpicy}
          image={item.image}
          badge={item.badge}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;
