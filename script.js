// スクロール時に fade-in クラスを持つ要素をふわっと表示
const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  
  // スキルバーのアニメーション
  window.addEventListener("scroll", () => {
    const bars = document.querySelectorAll(".skill-list .fill");
    bars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 50;
      if (isVisible && !bar.classList.contains("animated")) {
        bar.style.width = bar.style.getPropertyValue('--fill');
        bar.classList.add("animated");
      }
    });
  });
  
  // ナビゲーションリンクのスムーススクロール
  document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // メールリンクのクリックアニメーション
  document.querySelectorAll("a[href^='mailto']").forEach(link => {
    link.addEventListener("click", () => {
      link.classList.add("clicked");
      setTimeout(() => link.classList.remove("clicked"), 600);
    });
  });
  
  // publication-list にフェードインをかける（Aboutセクションに滑らか表示）
  document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");
    const publications = aboutSection.querySelectorAll(".publication-list li");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    publications.forEach(item => {
      item.classList.add("fade-in");
      observer.observe(item);
    });
  });
  
  // オーバーレイの開閉処理
  function openOverlay(imageSrc) {
    const overlay = document.getElementById("imageOverlay");
    const img = document.getElementById("overlayImage");
    img.src = imageSrc;
    overlay.style.display = "flex";
  }
  
  function closeOverlay() {
    document.getElementById("imageOverlay").style.display = "none";
  }
  
  /* 画像オーバーレイを開くイベントを .yt-card に設定
  document.querySelectorAll('.yt-card').forEach(card => {
    card.addEventListener('click', function (e) {
      const imageSrc = this.getAttribute('data-image');
      if (!imageSrc) return; // data-image未指定なら何もしない
  
      openOverlay(imageSrc);
    });
  });
  */

  document.querySelectorAll('.yt-card').forEach(card => {
  const link = card.getAttribute('data-link');
  if (link) {
    card.addEventListener('click', function () {
      window.open(link, '_blank'); // 新しいタブで開く
    });
  } else {
    // 通常のオーバーレイ動作
    card.addEventListener('click', function () {
      const imageSrc = this.getAttribute('data-image');
      if (!imageSrc) return;
      openOverlay(imageSrc);
    });
  }
});

  