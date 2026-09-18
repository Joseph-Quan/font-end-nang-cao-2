import { memo } from 'react';

// React.memo: chỉ render lại khi props thực sự thay đổi
function TheDiaDanh({ diaDanh, daYeuThich, onYeuThich }) {
  console.log('TheDiaDanh render:', diaDanh.ten);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: daYeuThich ? '2px solid #8b1e1e' : '1px solid #e2e8f0',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: daYeuThich ? '0 10px 25px rgba(139, 30, 30, 0.12)' : '0 4px 12px rgba(0,0,0,0.04)',
      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Thumbnail */}
      <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden' }}>
        <img
          src={diaDanh.hinhAnh || '/images/dainoi.jpg'}
          alt={diaDanh.ten}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
        />
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: 'rgba(30, 41, 59, 0.75)',
          backdropFilter: 'blur(6px)',
          color: '#ffffff',
          fontSize: '11px',
          fontWeight: '600',
          padding: '4px 10px',
          borderRadius: '999px',
          letterSpacing: '0.3px',
        }}>
          📍 {diaDanh.khuVuc}
        </span>
        <button
          onClick={() => onYeuThich(diaDanh.id)}
          aria-label={daYeuThich ? 'Bỏ yêu thích' : 'Thêm yêu thích'}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: daYeuThich ? '#e91e63' : 'rgba(255, 255, 255, 0.9)',
            color: daYeuThich ? '#ffffff' : '#475569',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            transition: 'transform 0.15s ease, background-color 0.2s ease',
          }}
        >
          {daYeuThich ? '♥' : '♡'}
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 style={{
            margin: '0 0 6px 0',
            fontSize: '17px',
            fontWeight: '700',
            color: '#1e293b',
          }}>
            {diaDanh.ten}
          </h3>
          <p style={{
            margin: 0,
            fontSize: '13px',
            color: '#64748b',
            lineHeight: '1.5',
          }}>
            {diaDanh.moTa || 'Di sản văn hóa danh lam thắng cảnh nổi tiếng của vùng đất cố đô Huế.'}
          </p>
        </div>

        <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '12px', color: daYeuThich ? '#e91e63' : '#94a3b8', fontWeight: '600' }}>
            {daYeuThich ? '❤️ Đã lưu vào yêu thích' : 'Chưa lưu'}
          </span>
          <button
            onClick={() => onYeuThich(diaDanh.id)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: daYeuThich ? '#fce4ec' : '#f1f5f9',
              color: daYeuThich ? '#c2185b' : '#475569',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            {daYeuThich ? 'Đã yêu thích' : 'Yêu thích +'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(TheDiaDanh);
