/* ==========================================================
   Construct 3 Service Worker 快取控制
   ✅ 版本：2025-10-18-01
   ✅ 功能：
      - 自動清除舊快取，避免讀到舊 HTML 或舊遊戲
      - 立即啟用新版本
      - 保留 Construct 原有的離線功能
========================================================== */

self.addEventListener('install', event => {
  console.log('[SW] 🧩 Installing new service worker...');
  // 直接跳過等待階段
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[SW] 🔁 Activating new service worker, clearing old caches...');
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => {
          console.log('[SW] 🧹 Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
      await self.clients.claim(); // 立即接管頁面控制權
      console.log('[SW] ✅ All old caches cleared, new version now active!');
    })()
  );
});

// Construct 3 預設會使用 sw.js 負責離線緩存
// 這裡專職註冊與管理更新機制
(async () => {
  try {
    const registration = await navigator.serviceWorker.register("sw.js");
    console.log("[SW] 🟢 Registered main Construct SW:", registration);
  } catch (err) {
    console.error("[SW] ❌ Registration failed:", err);
  }
})();

/* ==========================================================
   額外除錯工具（可選）
   在開發時，若你懷疑瀏覽器仍抓舊版本，
   可在 Console 執行以下程式手動清理快取：

   navigator.serviceWorker.getRegistrations().then(r => r.forEach(x => x.unregister()));
   caches.keys().then(keys => keys.forEach(k => caches.delete(k)));

   ========================================================== */
