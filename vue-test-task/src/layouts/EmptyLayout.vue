<template>
  <div class="empty-layout">
		<TheNavbar/>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from '../components/Base/TheNavbar.vue'
export default {
	name:'EmptyLayout',
	components:{TheNavbar}
}
</script>

<style lang="scss" scoped>
	.empty-layout{
		background-color: #F2F2F2;
		width: 100%;
		height: 100vh;
	}
</style>