<template>
	<section class="main-layout">
		<TheNavbar/>
			<router-view/>
		<TheFooter/>
	</section>
</template>

<script>

import TheNavbar from '../components/Base/TheNavbar'
import TheFooter from '../components/Base/TheFooter'
	
export default {

	name:'MainLayout',

	components:{
		TheNavbar,
		TheFooter
	}

}

</script>

<style lang="scss" scoped>
	.main-layout {
	
	}
</style>