import { useState } from 'react';
import '../styles/Bài7.css';
import ThuSuKien from '../components/Bài7/ThuSuKien';
import DanhSachDiaDanh from '../components/Bài7/DanhSachDiaDanh';
import KhamPhaDiaDanh from '../components/Bài7/KhamPhaDiaDanh';
import LuotThichMonAn from '../components/Bài7/LuotThichMonAn';
import TimMonAnHue from '../components/Bài7/TimMonAnHue';
import MonAnYeuThich from '../components/Bài7/MonAnYeuThich';

const TEST_CASES = [
  { id: 1, lab: 'Lab 1', ten: 'Truyền hàm đúng', thaoTac: 'Bấm nút "Bắt đầu hành trình" 3 lần', kyVong: 'Số tăng lên 3; không có lỗi Console', trangThai: 'Đạt' },
  { id: 2, lab: 'Lab 1', ten: 'target / currentTarget', thaoTac: 'Bấm chữ "Lăng tẩm" trong thẻ Lab 1', kyVong: 'Nhật ký: target=SPAN | currentTarget=DIV', trangThai: 'Đạt' },
  { id: 3, lab: 'Lab 2', ten: 'Chọn bằng bàn phím', thaoTac: 'Tab tới ô Đại Nội Huế, nhấn Space', kyVong: 'Được chọn, tiêu đề (1/6)', trangThai: 'Đạt' },
  { id: 4, lab: 'Lab 2', ten: 'Lọc bằng data-*', thaoTac: 'Bấm nút lọc "Chùa"', kyVong: 'Chỉ còn Chùa Thiên Mụ', trangThai: 'Đạt' },
  { id: 5, lab: 'Lab 2', ten: 'Không trùng khi chọn tất cả', thaoTac: 'Bấm "Chọn tất cả đang hiển thị" 3 lần', kyVong: 'Tiêu đề không vượt quá (6/6)', trangThai: 'Đạt' },
  { id: 6, lab: 'Lab 3', ten: 'stopPropagation', thaoTac: 'Bấm "Yêu thích" trên thẻ Lăng Khải Định', kyVong: 'Nút đổi trạng thái, mô tả không mở', trangThai: 'Đạt' },
  { id: 7, lab: 'Lab 3', ten: 'Pha bắt (capture)', thaoTac: 'Bấm nút Yêu thích rồi bấm vào thẻ', kyVong: 'Số lượt tương tác tăng 2', trangThai: 'Đạt' },
  { id: 8, lab: 'Lab 3', ten: 'Hàm cập nhật (updater)', thaoTac: 'Bấm "+3 lượt thích" 2 lần', kyVong: 'Hiển thị 6 lượt thích', trangThai: 'Đạt' },
  { id: 9, lab: 'Lab 4', ten: 'preventDefault submit', thaoTac: 'Gõ "bún", nhấn Enter', kyVong: '1 kết quả; URL không có dấu ?', trangThai: 'Đạt' },
  { id: 10, lab: 'Lab 4', ten: 'Phím Esc', thaoTac: 'Nhấn Esc trong ô tìm kiếm', kyVong: 'Ô trống; hiển thị 7 món', trangThai: 'Đạt' },
  { id: 11, lab: 'Lab 4', ten: 'Gõ tiếng Việt', thaoTac: 'Gõ "chè" bằng Telex, nhấn Enter khi chữ còn gạch chân', kyVong: 'Lần Enter đầu chỉ chốt chữ', trangThai: 'Đạt' },
  { id: 12, lab: 'Lab 5', ten: 'Kéo thả HTML5', thaoTac: 'Kéo dòng 1 thả vào dòng 4', kyVong: 'Món đầu chuyển xuống vị trí 4, có thông báo', trangThai: 'Đạt' },
  { id: 13, lab: 'Lab 5', ten: 'Sắp xếp bằng bàn phím', thaoTac: 'Tab vào dòng 2, nhấn Alt + mũi tên lên', kyVong: 'Món lên vị trí 1; trang không cuộn', trangThai: 'Đạt' },
];

export default function Bài7Page() {
  const [activeLabTab, setActiveLabTab] = useState('all');
  const [hienThiTestCases, setHienThiTestCases] = useState(false);

  function cuonToi(id) {
    setActiveLabTab(id);
    if (id === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <main className="trang-Bài7">
      {/* Hero Banner Header */}
      <section className="bai7-hero">
        <div className="hero-meta">
          <span className="hero-tag">INT.7.18 · Web FrontEnd Nâng Cao</span>
          <span className="hero-subtag">Đại học Phú Xuân · Khoa CNTT</span>
        </div>
        <h1>Bài 7 — Quản lý sự kiện trong React</h1>
        <p className="hero-desc">
          Bộ xử lý sự kiện, truyền tham số, lan truyền & hành vi mặc định. Trải nghiệm hệ thống tương tác phong phú dựa trên chủ đề Văn hóa & Ẩm thực Cố Đô Huế.
        </p>
      </section>

      {/* Lab Navigation Anchor Bar */}
      <nav className="nav-labs-bar" aria-label="Điều hướng các bài thực hành">
        <button
          className={'nav-lab-btn' + (activeLabTab === 'all' ? ' active' : '')}
          onClick={() => cuonToi('all')}
        >
          🌟 Toàn bộ 5 Labs
        </button>
        <button
          className={'nav-lab-btn' + (activeLabTab === 'lab-1' ? ' active' : '')}
          onClick={() => cuonToi('lab-1')}
        >
          📍 Lab 1: Sự kiện đầu tiên
        </button>
        <button
          className={'nav-lab-btn' + (activeLabTab === 'lab-2' ? ' active' : '')}
          onClick={() => cuonToi('lab-2')}
        >
          🗺️ Lab 2: Lịch trình địa danh
        </button>
        <button
          className={'nav-lab-btn' + (activeLabTab === 'lab-3' ? ' active' : '')}
          onClick={() => cuonToi('lab-3')}
        >
          🏯 Lab 3: Lan truyền & Thẻ mở rộng
        </button>
        <button
          className={'nav-lab-btn' + (activeLabTab === 'lab-4' ? ' active' : '')}
          onClick={() => cuonToi('lab-4')}
        >
          🔍 Lab 4: Tra cứu món ăn
        </button>
        <button
          className={'nav-lab-btn' + (activeLabTab === 'lab-5' ? ' active' : '')}
          onClick={() => cuonToi('lab-5')}
        >
          ✨ Lab 5: Kéo thả món Huế
        </button>
        <button
          className={'nav-lab-btn' + (hienThiTestCases ? ' active' : '')}
          onClick={() => setHienThiTestCases(!hienThiTestCases)}
        >
          📊 Bảng Test Cases ({TEST_CASES.length}/13)
        </button>
      </nav>

      {/* Bảng 13 Test Cases (Có thể bật/tắt để kiểm tra) */}
      {hienThiTestCases && (
        <section className="test-matrix-card">
          <div className="test-matrix-header">
            <h3 className="test-matrix-title">
              <span>📋 Bảng 13 Test Cases Kiểm Thử Chuẩn Bài 7</span>
              <span className="badge-13-13">13/13 Sẵn sàng</span>
            </h3>
            <button
              className="btn-outline"
              onClick={() => setHienThiTestCases(false)}
            >
              ✕ Đóng bảng
            </button>
          </div>
          <div className="test-table-wrapper">
            <table className="test-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Lab</th>
                  <th>Test Case</th>
                  <th>Thao tác kiểm tra</th>
                  <th>Kết quả mong đợi</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {TEST_CASES.map((tc) => (
                  <tr key={tc.id}>
                    <td><strong>{tc.id}</strong></td>
                    <td><span className="lab-badge">{tc.lab}</span></td>
                    <td><strong>{tc.ten}</strong></td>
                    <td>{tc.thaoTac}</td>
                    <td>{tc.kyVong}</td>
                    <td>
                      <span className="test-status-tag">✓ {tc.trangThai}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Lab 1: Sự kiện đầu tiên */}
      <ThuSuKien />

      {/* Lab 2: Lịch trình của bạn */}
      <DanhSachDiaDanh />

      {/* Lab 3: Khám phá địa danh & Thẻ mở rộng */}
      <KhamPhaDiaDanh />

      {/* Lab 3: Bài tập về nhà 1 - Lượt thích món ăn */}
      <section className="lab" id="lab-3-btvn">
        <div className="lab-header">
          <span className="lab-badge">Lab 3 · BTVN 1</span>
          <h2>Lab 3 — Cập nhật State An Toàn (LuotThichMonAn)</h2>
          <p className="lab-desc">
            Khắc phục lỗi "ảnh chụp của state" khi gọi hàm liên tiếp với updater function <code>setLuotThich((truoc) =&gt; truoc + 1)</code>.
          </p>
        </div>
        <LuotThichMonAn />
      </section>

      {/* Lab 4: Tìm món ăn Huế (BTVN 2) */}
      <TimMonAnHue />

      {/* Lab 5: Kéo thả món Huế yêu thích (BONUS) */}
      <MonAnYeuThich />
    </main>
  );
}
