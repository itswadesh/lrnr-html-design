
<template>
  <header>
    <div class="fixed top-0 z-10 w-full bg-white shadow lg:opacity-75 blur">
      <div
        class="container flex items-center justify-between px-4 py-4 mx-auto transition-all duration-100 ease-in-out lg:py-5"
      >
        <div class="flex items-center w-full">
          <nuxt-link
            to="/"
            title="Link to home page"
            rel="prefetch"
            aria-label="Litekart"
            class="flex items-center text-2xl text-black"
          >
            <img src="/logo.svg" alt="Litekart" class="h-8" />
            LrNr
          </nuxt-link>
        </div>
        <div class="flex items-center flex-shrink-0">
     
          <button
            @click="showSidebar"
            aria-label="Open Menu"
            class="p-2 bg-gray-100 rounded focus:outline-none"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 6a1 1 0
                011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 18a1 1 0 011-1h18a1 1 0
                110 2H3a1 1 0 01-1-1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="!!sidebar"
      class="fixed inset-0 z-10 text-gray-800 transition-transform transform"
    >
      <div class="z-10 h-full max-w-sm px-6 py-4 ml-auto bg-white shadow-2xl">
        <div class="flex items-center justify-between">
          <div>
            <!---->
          </div>
          <button
            aria-label="Open sidebar"
            @click="hideSidebar"
            class="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded focus:outline-none"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.707 5.293a1 1 0 010 1.414l-12 12a1 1 0
                  01-1.414-1.414l12-12a1 1 0 011.414 0z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 5.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414
                  1.414l-12-12a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6">
          <div class="text-xl">
            <nuxt-link
              v-for="(l, ix) in links"
              :key="ix"
              @click="hideSidebar"
              :to="l.link"
              title="Link to home page"
              class="flex items-center px-4 py-2 mb-3 rounded hover:bg-gray-100 nuxt-link-exact-active nuxt-link-active"
            >
              {{ l.text }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { CodeIcon, UploadCloudIcon } from 'vue-feather-icons'
export default {
  data() {
    return {
      sidebar: false,
      links: [
        { link: '/', text: 'Home' },
        { link: '/login', text: 'Login' },
        { link: '/classes', text: 'Classes' },
        { link: '/forms', text: 'Forms' },
      ]
    }
  },
  components: {
    CodeIcon,
    UploadCloudIcon
  },
  methods: {
    showSidebar(e) {
      this.sidebar = true
    },
    hideSidebar(e) {
      this.sidebar = false
    }
  }
}
</script>
<style>
.nav {
  @apply mx-2 tracking-wide  font-medium px-3 py-2 rounded-lg;
}
.nav:hover {
  @apply bg-gray-100;
}
.selected {
  @apply font-semibold text-white bg-black;
}
.selected:hover {
  @apply bg-gray-500;
}
.blur {
  backdrop-filter: saturate(180%) blur(5px);
}
.nav:hover {
  @apply text-blue-600;
}
.nav {
  font-weight: 600;
  @apply uppercase;
}
</style>