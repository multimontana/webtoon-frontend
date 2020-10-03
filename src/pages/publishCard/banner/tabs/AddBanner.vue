<template>
    <section class="proizvedeniya-sec">
        <div class="proizvedeniya-block">
            <div class="avatar-keeper">
                <div class="form-element">
                    <label for="avatar">Обложка</label>
                    <div class="form-avatar">
                        <div class="image-keeper">
                            <img alt="" ref="banner_background" />
                        </div>
                        <button class="button-keeper">
                            <div class="btn-light avatar-button">
                                <input type="file" class="banner_img_input" @change="onFileChange($event,'background')" />
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
                <label for="">Баннер</label>
                <div class="form-banner">
                    <div class="image-keeper">
                        <img ref="banner_image" />
                    </div>
                    <button class="button-keeper">
                        <input type="file" class="banner_img_input" @change="onFileChange($event,'banner')" />
                        <div class="btn-light banner-button">
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
                <div class="form-element">
                    <label for="name">Название</label>
                    <input type="text" id="name" placeholder="Название" v-model="banner.name" />
                </div>
                <div class="form-element">
                    <label for="about">Описание</label>
                    <textarea name="form-textarea" id="about" placeholder="Описание" v-model="banner.description"></textarea>
                </div>
                <div class="form-element form-selects">
                    <div class="custom-select">
                        <label>Основной жанр</label>
                        <v-select v-model="banner.category" label="name" :options="category_options" :reduce="name => name.id"/>
                    </div>
                    <div class="custom-select">
                        <label>Жанр 2</label>
                        <v-select v-model="banner.category1" label="name" :options="category_options" :reduce="name => name.id"/>
                    </div>
                    <div class="custom-select">
                        <label>Жанр 3</label>
                        <v-select v-model="banner.category2" label="name" :options="category_options" :reduce="name => name.id"/>

                    </div>
                </div>

                <div class="form-element form-selects">
                    <div class="custom-select">
                        <label>Состояние</label>
                        <v-select v-model="banner.category2" :options="[]"/>
                    </div>
                    <div class="custom-select">
                        <label>Язык оригинала</label>
                        <v-select v-model="banner.language" :options="language_options"/>
                    </div>
                </div>
                <div class="form-element form-checkbox">
                    <label>Гаранитрую, что это оригинал</label>
                    <input type="checkbox" v-model="garanture" />
                </div>
                <div class="form-element form-checkbox" >
                    <label>Я согласен с <a href="">соглашением по регистрации и публикации правилам</a></label>
                    <input type="checkbox" v-model="accept_conditions" />
                </div>
                <div class="button-keeper">
                    <button @click="createPost()" class="btn-green submit-button" type="submit" :style="garanture == '' || accept_conditions == '' ? 'opacity:0.5': ''" :disabled="garanture == '' || accept_conditions == ''">
                        Создать
                    </button>
                    <button class="btn-light cancel-button" @click="goBack()">
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'AddBanner',
  data() {
    return {
      banner: {
        name: '',
        image: '',
        background: '',
        category: '',
        category1: '',
        category2: '',
        language: '',
      },
      garanture: '',
      accept_conditions: '',
      category_options: [],
      language_options: ['EN', 'RU'],
    };
  },
  computed: {
    ...mapGetters(['getAuthToken']),
  },
  methods: {
    ...mapActions(['getCategoriesAction', 'createPostAction']),
    onFileChange(e, type) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) { return; }
      this.createImage(files[0], type);
    },
    createImage(file, type) {
      const reader = new FileReader();
      const vm = this;
      reader.onload = (e) => {
        if (type === 'background') {
          this.banner.background = file;
          vm.$refs.banner_background.src = e.target.result;
        } else {
          this.banner.image = file;
          vm.$refs.banner_image.src = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    },
    goBack() {
      this.$router.push({
        path: '/',
      });
    },
    createPost() {
      this.createPostAction({ banner: this.banner, token: this.getAuthToken }).then((res) => {
        if (res && !res.error) {
          console.log('aaa');
          this.$emit('bannerAdded');
        }
      });
    },
  },
  created() {
    this.getCategoriesAction({
      token: this.getAuthToken, language_id: 1, page: 1, limit: 10,
    }).then((res) => {
      this.category_options = res.results;
    });
  },
};
</script>

<style scoped>
    @import "tabs.css";
</style>
