<template>
<div>
    <TranslatorsMainSection/>
    <TranslatorsKeeper/>
</div>
</template>

<script>
import TranslatorsKeeper from '../../components/organizms/translatorsKeeper/TranslatorsKeeper'
import TranslatorsMainSection from '../../components/organizms/translatorsMainSection/TranslatorsMainSection'
export default {
  name: 'Translators',
  components: { TranslatorsMainSection, TranslatorsKeeper }
}
</script>

<style scoped>

</style>
