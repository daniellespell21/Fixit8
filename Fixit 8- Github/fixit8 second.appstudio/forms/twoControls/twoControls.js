/*Uses 2 controls that haven't been used before, 
are interesting and not simplistic. A label is simplistic, for example.
Changes some properties of each control from the defaults. 
Do something visual and note what you changed for each control 
  in a label on your form (so I don't overlook it).
For example, if you make something blue, say so in the label 
  by it (ie. button background changed to blue)
Attach one event to each control, and write an event handler 
for each - you can just output a message using a simple popup like alert if you like.
*/
/*changed color to blue*/

let name= " "
Dropdown1.onclick= function(s){
name=inptname2.value
  if (typeof(s) == "Login"){
    return;
  }
  lblDropdownResponse.hidden= false
  lblDropdownResponse.textContent= (`${name} selected ${Dropdown1.selection}`)
}
Pagination1.onclick= function(p){
  if(typeof(s) =="Login") {
  return
  }
  lblPagination.hidden= false
  lblPafination.textContent = (`Page ${Pagination1.selection} selected!`)
}

/* changed background color of dropdown to purple, 
made the font italic
changed the font size to 45
*/
