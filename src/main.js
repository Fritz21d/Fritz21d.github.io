import Vue from 'vue'
import App from './App.vue'
import "leaflet/dist/leaflet.css";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
import { LMap, LMarker,LPopup,LTileLayer, LIcon } from "vue2-leaflet";
import { Icon } from "leaflet"
import 'vue2-leaflet-markercluster';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import { OpenStreetMapProvider,GeoSearchControl } from 'leaflet-geosearch';
< link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"/> 




Vue.config.productionTip = false
import L from 'leaflet';

const provider = new OpenStreetMapProvider();

const searchControl = new GeoSearchControl({
  provider: provider,
});
const map = new L.Map('map');
map.addControl(searchControl);

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)
// Map Marker circle
new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}) .$mount("#app");  
