

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
	{
try {
    const rt = globalThis.C3?.runtime;
    const user = window.LIFF_USER;
    if (!rt) throw new Error("C3 runtime 尚未就緒");
    if (!user) throw new Error("尚未取得 LIFF_USER");

    rt.globalVars.NAME = user.name;
    const txt = rt.objects.Text.getFirstInstance();
    if (txt) txt.text = `你好，${user.name}！`;
} catch (err) {
    console.warn("[C3] 錯誤：", err.message);
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
