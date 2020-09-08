<template>
	<section class="main-layout">
		<TheNavbar/>
		<SearchForm/>
		<main>
		<FilterFields/>
			<router-view/>
		</main>
	</section>
</template>

<script>
	import TheNavbar from '../components/Base/TheNavbar'
	import SearchForm from '../components/SearchForm'
	import FilterFields from '../components/FilterFields'

export default {
	name:'MainLayout',
	components:{
		TheNavbar,
		SearchForm,
		FilterFields
	}
}
</script>

<style lang="scss" scoped>
	.main-layout {
		background: linear-gradient(180deg, #090810 0%, #171236 100%);
		height: 166px;
	}
</style>