import { useState } from 'react';
import ChiTietMonAn from './ChiTietMonAn';
import danhSachMonAn from '../../data/mon-an.json';

function TrangMonAn() {
  const [idDangChon, setIdDangChon] = useState(1);

  return (
    <div>
      {/* Menu item pill selector */}
      <div style={{
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '16px',
        marginBottom: '24px',
      }}>
        {danhSachMonAn.map((mon) => {
          const isSelected = idDangChon === mon.id;
          return (
            <button
              key={mon.id}
              onClick={() => setIdDangChon(mon.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 16px 8px 8px',
                borderRadius: '999px',
                border: isSelected ? '2px solid #8b1e1e' : '1px solid #e2e8f0',
                backgroundColor: isSelected ? '#8b1e1e' : '#ffffff',
                color: isSelected ? '#ffffff' : '#1e293b',
                cursor: 'pointer',
                fontWeight: isSelected ? '700' : '500',
                fontSize: '14px',
                boxShadow: isSelected ? '0 6px 16px rgba(139, 30, 30, 0.25)' : '0 2px 4px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <img
                src={mon.hinhAnh}
                alt={mon.ten}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: isSelected ? '2px solid #ffffff' : '1px solid #e2e8f0',
                }}
              />
              <span>{mon.ten}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card */}
      <ChiTietMonAn idMonAn={idDangChon} />
    </div>
  );
}

export default TrangMonAn;
