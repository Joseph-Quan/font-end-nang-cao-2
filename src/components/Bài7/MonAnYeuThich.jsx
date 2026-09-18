import { useState } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';

// Hàm thuần: trả về MẢNG MỚI với phần tử chuyển từ vị trí tu sang den
function diChuyen(mang, tu, den) {
  const moi = [...mang];
  const [phanTu] = moi.splice(tu, 1);
  moi.splice(den, 0, phanTu);
  return moi;
}

export default function MonAnYeuThich() {
  const [dsMon, setDsMon] = useState(DS_MON_AN.slice(0, 5));
  const [idDangKeo, setIdDangKeo] = useState(null);
  const [idViTriTha, setIdViTriTha] = useState(null);
  const [thongBao, setThongBao] = useState('');

  function baoViTri(ds, id) {
    const viTri = ds.findIndex((m) => m.id === id);
    if (viTri !== -1) {
      setThongBao('Đã chuyển ' + ds[viTri].ten + ' đến vị trí ' + (viTri + 1));
    }
  }

  function handleDragStart(e, id) {
    setIdDangKeo(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id); // cần cho Firefox
  }

  function handleDragOver(e, id) {
    e.preventDefault(); // cho phép thả
    if (id !== idViTriTha) setIdViTriTha(id);
  }

  function handleDrop(e, idDich) {
    e.preventDefault();
    if (idDangKeo === null || idDangKeo === idDich) return;
    const tu = dsMon.findIndex((m) => m.id === idDangKeo);
    const den = dsMon.findIndex((m) => m.id === idDich);
    const moi = diChuyen(dsMon, tu, den);
    setDsMon(moi);
    baoViTri(moi, idDangKeo);
  }

  function handleDragEnd() {
    setIdDangKeo(null);
    setIdViTriTha(null);
  }

  function handleKeyDown(e, viTri) {
    if (!e.altKey) return;
    const buoc = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : 0;
    if (buoc === 0) return;
    e.preventDefault(); // không cuộn trang
    const den = viTri + buoc;
    if (den < 0 || den >= dsMon.length) return;
    const moi = diChuyen(dsMon, viTri, den);
    setDsMon(moi);
    baoViTri(moi, dsMon[viTri].id);
  }

  function handleXoa(id) {
    const mon = dsMon.find((m) => m.id === id);
    if (!mon) return;
    setDsMon((truoc) => truoc.filter((m) => m.id !== id));
    setThongBao('Đã xoá ' + mon.ten + ' khỏi danh sách');
  }

  function handleKhoiPhuc() {
    setDsMon(DS_MON_AN.slice(0, 5));
    setThongBao('Đã khôi phục lại danh sách ban đầu');
  }

  return (
    <section className="lab" id="lab-5">
      <div className="lab-header">
        <div className="flex-between">
          <div>
            <span className="lab-badge">Lab 5 · Bonus</span>
            <h2>Lab 5 — Món Huế yêu thích của tôi</h2>
          </div>
          {dsMon.length < 5 && (
            <button className="btn-khoi-phuc" onClick={handleKhoiPhuc}>
              ↺ Khôi phục danh sách
            </button>
          )}
        </div>
        <p className="lab-desc">
          Kéo thả sắp xếp danh sách bằng chuột, hoặc chọn món rồi nhấn <code>Alt + Mũi tên lên/xuống</code>.
        </p>
      </div>

      <div className="huong-dan-thao-tac">
        <div className="huong-dan-item">
          <span className="hd-icon">🖱️</span>
          <span>Kéo thẻ bất kỳ và thả vào vị trí mong muốn</span>
        </div>
        <div className="huong-dan-item">
          <span className="hd-icon">⌨️</span>
          <span>Nhấn <code>Tab</code> chọn dòng, nhấn <code>Alt + ↑ / ↓</code> để đổi chỗ</span>
        </div>
      </div>

      <ol className="ds-mon-yeu-thich">
        {dsMon.map((mon, viTri) => (
          <li
            key={mon.id}
            draggable
            tabIndex={0}
            onDragStart={(e) => handleDragStart(e, mon.id)}
            onDragOver={(e) => handleDragOver(e, mon.id)}
            onDrop={(e) => handleDrop(e, mon.id)}
            onDragEnd={handleDragEnd}
            onKeyDown={(e) => handleKeyDown(e, viTri)}
            className={
              (mon.id === idDangKeo ? 'dang-keo ' : '') +
              (mon.id === idViTriTha && mon.id !== idDangKeo ? 'vi-tri-tha' : '')
            }
            title="Kéo thả hoặc nhấn Alt + Mũi tên để di chuyển vị trí"
          >
            <div className="li-left">
              <span className="keo-handle" aria-hidden="true">⠿</span>
              <span className="thu-tu-so">{viTri + 1}.</span>
              <span className="mon-ten">{mon.ten}</span>
            </div>
            <div className="li-right">
              <span className="mon-gia-tag">{mon.gia.toLocaleString('vi-VN')} đ</span>
              <button
                className="btn-xoa"
                aria-label={'Xoá ' + mon.ten}
                onClick={() => handleXoa(mon.id)}
                onKeyDown={(e) => e.stopPropagation()}
                title="Xoá món khỏi danh sách yêu thích"
              >
                🗑️ Xoá
              </button>
            </div>
          </li>
        ))}
      </ol>

      {/* Vùng thông báo cho trình đọc màn hình */}
      <div className="thong-bao-box">
        <span className="thong-bao-icon">📢</span>
        <p className="thong-bao" aria-live="polite">
          {thongBao || 'Sẵn sàng tương tác bằng kéo thả hoặc bàn phím.'}
        </p>
      </div>
    </section>
  );
}
