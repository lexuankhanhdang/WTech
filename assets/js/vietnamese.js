// Chọn các phần tử từ HTML
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Biến lưu vị trí slide hiện tại (bắt đầu từ 0)
let currentSlide = 0;

// Hàm hiển thị slide theo vị trí (index)
function showSlide(index) {
    // 1. Xóa class 'active' của tất cả các ảnh và các dấu chấm tròn
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 2. Xử lý vòng lặp: Nếu đi quá ảnh cuối thì quay lại ảnh đầu, nếu lùi quá ảnh đầu thì tới ảnh cuối
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // 3. Thêm class 'active' để hiện ảnh và làm sáng dấu chấm tròn tương ứng
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Lắng nghe sự kiện khi bấm nút Next (Tới)
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Lắng nghe sự kiện khi bấm nút Prev (Lùi)
prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Lắng nghe sự kiện khi bấm trực tiếp vào các dấu chấm tròn dưới đáy
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Chạy hàm này ngay khi load web để hiển thị bức ảnh đầu tiên
showSlide(0);

// (Tùy chọn thêm) Tự động chuyển ảnh sau mỗi 3 giây
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);