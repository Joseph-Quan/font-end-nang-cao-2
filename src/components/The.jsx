// src/components/The.jsx
// Bài 9 Lab 2: Thành phần khung "vỏ hộp" bọc lấy nội dung bất kỳ bằng children
import './The.css';

function The({ tieuDe, children }) {
  return (
    <div className="the">
      {tieuDe && <div className="the__dau">{tieuDe}</div>}
      <div className="the__than">{children}</div>
    </div>
  );
}

export default The;
