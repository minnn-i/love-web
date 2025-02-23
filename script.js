const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const questionContainer = document.getElementById("questionContainer");
const loadingContainer = document.getElementById("loadingContainer");
const finalContainer = document.getElementById("finalContainer");

// 🏃‍♂️ ทำให้ปุ่ม "No" หนี
noBtn.addEventListener("mouseover", () => {
    const newX = Math.random() * window.innerWidth - noBtn.clientWidth;
    const newY = Math.random() * window.innerHeight - noBtn.clientHeight;
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// 🎉 เมื่อกดปุ่ม "Yes"
yesBtn.addEventListener("click", () => {
    questionContainer.classList.add("hidden"); // ซ่อนหน้าแรก
    loadingContainer.classList.remove("hidden"); // แสดงหน้า Loading

    // ⏳ รอ 3 วินาที แล้วไปหน้าสุดท้าย
    setTimeout(() => {
        loadingContainer.classList.add("hidden"); // ซ่อนหน้า Loading
        finalContainer.classList.remove("hidden"); // แสดงหน้าสุดท้าย
    }, 3000); // 3 วินาที
});
