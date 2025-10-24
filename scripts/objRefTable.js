const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Geolocation,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Clipboard,
		C3.Plugins.LocalStorage,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.GetAllKeyNames,
		C3.Plugins.LocalStorage.Cnds.OnAllGetsComplete,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.JavaScriptInEvents.事件表1_Event6
	];
};
self.C3_JsPropNameTable = [
	{地理位置: 0},
	{按鈕: 0},
	{文本: 0},
	{剪貼板: 0},
	{按鈕2: 0},
	{文本2: 0},
	{本地存儲: 0}
];

self.InstanceType = {
	地理位置: class extends self.IInstance {},
	按鈕: class extends self.IButtonInstance {},
	文本: class extends self.ITextInstance {},
	剪貼板: class extends self.IInstance {},
	按鈕2: class extends self.IButtonInstance {},
	文本2: class extends self.ITextInstance {},
	本地存儲: class extends self.IInstance {}
}