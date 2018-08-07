const database = firebase.database().ref();
database.on('child_added', displayMessageOnBoard);

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    const userData = {
        Name: username,
        Message: message
    };

    console.log(userData.Name + " : " + userData.Message);
    database.push(userData);
    //Update database here

}

// Set database "child_added" event listener here

function displayMessageOnBoard(rowData) {
    const row = rowData.val();  //Val returns an object, reads the value of that row
    console.log(row);
    const name = document.createTextNode(row.Name + ': ');
    const newLine = document.createElement('br');
    const message = document.createTextNode(row.Message);
    const messageBox = document.querySelector('.allMessages');
    messageBox.appendChild(newLine);
    messageBox.appendChild(name);
    messageBox.appendChild(message);
}