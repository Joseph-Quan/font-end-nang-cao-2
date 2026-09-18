import { useState } from 'react';
import StarRating from './StarRating';
import TicketCounter from './TicketCounter';

function AttractionCard({ name, category, description, rating, price }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  // Đại Nội Huế có bán vé tham quan theo yêu cầu Lab 5
  const hasTicket = name === 'Đại Nội Huế' || Boolean(price);

  return (
    <div className="attraction-card">
      <button
        type="button"
        className={`attraction-card__favorite ${isFavorite ? 'is-active' : ''}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu địa điểm'}
      </button>
      <div className="attraction-card__badge">{category}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      
      {/* Lab 4: Đánh giá bằng sao đặt ngay dưới mô tả */}
      <StarRating />

      {/* Lab 5: Đặt vé tham quan cho địa điểm Đại Nội Huế */}
      {hasTicket && <TicketCounter price={price || 150000} />}

      <span className="attraction-card__rating">⭐ {rating}</span>
    </div>
  );
}

export default AttractionCard;
