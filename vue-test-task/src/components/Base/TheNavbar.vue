<template>
  <section v-bind:class="{ thenavbar : isLayoutMain}">
    <nav class="navbar navbar-expand-lg navbar-light bg-transperent pt-3">
      
      <router-link to="/">
      
        <img class="navbar-logo" src="../../assets/images/Logofull.svg" alt />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link
            to="/inbox"
            class="btn sell-btn mr-5"
            type="submit"
            v-if="this.$route.path != '/inbox'"
          >{{layout ? 'ADD+' : 'SELL'}}
          </router-link>
          <router-link class="text-white" to="/login">LOGIN</router-link>
          <span>
            <img class="mx-5" src="../../assets/images/001-heart-outline.svg" alt />
          </span>
        </form>
      </div>
    </nav>
    <SearchForm v-if="this.$route.path == '/'" />
  </section>
</template>

<script>

import SearchForm from "../../components/SearchForm";

export default {

	name: "TheNavbar",
	
	components: { SearchForm },
	
  data: () => {

    return {
      isUserAuth: false,
      layout: false,
      isLayoutMain:false
		};
		
	},
	
  methods: {

    isMainLayout() {
      if (this.$route.meta.layout == "main") {
        this.isLayoutMain = true;
        this.layout = true
        console.log(this.$route.meta.layout);
      }
		},
		
  },
  computed: {

	},
	
  created() {

		this.isMainLayout();
		
  },
};

</script>

<style lang="scss" scoped>
.thenavbar{
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
}
.sell-btn {
  background: #349a89;
  border-radius: 4px;
  width: 130px;
  height: 30px;
  font-size: 14px;
  line-height: 1;
  color: #ffffff;
}
.navbar-logo {
  margin-left: 144px;
}
.form-inline {
  margin-right: 75px;
}
</style>