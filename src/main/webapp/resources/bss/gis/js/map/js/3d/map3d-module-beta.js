/** 
* egis engine 2024 beta version
*/
window.Module = window.Module || {};
window.map3d = (function() {
	let _isInit = false;
	let _container;
	let _isLoaded = $.deferred();
	
	
	Module = {
		locateFile : function(s) {
			return "https://cdn.xdworld.kr/beta/"+ s;
		},
//		postRun: init()
	};
	
	function init() {
		const vworld = "https://xdworld.vworld.kr";
		
		var script = document.createElement('script');
		script.src = "https://cdn.xdworld.kr/beta/XDWorldEM.js";
		document.body.appendChild(script);
		
		if (_isInit) {
			return _isLoaded;
		}
		
		_container = document.getElementById('map3D');
		window.addEventListener('resize', resize);
		
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
	
	
    //window resize Event
    function resize() {
        if (!_isInit) {
            return;
        }
        Module.Resize(_container.clientWidth, _container.clientHeight)
    };
	
	const module = {
		init: init
	};
	
	Object.defineProperties(module, {
        'container': {
            get: function () {
                return _container;
            }
        },
        'isInit': {
            get: function () {
                return _isInit;
            }
        },
        'isLoaded': {
            get: function () {
                return _isLoaded;
            }
        }
    });
	
	return module;
});

