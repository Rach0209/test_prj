/**
 * openLayers - 2d map 적용
 */

const map = new ol.Map({
	target: 'map2D',
	layers: [
		new ol.layer.Tile({
		source: new ol.source.OSM(),
		}),
	],
	interactions: ol.interaction.defaults.defaults(),
	controls: [],
	view: new ol.View({
    center: [0, 0],
    zoom: 2,
	minZoom: 2,
	maxZoom: 19,
	contrainResolution: true
  })
});