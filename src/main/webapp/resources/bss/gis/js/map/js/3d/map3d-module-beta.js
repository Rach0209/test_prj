/** 
* egis engine 2024 beta version
*/
	
var script = document.createElement('script');
script.src = "https://cdn.xdworld.kr/beta/XDWorldEM.js";
document.body.appendChild(script);

var Module = {
		locateFile : function(s) {
			return "https://cdn.xdworld.kr/beta/"+ s;
		},
		postRun: init
	};
function init() {
	const vworld = "https://xdworld.vworld.kr";
	const _container = document.getElementById('map3D');
	
	// 엔진 초기화 API 호출(필수)
	Module.initialize({
		container: _container,
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
			path : "/resources/bss/gis/lib/engine_beta/worker/XDWorldWorker.js",
			count : 5
		},
		defaultKey : "ezbBD(h2eFCmDQFQd9QpdzDS#zJRdJDm4!Epe(a2EzcbEzb2"
	});
	
	var layer = Module.getTileLayerList().createXDServerLayer({
		url : "https://xdworld.vworld.kr",
		servername : "XDServer3d",
		name : "facility_build",
		type : 9,
		minLevel : 0,
		maxLevel : 15
	});
}