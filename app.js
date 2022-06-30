let id=0;

function addItem(){
    id++;
    // This gets the value from the input field 
    let item = document.getElementById('item').value;
    displayItem(item);
    document.getElementById('item').value = ''; // Clears the value from the input field
}
function deleteItem(id){
    document.getElementById(id).remove();
}
function displayItem(itemName){
    if(itemName != ''){
        document.getElementById('item-list').innerHTML += `
        <div id="${id}"> 
            <div class="item-list">
                <div><i class="fa-solid fa-check"></i></div>
                <button class="delete" onClick="deleteItem(${id})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <div>
                <p>${itemName}</p>
            </div>
            <hr style="height:1px;border-width:0;color:gray;background-color:gray">
        </div>
        `;
    }
    else{
        alert('Please enter a item name');   
    }
}