<template>
<div>
    <ReaderContentSection/>
    <ShareEpisode/>
    <CommentsBlockSection/>
</div>
</template>
<script>
import CommentsBlockSection from '../../components/organizms/commentsBlockSection/CommentsBlockSection'
import ShareEpisode from '../../components/organizms/shareEpisode/ShareEpisode'
import ReaderContentSection from '../../components/organizms/readerContentetSection/ReaderContentSection'
export default {
  name: 'Reader',
  components: { ReaderContentSection, ShareEpisode, CommentsBlockSection }
}
</script>

<style scoped>

</style>
