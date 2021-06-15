import Vue from 'vue'
import App from './App.vue'
import "leaflet/dist/leaflet.css";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
import { LMap, LMarker,LPopup,LTileLayer, LIcon } from "vue2-leaflet";
import { Icon } from "leaflet"
import 'vue2-leaflet';
import 'vue2-leaflet-markercluster';
import 'leaflet.markercluster';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
< link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"/> 
/*<script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// 載入 css
// 載入 markercluster 並啟用
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)
// Map Marker circle
new Vue({
  render: h => h(App),
}).$mount('#app')

// 載入 vue2-leaflet，依照自己需要載入組件
// 載入 css
//import "leaflet/dist/leaflet.css";
// 啟用載入的各組件
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);

// 設定預設 icon
//import { Icon } from "leaflet";
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
