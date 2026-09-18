// src/pages/TrangThemDiaDiem.jsx
// Bài 8 Lab 5: Nâng trạng thái lên (Lifting State Up) cho khung xem trước
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { kiemChung } from '../features/dia-diem/kiemChung';
import FormThemDiaDiem, { GIA_TRI_BAN_DAU } from '../features/dia-diem/FormThemDiaDiem';
import XemTruocTheDiaDiem from '../features/dia-diem/XemTruocTheDiaDiem';
import FormGopY from '../features/gop-y/FormGopY';

export default function TrangThemDiaDiem() {
  // Nâng state biểu mẫu lên cha chung TrangThemDiaDiem để đồng bộ cho cả Form và Khung Xem Trước
  const form = useForm(GIA_TRI_BAN_DAU, kiemChung);
  const [tienIch, setTienIch] = useState([]);
  const [danhSachDaLuu, setDanhSachDaLuu] = useState([]);
  const [tabHienTai, setTabHienTai] = useState('them-dia-diem'); // 'them-dia-diem' | 'gop-y'

  function xuLyTich(e) {
    const { value, checked } = e.target;
    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value)
    );
  }

  function handleThemXong(diaDiemMoi) {
    setDanhSachDaLuu((prev) => [
      { id: Date.now(), ...diaDiemMoi },
      ...prev,
    ]);
    form.datLai();
    setTienIch([]);
  }

  function handleDatLai() {
    form.datLai();
    setTienIch([]);
  }

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '24px 20px 60px' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f766e 0%, #115e59 100%)',
        color: '#ffffff',
        borderRadius: '16px',
        padding: '30px',
        marginBottom: '30px',
        boxShadow: '0 10px 25px rgba(15, 118, 110, 0.2)',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: '700', marginBottom: '10px' }}>
          INT.7.18 · BÀI THỰC HÀNH 8
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 8px' }}>
          Biểu Mẫu Có Kiểm Soát & Đồng Bộ Trạng Thái
        </h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '14.5px', lineHeight: 1.6 }}>
          Thực hành Lab 1–5: Một handler duy nhất, kiểm chứng thuần, hook <code>useForm</code> tái sử dụng và kỹ thuật Nâng trạng thái lên (Lifting State Up) cho khung xem trước tức thì.
        </p>

        {/* Sub-tabs for Bài 8 */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            onClick={() => setTabHienTai('them-dia-diem')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: tabHienTai === 'them-dia-diem' ? '#ffffff' : 'rgba(255,255,255,0.18)',
              color: tabHienTai === 'them-dia-diem' ? '#0f766e' : '#ffffff',
              fontWeight: '700',
              fontSize: '13.5px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            🏛️ Lab 1, 2, 3, 5: Thêm Địa Điểm & Live Preview
          </button>
          <button
            onClick={() => setTabHienTai('gop-y')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: tabHienTai === 'gop-y' ? '#ffffff' : 'rgba(255,255,255,0.18)',
              color: tabHienTai === 'gop-y' ? '#0f766e' : '#ffffff',
              fontWeight: '700',
              fontSize: '13.5px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            💬 Lab 4: Biểu Mẫu Góp Ý (Tái sử dụng useForm)
          </button>
        </div>
      </div>

      {tabHienTai === 'them-dia-diem' ? (
        <>
          {/* Main 2-column layout (Lab 5: Lifting State Up) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px',
            alignItems: 'start',
            marginBottom: '40px',
          }}>
            <div>
              <FormThemDiaDiem
                {...form}
                tienIch={tienIch}
                xuLyTich={xuLyTich}
                onThemXong={handleThemXong}
                datLai={handleDatLai}
              />
            </div>

            <div>
              <XemTruocTheDiaDiem duLieu={form.duLieu} tienIch={tienIch} />

              {/* Danh sách địa điểm vừa thêm */}
              {danhSachDaLuu.length > 0 && (
                <div style={{
                  marginTop: '24px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '20px',
                }}>
                  <h4 style={{ margin: '0 0 12px', color: '#0f172a' }}>
                    📋 Địa điểm vừa lưu trong phiên ({danhSachDaLuu.length})
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px', color: '#334155' }}>
                    {danhSachDaLuu.map((item) => (
                      <li key={item.id} style={{ marginBottom: '8px' }}>
                        <strong>{item.ten}</strong> — {item.giaVe ? `${Number(item.giaVe).toLocaleString('vi-VN')} đ` : 'Miễn phí'} ({item.phuong})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 40px' }}>
          <FormGopY />
        </div>
      )}

      {/* Checklist Test Cases từ tài liệu thực hành Bài 8 */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '24px',
        marginTop: '30px',
      }}>
        <h3 style={{ margin: '0 0 14px', fontSize: '17px', color: '#1e293b' }}>
          🧪 Bảng Test Case Tự Kiểm Tra Bài 8 (TC01 – TC10)
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
            <thead>
              <tr style={{ background: '#e2e8f0', textAlign: 'left' }}>
                <th style={{ padding: '8px 12px' }}>Mã</th>
                <th style={{ padding: '8px 12px' }}>Thao tác kiểm tra</th>
                <th style={{ padding: '8px 12px' }}>Kết quả mong đợi</th>
                <th style={{ padding: '8px 12px' }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC01</td>
                <td style={{ padding: '8px 12px' }}>Gõ vào ô Tên</td>
                <td style={{ padding: '8px 12px' }}>Chữ hiện ngay theo từng ký tự</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC02</td>
                <td style={{ padding: '8px 12px' }}>Chọn một phường trong danh sách</td>
                <td style={{ padding: '8px 12px' }}>state.phuong đổi đúng mã của phường đã chọn</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC03</td>
                <td style={{ padding: '8px 12px' }}>Bấm nút chọn Loại hình</td>
                <td style={{ padding: '8px 12px' }}>Chỉ một trong hai nút được chọn</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC04</td>
                <td style={{ padding: '8px 12px' }}>Tích hai tiện ích rồi bỏ một</td>
                <td style={{ padding: '8px 12px' }}>Mảng tiện ích chỉ còn đúng tiện ích chưa bỏ</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC05</td>
                <td style={{ padding: '8px 12px' }}>Rời ô Tên khi đang để trống</td>
                <td style={{ padding: '8px 12px' }}>Hiện thông báo "Vui lòng nhập tên địa điểm."</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC06</td>
                <td style={{ padding: '8px 12px' }}>Bấm Gửi khi biểu mẫu còn trống</td>
                <td style={{ padding: '8px 12px' }}>Toàn bộ lỗi hiện ra, không gọi máy chủ</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC07</td>
                <td style={{ padding: '8px 12px' }}>Điền đủ và bấm Gửi</td>
                <td style={{ padding: '8px 12px' }}>Nút đổi "Đang lưu...", khóa 1.2s, sau đó báo thành công</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC09</td>
                <td style={{ padding: '8px 12px' }}>Dùng FormGopY (Lab 4)</td>
                <td style={{ padding: '8px 12px' }}>Gửi thành công, tái sử dụng hook useForm</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 12px', fontWeight: '700' }}>TC10</td>
                <td style={{ padding: '8px 12px' }}>Gõ ô Tên trong TrangThemDiaDiem</td>
                <td style={{ padding: '8px 12px' }}>Thẻ xem trước cập nhật cùng nhịp, không trễ</td>
                <td style={{ padding: '8px 12px', color: '#16a34a', fontWeight: '700' }}>✓ ĐẠT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
