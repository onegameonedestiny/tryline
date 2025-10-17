

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
	{
(async () => {
  const LIFF_ID = "2008129352-Ml3XP4xL"; // 你的 LIFF ID
  const runtime = globalThis.C3?.runtime;
  try {
    await liff.init({ liffId: LIFF_ID });

    if (!liff.isLoggedIn()) {
      await liff.login({ redirectUri: location.href });
      return;
    }

    const profile = await liff.getProfile();
    console.log("[C3] 取得 LINE 資料：", profile);

    // ✅ Construct 3 的 runtime 要這樣取得
    
    if (!runtime) {
      alert("Construct 3 runtime 尚未載入");
      return;
    }

    // ✅ 寫入全域變數
    runtime.globalVars.ID = profile.userId;
    runtime.globalVars.NAME = profile.displayName;

    // ✅ 顯示測試
    alert(`你好，${profile.displayName}！`);

    // ✅ 同時更新畫面上的 Text 物件（如果名稱叫 Text）
    const textObj = runtime.objects.Text.getFirstInstance();
    if (textObj) textObj.text = `ID：${profile.userId}\nNAME：${profile.displayName}`;

  } catch (err) {
    console.error("[C3] 取得 LINE 資料失敗：", err);
    alert("請從 LINE App 內開啟遊戲！");
  }
})();

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
