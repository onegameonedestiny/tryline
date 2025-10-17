const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.LocalStorage,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.JavaScriptInEvents.事件表1_Event5
	];
};
self.C3_JsPropNameTable = [
	{按鈕: 0},
	{Text: 0},
	{LocalStorage: 0}
];

self.InstanceType = {
	按鈕: class extends self.IButtonInstance {},
	Text: class extends self.ITextInstance {},
	LocalStorage: class extends self.IInstance {}
}