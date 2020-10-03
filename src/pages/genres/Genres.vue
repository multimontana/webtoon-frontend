<template>
    <div>
        <GenreMainSection/>
        <SectionGenreContainer/>
    </div>
</template>

<script>
import GenreMainSection from '../../components/organizms/genreMainSection/GenreMainSection'
import SectionGenreContainer from '../../components/organizms/sectionGenreContainer/SectionGenreContainer'

export default {
  name: 'genres',
  components: { SectionGenreContainer, GenreMainSection }
}
</script>

<style>

</style>
