const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.LocalStorage,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.事件表1_Event2,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{按鈕: 0},
	{Text: 0},
	{LocalStorage: 0},
	{按鈕2: 0},
	{NAME: 0},
	{ID: 0}
];

self.InstanceType = {
	按鈕: class extends self.IButtonInstance {},
	Text: class extends self.ITextInstance {},
	LocalStorage: class extends self.IInstance {},
	按鈕2: class extends self.IButtonInstance {}
}