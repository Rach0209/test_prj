/** 
* egis engine 2024 beta version
*/
var Module = {
	locateFile : function(s) {
		return "https://cdn.xdworld.kr/beta/"+ s;
	},
	postRun: function() {
		const vworld = "https://xdworld.vworld.kr";
		
		// 엔진 초기화 API 호출(필수)
		Module.initialize({
			container: document.getElementById("map3D"),
			terrain : {
				dem : {
					url : vworld,
					name : "dem",
					servername : "XDServer3d",
					encoding : true
				},
				image : {
					url : vworld,
					name : "tile_mo_HD",
					servername : "XDServer3d"
				},
			},
			worker : {
				use : true,
				path : "/resources/bss/gis/js/map/engine_beta/worker/XDWorldWorker.js",
				count : 5
			},
			defaultKey : "ezbBD(h2eFCmDQFQd9QpdzDS#zJRdJDm4!Epe(a2EzcbEzb2"
		});
	}
};

var script = document.createElement('script');
script.src = "https://cdn.xdworld.kr/beta/XDWorldEM.js";
document.body.appendChild(script);