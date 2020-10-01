<template>
<div>
    <section class="episodes-sec">
        <div class="episode_block">
            <div class="avatar-keeper">
                <div class="form-element">
                    <label for="">Превью</label>
                    <div class="form-avatar">
                        <div class="image-keeper">
                            <img alt="" ref="episode_background">
                        </div>
                        <button class="button-keeper">
                            <div class="btn-light avatar-button">
                                <input type="file" class="banner_img_input" @change="onFileChange($event,'background')">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="1.6" rx="0.8" transform="matrix(0 1 1 0 7.2 2)" fill="#2E2E2E" />
                                    <rect x="2" y="7.19922" width="12" height="1.6" rx="0.8" fill="#2E2E2E" />
                                </svg>
                            </div>
                        </button>
                        <span class="avatar-limits">
                            Текст описание требований к изображению Текст описание требований
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-keeper">
                <div class="form-element">
                    <label for="name">Название эпизода</label>
                    <input type="text" id="name" placeholder="1. Название эпизода" v-model="episode.name">
                </div>
                <div class="form-element">
                    <label for="">Загрузить файлы</label>
                    <div class="form-banner">
                        <div class="image-keeper">
                            <img alt="" ref="image_list">
                        </div>
                        <button class="button-keeper">
                            <div class="btn-light banner-button">
                                <input type="file" class="banner_img_input" @change="onFileChange($event,'images')" multiple>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="12" height="1.6" rx="0.8" transform="matrix(0 1 1 0 7.2 2)" fill="#2E2E2E" />
                                    <rect x="2" y="7.19922" width="12" height="1.6" rx="0.8" fill="#2E2E2E" />
                                </svg>
                            </div>
                        </button>
                        <span class="banner-limits">
                            Текст описание требований к изображению Текст описание требований
                        </span>
                    </div>
                    <div class="page-keeper">
                        <div class="page" v-for="(image,index) in episode.images" v-bind:key="index">
                            <svg class='delete-page' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="removeImage(index)">
                                <rect width="24" height="24" rx="12" fill="#2E2E2E"/>
                                <rect width="12" height="1.6" rx="0.8" transform="matrix(0.707107 0.707107 0.707107 -0.707107 7.19141 8.12109)" fill="white"/>
                                <rect x="7.19141" y="15.4766" width="12" height="1.6" rx="0.8" transform="rotate(-45 7.19141 15.4766)" fill="white"/>
                            </svg>
                            <img :src="image.src" alt="">
                            <h6 class="page-title">Повелитель хроноса</h6>
                            <span class="page-size">1,2 мб</span>
                        </div>
                    </div>
                </div>
                <div class="button-keeper">
                    <button class="btn-green submit-button" type="submit" @click="createEpisode">
                        Создать
                    </button>
                    <button class="btn-light preview-button">
                        Черновик
                    </button>
                    <button class="btn-light cancel-button" @click="goBack">
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddEpisode',
  data () {
    return {
      episode: {
        name: '',
        images: [],
        background: '',
        serias_id: 1
      }
    }
  },
  computed: {
    ...mapGetters(['getAuthToken'])
  },
  methods: {
    ...mapActions(['createEpisodeAction']),
    showTab (tab, tabHide) {
      this[tab] = true
      this[tabHide] = false
    },
    removeImage (index) {
      this.episode.images.splice(index, 1)
    },
    onFileChange (e, type) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      if (type === 'background') {
        this.createImage(files[0], type)
      } else {
        for (let i = 0; i < files.length; i++) {
          this.createImage(files[i], type)
        }
      }
    },
    createImage (file, type) {
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        if (type === 'background') {
          vm.episode.background = file
          vm.$refs.episode_background.src = e.target.result
        } else {
          vm.episode.images.push({ src: e.target.result, file: file })
        }
      }
      reader.readAsDataURL(file)
    },
    goBack () {
      this.$router.push({
        path: '/'
      })
    },
    createEpisode () {
      this.createEpisodeAction({ episode: this.episode, token: this.getAuthToken }).then(res => {
        if (res && !res.error) {
          this.$emit('episodeAdded')
        }
      })
    }
  }
}
</script>

<style scoped>
@import "tabs.css";
</style>
