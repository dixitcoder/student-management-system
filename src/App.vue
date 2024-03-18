<template>
  <v-app>
    <v-main>
      <nav>
        <div>
        <div>
            <div id="top-header-container" class="_dgdpujh" style="background-color: rgb(255, 255, 255);">
                <nav aria-label="page header" class="_9bl3wi" role="navigation">
                    <div class="_1ycdc3w">
                        <div class="_1qhmdkk0">
                            <div class="_1c8t70d">
                               
    <v-container>
      <div class="_1c8t70d">
        <v-btn @click="toggleDialog" aria-expanded="false" class="_v2ig2y4">
          <span data-learn-menu-trigger="true" data-test-id="learn-menu-button">Courses<span class="_3zofox"><span class="_19zgqrew"></span></span></span>
        </v-btn>
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>
              Course Information
            </v-card-title>
            <v-card-text>
              <!-- Display course information here -->
              <v-card class="course-details">
            <h2>Courses Offered:</h2>
            
            <v-list>
              <v-list-item v-for="(course, index) in courses" :key="index">
                <v-list-item-content>

                  <v-list-item-title >{{ course }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  
  
  </div>
  <div class="_1boekgo"><a data-hack-search-button-label="true"
                                    aria-label="Search for courses, skills, and videos" href="/ccc" class="_14nbw552"
                                    data-test-id="navbar-search-button" style="background-color: rgb(247, 248, 250);">
                                    <div class="_dhzffk"><span class="_gkt786u">ccc-course</span>
                                        <div class="_1717m280"><span class="_n81lrqx"></span></div>
                                    </div>
                                </a></div>
                            
                                
  <div class="_1boekgo"><a data-hack-search-button-label="true"
                                    aria-label="Search for courses, skills, and videos" href="/search" class="_14nbw552"
                                    data-test-id="navbar-search-button" style="background-color: rgb(247, 248, 250);">
                                    <div class="_dhzffk"><span class="_gkt786u">Search</span>
                                        <div class="_1717m280"><span class="_n81lrqx"></span></div>
                                    </div>
                                </a></div>
                        </div>
                        <div class="_1ujnvj"><a aria-label="Khan Academy" data-test-id="header-logo"
                                aria-disabled="false" class="_1ab8w4s7" href="/"><svg class="_1rt6g9t"
                                    aria-hidden="true" width="176px" height="28px" viewBox="0 0 176 28">
                                    <path
                                        d="M33.66,6.5A.54.54,0,0,1,34.21,6h2a.55.55,0,0,1,.55.55v6.2l5.79-6.52A.53.53,0,0,1,43,6h2.3a.48.48,0,0,1,.36.82l-6,6.75,6.43,7.69a.51.51,0,0,1-.41.81h-2.5a.55.55,0,0,1-.42-.16l-6-7.4v7a.56.56,0,0,1-.55.56h-2a.55.55,0,0,1-.55-.56Z">
                                    </path>
                                    <path
                                        d="M47.78,6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5v5.63a4.07,4.07,0,0,1,2.7-.9c3.38,0,4.3,2.34,4.3,5v5.32a.53.53,0,0,1-.51.51H55.28a.51.51,0,0,1-.5-.51V16.16c0-1.47-.67-2.36-1.93-2.36a2.18,2.18,0,0,0-2.2,1.86v5.85c0,.3-.14.51-.56.51H48.28a.52.52,0,0,1-.5-.51Z">
                                    </path>
                                    <path
                                        d="M63.48,15.31a7.7,7.7,0,0,1,2,.3c0-1.35-.34-2-1.47-2a13.49,13.49,0,0,0-3,.39c-.35.12-.55-.13-.6-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.31,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.51.51h-.78c-.18,0-.32-.07-.46-.37l-.3-.71a4.66,4.66,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C59.25,16.76,60.79,15.31,63.48,15.31Zm.07,4.82A2.27,2.27,0,0,0,65.45,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.4,1.4,0,0,0,63.55,20.13Z">
                                    </path>
                                    <path
                                        d="M70.59,11.92a.51.51,0,0,1,.51-.51H72a.42.42,0,0,1,.44.32l.39,1a4.26,4.26,0,0,1,3.42-1.54c3.37,0,4.24,2.27,4.24,4.84v5.49A.52.52,0,0,1,80,22H78.1a.51.51,0,0,1-.51-.51V16c0-1.37-.55-2.22-1.83-2.22a2.34,2.34,0,0,0-2.3,1.65v6.06c0,.39-.16.51-.66.51H71.1a.53.53,0,0,1-.51-.51Z">
                                    </path>
                                    <path
                                        d="M85.89,21.42,93,6a.4.4,0,0,1,.39-.25h.23A.39.39,0,0,1,94,6l7.07,15.45a.41.41,0,0,1-.39.6h-2a.66.66,0,0,1-.67-.46l-1.12-2.48H90.07l-1.13,2.48a.69.69,0,0,1-.66.46h-2A.4.4,0,0,1,85.89,21.42Zm9.91-4.89-2.29-5.05h-.07l-2.25,5.05Z">
                                    </path>
                                    <path
                                        d="M107,11.18A5.24,5.24,0,0,1,111,13c.23.23.12.53-.11.76l-1,1.06c-.23.25-.48.13-.69-.07a2.84,2.84,0,0,0-2.11-.92,2.78,2.78,0,0,0-2.8,2.91,2.77,2.77,0,0,0,2.78,2.94,2.81,2.81,0,0,0,2.25-1.17.5.5,0,0,1,.66-.07l1,.87c.25.23.37.49.18.76a4.75,4.75,0,0,1-4.2,2.23,5.55,5.55,0,1,1,0-11.09Z">
                                    </path>
                                    <path
                                        d="M116.83,15.31a7.82,7.82,0,0,1,2,.3c0-1.35-.35-2-1.47-2a13.5,13.5,0,0,0-3,.39c-.34.12-.55-.13-.59-.45l-.23-1.2a.48.48,0,0,1,.34-.64,13.49,13.49,0,0,1,3.63-.53c3.3,0,4,1.72,4,4.62v5.71a.51.51,0,0,1-.5.51h-.78c-.19,0-.32-.07-.46-.37l-.3-.71a4.68,4.68,0,0,1-3.33,1.33,3.38,3.38,0,0,1-3.58-3.63C112.61,16.76,114.15,15.31,116.83,15.31Zm.07,4.82A2.29,2.29,0,0,0,118.81,19V17.45a4.23,4.23,0,0,0-1.56-.32c-1.22,0-1.88.57-1.88,1.51A1.39,1.39,0,0,0,116.9,20.13Z">
                                    </path>
                                    <path
                                        d="M128.62,11.18a7.67,7.67,0,0,1,2.55.44V6.45a.54.54,0,0,1,.5-.5h1.86a.52.52,0,0,1,.51.5V21.51a.51.51,0,0,1-.51.51h-.85c-.25,0-.41-.21-.5-.51l-.28-.83a4.55,4.55,0,0,1-3.46,1.59c-2.9,0-5.08-2.34-5.08-5.56A5.21,5.21,0,0,1,128.62,11.18Zm2.55,3.22a4.18,4.18,0,0,0-2.21-.6,2.68,2.68,0,0,0-2.64,2.91c0,1.5.85,2.94,2.51,2.94a2.43,2.43,0,0,0,2.34-1.47Z">
                                    </path>
                                    <path
                                        d="M141.22,11.18a4.75,4.75,0,0,1,4.87,4.91c0,.16,0,.53-.05.69a.53.53,0,0,1-.5.48h-6.8a2.55,2.55,0,0,0,2.64,2.46,3.49,3.49,0,0,0,2.27-.78c.26-.21.53-.23.69,0l.9,1.19a.45.45,0,0,1-.05.69,6,6,0,0,1-3.95,1.45,5.37,5.37,0,0,1-5.37-5.56A5.37,5.37,0,0,1,141.22,11.18Zm2,4.2a1.94,1.94,0,0,0-2-1.83,2.11,2.11,0,0,0-2.25,1.83Z">
                                    </path>
                                    <path
                                        d="M147.79,11.92a.51.51,0,0,1,.5-.51h.83a.4.4,0,0,1,.43.3l.39,1a4,4,0,0,1,3.24-1.54,3.61,3.61,0,0,1,3.17,1.61,4.53,4.53,0,0,1,3.42-1.61c3.39,0,4.2,2.16,4.2,4.91v5.42a.52.52,0,0,1-.53.51H161.6a.51.51,0,0,1-.5-.51V16c0-1.37-.51-2.22-1.84-2.22a2,2,0,0,0-2,1.1s0,.53,0,1v5.6a.52.52,0,0,1-.5.51H155a.5.5,0,0,1-.51-.51V16c0-1.37-.39-2.22-1.74-2.22a2.1,2.1,0,0,0-2,1.65v6.06a.52.52,0,0,1-.5.51h-1.86a.52.52,0,0,1-.5-.51Z">
                                    </path>
                                    <path
                                        d="M165.07,12.1a.47.47,0,0,1,.46-.69h2.2a.42.42,0,0,1,.44.3l1.9,6.33h.05l2.41-6.33c.16-.28.34-.3.67-.3h2a.47.47,0,0,1,.46.69l-6.25,15.06a.53.53,0,0,1-.46.32h-2.2a.48.48,0,0,1-.46-.71l2.13-5.37Z">
                                    </path>
                                    <path fill="#14bf96"
                                        d="M2.31,5.8A3.56,3.56,0,0,0,.66,8.6V19.4a3.56,3.56,0,0,0,1.65,2.8L12,27.62a3.75,3.75,0,0,0,3.3,0L25,22.2a3.56,3.56,0,0,0,1.65-2.8V8.6A3.56,3.56,0,0,0,25,5.8L15.31.38a3.75,3.75,0,0,0-3.3,0Z">
                                    </path>
                                    <path fill="#ffffff"
                                        d="M23.61,11.32c-5.38,0-9.4,4.46-9.4,9.93v.23H13.13v-.23c0-5.47-4-9.91-9.42-9.93,0,.34,0,.69,0,1a9.91,9.91,0,0,0,6.4,9.32,10.47,10.47,0,0,0,3.59.64,10.64,10.64,0,0,0,3.62-.64,9.92,9.92,0,0,0,6.39-9.32C23.66,12,23.64,11.66,23.61,11.32Z">
                                    </path>
                                    <circle fill="#ffffff" cx="13.66" cy="8.74" r="3"></circle>
                                </svg></a></div>
                        <div class="_btd0noz"><a data-test-id="header-donate-link" target="_blank"
                                rel="noopener noreferrer"
                                href="/computer-programming"
                                class="_uc07yrz">computer-programming<span data-test-id="external-icon"
                                    class="_1k2exlvd"></span></a><a id="login-or-signup" class="_2yu61fz"
                                href="/login">Log in</a><a class="_1sq7o4lg" href="/signup">Sign up</a>
                            <div class="_xvt9wo"><a data-test-id="mobile-search-button" aria-disabled="false"
                                    class="_5tdxkjz" href="/search">
                                    <div class="_cddezix"><span class="_19bpjuy">Search for courses, skills, and
                                            videos</span><span class="_n81lrqx"></span></div>
                                </a></div>
                            <div class="_xvt9wo"><button class="_1nv2rsnw" data-test-id="mobile-header-menu-button"
                                    aria-expanded="false" aria-label="Open menu"
                                    aria-controls="page-header-responsive-nav-menu"><span
                                        class="_txg1n8l"></span></button></div>
                        </div>
                    </div>
                </nav>
                <div class="_1f3u7s" data-test-id="responsive-nav-menu" id="page-header-responsive-nav-menu"
                    role="menu">
                    <div class="_xu2jcg _1pwnewep"></div>
                </div>
                <!-- <div data-test-id="hero-heading" class="_xu2jcg _1v4dms8">
                    <div class="_13srurz"><img class="_zdxht7"
                            src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png"
                            srcset="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png 2x, https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_1x.png 1x"
                            alt="" data-test-id="hero-image"></div>
                    <div class="_zjuubo">
                        <h1 class="_1b9bpa3"><span class="_1gf4zc3" style="z-index: 0; position: relative;">For every
                                student,</span><br><span class="_1gf4zc3" style="z-index: -2; position: relative;">every
                                classroom.</span><br><span class="_152y734"
                                style="z-index: -4; position: relative;"><svg class="_183sveq"
                                    preserveAspectRatio="xMidYMid meet" aria-hidden="true"
                                    aria-labelledby="_khannotations_LineDrawing_0.8377484114509017_title _khannotations_LineDrawing_0.8377484114509017_desc">
                                    <g>
                                        <path class="_t1oee9 "
                                            d="M0 34 C48.82220324067193 34, 97.64440648134386 34, 179 34 "
                                            style="stroke: rgb(191, 230, 221); stroke-width: 2; fill: none; stroke-dasharray: 179; stroke-dashoffset: 179; animation-delay: 1200ms; animation-duration: 89.5ms;">
                                        </path>
                                        <path class="_t1oee9 "
                                            d="M0 34 C67.88517711755172 34, 135.77035423510344 34, 179 34"
                                            style="stroke: rgb(191, 230, 221); stroke-width: 2; fill: none; stroke-dasharray: 179; stroke-dashoffset: -179; animation-delay: 1289.5ms; animation-duration: 89.5ms;">
                                        </path>
                                    </g>
                                </svg><span style="position: relative;">Real</span> <span
                                    style="position: relative;">results.</span></span></h1>
                        <p class="_akj1ep"><span class="_1gf4zc3">We’re a nonprofit with the mission to provide a free,
                                world-class education for anyone, anywhere.</span></p>
                        <div class="_1q3929r"><a role="button" class="_1rhl3qm4" href="/signup"><span
                                    class="_1gw4cnik">Learners</span></a><a role="button" class="_1rhl3qm4"
                                href="/signup?isteacher=1"><span class="_1gw4cnik">Teachers</span></a><a role="button"
                                class="_1rhl3qm4" href="/signup?isparent=1"><span class="_1gw4cnik">Parents</span></a>
                        </div>
                        <p class="_qy3q5cg">Learners, teachers, and parents:</p><button type="button" role="button"
                            aria-disabled="false" class="_1rb1h9d3"><span class="_1gw4cnik">Start here</span></button>
                    </div>
               </div>
             -->
<!-- start of coding  -->
            </div>
        </div>
    </div>
      </nav>
      
     <router-view></router-view>
     
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
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
      ]
    };
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>

<style>
._1c8t70d {
  position: relative;
}
._v2ig2y4 {
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  padding: 0;
  font: inherit;
  outline: inherit;
}
._3zofox {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
._19zgqrew {
  display: inline-block;
  fill: currentColor;
}
</style>