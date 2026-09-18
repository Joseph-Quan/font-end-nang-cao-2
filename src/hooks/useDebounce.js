import { useState, useEffect } from 'react';

// Custom Hook: useDebounce
// Trì hoãn cập nhật giaTri cho đến khi ngừng thay đổi trong doTre mili-giây
function useDebounce(giaTri, doTre) {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri);

  useEffect(() => {
    // Đặt timer cập nhật giá trị trì hoãn sau doTre ms
    const idTimer = setTimeout(() => {
      setGiaTriDaTre(giaTri);
    }, doTre);

    // Cleanup: huỷ timer cũ mỗi khi giaTri đổi trước khi hết thời gian chờ
    return () => {
      clearTimeout(idTimer);
    };
  }, [giaTri, doTre]);

  return giaTriDaTre;
}

export default useDebounce;
