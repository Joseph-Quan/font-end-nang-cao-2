// src/features/gop-y/FormGopY.jsx
// Lab 4: Biểu mẫu thứ hai chứng minh hook useForm dùng lại được cho bất kỳ form nào
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const GIA_TRI_BAN_DAU = {
  hoTen: '',
  noiDung: '',
};

function kiemChungGopY(d) {
  const loi = {};
  if (!d.hoTen || !d.hoTen.trim()) loi.hoTen = 'Vui lòng nhập họ tên.';
  if (!d.noiDung || d.noiDung.trim().length < 10) {
    loi.noiDung = 'Góp ý cần ít nhất 10 ký tự.';
  }
  return loi;
}

export default function FormGopY() {
  const { duLieu, dangGui, trangThai, xuLyThayDoi, xuLyRoiO, loiCuaO, xuLyGui, datLai } =
    useForm(GIA_TRI_BAN_DAU, kiemChungGopY);

  const [thongBao, setThongBao] = useState('');

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 800));
    setThongBao(`Cảm ơn góp ý quý báu của bạn (${gt.hoTen})!`);
    datLai();
  });

  return (
    <div style={{
      background: '#ffffff',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      maxWidth: '540px',
      width: '100%',
      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
    }}>
      <h3 style={{ marginTop: 0, color: '#1e293b', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        💬 Gửi góp ý trải nghiệm (Lab 4 — useForm Demo)
      </h3>

      {thongBao && (
        <div style={{
          background: '#ecfdf5',
          color: '#065f46',
          padding: '10px 14px',
          borderRadius: '8px',
          marginBottom: '14px',
          fontSize: '14px',
          fontWeight: '600',
        }}>
          ✓ {thongBao}
        </div>
      )}

      <form onSubmit={gui} noValidate>
        <div style={{ marginBottom: '14px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>
            Họ và tên *
          </label>
          <input
            name="hoTen"
            value={duLieu.hoTen}
            onChange={xuLyThayDoi}
            onBlur={xuLyRoiO}
            aria-invalid={loiCuaO('hoTen') ? true : undefined}
            placeholder="Ví dụ: Nguyễn Văn An"
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: '7px',
              border: '1.5px solid #cbd5e1',
              boxSizing: 'border-box',
              fontSize: '14px',
            }}
          />
          {loiCuaO('hoTen') && (
            <p role="alert" style={{ color: '#dc2626', fontSize: '12.5px', margin: '5px 0 0' }}>
              {loiCuaO('hoTen')}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '5px' }}>
            Nội dung góp ý * (tối thiểu 10 ký tự)
          </label>
          <textarea
            name="noiDung"
            rows={3}
            value={duLieu.noiDung}
            onChange={xuLyThayDoi}
            onBlur={xuLyRoiO}
            aria-invalid={loiCuaO('noiDung') ? true : undefined}
            placeholder="Chia sẻ cảm nhận, đóng góp cải tiến của bạn về điểm đến..."
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: '7px',
              border: '1.5px solid #cbd5e1',
              boxSizing: 'border-box',
              fontSize: '14px',
              fontFamily: 'inherit',
            }}
          />
          {loiCuaO('noiDung') && (
            <p role="alert" style={{ color: '#dc2626', fontSize: '12.5px', margin: '5px 0 0' }}>
              {loiCuaO('noiDung')}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={dangGui}
          style={{
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '7px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            opacity: dangGui ? 0.7 : 1,
            transition: 'background 0.2s',
          }}
        >
          {dangGui ? '⏳ Đang gửi...' : '📤 Gửi góp ý'}
        </button>
      </form>
    </div>
  );
}
