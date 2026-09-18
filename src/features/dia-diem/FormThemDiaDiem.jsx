// src/features/dia-diem/FormThemDiaDiem.jsx
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { kiemChung } from './kiemChung';
import './FormThemDiaDiem.css';

export const GIA_TRI_BAN_DAU = {
  ten: '',
  moTa: '',
  giaVe: '',
  phuong: '',
  loaiHinh: 'di-tich',
  dongY: false,
};

export const DS_TIEN_ICH = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
];

export default function FormThemDiaDiem(props) {
  // Hỗ trợ chế độ độc lập (Lab 1-4) hoặc nhận props từ cha (Lab 5 Lifting State Up)
  const noiBoForm = useForm(GIA_TRI_BAN_DAU, kiemChung);
  const [noiBoTienIch, setNoiBoTienIch] = useState([]);
  const [noiBoThongBao, setNoiBoThongBao] = useState('');

  const duLieu = props.duLieu || noiBoForm.duLieu;
  const xuLyThayDoi = props.xuLyThayDoi || noiBoForm.xuLyThayDoi;
  const xuLyRoiO = props.xuLyRoiO || noiBoForm.xuLyRoiO;
  const loiCuaO = props.loiCuaO || noiBoForm.loiCuaO;
  const dangGui = props.dangGui !== undefined ? props.dangGui : noiBoForm.dangGui;
  const trangThai = props.trangThai || noiBoForm.trangThai;

  const tienIch = props.tienIch !== undefined ? props.tienIch : noiBoTienIch;
  const xuLyTich = props.xuLyTich || function (e) {
    const { value, checked } = e.target;
    setNoiBoTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((m) => m !== value)
    );
  };

  const xuLyGuiForm = props.xuLyGui
    ? props.xuLyGui(async (d) => {
        if (props.onThemXong) {
          props.onThemXong({ ...d, tienIch });
        }
      })
    : noiBoForm.xuLyGui(async (gt) => {
        await new Promise((r) => setTimeout(r, 1200)); // Giả lập máy chủ 1.2s
        setNoiBoThongBao(`Đã thêm địa điểm "${gt.ten}" thành công!`);
        noiBoForm.datLai();
        setNoiBoTienIch([]);
      });

  function datLaiTatCa() {
    if (props.datLai) {
      props.datLai();
    } else {
      noiBoForm.datLai();
      setNoiBoTienIch([]);
      setNoiBoThongBao('');
    }
  }

  return (
    <form className="form-dia-diem" onSubmit={xuLyGuiForm} noValidate>
      <h2 className="form-dia-diem__tieu-de">📍 Thêm địa điểm tham quan</h2>

      {(trangThai === 'thanh-cong' || noiBoThongBao) && (
        <p className="thong-bao-thanh-cong" role="status">
          ✓ {noiBoThongBao || 'Đã thêm địa điểm thành công!'}
        </p>
      )}

      {trangThai === 'that-bai' && (
        <p className="thong-bao-loi" role="alert">
          ⚠ Có lỗi khi gửi, vui lòng thử lại.
        </p>
      )}

      {/* Lab 1: Tên địa điểm */}
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm *</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('ten') ? true : undefined}
          placeholder="Ví dụ: Lăng Minh Mạng"
        />
        {loiCuaO('ten') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('ten')}
          </p>
        )}
      </div>

      {/* Lab 1: Mô tả ngắn */}
      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="Mô tả về lịch sử, kiến trúc, điểm đặc sắc..."
        />
      </div>

      {/* Lab 2: Giá vé */}
      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ) *</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('giaVe') ? true : undefined}
          placeholder="0 (Nhập 0 nếu miễn phí)"
        />
        {loiCuaO('giaVe') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('giaVe')}
          </p>
        )}
      </div>

      {/* Lab 1: Phường / xã */}
      <div className="truong">
        <label htmlFor="phuong">Phường / xã *</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          aria-invalid={loiCuaO('phuong') ? true : undefined}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
          <option value="phu-hoi">Phú Hội</option>
          <option value="thuan-hoa">Thuận Hoà</option>
        </select>
        {loiCuaO('phuong') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('phuong')}
          </p>
        )}
      </div>

      {/* Lab 2: Nhóm nút chọn radio "Loại hình" */}
      <fieldset>
        <legend>Loại hình</legend>
        <div className="nhom-lua-chon">
          <label>
            <input
              name="loaiHinh"
              type="radio"
              value="di-tich"
              checked={duLieu.loaiHinh === 'di-tich'}
              onChange={xuLyThayDoi}
            />
            🏛️ Di tích lịch sử
          </label>

          <label>
            <input
              name="loaiHinh"
              type="radio"
              value="am-thuc"
              checked={duLieu.loaiHinh === 'am-thuc'}
              onChange={xuLyThayDoi}
            />
            🍜 Điểm ẩm thực
          </label>
        </div>
      </fieldset>

      {/* Lab 2: Nhóm hộp kiểm nhiều lựa chọn: Tiện ích */}
      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>
        <div className="nhom-lua-chon">
          {DS_TIEN_ICH.map((ti) => (
            <label key={ti.ma}>
              <input
                type="checkbox"
                value={ti.ma}
                checked={tienIch.includes(ti.ma)}
                onChange={xuLyTich}
              />
              {ti.ten}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Lab 2 & Lab 3: Hộp kiểm đơn "Xác nhận" */}
      <div className="hop-kiem-dong-y">
        <label>
          <input
            name="dongY"
            type="checkbox"
            checked={duLieu.dongY}
            onChange={xuLyThayDoi}
            aria-invalid={loiCuaO('dongY') ? true : undefined}
          />
          Tôi xác nhận thông tin địa điểm là chính xác
        </label>
        {loiCuaO('dongY') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('dongY')}
          </p>
        )}
      </div>

      {/* Lab 3: Nút Gửi có trạng thái và nút Nhập lại */}
      <div className="nhom-nut-bam">
        <button type="submit" className="nut-submit" disabled={dangGui}>
          {dangGui ? '⏳ Đang lưu...' : '➕ Thêm địa điểm'}
        </button>

        <button type="button" className="nut-nhap-lai" onClick={datLaiTatCa}>
          🔄 Nhập lại
        </button>
      </div>
    </form>
  );
}