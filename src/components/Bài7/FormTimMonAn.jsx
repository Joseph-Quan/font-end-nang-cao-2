import { useState } from 'react';

const GOI_Y = ['bún', 'bánh', 'chè', 'hến'];

export default function FormTimMonAn({ onTimKiem }) {
  const [tuKhoa, setTuKhoa] = useState('');
  const [dangFocus, setDangFocus] = useState(false);

  // Enter trong ô nhập sẽ tự gửi form -> không cần bắt phím Enter riêng
  function handleSubmit(e) {
    e.preventDefault(); // chặn tải lại trang
    onTimKiem(tuKhoa.trim());
  }

  function handleKeyDown(e) {
    if (e.nativeEvent.isComposing) return; // đang gõ dấu tiếng Việt: bỏ qua
    if (e.key === 'Escape') {
      e.preventDefault(); // chặn hành vi xoá mặc định của ô search
      setTuKhoa('');
      onTimKiem('');
    }
  }

  function handleChonGoiY(goiY) {
    setTuKhoa(goiY);
    onTimKiem(goiY);
  }

  return (
    <form className="form-tim" onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input
          type="search"
          aria-label="Tìm món ăn Huế"
          value={tuKhoa}
          onChange={(e) => setTuKhoa(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setDangFocus(true)}
          onBlur={() => setDangFocus(false)}
          placeholder="Tìm món Huế… (Enter để tìm, Esc để xoá)"
          autoComplete="off"
        />
        {tuKhoa && (
          <button
            type="button"
            className="btn-xoa-nhanh"
            onClick={() => {
              setTuKhoa('');
              onTimKiem('');
            }}
            title="Xóa nhanh từ khóa (hoặc nhấn Esc)"
          >
            ✕
          </button>
        )}
      </div>

      <button type="submit" className="btn-tim-submit">
        Tìm kiếm
      </button>

      {dangFocus && (
        <div className="goi-y" role="listbox" aria-label="Gợi ý từ khóa">
          <span className="goi-y-nhan">Gợi ý nhanh:</span>
          <div className="goi-y-tags">
            {GOI_Y.map((goiY) => (
              <button
                key={goiY}
                type="button"
                className="goi-y-tag"
                // Giữ tiêu điểm ở ô nhập: nếu không, blur chạy trước click
                // và khung gợi ý biến mất trước khi kịp nhận cú bấm
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleChonGoiY(goiY)}
              >
                #{goiY}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}
