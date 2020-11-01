<template>
  <v-simple-table>
    <template v-slot:default>
      <!--TABLA CABECERA  --> 
      <thead>
        <tr>
          <th class="text-left">
            Producto
          </th>
          <th class="text-left">
            Codigo
          </th>
           <th class="text-left">
            Stock   
          </th>
           <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>
      <!--TABLA CUERPO --> 
      <tbody>
        <tr
         
          v-for="item in Productos"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
import { mapState } from "vuex";

  export default {
      name: "Table",
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            stock: 10,
            precio: 2000
          },
        {
            name: 'Ice cream sandwich',
            calories: 237,
            stock: 10,
            precio: 2000
          },
{
            name: 'Cupcake',
            calories: 305,
             stock: 10,
            precio: 2000
          },
{
            name: 'KitKat',
            calories: 518,
             stock: 10,
            precio: 2000
          },
        ],
      };
    },
    computed: {
      ...mapState("Datos", ["Productos"])
    },
  }
</script>

<style>

</style>