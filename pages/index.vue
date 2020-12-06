<template >
  <div >
    <Section />
    <HaftaninFirsatlari />
    <Toplar />
    <Kartlar />
  </div>
</template>
<script>
import Section from "../components/Section";
import Toplar from "../components/Toplar";
import HaftaninFirsatlari from "../components/HaftaninFirsatlari";
import Kartlar from "../components/Kartlar";

export default {
  components: {
    Section,
    Toplar,
    HaftaninFirsatlari,
    Kartlar
  },
};
</script>





