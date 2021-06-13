<template>
  <div id="app">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.71/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"/>
<link rel="stylesheet"  href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"/>

</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      // 模擬資料
      data: [
        { id: 1, name: "夢時代購物中心", local: [22.595153, 120.306923]},
        { id: 2, name: "漢神百貨", local: [22.61942, 120.296386] },
        { id: 3, name: "漢神巨蛋", local: [22.669603, 120.302288] },
        { id: 4, name: "大統百貨", local: [22.630748, 120.318033] }
      ],
      zoom: 20,
      center: [22.61942, 120.296386],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: false
      },
      icon: {
        type: {
          black:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
          gold:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png"
        },
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }
    };
  },
 
  mounted() {
    // 等地圖創建後執行
    this.$nextTick(() => {
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition(position => {
        const p = position.coords;
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude];
        // 將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObject.openPopup();
      });
    });
  }
};
</script>

<style>
  html,body {
    padding: 0;
    margin: 0;
  }
</style>

<script>
export default {
  name: 'App',
  components: {
  },
};

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
</style>
</script>











