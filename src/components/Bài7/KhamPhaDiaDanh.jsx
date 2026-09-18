import { useState } from 'react';
import { DS_DIA_DANH } from '../../data/diaDanhHue';
import TheDiaDanhMoRong from './TheDiaDanhMoRong';

export default function KhamPhaDiaDanh() {
  const [idDangMo, setIdDangMo] = useState(null);
  const [dsYeuThich, setDsYeuThich] = useState([]);
  const [soTuongTac, setSoTuongTac] = useState(0);

  // Bấm lại thẻ đang mở thì đóng lại
  function handleXem(id) {
    setIdDangMo((truoc) => (truoc === id ? null : id));
  }

  function handleYeuThich(id) {
    setDsYeuThich((truoc) =>
      truoc.includes(id) ? truoc.filter((x) => x !== id) : [...truoc, id]
    );
  }

  return (
    // Pha bắt: đếm MỌI cú bấm trong khu vực, kể cả khi thẻ con đã stopPropagation
    <section
      className="lab"
      id="lab-3"
      onClickCapture={() => setSoTuongTac((t) => t + 1)}
    >
      <div className="lab-header">
        <span className="lab-badge">Lab 3</span>
        <h2>Lab 3 — Khám phá địa danh</h2>
        <p className="lab-desc">
          Kiểm soát lan truyền sự kiện với <code>stopPropagation</code>, pha bắt <code>onClickCapture</code> và chia sẻ nội dung với Clipboard API.
        </p>
      </div>

      <div className="thong-ke-bar">
        <div className="thong-ke-item">
          <span className="thong-ke-icon">⚡</span>
          <span>Số lượt tương tác: <strong>{soTuongTac}</strong></span>
        </div>
        <div className="thong-ke-divider"></div>
        <div className="thong-ke-item">
          <span className="thong-ke-icon">❤️</span>
          <span>Đã yêu thích: <strong>{dsYeuThich.length}</strong> / {DS_DIA_DANH.length}</span>
        </div>
      </div>

      <div className="luoi-the">
        {DS_DIA_DANH.map((dd) => (
          <TheDiaDanhMoRong
            key={dd.id}
            diaDanh={dd}
            dangMo={dd.id === idDangMo}
            laYeuThich={dsYeuThich.includes(dd.id)}
            onXem={handleXem}
            onYeuThich={handleYeuThich}
          />
        ))}
      </div>
    </section>
  );
}
