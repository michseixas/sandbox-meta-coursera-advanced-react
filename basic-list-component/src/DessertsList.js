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