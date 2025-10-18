

const scriptsInEvents = {

	async 事件表1_Event3(runtime, localVars)
	{
console.log("🟢 [C3] On start of layout triggered");

function waitForRuntime() {
    const rt = globalThis.C3?.runtime;
    if (!rt) {
        console.warn("⏳ [C3] runtime 尚未建立，100ms 後重試...");
        setTimeout(waitForRuntime, 100);
        return;
    }

    console.log("✅ [C3] runtime 已建立");
    console.log("🌐 [C3] window.frames.length =", window.frames.length);
    console.log("🌐 [C3] window.LIFF_USER =", window.LIFF_USER);

    // 註冊 postMessage 監聽
    window.addEventListener("message", (event) => {
        if (event.data?.type === "LIFF_USER") {
            const user = event.data.data;
            console.log("📩 [C3] 收到 LIFF_USER 資料：", user);

            rt.globalVars.NAME = user.name;
            const txt = rt.objects.Text.getFirstInstance();
            if (txt) txt.text = `你好，${user.name}！`;

            console.log("🎨 [C3] 已更新文字物件內容");
        }
    });

    console.log("🟡 [C3] 已註冊 window.message 監聽器，等待外部訊息");
}

// 啟動檢查流程
waitForRuntime();

	},

	async 事件表1_Event5(runtime, localVars)
	{
const rt = globalThis.C3?.runtime;
console.log('🖱️ [C3] 按鈕被點擊');
if (!rt) return console.error('❌ [C3] Runtime 不存在');
console.log('📤 [C3] 現在的 NAME =', rt.globalVars.NAME);
alert(`目前全域變數 NAME：${rt.globalVars.NAME || '(尚未設定)'}`);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
