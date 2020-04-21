<template>
  <div class="the-navbar__user-meta flex items-center" v-if="user_displayName">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ user_displayName }}</p>
      <small>{{ user_email }}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img v-if="activeUserImg" key="onlineImg" :src="activeUserImg" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="$router.push('/dashboard/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <vs-divider class="m-1" />

          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
      // PROFILE
      activeUserInfo() {
          return this.$store.getters.auth.userData;
      },
      user_displayName() {
          return this.$store.getters['auth/userData']?this.$store.getters['auth/userData'].name:'';
      },
      user_email() {
          return this.$store.getters['auth/userData'].email;
      },
      activeUserImg() {
          return this.$store.getters['auth/userData'].image?`/storage/user/profile-picture/${this.$store.getters['auth/userData'].image}`:this.$store.getters.defaultPhoto;
      }
  },
  methods: {
    logout() {
        this.$vs.loading();
        this.$store.dispatch('auth/logoutJWT')
            .then(() => { this.$vs.loading.close() })
            .catch(error => {
                this.$vs.loading.close();
                this.$vs.notify({
                    title: 'Error',
                    text: error.response.data.error,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });
            });
    },
  }
}
</script>
