// function DessertsList(props) {
//     const array1 = props.data.filter((dessert) => dessert.calories < 500);
//     const array2 = array1.sort((a, b) =>  parseFloat(a.calories) - parseFloat(b.calories));

//     const listItems =  array2.map(dessert => {
//       const itemText = `${dessert.name} - ${dessert.calories} cal`
//       return <li>{itemText}</li>
//     })
//     return <ul>
//       {listItems}
//     </ul>
//   }
  
//   export default DessertsList;
  


//   ============================

// BEST SOLUTION:

function DessertsList(props) {

    const listItems =  props.data
    .filter((dessert) => dessert.calories < 500)
    .sort ((a, b) =>  a.calories - b.calories)    
    .map(dessert => {
      const itemText = `${dessert.name} - ${dessert.calories} cal`
      return <li>{itemText}</li>
    })
    return <ul>
      {listItems}
    </ul>
  }

  export default DessertsList;


  // ======================== Extra exercise
  // const topDesserts = [
//   {
//       id: "1",
//       title: "Tiramisu",
//       description: "The best tiramisu in town",
//       image: "https://picsum.photos/200/300/?random",
//       price: "$5.00",
//   },
//   {
//       id: "2",
//       title: "Tarta de crema",
//       description: "Deliciosamente cremosa",
//       image: "https://picsum.photos/200/300/?random",
//       price: "$7.00",
//   },
//   {
//       id: "3",
//       title: "Paçocas",
//       description: "Paçoca es paçoca",
//       image: "https://picsum.photos/200/300/?random",
//       price: "$3.00",
//   },
// ];


// function App () {
//   const listItems = topDesserts.map(dessert => {
//       const itemText = `${dessert.title} - ${dessert.price}`
//       return <li>{itemText}</li>
//   })
//   return (
//       <div>
//           <ul>
//               {listItems}
//           </ul>
//       </div>

//   )
// }

// export default App;