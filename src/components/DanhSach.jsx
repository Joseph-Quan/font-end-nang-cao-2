// src/components/DanhSach.jsx
// Bài 9 Lab 3 & Điểm cộng: Áp dụng mẫu Render Props tách logic vòng lặp khỏi hiển thị
function DanhSach({ cacMuc = [], hienThiMuc }) {
  if (!hienThiMuc || typeof hienThiMuc !== 'function') {
    return null;
  }

  return (
    <ul className="danh-sach" style={{
      listStyle: 'none',
      padding: 0,
      margin: '12px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {cacMuc.map((muc) => (
        <li
          key={muc.id}
          style={{
            background: '#ffffff',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
        >
          {hienThiMuc(muc)}
        </li>
      ))}
    </ul>
  );
}

export default DanhSach;
