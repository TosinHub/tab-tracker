<template>
 <v-layout column>
     <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <v-btn
          slot="create song"
          @click="navigateTo({name: 'create-songs'})"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab><v-icon>add</v-icon></v-btn>
            <div class="song" v-for="song in songs" :key="song.id">
              <v-layout>
                <v-flex xs6>
                  <div class="song-title">{{song.title}}</div>
                  <div class="song-artist">{{song.artist}}</div>
                  <div class="song-genre">{{song.genre}}</div>
                <v-btn class="cyan" @click="navigateTo({
                   name: 'ViewSong',
                   params: {
                     songId: song.id
                   }
                 })" dark>View Song</v-btn>
                </v-flex>
                <v-flex xs6><img class="image" :src="song.albumImageUrl"/></v-flex>
              </v-layout>
            </div>
        </panel>
     </v-flex>
 </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
      // do a request to the server
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .song {
  overflow: hidden;
}

.song-title{
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
 .image{
  width: 70%;
  margin: 0 auto;
}


</style>
