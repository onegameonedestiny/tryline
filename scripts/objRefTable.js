const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Text: 0},
	{按鈕: 0},
	{按鈕2: 0},
	{LineUserID: 0},
	{LiffStatus: 0},
	{UserID_Param: 0}
];

self.InstanceType = {
	Text: class extends self.ITextInstance {},
	按鈕: class extends self.IButtonInstance {},
	按鈕2: class extends self.IButtonInstance {}
}