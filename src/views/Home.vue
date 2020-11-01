<template>
  <div class="home">
<v-container>
  <Table />
</v-container>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  name: 'Home',

  components: {
    Table,
  },

}
</script>
