const today = new Date();
const day = today.getDay(); 
// 0: 日, 1: 月, 2: 火, 3: 水, 4: 木, 5: 金, 6: 土
// 各曜日に対応するマスの位置（board-wrapper 内での位置）
const positions = {
    1: { top: 64, left: 9.5 },   // げつ
    2: { top: 64, left: 23 },  // 
    3: { top: 64, left: 36.5 },  // 
    4: { top: 64, left: 50},  // 
    5: { top: 64, left: 63.5 },  // 
    6: { top: 64, left: 82.5},  // 
    0: { top: 64, left: 96}   // 
};

window.addEventListener('DOMContentLoaded', () => {
    const pin = document.getElementById('pin');

    const today = new Date();
    const day = today.getDay(); // 0〜6

    const pos = positions[day];

    if (pos && pin) {
        // ピンの位置を設定（%で指定）
        pin.style.top = pos.top + '%';
        pin.style.left = pos.left + '%';
    }
});
