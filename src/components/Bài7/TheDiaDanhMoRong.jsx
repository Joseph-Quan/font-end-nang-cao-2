import { useState } from 'react';

export default function TheDiaDanhMoRong({
  diaDanh, dangMo, laYeuThich, onXem, onYeuThich,
}) {
  const [daSaoChep, setDaSaoChep] = useState(false);

  function handleYeuThich(e) {
    e.stopPropagation(); // không để cú bấm lan lên thẻ (mở chi tiết)
    onYeuThich(diaDanh.id);
  }

  async function handleChiaSe(e) {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(diaDanh.ten + ' — ' + diaDanh.moTa);
      setDaSaoChep(true);
      setTimeout(() => setDaSaoChep(false), 1500);
    } catch {
      alert('Trình duyệt không cho phép sao chép. Hãy chạy trên localhost.');
    }
  }

  return (
    <article
      className={'the-mo-rong' + (dangMo ? ' dang-mo' : '')}
      onClick={() => onXem(diaDanh.id)}
      title="Bấm vào thẻ để xem/đóng thông tin chi tiết"
    >
      <header>
        <h3>{diaDanh.ten}</h3>
        <span className="loai">{diaDanh.loai}</span>
      </header>

      {dangMo && (
        <div className="mo-ta-container">
          <p className="mo-ta">{diaDanh.moTa}</p>
          <span className="mo-ta-badge">📖 Đang mở chi tiết</span>
        </div>
      )}

      <div className="hanh-dong">
        <button
          className={'btn-tim' + (laYeuThich ? ' da-thich' : '')}
          onClick={handleYeuThich}
          aria-pressed={laYeuThich}
          title="Bấm để yêu thích (không mở thẻ nhờ stopPropagation)"
        >
          {laYeuThich ? '♥ Đã thích' : '♡ Yêu thích'}
        </button>
        <button
          className={'btn-chia-se' + (daSaoChep ? ' thanh-cong' : '')}
          onClick={handleChiaSe}
          title="Bấm để sao chép thông tin vào bộ nhớ tạm"
        >
          {daSaoChep ? '✓ Đã sao chép' : '🔗 Chia sẻ'}
        </button>
      </div>
    </article>
  );
}
