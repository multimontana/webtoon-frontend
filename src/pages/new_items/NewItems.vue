<template>
   <div>
       <NewItemMainSection/>
       <NewItemCardKeeper/>
       <hr>
       <LastUpdates/>
   </div>
</template>
<script>
import NewItemMainSection from '../../components/organizms/newItemMainSection/NewItemMainSection'
import LastUpdates from '../../components/organizms/lastUpdates/LastUpdates'
import NewItemCardKeeper from '../../components/organizms/newItemCardKeeper/NewItemCardKeeper'
export default {
  name: 'NewItems',
  components: { NewItemCardKeeper, LastUpdates, NewItemMainSection }
}
</script>
