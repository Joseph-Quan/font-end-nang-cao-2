import { useState } from 'react';
import { DS_MON_AN } from '../../data/monAnHue';
import FormTimMonAn from './FormTimMonAn';

// So khớp không phân biệt hoa thường
function khop(ten, tuKhoa) {
  return ten.toLowerCase().includes(tuKhoa.toLowerCase());
}

export default function TimMonAnHue() {
  const [tuKhoaDaTim, setTuKhoaDaTim] = useState('');

  const ketQua = tuKhoaDaTim
    ? DS_MON_AN.filter((mon) => khop(mon.ten, tuKhoaDaTim))
    : DS_MON_AN;

  return (
    <section className="lab" id="lab-4">
      <div className="lab-header">
        <span className="lab-badge">Lab 4</span>
        <h2>Lab 4 — Tìm món ăn Huế</h2>
        <p className="lab-desc">
          Điều khiển sự kiện bàn phím (Enter, Esc), ngăn chặn tải lại trang với <code>preventDefault</code>, hỗ trợ bộ gõ tiếng Việt với <code>isComposing</code>.
        </p>
      </div>

      <div className="tim-kiem-khu-vuc">
        <FormTimMonAn onTimKiem={setTuKhoaDaTim} />
      </div>

      <div className="ket-qua-bar">
        <p className="thong-ke">
          {tuKhoaDaTim ? (
            <>
              🎯 Tìm thấy <strong>{ketQua.length}</strong> món cho từ khóa "<em>{tuKhoaDaTim}</em>"
            </>
          ) : (
            <>
              📋 Đang hiển thị toàn bộ <strong>{DS_MON_AN.length}</strong> đặc sản cố đô
            </>
          )}
        </p>
      </div>

      {ketQua.length === 0 ? (
        <div className="khong-co-ket-qua">
          <span className="icon-buon">🍃</span>
          <p>Không tìm thấy món ăn nào phù hợp với "{tuKhoaDaTim}".</p>
          <small>Thử lại với từ khóa khác như "bún", "bánh", "chè" hoặc nhấn Esc để xóa.</small>
        </div>
      ) : (
        <ul className="ds-mon">
          {ketQua.map((mon) => (
            <li key={mon.id} className="item-mon">
              <div className="item-mon-info">
                <span className="item-mon-ten">{mon.ten}</span>
                {mon.moTa && <span className="item-mon-mota">{mon.moTa}</span>}
              </div>
              <div className="item-mon-gia">
                <span className="gia-so">{mon.gia.toLocaleString('vi-VN')}</span>
                <span className="gia-vnd">đ</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
