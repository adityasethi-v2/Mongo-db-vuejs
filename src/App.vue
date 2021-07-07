<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Create Student</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Students</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.router-link-exact-active {
  color: #ffffff !important;
}

li.nav-item {
  padding: 0 20px;
}
</style>
