<template>
  <div>
    <HomeMainSection/>
    <SignIn/>
    <Login/>
    <Registration/>
    <MainCartKeeper :sliderData="sliderItems" :show="true"/>
    <hr>
    <UploadtoRead/>
    <hr>
    <Updates/>
    <hr>
    <UploadBlock/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import HomeMainSection from '../../components/organizms/homeMainSection/HomeMainSection';
import SignIn from '../../components/organizms/sign_in/Sign_in';
import Login from '../../components/organizms/login/Login';
import Registration from '../../components/organizms/registration/Registration';
import UploadtoRead from '../../components/organizms/uploadToRead/UploadtoRead';
import MainCartKeeper from '../../components/organizms/mainCartKeeper/MainCartKeeper';
import Updates from '../../components/molecules/updatesList/UpdatesList';
import UploadBlock from '../../components/organizms/uploadBlock/UploadBlock';

export default {
  name: 'Home',
  components: {
    UploadBlock, Updates, MainCartKeeper, UploadtoRead, Registration, Login, SignIn, HomeMainSection,
  },
  data() {
    return {
      sliderItems: [{ label: 'a' }, { label: 'b' }],
      data: {
        language_id: 1,
        page: 1,
        limit: 100,
      },
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    ...mapActions(['getCategoriesAction']),
    getCategories() {
      this.getCategoriesAction(this.data).then((res) => {
        if (res && res !== undefined) {
          console.log(res, 'response');
        }
      });
    },
  },
};
</script>

<style>

</style>
