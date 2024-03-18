<template>
    <v-container>
      <v-row>
        <!-- Profile Section -->
        <v-col cols="12" md="6">
            <v-card class="profile">
  <v-row align="center">
    <!-- Profile Image -->
    <v-col cols="12" sm="4">
      <v-img src="/home/anonymous/Desktop/all-folder/Desktop/Downloads/47b5ff7c90fe82360ba19afa7e89a0ed.jpg" alt="Profile Image"></v-img>
    </v-col>
    <!-- Profile Information -->
    <v-col cols="12" sm="8">
      <div class="profile-user-settings">
        <h1 class="profile-user-name">Dixit Patel</h1>
        <a href="https://www.instagram.com/dixitcoder">
          <v-btn class="btn profile-edit-btn" color="primary">Page</v-btn>
        </a>
        <v-btn class="btn profile-settings-btn" aria-label="profile settings">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </div>
      <div class="profile-bio">
        <p><span class="profile-real-name">@dixitcoder</span><br>Passionate coder and tech enthusiast</p>
      </div>
    </v-col>
  </v-row>
</v-card>

        </v-col>
        
        <!-- Course Details Section -->
        <v-col cols="12" md="6">
          <v-card class="course-details">
            <h2>Courses Offered:</h2>
            <v-list>
              <v-list-item v-for="(course, index) in courses" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ course }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          
          <v-card class="topic-details">
            <h2>Topics Covered:</h2>
            <v-list>
              <v-list-item v-for="(topic, index) in topics" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ topic }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- Curriculum Section -->
      <v-row>
        <v-col cols="12">
          <v-card class="curriculum">
            <h2>Curriculum:</h2>
            <v-list>
              <v-list-item v-for="(section, index) in curriculum" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ section.title }}</v-list-item-title>
                  <v-list-item-subtitle v-for="(topic, tIndex) in section.topics" :key="tIndex">{{ topic }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- Social Links Section -->
      <v-row>
        <v-col cols="12">
          <v-card class="social-links">
            <h2>Connect with me:</h2>
            <v-list>
              <v-list-item>
                <a href="https://instagram.com/dixitcoder" target="_blank">Instagram</a>
              </v-list-item>
              <!-- Add more social media links as needed -->
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
      return {
        courses: [
          'CCC',
          'Web Development Fundamentals',
          'Introduction to JavaScript',
          'Vue.js Essentials',
          'Responsive Web Design',
          'Android Development',
          'Spoken English',
          'Personal Development',
          'Internet Basics'
        ],
        topics: [
          'HTML5 & CSS3',
          'JavaScript Basics',
          'Vue.js Components',
          'Media Queries'
        ],
        curriculum: [
          {
            title: "Introduction to Software Development",
            topics: [
              "Overview of software development lifecycle",
              "Introduction to programming languages and paradigms"
            ]
          },
          {
            title: "Fundamentals of Programming",
            topics: [
              "Basics of programming logic and problem-solving",
              "Introduction to data types, variables, and operators"
            ]
          },
          {
            title: "Object-Oriented Programming (OOP)",
            topics: [
              "Understanding classes, objects, and inheritance",
              "Encapsulation, polymorphism, and abstraction"
            ]
          },
          {
            title: "Web Development Essentials",
            topics: [
              "HTML5, CSS3, and JavaScript fundamentals",
              "Introduction to front-end frameworks (e.g., Bootstrap, Vue.js)"
            ]
          },
          {
            title: "Backend Development",
            topics: [
              "Introduction to server-side programming languages (e.g., Node.js, Python)",
              "Database fundamentals and CRUD operations"
            ]
          },
          {
            title: "Version Control with Git",
            topics: [
              "Git basics and version control concepts",
              "Collaborative development using Git and GitHub"
            ]
          },
          {
            title: "Software Engineering Principles",
            topics: [
              "Agile methodologies and Scrum framework",
              "Test-driven development (TDD) and continuous integration (CI/CD)"
            ]
          },
          {
            title: "Building Scalable Applications",
            topics: [
              "Introduction to cloud computing platforms (e.g., AWS, Azure)",
              "Containerization with Docker and orchestration with Kubernetes"
            ]
          },
          {
            title: "Project Management and Deployment",
            topics: [
              "Project planning and management techniques",
              "Deployment strategies and best practices"
            ]
          }
        ]
      }
    },
  }
  </script>
  
  <style scoped>
  </style>
  