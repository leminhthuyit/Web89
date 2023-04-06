let boxBlog = document.getElementsByClassName("news_box");

for (let i = 0; i < 4; i++) {
  boxBlog[i].innerHTML = `
    <img src="assets/svg/Rectangle 9.svg" alt="#">
    <div class="text_box">
        <h6>
            3 điểm khác biệt giữa Hosting Linux và Hosting Windows
        </h6>
        <div class="title_detail">
            <p>
                 11/03/2023
            </p>
            <a href="#">
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
    `;
}
