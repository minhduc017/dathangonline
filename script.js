// Script for interactive functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
  });
// Xử lý thanh tìm kiếm
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Khi nhấn nút tìm kiếm
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    // Thực hiện tìm kiếm (ví dụ: hiện thông báo)
    alert(`Bạn đã tìm kiếm: "${query}"`);

    // Hoặc thực hiện xử lý khác (lọc sản phẩm, điều hướng trang, v.v.)
  } else {
    alert('Vui lòng nhập nội dung tìm kiếm!');
  }
});
