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




  



   
    

   

    
        


