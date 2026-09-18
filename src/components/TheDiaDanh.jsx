// src/components/TheDiaDanh.jsx
// Bài 9 Lab 1: Thẻ địa danh tái sử dụng qua props, có giá trị mặc định cho moTa
// Điểm cộng: Nút Yêu thích / Xem chi tiết tương tác qua prop-hàm
import './TheDiaDanh.css';

function TheDiaDanh({
  anh,
  ten,
  moTa = 'Đang cập nhật mô tả...',
  onYeuThich,
  onXemChiTiet,
  daThich = false,
  huyHieu = null,
}) {
  return (
    <div className="the-dia-danh">
      <img className="the-dia-danh__anh" src={anh} alt={ten} loading="lazy" />
      <div className="the-dia-danh__than">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <h3 className="the-dia-danh__ten">{ten}</h3>
          {huyHieu}
        </div>
        <p className="the-dia-danh__mo-ta">{moTa}</p>

        {/* Điểm cộng (+0.5đ): Thao tác qua prop-hàm */}
        {(onYeuThich || onXemChiTiet) && (
          <div className="the-dia-danh__thao-tac">
            {onYeuThich && (
              <button
                type="button"
                className={`the-dia-danh__nut-yeu-thich ${daThich ? 'da-thich' : ''}`}
                onClick={() => onYeuThich(ten)}
              >
                {daThich ? '❤️ Đã thích' : '🤍 Yêu thích'}
              </button>
            )}
            {onXemChiTiet && (
              <button
                type="button"
                className="the-dia-danh__nut-chi-tiet"
                onClick={() => onXemChiTiet(ten)}
              >
                🔍 Chi tiết
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TheDiaDanh;
