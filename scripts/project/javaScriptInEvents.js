

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
	{
// 取得 Construct 3 runtime
const runtime = globalThis.C3?.runtime;

// 嘗試從 window.LIFF_USER 取得資料
const user = window.LIFF_USER;

// 如果有資料，就更新 C3 全域變數與 Text
if (user && runtime) {
    runtime.globalVars.NAME = user.name;
    const txt = runtime.objects.Text.getFirstInstance();
    if (txt) txt.text = `你好，${user.name}！`;
    console.log("[C3] 已取得 LINE 名稱：", user.name);
} else {
    console.warn("[C3] 尚未載入 LIFF_USER，可能 HTML 還沒初始化。");
}

	},

	async 事件表1_Event4(runtime, localVars)
	{
if (window.LIFF_USER) {
  alert(`你好，${window.LIFF_USER.name}！`);
} else {
  alert("尚未取得 LIFF 資料。");
}

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
