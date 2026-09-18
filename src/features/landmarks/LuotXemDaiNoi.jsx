import { useState, useEffect } from 'react';

function LuotXemDaiNoi() {
  const [luotXem, setLuotXem] = useState(128);

  useEffect(() => {
    console.log('Đã gắn component — bắt đầu đếm lượt xem');
    const idBoDem = setInterval(() => {
      setLuotXem((soCu) => soCu + 1);
    }, 1000);

    return () => {
      console.log('Dọn dẹp: đã huỷ bộ đếm lượt xem');
      clearInterval(idBoDem);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      backgroundColor: '#ffffff',
      border: '1px solid #ebd8bf',
      borderRadius: '16px',
      padding: '16px 20px',
      boxShadow: '0 8px 24px rgba(139, 30, 30, 0.06)',
      maxWidth: '480px',
    }}>
      <div style={{
        position: 'relative',
        width: '64px',
        height: '64px',
        borderRadius: '12px',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <img
          src="/images/dainoi.jpg"
          alt="Đại Nội Huế"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#27ae60',
          boxShadow: '0 0 0 2px #fff',
        }} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <h4 style={{ margin: 0, fontSize: '17px', fontWeight: '700', color: '#661212' }}>
            Đại Nội Huế
          </h4>
          <span style={{
            fontSize: '11px',
            backgroundColor: '#fee2e2',
            color: '#b91c1c',
            fontWeight: '600',
            padding: '2px 8px',
            borderRadius: '999px',
          }}>
            LIVE
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
          Đang tham quan trực tuyến: <strong style={{ color: '#8b1e1e', fontSize: '16px' }}>{luotXem.toLocaleString()}</strong> lượt
        </p>
      </div>
    </div>
  );
}

export default LuotXemDaiNoi;