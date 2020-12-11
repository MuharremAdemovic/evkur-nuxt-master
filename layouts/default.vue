<template >
  <div >
    <TheNavbar />
    <Musteri />
    <Evkur />
    <AppBar />
    
    <Nuxt />
    <BottomBar /> 
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar"
import Evkur from "@/components/Evkur"
import Musteri from "@/components/Musteri"
import AppBar from "@/components/AppBar"
import BottomBar from "@/components/BottomBar"

export default {
  components:{
    TheNavbar,
    Evkur,
    Musteri,
    AppBar,
    BottomBar,
  
  }

}
</script>

