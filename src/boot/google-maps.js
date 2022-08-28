import { boot } from "quasar/wrappers";
import VueGoogleMaps from "@fawmi/vue-google-maps";

export default boot(({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCPSR7r14Qwinlw9fKuukjEo4cEv7VaJFY",
      libraries: "places",
    },
  });
});
