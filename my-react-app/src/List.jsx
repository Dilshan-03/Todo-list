import { useLayoutEffect } from "react";

function List(){
   const names=[{firstName:"dilshan",calories:15},{firstName:"doslin", calories:45},{firstName:"sagayam", calories:17},{firstName:"dolu",calories:47},{firstName:"bholu",calories:25}];
  /*names.sort((a,b) => a.firstName.localeCompare(b.firstName))
   names.sort((a,b) => b.firstName.localeCompare(a.firstName))
   names.sort((a,b) => a.calories - b.calories)
   names.sort((a,b) => b.calories - a.calories)*/
   //const newNames=names.filter(name => name.calories < 30)

   const l_names=names.map(name => <li> {name.firstName}: &nbsp;{name.calories}</li>)
   return (<ol>{l_names}</ol>)
}
export default List