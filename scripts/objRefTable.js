const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.JavaScriptInEvents.事件表1_Event2,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.事件表1_Event4
	];
};
self.C3_JsPropNameTable = [
	{txt: 0},
	{按鈕: 0},
	{按鈕2: 0},
	{Text: 0},
	{NAME: 0},
	{ID: 0}
];

self.InstanceType = {
	txt: class extends self.ITextInstance {},
	按鈕: class extends self.IButtonInstance {},
	按鈕2: class extends self.IButtonInstance {},
	Text: class extends self.ITextInstance {}
}