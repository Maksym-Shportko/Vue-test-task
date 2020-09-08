<template>
	<section class="thenavbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-traynsperent pt-3">
			<router-link to="/"><img class="navbar-logo" src='../../assets/images/Logofull.svg' alt=""></router-link>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<button class="btn sell-btn mr-5" type="submit">SELL</button>
				<router-link to="/login">LOGIN</router-link>
				<span>
					<img class="mx-5" src="../../assets/images/001-heart-outline.svg" alt="">
				</span>
			</form>
		</div>
		</nav>
	</section>
</template>

<script>
	export default {
		name: "TheNavbar",
		data:()=>{
			return{
				isUserAuth:false,
				imgPath:'../../assets/images/Logofull.svg'
			}
		},
		computed:{
			// layout(){

			// }
		},
		created(){
			this.layout
		}
	}
</script>

<style lang="scss" scoped>
	.sell-btn{
		background: #349A89;
		border-radius: 4px;
		width: 130px;
		height: 30px;
		font-size: 14px;
		line-height: 1;
		color: #ffffff;
	}
	.navbar-logo{
		margin-left: 97px;
	}
	.form-inline{
		margin-right: 160px;
	}
</style>