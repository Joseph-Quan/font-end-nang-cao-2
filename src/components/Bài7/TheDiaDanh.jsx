import { memo } from 'react';

// Component con: chỉ hiển thị và báo sự kiện lên cha, KHÔNG giữ state "đang chọn"
// Bọc memo (Bonus) để chỉ re-render thẻ có thay đổi trạng thái khi cha render
function TheDiaDanh({ diaDanh, dangChon, onChon }) {
  return (
    <li className={'the-dia-danh' + (dangChon ? ' dang-chon' : '')}>
      <label>
        <input
          type="checkbox"
          checked={dangChon}
          onChange={() => onChon(diaDanh.id)}
          aria-label={'Chọn ' + diaDanh.ten}
        />
        <span className="checkbox-custom" aria-hidden="true"></span>
        <span className="ten">{diaDanh.ten}</span>
        <span className="loai">{diaDanh.loai}</span>
      </label>
    </li>
  );
}

export default memo(TheDiaDanh);
