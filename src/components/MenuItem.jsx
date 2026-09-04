import { useState } from "react";

function MenuItem({ name, price, description, isSpicy, image, badge, onToggleFavorite }) {
  // Câu 5: Mỗi MenuItem tự quản lý một state boolean isFavorite (khởi tạo false) bằng useState
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    const nextFavorite = !isFavorite;
    setIsFavorite(nextFavorite);
    // Câu 6: Gọi hàm callback truyền từ cha (App) để thông báo trạng thái
    if (onToggleFavorite) {
      onToggleFavorite(nextFavorite);
    }
  };

  return (
    <article className={`menu-item ${isFavorite ? "menu-item--favorite" : ""}`}>
      {/* Hình ảnh món ăn minh họa phong cách nhà hàng cao cấp */}
      {image ? (
        <div className="menu-item-image-wrapper">
          <img src={image} alt={name} className="menu-item-image" loading="lazy" />
          <div className="menu-item-badges">
            {badge ? <span className="badge-tag">{badge}</span> : null}
            {/* Câu 3: Kết xuất có điều kiện nhãn '🌶 Món cay' */}
            {isSpicy ? <span className="badge-spicy">🌶 Món cay</span> : null}
          </div>
        </div>
      ) : null}

      <div className="menu-item-body">
        <div className="menu-item-header">
          {/* Câu 2: Hiển thị tên món ăn */}
          <h3 className="menu-item-title">{name}</h3>
          {/* Trường hợp không có ảnh thì hiển thị nhãn cay cạnh tiêu đề */}
          {!image && isSpicy ? (
            <span className="badge-spicy">🌶 Món cay</span>
          ) : null}
        </div>

        {/* Câu 2: Hiển thị mô tả ngắn */}
        <p className="menu-item-description">{description}</p>

        <div className="menu-item-footer">
          <div className="menu-item-price-container">
            <span className="menu-item-price-label">Giá phục vụ</span>
            {/* Câu 2: Giá tiền đã định dạng có dấu chấm ngăn cách hàng nghìn và đơn vị 'đ' */}
            <span className="menu-item-price">
              {price.toLocaleString("vi-VN")}đ
            </span>
          </div>

          {/* Câu 5: Nút bấm thay đổi trạng thái yêu thích với icon và chữ rõ rệt */}
          <button
            type="button"
            className={`btn-favorite ${isFavorite ? "btn-favorite--active" : ""}`}
            onClick={handleToggleFavorite}
            aria-label={isFavorite ? `Bỏ yêu thích món ${name}` : `Yêu thích món ${name}`}
          >
            <span className="favorite-icon">{isFavorite ? "♥" : "♡"}</span>
            <span>{isFavorite ? "Đã thích" : "Yêu thích"}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuItem;
