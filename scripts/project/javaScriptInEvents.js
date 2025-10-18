

const scriptsInEvents = {

	async 事件表1_Event3(runtime, localVars)
	{
console.log('🟢 [C3] On start of layout triggered');
const rt = globalThis.C3?.runtime;
if (!rt) { console.error('❌ [C3] runtime 尚未建立'); }

// 嘗試印出目前 window 狀態
console.log('🌐 [C3] window.frames.length =', window.frames.length);
console.log('🌐 [C3] window.LIFF_USER =', window.LIFF_USER);

// 註冊 postMessage 監聽
window.addEventListener('message', (event) => {
  console.log('📩 [C3] 收到 message 事件：', event.data);

  // 檢查資料型別
  if (!event.data || !event.data.type) {
    console.warn('⚠️ [C3] 收到未知訊息，略過');
    return;
  }

  if (event.data.type === 'LIFF_USER') {
    console.log('✅ [C3] 確認收到 LIFF_USER 資料');
    const rt2 = globalThis.C3?.runtime;
    if (!rt2) return console.error('❌ [C3] Runtime 不存在');

    const user = event.data.data;
    if (!user) return console.warn('⚠️ [C3] LIFF_USER 資料為空');

    // 更新全域變數
    rt2.globalVars.NAME = user.name;
    console.log('🧩 [C3] 已更新 globalVars.NAME =', user.name);

    // 嘗試找到文字物件
    const txt = rt2.objects.text?.getFirstInstance();
    if (txt) {
      txt.text = `你好，${user.name}！`;
      console.log('🎨 [C3] 已更新文字物件內容');
    } else {
      console.warn('⚠️ [C3] 找不到文字物件 text');
    }

    console.log('🏁 [C3] 全流程完成，顯示名稱成功');
  }
});

console.log('🟡 [C3] 已註冊 window.message 監聽器，等待外部訊息');
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
