

const scriptsInEvents = {

	async 事件表1_Event3(runtime, localVars)
	{
console.log("🟢 [C3] On start of layout triggered");

// 等待 runtime
function waitForRuntime() {
  const rt = globalThis.C3_GetRuntime?.();
  if (!rt) {
    console.warn("⏳ [C3] runtime 尚未建立，100ms 後重試...");
    setTimeout(waitForRuntime, 100);
    return;
  }
  console.log("✅ [C3] runtime 已建立");

  // ✅ 監聽來自 console 的事件
  window.addEventListener("LIFF_USER", (e) => {
    const user = e.detail;
    console.log("📩 [C3] 收到 LIFF_USER（來自 console 傳遞）:", user);

    rt.globalVars.NAME = user.name;
    const txt = rt.objects.Text.getFirstInstance();
    if (txt) 按鈕2.text = `你好，${user.name}！`;

    console.log("🎨 [C3] 已更新 Text 顯示名稱");
  });

  console.log("🟡 [C3] 已註冊 LIFF_USER 事件監聽器");
}

waitForRuntime();

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
