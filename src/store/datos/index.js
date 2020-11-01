import firebase from 'firebase';

export default {
 namespaced: true,
  state: {
Productos : [
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
]

  },
  getters: {

  },
  mutations: {

  },
  actions: {
      //promesa 
   async get_data(){
    const baseDatos = await firebase.firestore().collection("productos").get();
    console.log(baseDatos)
   }
  },
};
