<template>
  <div>
    <v-layout column>
    <v-flex xs6 offset-xs3>
        <song-details :song="song" />
      </v-flex> 
    </v-layout>

<v-layout class="mt-2 mb-10">
      <v-flex xs6 >
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>

   <!--  <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex> -->

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout> 
  </div>
</template>

<script>
import SongDetails from './SongDetails'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    Panel,
    SongDetails,
    YouTube,
    Lyrics
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
