// liff_loader.js

// ***************************************************************
// !! 替換成您在 LINE Developers 後台取得的 LIFF ID !!
// ***************************************************************
const MY_LIFF_ID = "2008129352-Ml3XP4xL"; 
// ***************************************************************

/**
 * 初始化 LIFF 並嘗試取得 User ID
 * @param {runtime} runtime - Construct 3 的 Runtime 物件
 */
async function initLiffAndGetUserId(runtime) {
    // 檢查 LIFF SDK 是否已載入
    if (typeof liff === 'undefined') {
        console.error("LIFF STEP 0: 錯誤! LIFF SDK (liff.js) 未載入。請檢查 index.html。");
        runtime.callFunction("ReceiveLineID", "ERROR: LIFF SDK Missing");
        return;
    }
    
    console.log("LIFF STEP 1: LIFF SDK 檢查通過。開始初始化...");

    try {
        // 1. 初始化 LIFF
        await liff.init({ 
            liffId: MY_LIFF_ID,
            // 由於您在外部瀏覽器中沒有自動跳轉，明確開啟這個選項可能有幫助
            withLoginOnExternalBrowser: true 
        });
        
        console.log("LIFF STEP 2: 初始化成功。檢查登入狀態...");

        // 檢查是否已登入
        if (liff.isLoggedIn()) {
            console.log("LIFF STEP 3: 用戶已登入。嘗試取得 Profile...");
            
            // 取得用戶 Profile
            const profile = await liff.getProfile();
            const userId = profile.userId;
            
            console.log("LIFF STEP 4: 成功取得 LINE User ID:", userId);

            // 呼叫 Construct 3 的 Function，傳遞 User ID
            runtime.callFunction("ReceiveLineID", userId);

        } else {
            console.warn("LIFF STEP 3: 用戶未登入。開始執行 liff.login() 進行導向...");
            
            // 如果未登入，執行登入。LIFF 會導向登入頁面，成功後會重定向回來。
            // 使用 window.location.href 確保返回當前 URL
            liff.login({ 
                redirectUri: window.location.href 
            }); 
            
            // 這裡會跳轉，下面的程式碼不會立即執行。
        }

    } catch (err) {
        console.error("LIFF FINAL STEP: LIFF 操作失敗:", err);
        
        // 將錯誤訊息也傳給 C3 遊戲，以便除錯
        runtime.callFunction("ReceiveLineID", "LIFF_FAIL: " + err.message);
    }
}

// 監聽 Construct 3 遊戲啟動事件，並開始執行 LIFF 邏輯
globalThis.addEventListener("c3runtimeinit", () => {
    const runtime = globalThis.c3runtime;
    console.log("C3 Runtime 初始化完成。開始執行 LIFF 流程。");
    initLiffAndGetUserId(runtime);
});