var form11 = document.getElementById('addForm');            // submit and text khatir leleba    // add karta topup per
var itemList77 = document.getElementById('items11');        /// inside item "li" khatir


// Form submit event
form11.addEventListener('submit', addItem77);   // submit & click standar value haa // submit matlab jab hamni submit pe click karjai tab submit hojai


// Delete event
itemList77.addEventListener('click', removeItem33);   // click bi standard haa // jab click karjai tab delete hojai


// Add item
function addItem77(evv){
  evv.preventDefault();


  // Get input value
  var newItem55 = document.getElementById('shree').value;   // extra text add kare khari use hota 


  // Create new li element
  var li22 = document.createElement('li');      // extra text add karta "li" me

  // Add class
  li22.className = 'list-group-item';  // lining milawta box ke under likhta  // list-group-item -- box me likhta

  // Add text node with input value
  li22.appendChild(document.createTextNode(newItem55));      // naya text add karta

  // Create del button element
  var deleteBtn99 = document.createElement('buttonss');      //creating delet button // we can put anyting in place of "button"

  // Add classes to del button
  deleteBtn99.className = 'btn btn-danger btn-sm float-right delete11';      // distance me red color ke banawta   extra "Z"

  // Append text node
  deleteBtn99.appendChild(document.createTextNode('Z'));       // append karawta extra "Z" Sign  "li" me jawan hamni likhtanisan box me

  // Append button to li
  li22.appendChild(deleteBtn99);     // "li me append karta "Z"  

  // Append li to list
  itemList77.appendChild(li22);        //  append karawta "z"   // 
}

// Remove item
function removeItem33(ess){
  if(ess.target.classList.contains('delete11')){
   if(confirm('Are You Sure?'))    // puchta ki are you sure to delete // agar comment kardetani ta naa puchi direct delet hojai 
    {
      var ravi = ess.target.parentElement;
      itemList77.removeChild(ravi);
    }
  }
}
