<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" router-link to = '/chart'>Charts</b-nav-item>
        <b-nav-item href="#" router-link to = '/login'>Login</b-nav-item>
        <b-nav-item href="#" router-link to = '/register'>Register</b-nav-item>
        <b-nav-item href="#" router-link to = '/secret'>Secret</b-nav-item>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <top-header></top-header>
</div>

</template>

<script>

import TopHeader from './Top-header.vue'
export default {
    name: 'Navbar',
    components: {
      "top-header": TopHeader
        
    }
   ,methods: {
      getPic(index) {
      return '../assets/' + this.pics[index] + '.png'
      }
    } 
}
</script>
<style scoped>
  .home img {
    padding-top: 100px;
    padding-left: 30px;
    border-radius: 5px
  }
</style>