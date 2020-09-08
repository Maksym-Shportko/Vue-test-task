<template>
	<section class="search-form pb-3">
		<div class="container">
			<div class="row justify-content-center">
					<div class="search-wrapper d-flex flex-wrap">
						<div class="mb-2 search-input position-relative">
							<input type="text" class="search-form-input " placeholder="Search products by name">
						</div>
						<div class="mb-2 location-input position-relative">
						<input type="text" class="search-form-input" placeholder="Location">
						</div>
						<button class="mb-2 search-button text-white">SEARCH</button>
					</div>
			</div>
		</div>
	</section>
</template>


<script>

export default {

	name:'SearchForm'

}

</script>


<style lang="scss" scoped>
	.search-form-input {
		width: 457px;
		height: 50px;
		background: #FFFFFF;
    border-radius: 4px;
		margin-right: 7px;
		padding: 0px 10px 0px 35px;
	}
	.search-input:before{
		content: '';
		background: url('../assets/images/search_icon.svg') no-repeat;
		width: 17px;
    height: 18px;
    display: inline-block;
    position: absolute;
    top: 17px;
    left: 10px;
	}
	.location-input input {
		width: 198px;
	}
	.location-input::before{
		content: '';
		background: url('../assets/images/location_filled.svg') no-repeat;
		width: 17px;
		height: 18px;
		display: inline-block;
		position: absolute;
		top: 17px;
		left: 10px;
	}
	.search-button {
		background: #3E3961;
		border-radius: 4px;
		width: 176px;
		height: 50px;
		border:none
	}
	.search-wrapper{
		margin-top: 30px;
	}
</style>