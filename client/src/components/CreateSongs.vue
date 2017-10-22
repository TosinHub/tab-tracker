<template>
 <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">        
    <v-text-field label="Title" required
    :rules="[required]" v-model="song.title"></v-text-field>
    
    <v-text-field label="Artist" required
    :rules="[required]" v-model="song.artist"></v-text-field>
    <v-text-field label="Genre" required :rules="[required]" v-model="song.genre"></v-text-field>
    <v-text-field label="Album" required :rules="[required]" v-model="song.album"></v-text-field>
    <v-text-field label="Album Image Url" required :rules="[required]" v-model="song.albumImageUrl"></v-text-field>
    <v-text-field label="You Tube Id" required :rules="[required]" v-model="song.youtubeId"></v-text-field>    
   <!--  <div class="error" v-html="error" ></div>    -->
      </panel>
    </v-flex>
    <v-flex xs6>
      <panel title="Song Structure" required:rules="[required]" class="ml-4">
    <v-text-field label="Lyrics" required:rules="[required]" v-model="song.lyrics" multi-line></v-text-field>
    <v-text-field label="Tab" required:rules="[required]" v-model="song.tab" multi-line></v-text-field>
      </panel>
      <div v-if="error" class="error">
       <v-alert color="error" icon="warning" value="true">
            {{error}}
    </v-alert>
  </div>
     <v-btn class="cyan" dark @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      const requiredFiled = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!requiredFiled) {
        this.error = 'Please fill in all required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
