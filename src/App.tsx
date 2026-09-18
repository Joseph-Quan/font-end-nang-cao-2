import { useState } from "react";
// @ts-expect-error JS module without TS declaration
import { menuItems } from "./data/menu.js";
// @ts-expect-error JSX module without TS declaration
import MenuList from "./components/MenuList.jsx";
// @ts-expect-error JS module without TS declaration
import { attractions } from "./data/attractions.js";
// @ts-expect-error JSX module without TS declaration
import AttractionList from "./components/AttractionList.jsx";
// @ts-expect-error JSX module without TS declaration
import CategoryTabs from "./components/CategoryTabs.jsx";
import "./App.css";

function App() {
  // Tab chuyển đổi giữa Bài 5 (mặc định) và Bài trước (Thực đơn)
  const [activeTab, setActiveTab] = useState<"buoi5" | "menu">("buoi5");

  // ==========================================
  // STATE & LOGIC CHO BÀI 5: KHÁM PHÁ HUẾ
  // ==========================================
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Danh sách danh mục duy nhất (Lab 3)
  const categories: string[] = [
    "Tất cả",
    ...Array.from<string>(new Set(attractions.map((item: { category: string }) => item.category))),
  ];

  // Lọc địa điểm theo danh mục đã chọn (Lab 3)
  const filteredAttractions =
    selectedCategory === "Tất cả"
      ? attractions
      : attractions.filter((item: { category: string }) => item.category === selectedCategory);

  // ==========================================
  // STATE & LOGIC CHO BÀI TRƯỚC: THỰC ĐƠN ẨM THỰC
  // ==========================================
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleToggleFavoriteMenu = (isFavorite: boolean) => {
    setFavoriteCount((prevCount) => (isFavorite ? prevCount + 1 : Math.max(0, prevCount - 1)));
  };

  const favoritePercentage = Math.round((favoriteCount / menuItems.length) * 100);

  return (
    <div className="app-container">
      {/* Thanh điều hướng chọn bài */}
      <nav className="lab-navigation-bar" aria-label="Chọn bài thực hành">
        <button
          type="button"
          className={`lab-nav-btn ${activeTab === "buoi5" ? "is-active" : ""}`}
          onClick={() => setActiveTab("buoi5")}
        >
          <span>🏯</span> Khám Phá Huế (Bài 5)
        </button>
        <button
          type="button"
          className={`lab-nav-btn ${activeTab === "menu" ? "is-active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          <span>🥢</span> Thực Đơn Ẩm Thực (Bài 4)
        </button>
      </nav>

      {/* ========================================================
          GIAO DIỆN BÀI 5 — PROPS VÀ STATE (Mặc định)
          ======================================================== */}
      {activeTab === "buoi5" && (
        <div className="app">
          <header className="app-header">
            <h1>Khám phá Huế</h1>
            <p className="app-subtitle">
              INT.7.18 — Bài 5: Thực hành Props và State (5 Lab hoàn chỉnh)
            </p>
          </header>

          {/* LAB 3: Bộ lọc danh mục */}
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* LAB 1, 2, 4, 5: Danh sách thẻ địa điểm */}
          <AttractionList attractions={filteredAttractions} />
        </div>
      )}

      {/* ========================================================
          GIAO DIỆN BÀI TRƯỚC: THỰC ĐƠN ẨM THỰC XỨ HUẾ
          ======================================================== */}
      {activeTab === "menu" && (
        <>
          <header className="menu-hero">
            <div className="hero-content">
              <div className="hero-info">
                <span className="hero-badge">✦ Tinh Hoa Cố Đô</span>
                <h1 className="hero-title">Thực Đơn Ẩm Thực Xứ Huế</h1>
                <p className="hero-subtitle">
                  Trải nghiệm hương vị cung đình và dân gian trứ danh xứ Huế với nguyên liệu tươi ngon được chọn lọc kỹ lưỡng mỗi ngày.
                </p>
              </div>

              <div className="favorite-stats-card">
                <div className="stats-header">
                  <span className="stats-label">Món bạn ưa thích</span>
                  <span className="stats-heart-icon">♥</span>
                </div>
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

            <MenuList items={menuItems} onToggleFavorite={handleToggleFavoriteMenu} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;