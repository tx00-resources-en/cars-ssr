# Hybrid SSR/API 


### Setup: Run the Server
   - To install all dependencies:
     ```bash
     npm install
     ```
   - Then, start the server with the `dev` script:
     ```bash
     npm run dev
	 ```

- Usage Instructions
  - **`/` Route**: Accessing the root URL (http://localhost:4000/) renders the `index.ejs` template with the title "Home Page."
  - **`/contact` Route**: Accessing http://localhost:4000/contact renders the `contact.ejs` template with the title "Contact Us."


---
## 1. Code Breakdown

In `app.js`:
```javascript
const ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact US" });
});
```


#### Part 1
```javascript
const ejs = require("ejs");
```

- **Purpose**: This line imports the EJS module, which is a templating engine that allows to embed JavaScript code within HTML. It’s used to dynamically generate HTML content with variables or conditions in `.ejs` template files.

```javascript
app.set("view engine", "ejs");
```
- **Purpose**: By setting EJS as the "view engine," Express knows to render `.ejs` files located in the `views` folder whenever `res.render()` is called. 


#### Part 2

```javascript
app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});
```

- **Purpose**: To render the home page dynamically with the title "Home Page."
- **`res.render("index", { title: "Home Page" })`**:
  - `res.render()` is used to render an HTML page (from an `.ejs` file) and send it to the client.
  - **`"index"`** refers to the `index.ejs` file in the `views` directory. Express uses this file to render the home page.
  - **`{ title: "Home Page" }`** is an object containing data passed into the `index.ejs` template. In this case, it includes a `title` variable with the value `"Home Page"`, which will be accessible within the `index.ejs` file for display or other logic.

#### Part 3

```javascript
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact US" });
});
```

- **Purpose**: To render the contact page dynamically with the title "Contact US."
- **`app.get("/contact")`**: This sets up a route handler for the `/contact` URL (e.g., `http://localhost:4000/contact`).
- **`res.render("contact", { title: "Contact US" })`**:
  - This renders the `contact.ejs` template in the `views` folder, sending it to the client.
  - The object `{ title: "Contact US" }` passes data to the `contact.ejs` template, making the `title` variable available within the template with the value `"Contact US"`.


- Recap
  - The SSR routes render HTML views using the EJS template engine.
  - Pages served by SSR include the **home page** (`/`) and the **contact page** (`/contact`).
  - **Note**: The `views` directory contains `index.ejs` and `contact.ejs` files, as well as `partials` directory

---

### 2. API Route (`/api/v1/cars`)

In `app.js`:
```javascript
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/api/v1/cars', carRouter); // Routes starting with '/api/v1/cars' are handled by carRouter
```

- The API routes are used for handling JSON data requests.- This part of the application is set up under the path **`/api/v1/cars`** and handles all related API requests.
- **`GET /api/v1/cars`**: Sends a GET request to retrieve the list of cars. (http://localhost:4000/api/v1/cars)
- **`POST /api/v1/cars`**: Sends a POST request with a JSON body to create a new car entry.
  - Example Request Body:
    ```json
    {
      "make": "Toyota",
      "model": "Camry",
      "year": 2020
    }
    ```
  - **Response**: A success message with the newly created car data.
