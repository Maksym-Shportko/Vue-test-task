<template>
	<section class="filter mb-3">
		<div class="container">
			<div class="row justify-content-center">
				<div class=" filter-wrapper d-flex align-items-center flex-wrap">
						<div class="filter-select position-relative">
							<select class="custom-select filter__get-category" id="inputGroupSelect01">
								<option selected>Choose Category</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
						</select>
						</div>
						<input type="text" class="filter__price" placeholder="Price from (USD)">
						<input type="text" class="filter__price" placeholder="Price to (USD)">
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
			&-select {
					&::before {
					content: '';
					background: url('../assets/images/grid.svg');
					width: 25px;
					height: 25px;
					background-repeat: no-repeat;
					position: absolute;
					top: 13px;
					left: 10px;
				}
				&::after {
					content: '';
					background: url('../assets/images/Icon.svg');
					width: 25px;
					height: 25px;
					display: block;
					background-repeat: no-repeat;
					position: absolute;
					right: 20px;
					bottom: 0px;
				}
			}
			&__get-category{
				background: #F9FAFB;
				border: 1px solid #DEDEE0;
				box-sizing: border-box;
				border-radius: 5px;
				width: 285px;
				height: 40px;
				margin-right: 20px;
				padding: 7px 40px;
			}
			&__price{
				background: #F9FAFB;
				border: 1px solid #DEDEE0;
				box-sizing: border-box;
				border-radius: 5px;
				width: 143px;
				height: 35px;
				margin-right: 20px;
				padding: 10px;
			}

	}
</style>