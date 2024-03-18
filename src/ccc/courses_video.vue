<template>
<div style="text-align:center;margin:auto;">
    <section class="courses">
      <div class="container">
        <h2>Software Studio</h2>
        <p>Welcome to our CCC Welcome Course Development Masterclass! This comprehensive course is designed to equip you with the skills and knowledge needed to become a proficient software developer. Whether you're a beginner looking to start a career in software development or an experienced programmer seeking to enhance your skills, this course is tailored to meet your needs. Guides :<a href="https://www.instagram.com/dixitcoder">@Hemant @Keyur @dixitcoder</a></p>

        <div class="masterclass">
          <!-- Iterate over each chapter -->
          <article v-for="(chapter, index) in curriculum" :key="index" class="card-masterclass">
            <div class="img-mastercover">
              <iframe :src="chapter.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="card-text-area">
              <div class="card-info-top">
                <p class="students"></p>
                <p class="length">{{ chapter.length }}</p>
              </div>
              <div class="card-info-mid">
                <h3>{{ chapter.title }}</h3>
              </div>
              <div class="card-info-bottom">
                <p class="instructeur">{{ chapter.instructor }}</p>
                <p class="pricing">{{ chapter.course }}</p>
              </div>
            </div>
          </article>
        </div>
        <button class="btn-secondary" @click="next()">Back</button>
      </div>
    </section>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  methods: {
    next() {
      this.$router.push("/");
    }
  },
  setup() {
    const route = useRoute();
    const showNav = ref(true);

    // Logic to hide navigation for '/courses-video' route after 5 seconds
    if (route.path === '/courses-video') {
      onMounted(() => {
        setTimeout(() => {
          showNav.value = false; // Hide navigation after 5 seconds
        }, 5000);
      });
    }

    return {
      showNav,
    };
  },data() {
  return {
    curriculum: [
      {
        title: "Chapter-1 Introduction to Computer",
        videoUrl: "https://www.youtube.com/embed/64XRYDeYbCw?si=vVNiWLj9bu68gLzZ",
        length: "12m02s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-2 Introduction to Operating System",
        videoUrl: "https://www.youtube.com/embed/KYRrU2jpsaw?si=usFfNzSJu7_2Latd",
        length: "21m14s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-3 WORD PROCESSING",
        videoUrl: "https://www.youtube.com/embed/Vuhar_ewaFU?si=WpceRo_rNDqL8mxv",
        length: "18m03s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-4 SPREADSHEET PROCESSING",
        videoUrl: "https://www.youtube.com/embed/tZHpkGGeSFM?si=mkF44Ec8U7QMDDuf",
        length: "43m11s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-5 Introduction to Cloud Computing",
        videoUrl: "https://www.youtube.com/embed/example5",
        length: "25m30s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-6 Introduction to Network",
        videoUrl: "https://www.youtube.com/embed/example6",
        length: "20m45s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-7 Introduction to LAN",
        videoUrl: "https://www.youtube.com/embed/example7",
        length: "15m20s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-8 Introduction to WAN",
        videoUrl: "https://www.youtube.com/embed/example8",
        length: "18m50s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      },
      {
        title: "Chapter-9 Overview of Futureskills & Cyber Security",
        videoUrl: "https://www.youtube.com/embed/example9",
        length: "30m00s",
        instructor: "@dixitcoder",
        course: "Software Studio"
      }
    ]
  };
}

};
</script>

<style scoped>
/* Add your CSS styles here */

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

.masterclass {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card-masterclass {
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
}

.img-mastercover {
  position: relative;
}

.img-mastercover iframe {
  width: 100%;
  height: 200px;
}

.card-text-area {
  padding: 20px;
}

.card-info-top,
.card-info-bottom {
  display: flex;
  justify-content: space-between;
}

.card-info-mid {
  margin-bottom: 10px;
}

.btn-secondary {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 4px;
}

.btn-secondary:hover {
  background-color: #45a049;
}

</style>
