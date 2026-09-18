import { useRef, useEffect, useState, useMemo } from 'react';
import useDebounce from '../../hooks/useDebounce';
import danhSachMonAn from '../../data/mon-an.json';

function TimMonAn() {
  const oTimKiemRef = useRef(null);
  const [tuKhoa, setTuKhoa] = useState('');

  // Dùng useRef để đếm số lần render — KHÔNG gây render lại
  const soLanRenderRef = useRef(0);
  soLanRenderRef.current = soLanRenderRef.current + 1;
  console.log('TimMonAn đã render:', soLanRenderRef.current, 'lần');

  // Dùng useRef để tham chiếu DOM — tự động focus ô tìm kiếm khi mount
  useEffect(() => {
    if (oTimKiemRef.current) {
      oTimKiemRef.current.focus();
    }
  }, []);

  // Dùng Custom Hook useDebounce
  const tuKhoaDebounced = useDebounce(tuKhoa, 400);

  // Lọc món ăn dựa trên từ khoá debounced
  const ketQuaTimKiem = useMemo(() => {
    if (!tuKhoaDebounced.trim()) return danhSachMonAn;
    return danhSachMonAn.filter((m) =>
      m.ten.toLowerCase().includes(tuKhoaDebounced.toLowerCase()) ||
      m.moTa.toLowerCase().includes(tuKhoaDebounced.toLowerCase())
    );
  }, [tuKhoaDebounced]);

  return (
    <div>
      {/* Search Input Box */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '20px',
        border: '1px solid #f1f5f9',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        marginBottom: '28px',
      }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>
          Tra cứu nhanh đặc sản Cố Đô
        </label>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px' }}>
            🍜
          </span>
          <input
            ref={oTimKiemRef}
            type="text"
            value={tuKhoa}
            onChange={(e) => setTuKhoa(e.target.value)}
            placeholder="Nhập tên món (bún bò, cơm hến, bánh bèo, nem lụi...)"
            style={{
              width: '100%',
              padding: '14px 16px 14px 48px',
              borderRadius: '12px',
              border: '2px solid #e2e8f0',
              fontSize: '15px',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          {tuKhoa && (
            <button
              onClick={() => setTuKhoa('')}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#e2e8f0',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Live Status Indicators */}
        <div style={{
          marginTop: '16px',
          padding: '12px 16px',
          backgroundColor: '#f8fafc',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '13px',
        }}>
          <div>
            <span style={{ color: '#64748b' }}>Đã render: </span>
            <strong style={{ color: '#0f172a' }}>{soLanRenderRef.current} lần</strong>
            <span style={{ color: '#94a3b8', marginLeft: '6px' }}>(bảo toàn giá trị bằng <code>useRef</code>)</span>
          </div>
          <div>
            <span style={{ color: '#64748b' }}>Từ khoá áp dụng: </span>
            <span style={{
              backgroundColor: '#dbeafe',
              color: '#1e40af',
              fontWeight: '600',
              padding: '2px 8px',
              borderRadius: '6px',
            }}>
              {tuKhoaDebounced ? `"${tuKhoaDebounced}"` : 'Tất cả'}
            </span>
          </div>
        </div>
      </div>

      {/* Search Results Grid */}
      <h4 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#1e293b' }}>
        Kết quả tìm kiếm ({ketQuaTimKiem.length} món)
      </h4>

      {ketQuaTimKiem.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '16px', color: '#94a3b8' }}>
          <p style={{ fontSize: '32px', margin: '0 0 8px 0' }}>🍲</p>
          <p style={{ margin: 0, fontWeight: '600' }}>Không tìm thấy món ăn nào phù hợp với "{tuKhoa}"</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {ketQuaTimKiem.map((mon) => (
            <div
              key={mon.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={mon.hinhAnh}
                  alt={mon.ten}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                }}>
                  {mon.gia.toLocaleString()}đ
                </span>
              </div>
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h5 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#1e293b' }}>{mon.ten}</h5>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{mon.moTa}</p>
                </div>
                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#e53935' }}>{mon.khauVi}</span>
                  <button style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#8b1e1e',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}>
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TimMonAn;
