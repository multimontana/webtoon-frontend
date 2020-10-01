<template>
    <section class="comments-block container">
        <CommentsKeeper/>
        <RecommandedCarts/>
        </section>
</template>

<script>
import RecommandedCarts from '../../molecules/recommandedCarts/RecommandedCarts'
import CommentsKeeper from '../../molecules/commentsKeeper/CommentsKeeper'
export default {
  name: 'CommentsBlockSection',
  components: { CommentsKeeper, RecommandedCarts }
}
</script>

<style>
    @import 'commentsBlockSection.css';

</style>
