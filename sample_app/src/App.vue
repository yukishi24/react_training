<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <router-link to="/sample">hello</router-link>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
