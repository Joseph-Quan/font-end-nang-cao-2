import { useMemo, useCallback, useState } from 'react';
import diaDanhData from '../../data/dia-danh.json';
import TheDiaDanh from './TheDiaDanh';

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('');
  const [khuVucChon, setKhuVucChon] = useState('Tất cả');
  const [danhSachYeuThich, setDanhSachYeuThich] = useState([]);

  // Danh sách các khu vực
  const danhSachKhuVuc = ['Tất cả', 'Trung tâm', 'Ngoại ô', 'Ven sông'];

  // useMemo: chỉ tính lại danh sách lọc khi diaDanhData hoặc boLoc hoặc khuVucChon đổi
  const danhSachDaLoc = useMemo(() => {
    console.log('useMemo: đang tính lại danh sách lọc theo từ khoá:', boLoc, 'khu vực:', khuVucChon);
    return diaDanhData.filter((dd) => {
      const matchTen = dd.ten.toLowerCase().includes(boLoc.toLowerCase());
      const matchKhuVuc = khuVucChon === 'Tất cả' || dd.khuVuc === khuVucChon;
      return matchTen && matchKhuVuc;
    });
  }, [boLoc, khuVucChon]);

  // useCallback: giữ nguyên tham chiếu hàm để TheDiaDanh không render lại thừa
  const themYeuThich = useCallback((id) => {
    setDanhSachYeuThich((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  return (
    <div>
      {/* Search and Filters */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
      }}>
        {/* Search input */}
        <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: '420px' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>
            🔍
          </span>
          <input
            type="text"
            value={boLoc}
            onChange={(e) => setBoLoc(e.target.value)}
            placeholder="Tìm kiếm danh lam, lăng tẩm, chùa chiền…"
            style={{
              width: '100%',
              padding: '12px 14px 12px 42px',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              fontSize: '14px',
              outline: 'none',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
            }}
          />
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {danhSachKhuVuc.map((kv) => (
            <button
              key={kv}
              onClick={() => setKhuVucChon(kv)}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                border: khuVucChon === kv ? 'none' : '1px solid #e2e8f0',
                backgroundColor: khuVucChon === kv ? '#8b1e1e' : '#f8fafc',
                color: khuVucChon === kv ? '#ffffff' : '#475569',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {kv}
            </button>
          ))}
        </div>
      </div>

      {/* Counter bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        fontSize: '14px',
        color: '#64748b',
      }}>
        <span>Hiển thị <strong>{danhSachDaLoc.length}</strong> điểm đến tại Cố Đô Huế</span>
        <span style={{ color: '#e91e63', fontWeight: '600' }}>
          ♥ Đã lưu: {danhSachYeuThich.length} địa danh
        </span>
      </div>

      {/* Grid of Cards */}
      {danhSachDaLoc.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '48px 20px',
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          color: '#64748b',
        }}>
          <p style={{ fontSize: '36px', margin: '0 0 12px 0' }}>🏯</p>
          <p style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Không tìm thấy địa danh nào phù hợp</p>
          <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>Vui lòng thử lại với từ khóa hoặc khu vực khác</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
        }}>
          {danhSachDaLoc.map((dd) => (
            <TheDiaDanh
              key={dd.id}
              diaDanh={dd}
              daYeuThich={danhSachYeuThich.includes(dd.id)}
              onYeuThich={themYeuThich}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DanhSachDiaDanh;
