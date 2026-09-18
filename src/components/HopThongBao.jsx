// src/components/HopThongBao.jsx
// Bài 9 Lab 4: Kết hợp & Chuyên biệt hóa (Specialization) thay cho kế thừa

function HopThongBao({ mauNen = '#e6f0ef', viền = 'transparent', children }) {
  return (
    <div
      className="hop-thong-bao"
      style={{
        background: mauNen,
        border: viền !== 'transparent' ? `1px solid ${viền}` : 'none',
        padding: '12px 16px',
        borderRadius: '8px',
        margin: '12px 0',
        fontSize: '14px',
        color: '#1e293b',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {children}
    </div>
  );
}

export default HopThongBao;

// Biến thể chuyên biệt 1: Thành công
export function HopThongBaoThanhCong({ children }) {
  return (
    <HopThongBao mauNen="#e7f3ec" viền="#a7f3d0">
      <span style={{ fontSize: '16px' }}>🎉</span>
      <div>
        <strong style={{ color: '#1e7a46' }}>Thành công! </strong>
        {children}
      </div>
    </HopThongBao>
  );
}

// Biến thể chuyên biệt 2: Chú ý / Cảnh báo
export function HopThongBaoChuY({ children }) {
  return (
    <HopThongBao mauNen="#fef3c7" viền="#fde68a">
      <span style={{ fontSize: '16px' }}>💡</span>
      <div>
        <strong style={{ color: '#92400e' }}>Lưu ý: </strong>
        {children}
      </div>
    </HopThongBao>
  );
}
