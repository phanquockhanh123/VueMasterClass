<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="mx-auto flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl">{{
          company
        }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menu in menuItems"
              :key="menu"
              class="ml-9 h-full first:ml-0"
            >
              <a href="#" class="flex h-full items-center py-2.5">{{ menu }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLogginIn" />
          <action-button v-else @login="loginUser()" text="Sign In" type="primary" />
        </div>
      </div>

      <sub-nav v-if="isLogginIn"/>
    </div>
  </header>
</template>
<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import ProfileImage from '@/components/Navigation/ProfileImage.vue';
import SubNav from '@/components/Navigation/SubNav.vue';

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      company: "LGCNS Careers",
      author: {
        firstName: "Phan Quoc",
        lastName: "Khanh",
      },
      url: "https://google.com",
      menuItems: [
        "Teams",
        "Location",
        "Life at LG CNS",
        "How we hire",
        "Students",
        "Job",
      ],
      isLogginIn: false
    };
  },
  methods: {
    loginUser() {
      this.isLogginIn = true
    }
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLogginIn,
        "h-32": this.isLogginIn
      }
    }
  }
};
</script>
