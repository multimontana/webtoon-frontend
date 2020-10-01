<template>
    <div>
        <AuthorMainSection/>
        <AuthorSliderSection/>
    </div>
</template>

<script>
import AuthorMainSection from '../../components/organizms/authorMainSection/AuthorMainSection'
import AuthorSliderSection from '../../components/organizms/authorSliderSection/AuthorSliderSection'

export default {
  name: 'Author',
  components: { AuthorSliderSection, AuthorMainSection }
}
</script>

<style scoped>

</style>
