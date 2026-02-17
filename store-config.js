// القيم الافتراضية (لو ما في إعدادات محفوظة)
const DEFAULT_CONFIG = {
  storeName: "AUREX Store",
  heroTitle: "AUREX",
  heroDescription: "Premium Fashion Experience",

  colors: {
    primary: "#000000",
    background: "#ffffff",
    text: "#111111"
  },

  logoText: "AUREX"
};

// قراءة من لوحة الإدارة
const saved = localStorage.getItem("AUREX_STORE_CONFIG");

window.STORE_CONFIG = saved ? JSON.parse(saved) : DEFAULT_CONFIG;
