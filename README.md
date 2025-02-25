<h1>Hotel Management Application</h1>
The <b>Hotel Management Application</b> is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to persons (staff) and menu items. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for both persons and menu items.

<h2>Endpoints</h2>

<h3>Persons</h3>

<ul>
  <li><b>Add a Person:</b>
    <ul>
      <li>Endpoint: POST /person</li>
      <li>Description: Adds a person to the system with details such as name, role, etc.
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Get All Persons:</b>
    <ul>
      <li>Endpoint:GET /person</li>
      <li>Description: Retrieves a list of all persons in the system.
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Get Persons by Work Type:</b>
    <ul>
      <li>Endpoint: GET /person/:workRole</li>
      <li>Description: Retrieves a list of persons based on their work type (e.g., chef, waiter, manager).
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Update a Person:</b>
    <ul>
      <li>Endpoint: PUT /person/:updateId</li>
      <li>Description: Updates the details of a specific person identified by their ID.
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Delete a Person:</b>
    <ul>
      <li>Endpoint: DELETE /person/:id</li>
      <li>Description:  Deletes a person from the system based on their ID.
      </li>
    </ul>
  </li>
</ul>

<h3>Menu Items</h3>

<ul>
  <li><b>Add a Menu Item:</b>
    <ul>
      <li>Endpoint: POST /menu</li>
      <li>Description: Adds a menu item to the system with details such as name, price, taste, etc.  
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Get All Menu Items:</b>
    <ul>
      <li>Endpoint: GET /menu</li>
      <li>Description: Retrieves a list of all menu items in the system.
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Get Menu Items by Taste:</b>
    <ul>
      <li>Endpoint: GET /menu/:tasteType</li>
      <li>Description: Retrieves a list of menu items based on their taste (e.g., sweet, spicy, sour).
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Update a Menu Item:</b>
    <ul>
      <li>Endpoint: PUT /menu/:id</li>
      <li>Description:  Updates the details of a specific menu item identified by its ID.
      </li>
    </ul>
  </li>
</ul>
<ul>
  <li><b>Delete a Menu Item:</b>
    <ul>
      <li>Endpoint: DELETE /menu/:id</li>
      <li>Description:  Deletes a menu item from the system based on its ID.
      </li>
    </ul>
  </li>
</ul>



<h2>Data Models</h2>

<h3>Person</h3>

The Person data model represents information about staff members in the hotel.


<ul>
  <li><b>Fields:</b>
    </br>
    <ul>
      <li>name: String(Person's name)</li>
      <li>age: Number (Person's age) </li>
      <li>work: Enum (Role in the hotel, such as chef, waiter, manager) </li>
      <li>mobile: String (Person's mobile number)</li>
      <li>email: String (Person's email address, unique) </li>
      <li>address: String (Person's address)</li>
      <li>salary: Number (Person's salary) </li>
    </ul>
  </li>
</ul>


 <li><b>Example:</b>
</br>
 {
  "name": "raufur mukit",
  "age": 26,
  "work": "manaer",
  "mobile": "123-456-7890",
  "email": "mukit@example.com",
  "address": "Dhaka",
  "salary": 30000
} 


<h3>Menu Item</h3>

The MenuItem data model represents information about menu items available in the hotel.


<ul>
  <li><b>Fields:</b>
    </br>
    <ul>
      <li>name: String (Item's name)
</li>
      <li>price: Number (Item's price)</li>
      <li>taste: Enum (Item's taste, such as sweet, spicy, sour) </li>
      <li>is_drink: Boolean (Indicates if the item is a drink, default is false)</li>
      <li>ingredients: Array of Strings (List of ingredients, default is an empty array) </li>
      <li>address: String (Person's address)</li>
      <li>sales: Number (Number of sales for the item, default is 0) </li>
    </ul>
  </li>
</ul>


 <li><b>Example:</b>
</br>
 {
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}

	
 







  



   
    

   

    
        


