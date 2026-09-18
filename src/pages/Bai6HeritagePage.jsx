import { useState } from 'react';
import LuotXemDaiNoi from '../features/landmarks/LuotXemDaiNoi';
import TrangMonAn from '../features/food/TrangMonAn';
import TimMonAn from '../features/food/TimMonAn';
import DanhSachDiaDanh from '../features/landmarks/DanhSachDiaDanh';

export default function Bai6HeritagePage() {
  const [activeTab, setActiveTab] = useState('dia-danh');
  const [hienThiLuotXem, setHienThiLuotXem] = useState(true);

  const navItems = [
    { id: 'dia-danh', label: 'Điểm Đến Cố Đô', icon: '🏯' },
    { id: 'thuc-don', label: 'Thực Đơn Tinh Hoa', icon: '🍲' },
    { id: 'tra-cuu', label: 'Tra Cứu Ẩm Thực', icon: '🔍' },
    { id: 'tham-quan', label: 'Tham Quan Trực Tuyến', icon: '🎥' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcfbf9' }}>
      {/* Top Banner & Header */}
      <header style={{
        background: 'linear-gradient(135deg, #450a0a 0%, #7f1d1d 60%, #991b1b 100%)',
        color: '#ffffff',
        padding: '36px 20px 32px',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(69, 10, 10, 0.2)',
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{
                backgroundColor: '#fbbf24',
                color: '#78350f',
                fontSize: '11px',
                fontWeight: '800',
                padding: '3px 10px',
                borderRadius: '999px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                Di Sản & Ẩm Thực Cố Đô (Bài 6)
              </span>
              <span style={{ color: '#fca5a5', fontSize: '13px' }}>✦ Phú Xuân React</span>
            </div>
            <h1 style={{
              margin: '0 0 8px 0',
              fontSize: '34px',
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: '-0.5px',
            }}>
              Khám Phá Văn Hóa & Hương Vị Xứ Huế
            </h1>
            <p style={{ margin: 0, color: '#fecaca', fontSize: '15px', maxWidth: '600px', lineHeight: '1.5' }}>
              Trải nghiệm di tích lăng tẩm ngàn năm, thưởng thức mỹ vị cung đình và hòa mình vào nhịp sống thanh bình bên dòng Hương Giang.
            </p>
          </div>

          {/* Quick Header Widget */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <span style={{ fontSize: '28px' }}>🏮</span>
            <div>
              <div style={{ fontSize: '12px', color: '#fca5a5', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Thời tiết Cố Đô</div>
              <div style={{ fontSize: '16px', fontWeight: '700' }}>26°C · Nắng nhẹ mát mẻ</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
      }}>
        <div style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
        }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 20px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: isActive ? '#8b1e1e' : '#64748b',
                  fontSize: '15px',
                  fontWeight: isActive ? '700' : '500',
                  cursor: 'pointer',
                  borderBottom: isActive ? '3px solid #8b1e1e' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1180px', margin: '32px auto', padding: '0 20px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        {/* Section 1: Danh sách Địa danh */}
        {activeTab === 'dia-danh' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontSize: '26px',
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#212529',
                margin: '0 0 6px 0',
              }}>
                Danh Thắng Cố Đô Huế
              </h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                Các quần thể di tích, lăng tẩm và thắng cảnh tiêu biểu được lưu giữ qua hàng trăm năm lịch sử.
              </p>
            </div>
            <DanhSachDiaDanh />
          </div>
        )}

        {/* Section 2: Thực đơn món ăn */}
        {activeTab === 'thuc-don' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontSize: '26px',
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#212529',
                margin: '0 0 6px 0',
              }}>
                Tinh Hoa Ẩm Thực Cung Đình & Dân Gian
              </h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                Chọn món ăn để khám phá hương vị độc đáo được chế biến từ những nguyên liệu tươi ngon nhất xứ Huế.
              </p>
            </div>
            <TrangMonAn />
          </div>
        )}

        {/* Section 3: Tra cứu & Tìm kiếm */}
        {activeTab === 'tra-cuu' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontSize: '26px',
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#212529',
                margin: '0 0 6px 0',
              }}>
                Tra Cứu Nhanh Món Ăn Truyền Thống
              </h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                Hệ thống tìm kiếm thông minh tự động tối ưu hóa dữ liệu ngay khi bạn nhập ký tự.
              </p>
            </div>
            <TimMonAn />
          </div>
        )}

        {/* Section 4: Tham quan trực tuyến */}
        {activeTab === 'tham-quan' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontSize: '26px',
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#212529',
                margin: '0 0 6px 0',
              }}>
                Tham Quan & Giám Sát Lượng Khách Trực Tuyến
              </h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                Theo dõi lượng khách tham quan thực tế theo thời gian thực tại các điểm di tích trọng điểm.
              </p>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}>
              <div style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => setHienThiLuotXem(!hienThiLuotXem)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: hienThiLuotXem ? '#dc2626' : '#16a34a',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span>{hienThiLuotXem ? '⏸ Tạm dừng giám sát' : '▶ Bắt đầu giám sát'}</span>
                </button>
              </div>

              {hienThiLuotXem ? (
                <LuotXemDaiNoi />
              ) : (
                <div style={{
                  padding: '28px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '16px',
                  border: '1px dashed #f87171',
                  color: '#991b1b',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <span style={{ fontSize: '24px' }}>⚠️</span>
                  <span>Trạng thái giám sát trực tuyến đang tắt. Nhấn nút phía trên để kết nối lại dữ liệu thời gian thực.</span>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e293b',
        color: '#94a3b8',
        padding: '36px 20px',
        marginTop: '60px',
        fontSize: '14px',
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#f8fafc', margin: '0 0 8px 0', fontSize: '18px', fontFamily: "'Playfair Display', Georgia, serif" }}>
              Cố Đô Huế — Phú Xuân React
            </h4>
            <p style={{ margin: 0, color: '#64748b' }}>
              Ứng dụng khám phá văn hoá, du lịch và tinh hoa ẩm thực truyền thống Huế.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0 }}>© 2026 Phú Xuân React. Phát triển với tình yêu xứ Huế.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
