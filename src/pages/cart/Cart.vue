<template>
<div>
    <CartMainSection/>
    <SimilarJobs/>
</div>
</template>

<script>
import CartMainSection from '../../components/organizms/cartMainSection/CartMainSection'
import SimilarJobs from '../../components/organizms/similarJobs/SimilarJobs'
export default {
  name: 'Card',
  components: { SimilarJobs, CartMainSection }
}
</script>
<style>

</style>
