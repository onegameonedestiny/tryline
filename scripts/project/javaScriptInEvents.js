

const scriptsInEvents = {

	async ["事件表2_Event-1"](runtime, localVars)
	{
		const LIFF_ID = "2008129352-Ml3XP4xL";
		(async () => {
		  try {
		    console.log('[C3] 初始化 LIFF 中...');
		    await liff.init({ liffId: LIFF_ID });
		    if (!liff.isLoggedIn()) {
		      console.log('[C3] 尚未登入，導向登入中...');
		      liff.login({ redirectUri: location.href });
		      return;
		    }
		    console.log('[C3] LIFF 初始化成功');
		  } catch (err) {
		    console.error('[C3] LIFF 初始化失敗：', err);
		    alert('請從 LINE App 內重新開啟此遊戲。');
		  }
		})();
	},

	async ["事件表2_Event-1_2"](runtime, localVars)
	{
		const LIFF_ID = "2008129352-Ml3XP4xL";
		(async () => {
		  try {
		    console.log('[C3] 初始化 LIFF 中...');
		    await liff.init({ liffId: LIFF_ID });
		    if (!liff.isLoggedIn()) {
		      console.log('[C3] 尚未登入，導向登入中...');
		      liff.login({ redirectUri: location.href });
		      return;
		    }
		    console.log('[C3] LIFF 初始化成功');
		  } catch (err) {
		    console.error('[C3] LIFF 初始化失敗：', err);
		    alert('請從 LINE App 內重新開啟此遊戲。');
		  }
		})();
	},

	async ["事件表1_Event-1"](runtime, localVars)
	{
		const LIFF_ID = "2008129352-Ml3XP4xL";
		(async () => {
		  try {
		    console.log('[C3] 初始化 LIFF 中...');
		    await liff.init({ liffId: LIFF_ID });
		    if (!liff.isLoggedIn()) {
		      console.log('[C3] 尚未登入，導向登入中...');
		      liff.login({ redirectUri: location.href });
		      return;
		    }
		    console.log('[C3] LIFF 初始化成功');
		  } catch (err) {
		    console.error('[C3] LIFF 初始化失敗：', err);
		    alert('請從 LINE App 內重新開啟此遊戲。');
		  }
		})();
	},

	async 事件表1_Event2(runtime, localVars)
	{
const LIFF_ID = "2008129352-Ml3XP4xL";

(async () => {
    try {
        console.log("[C3] 🟢 開始初始化 LIFF...");
        await liff.init({ liffId: LIFF_ID });

        // 若未登入 → 導向登入
        if (!liff.isLoggedIn()) {
            console.warn("[C3] ⚠️ 尚未登入，導向登入中...");
            liff.login({ redirectUri: location.href });
            return;
        }

        console.log("[C3] ✅ LIFF 初始化成功");

        // 取得個人資料
        const profile = await liff.getProfile();
        console.log("[C3] 👤 使用者資料：", profile);

        // 等待 Construct 3 runtime 建立
        let rt = null;
        for (let i = 0; i < 20; i++) { // 最多重試 20 次（約 2 秒）
            rt = globalThis.C3_GetRuntime?.() || globalThis.C3?.runtime || window.C3Runtime || window.runtime || null;
            if (rt) break;
            console.log(`[C3] ⏳ 等待 Construct 3 runtime (${i})...`);
            await new Promise(r => setTimeout(r, 100));
        }

        if (!rt) throw new Error("Construct 3 runtime 無法建立");

        // ✅ 寫入全域變數
        rt.globalVars.ID = profile.userId || "";
        rt.globalVars.NAME = profile.displayName || "(未提供名稱)";

        // ✅ 更新畫面
        const txt = rt.objects.Text?.getFirstInstance();
        if (txt) {
            txt.text = `你好，${profile.displayName}！`;
            console.log(`[C3] 🟢 已更新 Text 物件內容為：你好，${profile.displayName}！`);
        } else {
            console.warn("[C3] ⚠️ 找不到名為 Text 的物件");
        }

        console.log("[C3] 🎉 初始化完成，變數已寫入", rt.globalVars);

    } catch (err) {
        console.error("[C3] 💥 LIFF 初始化失敗：", err);
        alert("無法初始化 LIFF，請從 LINE App 內重新開啟遊戲。");
    }
})();

	},

	async 事件表1_Event4(runtime, localVars)
	{
		(async () => {
		  try {
		    await liff.sendMessages([{ type: 'text', text: '開始' }]);
		    console.log('[C3] 傳送訊息成功');
		    liff.closeWindow();
		  } catch (err) {
		    console.error('[C3] 傳送失敗：', err);
		    alert('請在 LINE App 內開啟此遊戲。');
		  }
		})();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
