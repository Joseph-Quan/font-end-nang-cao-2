import { useState } from 'react';
import TrangDanhMuc from './pages/TrangDanhMuc';
import TrangThemDiaDiem from './pages/TrangThemDiaDiem';
import Bài7Page from './pages/Bài7Page';
import Bai6HeritagePage from './pages/Bai6HeritagePage';

export default function App() {
  // Mặc định hiển thị Bài 9 theo tiến độ thực hành mới nhất
  const [cheDoXem, setCheDoXem] = useState('bai9');

  const danhSachTab = [
    {
      id: 'bai9',
      nhan: '🌟 Bài 9: Tái Sử Dụng & Kết Hợp Thành Phần',
      moTa: 'TrangDanhMuc · Props · Children · Khe JSX · Render Props',
      mau: '#1b2a4a',
      badge: 'Mới nhất',
    },
    {
      id: 'bai8',
      nhan: '📝 Bài 8: Biểu Mẫu Có Kiểm Soát',
      moTa: 'FormThemDiaDiem · useForm Hook · Live Preview · Kiểm chứng',
      mau: '#0f766e',
      badge: 'Bài 8',
    },
    {
      id: 'bai7',
      nhan: '⚡ Bài 7: Quản Lý Sự Kiện',
      moTa: 'Sự kiện người dùng · Tìm kiếm · Lọc món ăn · Đổi trạng thái',
      mau: '#4338ca',
      badge: 'Bài 7',
    },
    {
      id: 'bai6',
      nhan: '🏯 Bài 6: Cố Đô Heritage',
      moTa: 'Di sản Cố đô · Thực đơn món ăn · Thẻ di tích',
      mau: '#8b1e1e',
      badge: 'Bài 6',
    },
  ];

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Application Switcher Bar */}
      <header
        style={{
          backgroundColor: '#0f172a',
          borderBottom: '1px solid #1e293b',
          padding: '10px 20px',
          position: 'sticky',
          top: 0,
          zIndex: 200,
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Logo & School Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '22px' }}>🎓</span>
            <div>
              <div style={{ color: '#f8fafc', fontWeight: '800', fontSize: '14.5px', letterSpacing: '-0.2px' }}>
                Đại Học Phú Xuân — Khoa CNTT
              </div>
              <div style={{ color: '#94a3b8', fontSize: '12px' }}>
                INT.7.18 · Web FrontEnd Nâng Cao · Dự án phu-xuan-react
              </div>
            </div>
          </div>

          {/* Navigation Buttons for All 4 Sessions */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#1e293b',
              padding: '5px',
              borderRadius: '12px',
              flexWrap: 'wrap',
            }}
          >
            {danhSachTab.map((tab) => {
              const dangChon = cheDoXem === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCheDoXem(tab.id)}
                  style={{
                    backgroundColor: dangChon ? tab.mau : 'transparent',
                    color: dangChon ? '#ffffff' : '#94a3b8',
                    border: 'none',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: dangChon ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: dangChon ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
                  }}
                  title={tab.moTa}
                >
                  <span>{tab.nhan}</span>
                  {dangChon && (
                    <span
                      style={{
                        fontSize: '10.5px',
                        background: '#f59e0b',
                        color: '#78350f',
                        padding: '1px 6px',
                        borderRadius: '999px',
                        fontWeight: '800',
                      }}
                    >
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Dynamic Content Body */}
      <main style={{ flex: 1 }}>
        {cheDoXem === 'bai9' && <TrangDanhMuc />}
        {cheDoXem === 'bai8' && <TrangThemDiaDiem />}
        {cheDoXem === 'bai7' && <Bài7Page />}
        {cheDoXem === 'bai6' && <Bai6HeritagePage />}
      </main>
    </div>
  );
}
