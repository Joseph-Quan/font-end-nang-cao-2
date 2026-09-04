import { useState } from "react";
import { menuItems } from "./data/menu.js";
import MenuList from "./components/MenuList.jsx";
import "./App.css";

function App() {
  // Câu 6: Đặt state đếm tại App (component cha), nâng State lên (Lifting State Up)
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Hàm callback nhận thông báo từ MenuItem khi người dùng click (luồng dữ liệu một chiều)
  const handleToggleFavorite = (isFavorite: boolean) => {
    setFavoriteCount((prevCount) => (isFavorite ? prevCount + 1 : Math.max(0, prevCount - 1)));
  };

  // Tính phần trăm tiến độ yêu thích cho thanh đo trực quan
  const favoritePercentage = Math.round((favoriteCount / menuItems.length) * 100);

  return (
    <div className="app-container">
      {/* Hero Header sang trọng phong cách nhà hàng ẩm thực cao cấp */}
      <header className="menu-hero">
        <div className="hero-content">
          <div className="hero-info">
            <span className="hero-badge">✦ Tinh Hoa Cố Đô</span>
            <h1 className="hero-title">Thực Đơn Ẩm Thực Xứ Huế</h1>
            <p className="hero-subtitle">
              Trải nghiệm hương vị cung đình và dân gian trứ danh xứ Huế với nguyên liệu tươi ngon được chọn lọc kỹ lưỡng mỗi ngày.
            </p>
          </div>

          {/* Thẻ thống kê Yêu Thích (Câu 6) */}
          <div className="favorite-stats-card">
            <div className="stats-header">
              <span className="stats-label">Món bạn ưa thích</span>
              <span className="stats-heart-icon">♥</span>
            </div>
            {/* Câu 6: Dòng chữ hiển thị tổng số món đang được yêu thích dạng 'Số món đã yêu thích: n/6' */}
            <div className="stats-count-display">
              Số món đã yêu thích: {favoriteCount}/{menuItems.length}
            </div>
            <div className="stats-progress-track">
              <div
                className="stats-progress-fill"
                style={{ width: `${favoritePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Danh sách món ăn */}
      <main>
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span>🥢</span> Danh Sách Món Ăn Nổi Bật
            </h2>
            <p className="section-subtitle">
              Bấm vào nút yêu thích để đánh dấu và lưu lại món ăn bạn yêu thích nhé!
            </p>
          </div>
        </div>

        {/* Câu 4 & Câu 6: Truyền danh sách items và callback onToggleFavorite xuống MenuList */}
        <MenuList items={menuItems} onToggleFavorite={handleToggleFavorite} />
      </main>
    </div>
  );
}

export default App;