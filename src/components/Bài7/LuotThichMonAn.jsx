import { useState } from 'react';

export default function LuotThichMonAn() {
  const [luotThich, setLuotThich] = useState(0);

  // Dùng hàm cập nhật: mỗi lời gọi nhận kết quả của lời gọi trước, sửa lỗi ảnh chụp state
  function handleThich3() {
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
    setLuotThich((truoc) => truoc + 1);
  }

  return (
    <div className="luot-thich-card">
      <div className="luot-thich-header">
        <span className="mon-icon">🍜</span>
        <div>
          <h4>Bún bò Huế</h4>
          <p className="luot-thich-so">
            Lượt yêu thích: <strong className="so-highlight">{luotThich}</strong>
          </p>
        </div>
      </div>

      <div className="luot-thich-actions">
        <button
          className="btn-action btn-tang-1"
          onClick={() => setLuotThich((t) => t + 1)}
          title="Tăng 1 lượt thích"
        >
          +1 lượt thích
        </button>
        <button
          className="btn-action btn-tang-3"
          onClick={handleThich3}
          title="Tăng 3 lượt thích (kiểm tra hàm cập nhật state)"
        >
          🚀 +3 lượt thích
        </button>
        <button
          className="btn-action btn-dat-lai"
          onClick={() => setLuotThich(0)}
          disabled={luotThich === 0}
          title="Đặt lại về 0"
        >
          ↺ Đặt lại
        </button>
      </div>
      <p className="ghi-chu-mini">
        💡 <em>Dùng hàm cập nhật <code>setLuotThich(truoc =&gt; truoc + 1)</code> giúp nhận giá trị mới nhất qua 3 lần gọi liên tiếp.</em>
      </p>
    </div>
  );
}
