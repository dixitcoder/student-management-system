<template>
    <div class="container">
      <!-- Header -->
      <header>
        <h1>Course Curriculum</h1>
      </header>
  
      <!-- Main Content -->
      <main>
        <!-- Section 1 -->
        
        <section><h2>9.1 Introduction to</h2>
          <section><h2> Chapter-9
  Overview of
  Futureskills &
  Cyber
  Security</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/YrALjGa8ecU?si=rBRsbGC0ZVQkTl4t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></section>
  
  
  </section>
  <section>
    <h3>9.1.3 Cloud Computing</h3>
    <p>Introduction to Cloud Computing.</p>
  </section>
  
  <section>
    <h3>9.1.4 Virtual Reality</h3>
    <p>Introduction to Virtual Reality.</p>
  </section>
  
  <section>
    <h3>9.1.5 Artificial Intelligence</h3>
    <p>Introduction to Artificial Intelligence.</p>
  </section>
  
  <section>
    <h3>9.1.6 Social & Mobile</h3>
    <p>Introduction to Social & Mobile technologies.</p>
  </section>
  
  <section>
    <h3>9.1.7 Blockchain Technology</h3>
    <p>Introduction to Blockchain Technology.</p>
  </section>
  
  <section>
    <h3>9.1.8 3D Printing/ Additive Manufacturing</h3>
    <p>Introduction to 3D Printing/ Additive Manufacturing.</p>
  </section>
  
  <section>
    <h3>9.1.9 Robotics Process Automation</h3>
    <p>Introduction to Robotics Process Automation.</p>
  </section>
  
  
  <section>
  <h2>9.2 Cyber Security</h2>
  
  <section>
    <h3>9.2.3 Securing Smart Phone</h3>
    <p>Steps for securing a smart phone.</p>
    <a :href="link">Link to More Information</a>
  </section>
  </section>
  
  
        <!-- Add more sections here -->
  
        <!-- Footer -->
        <footer>
          <p>&copy; 2024 Course Curriculum</p>
        </footer>
        
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return {
        link: "https://example.com" // Replace with your actual link
      }
    }
  }
  </script>
  
  <style scoped>
    /* Style for section */
    h3 {
      color: black;
    }
  
    section {
      margin-bottom: 30px; /* Increased margin */
      padding: 20px;
      background-color: #f7f7f7; /* Lighter background color */
      border-radius: 10px; /* Slightly increased border radius */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Added box shadow for depth */
    }
  
    /* Style for headings */
    section h2 {
      color: #333;
      font-size: 26px; /* Slightly increased font size */
      margin-bottom: 15px; /* Increased margin */
    }
  
    /* Style for subheadings */
    section h3 {
      color: #555; /* Darkened subheading color */
      font-size: 22px; /* Slightly increased font size */
      margin-bottom: 10px; /* Decreased margin */
    }
  
    /* Style for paragraphs */
    section p {
      color: #777; /* Darkened paragraph color */
      font-size: 18px; /* Slightly increased font size */
      line-height: 1.6; /* Slightly increased line height */
    }
  
    /* Style for unordered lists */
    section ul {
      list-style-type: disc;
      margin-left: 30px; /* Increased margin */
    }
  
    /* Style for list items */
    section li {
      color: #777; /* Darkened list item color */
      font-size: 18px; /* Slightly increased font size */
      line-height: 1.6; /* Slightly increased line height */
    }
  </style>
  