import { useState, useEffect } from 'react';
import fetchMonAn from '../../data/fetchMonAn';

function ChiTietMonAn({ idMonAn }) {
  const [monAn, setMonAn] = useState(null);
  const [dangTai, setDangTai] = useState(true);

  useEffect(() => {
    let daHuy = false;
    setDangTai(true);

    fetchMonAn(idMonAn).then((data) => {
      if (!daHuy) {
        setMonAn(data);
        setDangTai(false);
      }
    });

    return () => {
      daHuy = true;
    };
  }, [idMonAn]);

  if (dangTai) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #f1f5f9',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            width: '32px',
            height: '32px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #8b1e1e',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '12px',
          }} />
          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Đang tải công thức và thông tin món ăn…</p>
        </div>
      </div>
    );
  }

  if (!monAn) return null;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      border: '1px solid #f1f5f9',
      boxShadow: '0 12px 32px rgba(139, 30, 30, 0.08)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    }}>
      {/* Food Image */}
      <div style={{ position: 'relative', minHeight: '260px', backgroundColor: '#fff7ed' }}>
        <img
          src={monAn.hinhAnh || '/images/bun.png'}
          alt={monAn.ten}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          backgroundColor: '#8b1e1e',
          color: '#ffffff',
          fontWeight: '700',
          fontSize: '18px',
          padding: '6px 16px',
          borderRadius: '999px',
          boxShadow: '0 4px 12px rgba(139, 30, 30, 0.4)',
        }}>
          {monAn.gia.toLocaleString()} VNĐ
        </span>
      </div>

      {/* Food Info */}
      <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#c48b28',
            backgroundColor: '#fef3c7',
            padding: '3px 10px',
            borderRadius: '6px',
          }}>
            Món Đặc Tuyển Huế
          </span>
          {monAn.khauVi && (
            <span style={{
              fontSize: '12px',
              color: '#e53935',
              fontWeight: '600',
            }}>
              🌶️ {monAn.khauVi}
            </span>
          )}
        </div>

        <h3 style={{
          fontSize: '26px',
          fontFamily: "'Playfair Display', Georgia, serif",
          color: '#450a0a',
          margin: '0 0 12px 0',
        }}>
          {monAn.ten}
        </h3>

        <p style={{
          fontSize: '15px',
          color: '#475569',
          lineHeight: '1.7',
          margin: '0 0 20px 0',
        }}>
          {monAn.moTa}
        </p>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={{
            backgroundColor: '#8b1e1e',
            color: '#ffffff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(139, 30, 30, 0.3)',
          }}>
            Đặt Món Ngay
          </button>
          <span style={{ fontSize: '13px', color: '#64748b' }}>
            ✓ Chế biến gia truyền chuẩn vị
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChiTietMonAn;
