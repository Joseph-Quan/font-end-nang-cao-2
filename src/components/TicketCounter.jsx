import { useState } from 'react';

function TicketCounter({ price = 150000 }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function handleIncrease() {
    setQuantity((prev) => Math.min(10, prev + 1));
  }

  const totalPrice = price * quantity;

  return (
    <div className="ticket-counter">
      <div className="ticket-counter__controls">
        <button
          type="button"
          onClick={handleDecrease}
          disabled={quantity <= 1}
          aria-label="Giảm số lượng"
        >
          −
        </button>
        <span className="ticket-counter__quantity">{quantity}</span>
        <button
          type="button"
          onClick={handleIncrease}
          disabled={quantity >= 10}
          aria-label="Tăng số lượng"
        >
          +
        </button>
      </div>
      <p className="ticket-counter__total">
        Tổng tiền: {totalPrice.toLocaleString('vi-VN')} đ
      </p>
    </div>
  );
}

export default TicketCounter;
