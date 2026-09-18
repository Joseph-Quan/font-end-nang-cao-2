import { useRef, useState } from 'react';

export default function ThuSuKien() {
  const [soLanBam, setSoLanBam] = useState(0);
  const [nhatKy, setNhatKy] = useState([]);
  const demId = useRef(0); // bộ đếm id cho mỗi dòng nhật ký (Bài 6)

  // Hàm tiện ích: thêm một dòng lên đầu nhật ký, giữ tối đa 5 dòng
  function ghiNhatKy(noiDung) {
    demId.current += 1;
    const dong = { id: demId.current, noiDung };
    setNhatKy((truoc) => [dong, ...truoc].slice(0, 5));
  }

  function handleBamNut() {
    setSoLanBam((so) => so + 1);
    ghiNhatKy('Bấm nút "Bắt đầu hành trình"');
  }

  function handleBamThe(e) {
    ghiNhatKy(
      'type=' + e.type +
      ' | target=' + e.target.tagName +
      ' | currentTarget=' + e.currentTarget.tagName
    );
  }

  return (
    <section className="lab" id="lab-1">
      <div className="lab-header">
        <span className="lab-badge">Lab 1</span>
        <h2>Lab 1 — Sự kiện đầu tiên</h2>
        <p className="lab-desc">
          Viết bộ xử lý sự kiện đúng cú pháp, phân biệt giữa <code>e.target</code> và <code>e.currentTarget</code>.
        </p>
      </div>

      <div className="lab-controls">
        <button className="btn-primary" onClick={handleBamNut}>
          ✨ Bắt đầu hành trình ({soLanBam})
        </button>

        <div
          className="the-thu"
          onClick={handleBamThe}
          title="Nhấp vào chữ hoặc khoảng trống để quan sát target vs currentTarget"
        >
          <span className="ten">Lăng Tự Đức</span>
          <span className="loai">Lăng tẩm</span>
        </div>
      </div>

      <div className="nhat-ky-khu-vuc">
        <h3>Nhật ký sự kiện (5 dòng gần nhất)</h3>
        {nhatKy.length === 0 ? (
          <p className="nhat-ky-trong">Chưa có sự kiện nào. Hãy nhấp thử nút hoặc thẻ phía trên!</p>
        ) : (
          <ol className="nhat-ky">
            {nhatKy.map((dong) => (
              <li key={dong.id}>
                <code>{dong.noiDung}</code>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
