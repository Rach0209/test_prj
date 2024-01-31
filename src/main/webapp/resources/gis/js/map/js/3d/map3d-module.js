window.map3d = window.map3d || {};
// 엔진 파일 로드
(function() {
 	var tm = (new Date()).getTime();	// 캐싱 방지	
	const cdn = {
		file1 : "https://cdn.xdworld.kr/latest/XDWorldEM.asm.js?tm="+tm,
		file2 : "https://cdn.xdworld.kr/latest/XDWorldEM.html.mem?tm="+tm,
		file3 : "https://cdn.xdworld.kr/latest/XDWorldEM.js?tm="+tm 
	}
//	var filePath = "/resources/gis/js/map/engine/";
   // 1. XDWorldEM.asm.js 파일 로드
//   var file = filePath + "XDWorldEM.asm.js";
	var file = cdn.file1;
   var xhr = new XMLHttpRequest();
   xhr.open('GET', file, true);
   xhr.onload = function() {
	
      var script = document.createElement('script');
      script.innerHTML = xhr.responseText;
      document.body.appendChild(script);
		
      // 2. XDWorldEM.html.mem 파일 로드
      setTimeout(function() {
         (function() {
//            var memoryInitializer = filePath + "XDWorldEM.html.mem";
            var memoryInitializer = cdn.file2;
            var xhr = Module['memoryInitializerRequest'] = new XMLHttpRequest();
            xhr.open('GET', memoryInitializer, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload =  function(){
						
               // 3. XDWorldEM.js 파일 로드
//               var url = filePath + "XDWorldEM.js";
               var url = cdn.file3;
               var xhr = new XMLHttpRequest();
               xhr.open('GET',url , true);
               xhr.onload = function(){
                  var script = document.createElement('script');
                  script.innerHTML = xhr.responseText;
                  document.body.appendChild(script);
               };
               xhr.send(null);
            }
            xhr.send(null);
         })();
         }, 1);
      };
      xhr.send(null);
   }
)();

function init() {
	const vwordURL = "https://xdworld.vworld.kr";
	
	Module.initialize({
		container: document.getElementById("map3D"),
		terrain : {
			dem : {
				url : vwordURL,
				name : "dem",
				servername : "XDServer3d",
				encoding : true
			},
			image : {
				url : vwordURL,
				name : "tile",
				servername : "XDServer3d"
			},
		},
		defaultKey : "ezbBD(h2eFCmDQFQd9QpdzDS#zJRdJDm4!Epe(a2EzcbEzb2"
	});
	
	Module.getTileLayerList().createXDServerLayer({
		url : vwordURL,
		servername : "XDServer3d",
		name : "facility_build",
		type : 9,
		minLevel : 0,
		maxLevel : 15
	});
}

/**
 * 전역 변수 - 모듈, 레이어관리
 * 엔진 파일 로드 후 Module postRun
 */
var Module = {
	TOTAL_MEMORY: 256*1024*1024,
	postRun: [init]
};
var userLayerList;
var serviceLayerList;