<template>
  <div class="row flex justify-center">
    <div>
      <q-input
        outlined
        v-model="state.text"
        label="Enter a city or a coworking space..."
        class="col-12 items-center q-mt-lg q-mb-md"
        hide-bottom-space
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <div style="height: 550px; width: 1000px">
        <GMapMap :center="center" :zoom="4" map-type-id="terrain">
          <GMapCluster
            :zoomOnClick="true"
            :styles="[
              {
                textColor: 'black',
                url: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/37c2a570c318122df57b83140f5f54665b9359e5/packages/markerclustererplus/images/m1.png',
                height: 52,
                width: 53,
              },
            ]"
          >
            <GMapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              :icon="m.icon"
              @click="fullWidth = true"
            />
          </GMapCluster>
        </GMapMap>
      </div>
    </div>
  </div>
  <q-dialog v-model="fullWidth">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6 text-center">Imaguru Startup & Coworking space</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-img
          src="https://thumb.tildacdn.com/tild3234-3538-4765-b262-373235336538/-/format/webp/ezgif-4-aaed26e17752.png"
          fit="cover"
          style="max-width: 1000px; height: 400px"
        >
        </q-img>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Join Imaguru Coworking community!</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Becoming a resident means becoming a part of Imaguru community. We
        provide access to our public and closed community events, offer
        mentorship and matchmaking services that help to grow you business!
        Coworking <br /><br />Imaguru Coworking is available for individuals and
        teams for any period: hour, day, month. You may have a separate office
        for your team on an ongoing basis. Our price includes everything: space,
        WiFi, tea, coffee, cookies, utilities and inspiration.
      </q-card-section>
      <q-card-section class="justify-center text-center">
        <q-btn
          color="primary"
          class="text-center"
          label="Join the community"
          @click="$router.push(`/contacts`)"
      /></q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="Close" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { fabGoogle } from "@quasar/extras/fontawesome-v6";
import { reactive, computed, ref } from "vue";
import { ContactItem } from "components/ContactItem";
import { useRouter } from "vue-router";
const clusterIconer = require("assets/galimaiGeresnisIconas.png");
const center = { lat: 51.093048, lng: 6.84212 };
function clicked() {
  window.alert("Sveikas imaguru");
}
let tab = "all";
const size = ref({ width: "200px", height: "200px" });

function openContacts() {
  const router = useRouter();
  router.push("/contacts");
}

const contacts_list = [
  {
    name: "Pratik Patel",
    position: "Developer",
    avatar: "https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",
    email: "pratikpatelpp802@gmail.com",
    company_email: "pratikpatelpp802@gmail.com",
    website: "www.test.com",
    phone: "+9910101010",
    secondary_phone: "+9910101010",
    address: "BB 101 Om Sai Residency Palsana",
  },
  {
    name: "Razvan Stoenescu",
    position: "Developer",
    avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
    email: "mailto:razvan@quasar.dev",
    company_email: "mailto:razvan@quasar.dev",
    website: "https://github.com/rstoenescu",
    phone: "+1-004-658-0042",
    secondary_phone: "(331) 009-4655 x3147",
    address: "92290 Lisa Cove",
  },
  {
    name: "Jeff Galbraith",
    position: "Developer",
    avatar: "https://cdn.quasar.dev/team/jeff_galbraith.jpg",
    email: "mailto:jeff@quasar.dev",
    company_email: "mailto:jeff@quasar.dev",
    website: "http://jeffgalbraith.dev/",
    phone: "175.718.4633 x878",
    secondary_phone: "175.718.4633 x878",
    address: "Calgary, Canada",
  },
  {
    name: "Brunhilde Panswick",
    position: "Administrator",
    avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
    email: "test.@quasar.dev",
    company_email: "test.@quasar.dev",
    website: "http://test1.dev/",
    phone: "175.718.4633 x878",
    secondary_phone: "175.718.4633 x878",
    address: "Calgary, Canada",
  },
  {
    name: "Winfield Stapforth",
    position: "Administrator",
    avatar: "https://cdn.quasar.dev/img/avatar6.jpg",
    email: "test2.@quasar.dev",
    company_email: "test.@quasar.dev",
    website: "http://test2.dev/",
    phone: "175.718.4633 x878",
    secondary_phone: "175.718.4633 x878",
    address: "Calgary, Canada",
  },
];

let fullWidth = ref(false);
const markers = [
  {
    position: {
      lat: 54.676294,
      lng: 25.26492,
    },
    icon: {
      url: `https://coworkingmap.org/wp-content/uploads/2020/09/logo-imaguru-200x200.png`,
      scaledSize: { width: 70, height: 70 },
      labelOrigin: { x: 16, y: -10 },
    },
  },
  {
    position: {
      lat: 54.687539271,
      lng: 25.28180028,
    },
    icon: {
      url: `https://scontent.fvno1-1.fna.fbcdn.net/v/t1.18169-9/12743808_963621110396034_7554247755088249135_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1_gwiL9cCkMAX9fMtwD&_nc_ht=scontent.fvno1-1.fna&oh=00_AT_Yb2tg-pz19WPLWn7cZMxL285ZJ_8aKzZN2cgCm1Jxew&oe=6330C13A`,
      scaledSize: { width: 70, height: 70 },
      labelOrigin: { x: 16, y: -10 },
    },
  },
];
let state = reactive({
  text: "Europe",
});

const mapsLink = computed(() => {
  return (
    `https://www.google.com/maps/embed/v1/place?key=AIzaSyCPSR7r14Qwinlw9fKuukjEo4cEv7VaJFY
    &q=" "` + state.text
  );
});

//If geolocation would be used:
// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position.coords.latitude, position.coords.longitude);
// });
</script>

<style scoped>
.example {
  color: red;
}

#map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: red;
}

.blurry-text {
  color: transparent;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

#gaidys {
  background: #eee;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  -moz-border-radius: 10px 0 0 10px;
  -webkit-border-radius: 10px 0 0 10px;
  -o-border-radius: 10px 0 0 10px;
  border: 0 none;
  width: 160px;
}
</style>
