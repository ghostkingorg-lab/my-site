// ==========================================
// ПОЛУЧАЕМ ЭЛЕМЕНТЫ
// ==========================================

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const home = document.getElementById("home");
const stories = document.getElementById("stories");

const closeBtn = document.getElementById("closeBtn");


// ==========================================
// ОТКРЫТЬ СПИСОК ИСТОРИЙ
// ==========================================

btn1.addEventListener("click", function () {

    home.style.display = "none";

    stories.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// ВЕРНУТЬСЯ НА ГЛАВНУЮ
// ==========================================

closeBtn.addEventListener("click", function () {

    stories.style.display = "none";

    home.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// TELEGRAM
// ==========================================

btn2.addEventListener("click", function () {

    window.open(
        "https://t.me/ghostking_h_story",
        "_blank"
    );

});
