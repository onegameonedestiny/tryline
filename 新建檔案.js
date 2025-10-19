// liff_loader.js

// ************************************************
// !! 必須替換成您在 LINE Developers 後台取得的 LIFF ID !!
// ************************************************
const MY_LIFF_ID = "2008129352-Ml3XP4xL"; // 這是您輸入的 LIFF ID
// ************************************************

/**
 * 初始化 LIFF 並嘗試取得 User ID
 * @param {runtime} runtime - Construct 3 的 Runtime 物件
 */
async function initLiffAndGetUserId(runtime) {
    try {
        // 確保 LIFF SDK 已載入
        if (typeof liff === 'undefined') {
            console.error("LIFF SDK not loaded.");
            // 使用 System 動作將錯誤狀態傳回 C3 事件表
            runtime.callFunction("ReceiveLineID", "ERROR: LIFF SDK Missing");
            return;
        }

        await liff.init({ liffId: MY_LIFF_ID });
        console.log("LIFF initialized successfully.");

        if (!liff.isLoggedIn()) {
            console.log("User not logged in, initiating login...");
            liff.login(); 
            return;
        }

        const profile = await liff.getProfile();
        const userId = profile.userId;
        console.log("LINE User ID obtained:", userId);

        // 呼叫 Construct 3 的 Function
        runtime.callFunction("ReceiveLineID", userId);

    } catch (err) {
        console.error("LIFF operation failed:", err);
        runtime.callFunction("ReceiveLineID", "LIFF_FAIL: " + err.message);
    }
}

// 監聽 Construct 3 遊戲啟動事件，並開始執行 LIFF 邏輯
// LIFF 應該在遊戲 Runtime 準備好時立即啟動
globalThis.addEventListener("c3runtimeinit", () => {
    const runtime = globalThis.c3runtime;
    initLiffAndGetUserId(runtime);
});