// src/pages/TrangDanhMuc.jsx
// Bài 9 Lab 4 (Bài nộp tính điểm): Kết hợp và trang danh mục cho đồ án nhóm
// Tích hợp: BoCucTrang, TheDiaDanh, The, DanhSach (Render props), HopThongBao, HuyHieu
import { useState } from 'react';
import BoCucTrang from '../components/BoCucTrang';
import TheDiaDanh from '../components/TheDiaDanh';
import The from '../components/The';
import DanhSach from '../components/DanhSach';
import HopThongBao, { HopThongBaoThanhCong, HopThongBaoChuY } from '../components/HopThongBao';
import HuyHieu from '../components/HuyHieu';
import { DANH_SACH_DIA_DANH } from '../du-lieu/diaDanh';
import { DANH_SACH_MON_AN } from '../du-lieu/monAn';

function TrangDanhMuc() {
  const soLuong = DANH_SACH_DIA_DANH.length;

  // State tương tác người dùng (Điểm cộng +0.5đ)
  const [danhSachYeuThich, setDanhSachYeuThich] = useState(['Đại Nội Huế']);
  const [chiTietDangXem, setChiTietDangXem] = useState(null);
  const [thongBaoDatMon, setThongBaoDatMon] = useState('');

  function toggleYeuThich(tenDiaDanh) {
    setDanhSachYeuThich((prev) =>
      prev.includes(tenDiaDanh)
        ? prev.filter((t) => t !== tenDiaDanh)
        : [...prev, tenDiaDanh]
    );
  }

  function handleXemChiTiet(tenDiaDanh) {
    const item = DANH_SACH_DIA_DANH.find((d) => d.ten === tenDiaDanh);
    setChiTietDangXem(item || { ten: tenDiaDanh, moTa: 'Đang cập nhật thông tin chi tiết...' });
  }

  function handleDatMon(mon) {
    setThongBaoDatMon(`Đã thêm "${mon.ten}" (${mon.gia.toLocaleString()}đ) vào giỏ hàng thành công!`);
    setTimeout(() => setThongBaoDatMon(''), 3500);
  }

  return (
    <BoCucTrang
      thanhDieuHuong={
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1040px',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🏯</span>
            <span>Khám Phá Cố Đô Huế — phu-xuan-react</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <HuyHieu loai="noi-bat" kichThuoc="vua">
              Đã thích: {danhSachYeuThich.length}
            </HuyHieu>
          </div>
        </div>
      }
      chanTrang={
        <div>
          <p style={{ margin: '0 0 6px', fontWeight: '600' }}>
            © 2026 Đồ án môn INT.7.18 · Web FrontEnd Nâng Cao — Đại học Phú Xuân
          </p>
          <span style={{ fontSize: '13px', color: '#64748b' }}>
            Áp dụng Kiến trúc Kết hợp (Composition), Khe JSX (Slots) và Mẫu Render Props
          </span>
        </div>
      }
      noiDungChinh={
        <>
          {/* Header Giới thiệu */}
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1b2a4a', margin: '0 0 8px' }}>
              Danh Mục Địa Danh & Ẩm Thực Xứ Huế
            </h1>
            <p style={{ margin: 0, color: '#475569', fontSize: '15px' }}>
              Trang tổng hợp kết hợp các thành phần tái sử dụng theo tiêu chuẩn thực hành Bài 9.
            </p>
          </div>

          {/* Lab 4: Hộp thông báo tổng quát và biến thể chuyên biệt */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            <HopThongBao>
              <span>Hiện có <strong>{soLuong}</strong> địa danh đang được giới thiệu.</span>
            </HopThongBao>

            <HopThongBaoThanhCong>
              Dữ liệu danh mục đã tải hoàn tất từ <code>src/du-lieu/</code>.
            </HopThongBaoThanhCong>
          </div>

          {thongBaoDatMon && (
            <HopThongBaoChuY>
              {thongBaoDatMon}
            </HopThongBaoChuY>
          )}

          {/* Lab 2 & Lab 1: Thành phần The bọc lưới TheDiaDanh */}
          <The tieuDe="🏛️ Di tích & Thắng cảnh tiêu biểu (Lab 1 & Lab 2)">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '18px',
            }}>
              {DANH_SACH_DIA_DANH.map((dd) => (
                <TheDiaDanh
                  key={dd.id}
                  anh={dd.anh}
                  ten={dd.ten}
                  moTa={dd.moTa}
                  daThich={danhSachYeuThich.includes(dd.ten)}
                  onYeuThich={toggleYeuThich}
                  onXemChiTiet={handleXemChiTiet}
                  huyHieu={
                    <HuyHieu loai={dd.loai === 'am-thuc' ? 'am-thuc' : 'di-tich'}>
                      {dd.loai === 'am-thuc' ? 'Ẩm thực' : 'Di tích'}
                    </HuyHieu>
                  }
                />
              ))}
            </div>
          </The>

          {/* Lab 3 & Điểm cộng: Áp dụng cùng 1 DanhSach render props hiển thị theo 2 kiểu */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginTop: '28px',
          }}>
            {/* Kiểu 1: Hiển thị chữ đậm (Text style) */}
            <The tieuDe="🍜 Ẩm thực cố đô (Render Props: Kiểu chữ)">
              <p style={{ margin: '0 0 10px', fontSize: '13.5px', color: '#64748b' }}>
                Định dạng thông tin món và giá tiền nổi bật:
              </p>
              <DanhSach
                cacMuc={DANH_SACH_MON_AN}
                hienThiMuc={(mon) => (
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>
                      🍲 {mon.ten}
                    </span>
                    <strong style={{ color: '#b91c1c', fontSize: '15px' }}>
                      {mon.gia.toLocaleString('vi-VN')} đ
                    </strong>
                  </div>
                )}
              />
            </The>

            {/* Kiểu 2: Hiển thị có nút đặt món (Action button style) */}
            <The tieuDe="🛒 Thực đơn gọi món (Render Props: Kiểu có nút)">
              <p style={{ margin: '0 0 10px', fontSize: '13.5px', color: '#64748b' }}>
                Định dạng có nút thao tác đặt món ăn ngay:
              </p>
              <DanhSach
                cacMuc={DANH_SACH_MON_AN}
                hienThiMuc={(mon) => (
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontWeight: '700', color: '#0f172a' }}>{mon.ten}</span>
                      <span style={{ fontSize: '12.5px', color: '#64748b', marginLeft: '8px' }}>
                        ({mon.gia.toLocaleString('vi-VN')}đ)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDatMon(mon)}
                      style={{
                        background: '#0f766e',
                        color: '#ffffff',
                        border: 'none',
                        padding: '6px 14px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                    >
                      ➕ Đặt món
                    </button>
                  </div>
                )}
              />
            </The>
          </div>

          {/* Modal Xem chi tiết (nếu có) */}
          {chiTietDangXem && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px',
            }}>
              <div style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '24px',
                maxWidth: '460px',
                width: '100%',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '20px' }}>
                    {chiTietDangXem.ten}
                  </h3>
                  <button
                    onClick={() => setChiTietDangXem(null)}
                    style={{
                      border: 'none',
                      background: '#f1f5f9',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      cursor: 'pointer',
                      fontWeight: '700',
                      color: '#475569',
                    }}
                  >
                    ✕
                  </button>
                </div>
                {chiTietDangXem.anh && (
                  <img
                    src={chiTietDangXem.anh}
                    alt={chiTietDangXem.ten}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '14px' }}
                  />
                )}
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '14.5px', margin: '0 0 20px' }}>
                  {chiTietDangXem.moTa}
                </p>
                <button
                  onClick={() => setChiTietDangXem(null)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    background: '#1b2a4a',
                    color: '#fff',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </>
      }
    />
  );
}

export default TrangDanhMuc;
