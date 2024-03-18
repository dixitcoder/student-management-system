<template>
  <v-container>
    <!-- 1.0 Introduction -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>Chapter-1 Introduction to Computer</h2>
      </v-card-title>
      <v-responsive>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/64XRYDeYbCw?si=vVNiWLj9bu68gLzZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </v-responsive>
    </v-card>

    <!-- 1.0 Introduction -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>1.0 Introduction</h2>
      </v-card-title>
      <v-card-text>
        <p>Introduction to computers and latest IT gadgets.</p>
      </v-card-text>
    </v-card>

    <!-- 1.1 Objectives -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>1.1 Objectives</h2>
      </v-card-title>
      <v-card-text>
        <p>Outline the objectives of understanding computers and IT gadgets.</p>
      </v-card-text>
    </v-card>

    <!-- 1.2 Computer and Latest IT gadgets -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>1.2 Computer and Latest IT gadgets</h2>
      </v-card-title>
      <v-card-text>
        <!-- 1.2.1 Evolution of Computers & its applications -->
        <div>
          <h3>1.2.1 Evolution of Computers & its applications</h3>
          <p>Discuss the evolution of computers and their applications.</p>
        </div>

        <!-- 1.2.2 IT gadgets and their applications -->
        <div>
          <h3>1.2.2 IT gadgets and their applications</h3>
          <p>Explore various IT gadgets and their applications.</p>
        </div>
      </v-card-text>
    </v-card>

    <!-- 1.3 Basics of Hardware and Software -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>1.3 Basics of Hardware and Software</h2>
      </v-card-title>
      <v-card-text>
        <!-- 1.3.1 Hardware -->
        <div>
          <h3>1.3.1 Hardware</h3>
          <v-list dense>
            <v-list-item v-for="item in hardwareItems" :key="item.title">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <!-- 1.3.2 Software -->
        <div>
          <h3>1.3.2 Software</h3>
          <v-list dense>
            <v-list-item v-for="item in softwareItems" :key="item.title">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>

    <!-- 1.4 Summary -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>1.4 Summary</h2>
      </v-card-title>
      <v-card-text>
        <p>Summarize the key points covered in this chapter.</p>
      </v-card-text>
    </v-card>

    <!-- 1.5 Model Questions and Answers -->
    <v-card class="mb-4">
      <v-card-title>
        <h2>1.5 Model Questions and Answers</h2>
      </v-card-title>
      <v-card-text>
        <p>Provide sample questions and answers for Chapter 1.</p>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hardwareItems: [
        { title: '1.3.1.1 Central Processing Unit' },
        { title: '1.3.1.2 Input devices' },
        { title: '1.3.1.3 Output devices' },
        { title: '1.3.1.4 Computer Memory & storage' }
      ],
      softwareItems: [
        { title: '1.3.2.1 Application Software' },
        { title: '1.3.2.2 Systems Software' },
        { title: '1.3.2.3 Utility Software' },
        { title: '1.3.2.4 Open source and Proprietary Software' },
        { title: '1.3.2.5 Mobile Apps' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
