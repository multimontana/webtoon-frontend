<template>
    <section class="page__main-sec">
        <div class="author-keeper">
            <AuthorInfo/>
            <AuthorDesc/>
        </div>
    </section>
</template>

<script>
import AuthorDesc from '../../molecules/authorDesc/AuthorDesc'
import AuthorInfo from '../../molecules/authorInfo/AuthorInfo'

export default {
  name: 'AuthorMainSection',
  components: { AuthorInfo, AuthorDesc }
}
</script>

<style>
    @import 'authorMainSection.css';
</style>
