<template>
  <product-form 
     @save-product="addProduct"
    :model="model" 
    :manufacturers="manufacturers">
  </product-form>
</template>

<script>
  import ProductFrom from '@/components/product/ProductForm.vue'
  export default {
    /*
    data () {
      return {
        model: {},
        manufacturers: [
          {
            _id: 'sam',
            name: 'Samsung',
          },
          {
            _id: 'apple',
            name: 'Apple',
          },
        ],
      }
    },
    */
    computed: {
      manufacturers () {
        return this.$store.getters.allManufacturers
      },
      model () {
        return {};
      }
    },
    methods: {
      addProduct (model) {
        console.log('model', model);
        this.$store.dispatch('addProduct', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>