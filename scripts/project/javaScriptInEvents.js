

const scriptsInEvents = {

	async 事件表1_Event2(runtime, localVars)
	{
window.addEventListener('message', (event) => {
  if (event.data?.type === 'LIFF_USER') {
    const rt = globalThis.C3?.runtime;
    if (!rt) return console.warn('[C3] Runtime 尚未就緒');

    const user = event.data.data;
    rt.globalVars.NAME = user.name;

    const txt = rt.objects.Text.getFirstInstance();
    if (txt) txt.text = `你好，${user.name}！`;

    console.log('[C3] 已接收到 LIFF_USER：', user);
  }
});
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
