// src/components/HuyHieu.jsx
// Bài 9 Lab 5: Thành phần tái sử dụng tự thiết kế của nhóm (kết hợp props và children)
// - Props: 'loai' ("di-tich" | "am-thuc" | "noi-bat" | "moi"), 'kichThuoc' ("nho" | "vua")
// - Children: Nội dung nhãn tùy biến bên trong

export default function HuyHieu({
  loai = 'thong-tin',
  kichThuoc = 'nho',
  icon = null,
  children,
}) {
  const bangMau = {
    'di-tich': {
      bg: '#fef3c7',
      text: '#92400e',
      border: '#fde68a',
      defaultIcon: '🏛️',
    },
    'am-thuc': {
      bg: '#fee2e2',
      text: '#991b1b',
      border: '#fecaca',
      defaultIcon: '🍜',
    },
    'noi-bat': {
      bg: '#f3e8ff',
      text: '#6b21a8',
      border: '#e9d5ff',
      defaultIcon: '⭐',
    },
    'moi': {
      bg: '#ecfdf5',
      text: '#065f46',
      border: '#a7f3d0',
      defaultIcon: '✨',
    },
    'thong-tin': {
      bg: '#e0f2fe',
      text: '#075985',
      border: '#bae6fd',
      defaultIcon: 'ℹ️',
    },
  }[loai] || {
    bg: '#f1f5f9',
    text: '#334155',
    border: '#cbd5e1',
    defaultIcon: '🏷️',
  };

  const kichThuocStyle = kichThuoc === 'vua'
    ? { padding: '5px 12px', fontSize: '13px' }
    : { padding: '3px 8px', fontSize: '11.5px' };

  return (
    <span
      className={`huy-hieu huy-hieu--${loai}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        borderRadius: '9999px',
        fontWeight: '700',
        backgroundColor: bangMau.bg,
        color: bangMau.text,
        border: `1px solid ${bangMau.border}`,
        userSelect: 'none',
        lineHeight: 1.2,
        ...kichThuocStyle,
      }}
    >
      <span>{icon || bangMau.defaultIcon}</span>
      <span>{children}</span>
    </span>
  );
}
