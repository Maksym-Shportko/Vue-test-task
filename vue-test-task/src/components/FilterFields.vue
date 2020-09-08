<template>
	<section class="filter">
		<div class="container">
			<div class="row justify-content-center">
				<div class="filter-wrapper">
						<select class="custom-select filter__get-category" id="inputGroupSelect01">
							<option selected>Choose...</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<input type="text" class="filter__price">
						<input type="text" class="filter__price">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name:'FilterFields'
}
</script>

<style lang="scss" scoped>
	.filter {
			&-wrapper{
				background: #FFFFFF;
				box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.217111);
				border-radius: 4px;
				padding: 10px;
				width: 840px;
				margin-top: 40px;
			}
			&__get-category{
				background: #F9FAFB;
				border: 1px solid #DEDEE0;
				box-sizing: border-box;
				border-radius: 5px;
				width: 285px;
				height: 35px;
				margin-right: 20px;
			}
			&__price{
				background: #F9FAFB;
				border: 1px solid #DEDEE0;
				box-sizing: border-box;
				border-radius: 5px;
				width: 143px;
				height: 35px;
				margin-right: 20px;

			}

	}
</style>