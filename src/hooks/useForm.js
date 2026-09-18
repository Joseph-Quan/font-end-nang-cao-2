// src/hooks/useForm.js
import { useState } from 'react';

export function useForm(giaTriBanDau, kiemChung) {
  const [duLieu, setDuLieu] = useState(giaTriBanDau);
  const [daCham, setDaCham] = useState({});
  const [dangGui, setDangGui] = useState(false);
  const [trangThai, setTrangThai] = useState('cho'); // cho | dang-gui | thanh-cong | that-bai

  const loi = kiemChung ? kiemChung(duLieu) : {};
  const hopLe = Object.keys(loi).length === 0;

  function xuLyThayDoi(e) {
    const { name, value, type, checked } = e.target;
    setDuLieu((truoc) => ({
      ...truoc,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function xuLyRoiO(e) {
    const { name } = e.target;
    setDaCham((truoc) => ({ ...truoc, [name]: true }));
  }

  function loiCuaO(ten) {
    return daCham[ten] ? loi[ten] : undefined;
  }

  function datLai() {
    setDuLieu(giaTriBanDau);
    setDaCham({});
    setDangGui(false);
    setTrangThai('cho');
  }

  function xuLyGui(guiDuLieu) {
    return async (e) => {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      // Đánh dấu mọi ô là đã chạm để lộ hết lỗi còn sót
      const tatCaDaCham = {};
      Object.keys(giaTriBanDau).forEach((k) => {
        tatCaDaCham[k] = true;
      });
      setDaCham(tatCaDaCham);

      const cacLoiHienTai = kiemChung ? kiemChung(duLieu) : {};
      if (Object.keys(cacLoiHienTai).length > 0) return;

      try {
        setDangGui(true);
        setTrangThai('dang-gui');
        await guiDuLieu(duLieu);
        setTrangThai('thanh-cong');
      } catch (err) {
        setTrangThai('that-bai');
        throw err;
      } finally {
        setDangGui(false);
      }
    };
  }

  return {
    duLieu,
    loi,
    daCham,
    dangGui,
    trangThai,
    hopLe,
    xuLyThayDoi,
    xuLyRoiO,
    loiCuaO,
    xuLyGui,
    datLai,
    setDuLieu,
    setTrangThai,
    setDaCham,
  };
}
