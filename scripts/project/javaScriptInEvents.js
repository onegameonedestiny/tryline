

const scriptsInEvents = {

	async 事件表1_Event5(runtime, localVars)
	{
		(async () => {
		  try {
		    // 傳送訊息到聊天
		    await liff.sendMessages([
		      {
		        type: "text",
		        text: "開始"
		      }
		    ]);
		
		    // 關閉 LIFF 視窗
		    liff.closeWindow();
		
		  } catch (e) {
		    alert("傳訊失敗或不在 LINE 內開啟");
		    console.error(e);
		  }
		})();
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
