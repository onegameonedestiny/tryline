

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
	{
		
	},

	async 事件表1_Event4(runtime, localVars)
	{
setTimeout(() => {
  try {
    const rt = globalThis.C3?.runtime;
    const user = window.LIFF_USER;

    if (!rt) throw new Error("C3 runtime 尚未就緒");
    if (!user) throw new Error("尚未取得 LIFF_USER");

    // 🧩 寫入全域變數
    rt.globalVars.NAME = user.name;

    // 🧩 更新 Text 文字物件
    const txt = rt.objects.Text.getFirstInstance();
    if (txt) txt.text = `你好，${user.name}！`;

    console.log(`[C3] 成功顯示使用者名稱：${user.name}`);

  } catch (err) {
    console.warn("[C3] 錯誤：", err.message);
  }
}, 1000);

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
