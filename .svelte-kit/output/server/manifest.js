export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","android.svg","chrome.svg","favicon.png","firefox.svg","google-maps.svg","jitsi.svg","libreoffice.svg","osmand.svg","outlook.svg","signal.svg","thunderbird.svg","tmp/Android_robot.svg","whatsapp.svg","word.svg","zoom.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"start-f773de08.js","js":["start-f773de08.js","chunks/vendor-3283077c.js","chunks/paths-396f020f.js"],"css":["assets/vendor-95172eab.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
