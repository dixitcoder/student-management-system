<template>
  <div>
    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <!-- Content of the side page goes here -->
      <v-list>
        <v-list-item v-for="product in products" :key="product.id" @click="handleItemClick(product)">
          <v-list-item-title>{{ product.id }}: {{ product.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main>
      <v-container fluid>
        <!-- Your main content goes here -->
        <a style="color:black" href="#" class="list-group-item list-group-item-action" ></a>
      </v-container>
      <v-app>
      <!-- Navigation bar -->
      <v-app-bar  app color="primary">
    <v-toolbar-title @click.prevent="toggleDrawer">Guides  Computer programming - JavaScript and the web</v-toolbar-title>
    <v-spacer></v-spacer>
</v-app-bar>


      <!-- Main content -->
      <v-main>
        <v-container fluid>
          <!-- Page header -->
          <v-row>
            <v-col cols="12">
              <h1 class="display-1 text-center">What is JavaScript?</h1>
            </v-col>
          </v-row>

          <!-- Filter sidebar -->
          <v-row>
       

            <!-- Main content area -->
            <v-col cols="12">
              <!-- Article content -->
              <v-card>
                <v-container>
    <v-row>
      <v-col cols="12">
        <h2>What is JavaScript?</h2>
        <p>
          JavaScript is a versatile scripting language primarily used for web development. It allows developers to add dynamic functionality to web pages, making them interactive and responsive to user input. JavaScript can manipulate the content of a webpage, handle events like button clicks or form submissions, and communicate with servers to fetch or send data asynchronously without reloading the page.
        </p>
        <p>
          JavaScript is a client-side language, meaning it runs in the user's web browser rather than on a remote server. This allows for faster and more interactive user experiences. Additionally, JavaScript is often used alongside HTML and CSS, forming the trio of core technologies for building websites and web applications.
        </p>
        <p>
          Over the years, JavaScript has evolved significantly, with new features and updates continually expanding its capabilities. It is now widely used not only for web development but also for building mobile apps, server-side applications (using platforms like Node.js), desktop applications, and even game development.
        </p>
        <p>
          JavaScript is a versatile scripting language primarily used for web development. It allows developers to add dynamic functionality to web pages, making them interactive and responsive to user input. JavaScript can manipulate the content of a webpage, handle events like button clicks or form submissions, and communicate with servers to fetch or send data asynchronously without reloading the page.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <!-- Introduction Section -->
 

    <!-- Features Section -->
    <v-row>
      <v-col cols="12">
        <h3>Key Features of JavaScript</h3>
        <ul>
          <li>Dynamic Content Manipulation</li>
          <li>Event Handling</li>
          <li>Asynchronous Communication</li>
          <li>Client-Side Execution</li>
          <li>Integration with HTML and CSS</li>
        </ul>
      </v-col>
    </v-row>

    <!-- Evolution Section -->
    <v-row>
      <v-col cols="12">
        <h3>Evolution of JavaScript</h3>
        <p>
          JavaScript has evolved significantly since its inception. With the introduction of ES6 (ECMAScript 2015), several new features were added, improving the language's readability, maintainability, and performance. Subsequent updates have further enhanced JavaScript's capabilities, making it a powerful tool for building modern web applications.
        </p>
      </v-col>
    </v-row>

    <!-- Usage Section -->
    <v-row>
      <v-col cols="12">
        <h3>Usage of JavaScript</h3>
        <p>
          JavaScript is not limited to web development. It is widely used across various domains, including:
        </p>
        <ul>
          <li>Web Development (Frontend and Backend)</li>
          <li>Mobile App Development</li>
          <li>Server-Side Development (Node.js)</li>
          <li>Desktop Application Development</li>
          <li>Game Development</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>

  


              </v-card>
            </v-col>
          </v-row>
        </v-container>
        
      </v-main>
    </v-app>
    </v-main>
    
    <!-- Right side page -->
    <v-main v-show="dialog" class="right-side">
      <v-container fluid>
        <v-dialog v-model="dialog" max-width="900">
          <v-card>
            <!-- Display selected product information -->
            <v-img :src="selectedProduct.thumbnail" aspect-ratio="16/9"></v-img>
            <v-card-title>{{ selectedProduct.title }}</v-card-title>
            <v-card-text>
              <p>{{ selectedProduct.description }}</p>
              <p>Price: ${{ selectedProduct.price }}</p>
              <p>Rating: {{ selectedProduct.rating }}</p>
              <p>Stock: {{ selectedProduct.stock }}</p>
              <p>Brand: {{ selectedProduct.brand }}</p>
              <p>Category: {{ selectedProduct.category }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Controls the visibility of the navigation drawer
      dialog: false, // Controls the visibility of the right side page
      selectedProduct: {}, // Store information of the selected product
      products: [ // Sample products data
        { id: 1, title: 'Product 1', description: 'Description of Product 1', price: 100, rating: 4.5, stock: 10, brand: 'Brand 1', category: 'Category 1', thumbnail: 'https://placeimg.com/640/480/tech' },
        { id: 2, title: 'Product 2', description: 'Description of Product 2', price: 150, rating: 4.2, stock: 20, brand: 'Brand 2', category: 'Category 2', thumbnail: 'https://placeimg.com/640/480/tech' },
        { id: 3, title: 'Product 3', description: 'Description of Product 3', price: 200, rating: 4.8, stock: 15, brand: 'Brand 3', category: 'Category 3', thumbnail: 'https://placeimg.com/640/480/tech' },
      ],
    };
  },
  mounted() {
    this.click()
  },
  methods: {
   async click() {
      const data = await fetch('https://dummyjson.com/products');
      const json  = await data.json();
      this.products = json.products
    },
    // Method to toggle the visibility of the navigation drawer
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    // Method to handle product click in the navigation drawer
    handleItemClick(product) {
      // Set the selected product and open the right side page
      this.selectedProduct = product;
      this.dialog = true;
    },
    // Method to close the right side page
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style>
/* Add custom styles here */
.right-side {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
</style>
