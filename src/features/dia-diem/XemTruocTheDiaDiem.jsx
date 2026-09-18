// src/features/dia-diem/XemTruocTheDiaDiem.jsx
// Thành phần chỉ đọc, nhận duLieu qua props từ cha (Lifting State Up - Lab 5)
// TUYỆT ĐỐI KHÔNG KHAI BÁO STATE RIÊNG để tránh xung đột 2 nguồn sự thật
import { DS_TIEN_ICH } from './FormThemDiaDiem';
import './XemTruocTheDiaDiem.css';

export default function XemTruocTheDiaDiem({ duLieu, tienIch = [] }) {
  const tenPhuongMap = {
    'phu-hau': 'Phú Hậu',
    'huong-long': 'Hương Long',
    'thuy-bieu': 'Thuỷ Biều',
    'vy-da': 'Vỹ Dạ',
    'phu-hoi': 'Phú Hội',
    'thuan-hoa': 'Thuận Hoà',
  };

  return (
    <aside className="the-xem-truoc">
      <span className="the-xem-truoc__badge-live">👁️ Xem trước trực tiếp</span>

      <h3>{duLieu.ten || 'Tên địa điểm sẽ hiện ở đây'}</h3>
      <p className="the-xem-truoc__mota">{duLieu.moTa || 'Mô tả ngắn sẽ hiện ở đây...'}</p>

      <div className="the-xem-truoc__thong-tin">
        <div className="the-xem-truoc__hang">
          <span className="the-xem-truoc__nhan">Giá vé:</span>
          <span className="the-xem-truoc__gia-tri the-xem-truoc__gia-tri--gia-ve">
            {duLieu.giaVe !== '' && duLieu.giaVe !== undefined && !Number.isNaN(Number(duLieu.giaVe))
              ? Number(duLieu.giaVe) === 0
                ? 'Miễn phí'
                : `${Number(duLieu.giaVe).toLocaleString('vi-VN')} đ`
              : 'Chưa nhập'}
          </span>
        </div>

        <div className="the-xem-truoc__hang">
          <span className="the-xem-truoc__nhan">Phường / xã:</span>
          <span className="the-xem-truoc__gia-tri">
            {tenPhuongMap[duLieu.phuong] || duLieu.phuong || 'Chưa chọn'}
          </span>
        </div>

        <div className="the-xem-truoc__hang">
          <span className="the-xem-truoc__nhan">Loại hình:</span>
          <span className="the-xem-truoc__gia-tri">
            {duLieu.loaiHinh === 'di-tich' ? '🏛️ Di tích lịch sử' : '🍜 Điểm ẩm thực'}
          </span>
        </div>

        <div className="the-xem-truoc__hang">
          <span className="the-xem-truoc__nhan">Xác nhận:</span>
          <span className="the-xem-truoc__gia-tri">
            {duLieu.dongY ? '✅ Đã xác nhận' : '⏳ Chưa xác nhận'}
          </span>
        </div>

        {tienIch && tienIch.length > 0 && (
          <div>
            <span className="the-xem-truoc__nhan" style={{ display: 'block', marginBottom: '4px' }}>
              Tiện ích:
            </span>
            <div className="the-xem-truoc__tien-ich-danh-sach">
              {tienIch.map((ma) => {
                const item = DS_TIEN_ICH.find((t) => t.ma === ma);
                return (
                  <span key={ma} className="the-xem-truoc__tien-ich-item">
                    ✓ {item ? item.ten : ma}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
