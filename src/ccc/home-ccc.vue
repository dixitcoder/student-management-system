<template>
    <v-app>
      <v-app-bar app color="primary">
        <v-toolbar-title @click="toggleDrawer">CCC</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="toggleDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
  
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-title @click="navigate(item)">
              {{ item.text }} 
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- Your main content goes here -->
      <v-main>
  <v-main>
    <template v-if="showPage">
      <!-- Render the current component if showPage is true -->
      <component :is="currentComponent" />
    </template>
    <template v-else>
      <!-- Render a default page if showPage is false -->
      <div>
    <v-container>
      <h1 class="display-2 text-center">Course on Computer Concepts (CCC)</h1>
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="headline">About CCC Course</h2>
          <p>
            CCC stands for Course on Computer Certificates. It’s a program that teaches the fundamentals of computer and information technology to the common man. The CCC certificate is provided by the National Institute of Electronics & Information Technology (NIELIT) and aims to expand the digital footprint in the country.
          </p>
          <p>
            CCC is an innovative course that provides an overview of basic computer concepts. You can apply for the CCC course throughout the year. It is a basic IT level course that empowers people with the tools to operate and perform routine tasks on computers.
          </p>
          <v-btn color="primary" href="#apply">Apply Now</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <!-- <img src="/path/to/ccc-image.jpg" alt="CCC Course" class="mx-auto d-block" style="max-width: 100%;"> -->
        </v-col>
      </v-row>

      <h2 class="headline text-center mt-5" id="apply">How to Apply for the Course Online?</h2>
      <p>
        These are the basic steps to apply for the program online:
      </p>
      <!-- Add Apply Steps Here -->

      <h2 class="headline text-center mt-5">Exam Format of CCC</h2>
      <p>
        The basic exam format for CCC is:
      </p>
      <!-- Add Exam Format Here -->

      <h2 class="headline text-center mt-5">Syllabus of CCC</h2>
      <ul v-for="item in items" :key="item">
        <li>{{ item.text }}</li>    
      </ul>

      <h2 class="headline text-center mt-5">Advantages of a CCC Course</h2>
      <p>
        Students who have completed this course will get a basic idea about email, internet search, and business concepts. This is also a beginner’s course for people looking to do some higher courses in computer science. The topics for this course have been selected with care to give the students a clean concept. Overall, it’s a rudimentary course designed to provide awareness about information technology.
      </p>
    </v-container>
  </div>
    </template>
  </v-main>

      </v-main>
    </v-app>
  </template>
  
  <script>
  import Homelogin from './homelogin.vue';
  import ccc_2 from './ccc-2.vue'
  import ccc_3 from './ccc-3.vue';
  import ccc_4 from './ccc-4.vue'
  import ccc_5 from './ccc-5.vue'
  import ccc_6 from './ccc-6.vue'
  import ccc_7 from './ccc-7.vue'
  import ccc_8 from './ccc-8.vue'
  import ccc_9 from './ccc-9.vue'
  import courses_video from './courses_video.vue'
  import about from './about.vue'
  export default {
    data() {
      return {
        drawer: false,
        items: [
        { text: 'Chapter-1 Introduction to Computer', route: 'homelogin' },
          { text: 'Chapter-2 Introduction to Operating System', route: 'ccc_2' },
          { text: 'Chapter-3 WORD PROCESSING', route: 'ccc_3' },
          { text: 'Chapter-4 SPREAD SHEET PROCESSING', route: 'ccc_4' },
          { text: 'Chapter-5 Presentation', route: 'ccc_5' },
          { text: 'Chapter-6 INTRODUCTI ON TO INTERNET AND WWW', route: 'ccc_6' },
          { text: 'Chapter-7 E-mail, Social Networking and eGovernance Services', route: 'ccc_7' },
          { text: 'Chapter-8 DIGITAL FINANCIAL TOOLS AND APPLICATIONS', route: 'ccc_8' },
          { text: 'Chapter-9 Overview of Futureskills & Cyber Security', route: 'ccc_9' },
          { text: 'Courses', route: 'courses_video' },
         
          { text: 'About', route: 'about' },
        ],
        showPage: false, // Set to true when a page is selected
      currentComponent: null
      };
    },
    computed: {
    // Example computed property to determine whether to show a page or not
    // You can replace this with your actual logic to determine if a page is selected
    showPage() {
      return this.currentComponent !== null;
    }
  },
  
    components: {
      Homelogin,
      ccc_2,
      ccc_3,
      ccc_4,
      ccc_5,
      ccc_6,
      ccc_7,
      ccc_8,
      ccc_9,
      courses_video,
      about
    },
  
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      navigate(item) {
        this.currentComponent = item.route;
        this.drawer = false; // Close drawer after clicking
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
    