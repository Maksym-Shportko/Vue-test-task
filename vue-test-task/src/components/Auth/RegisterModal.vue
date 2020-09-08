<template>
	<section class="register">
		<form action="">
			<div class="form-group">
				<div class="register-form d-flex flex-column">
				<h3 class="text-center">Register</h3>
				<div class="mx-auto d-flex flex-column">
					<label for="email">Email</label>
					<input v-model="email" type="text" id="email" placeholder="Example@gmail.com" class="register-form__input">
				</div>
					<div class="mx-auto d-flex flex-column">
					<label for="full-name">full-name</label>
					<input v-model="fullName" type="text" id="full-name" placeholder="Tony Stark" class="register-form__input">
				</div>
				<div class="mx-auto d-flex flex-column position-relative">
					<label for="password">PASSWORD</label>
					<input v-model="password" type="text" id="password" class="register-form__input">
					<span><img class="show-hide-password" src="../../assets/images/Shape.svg" alt=""></span>
				</div>
					<div class="mx-auto d-flex flex-column position-relative">
					<label for="password">PASSWORD AGAIN</label>
					<input v-model="confirmPassword" type="text" id="password" class="register-form__input">
					<span><img class="show-hide-password" src="../../assets/images/Shape.svg" alt=""></span>
				</div>
				<button class="btn register-form__submit mx-auto text-white mt-3">Continue</button>
				</div>
			</div>
			<div class="register-form text-center">
				I already have an account, <router-link to="/login">LOG IN</router-link>
			</div>
		</form>
	</section>
</template>

<script>
export default {
	name:'RegisterModal',
	data:()=>{
		return{
			email:'',
			fullName:'',
			password:'',
			confirmPassword:''
		}
	},
	computed: {
		layout() {
			return	console.log(this.$route.meta);
		}
	}
}
</script>

<style lang="scss" scoped>
	.register{
		&-form {
			background: #FFFFFF;
			box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
			border-radius: 7px;
			max-width: 425px;
			margin: auto;
			padding: 25px 24px 21px;
			&__input{
				background: #F9FAFB;
				border: 1px solid #DEDEE0;
				box-sizing: border-box;
				border-radius: 5px;
				width: 370px;
				height: 55px;
				padding: 10px; 
			}
			&__submit{
				background: #349A89;
				border-radius: 5px;
				width: 370px;
				height: 55px;
			}
			label{
				font-family: Helvetica;
				font-size: 12px;
				line-height: 14px;
				letter-spacing: 0.3px;
				text-transform: uppercase;
				color: #303030;
				margin: 15px 0 4px;
			}
		}
		.show-hide-password{
			position: absolute;
			right: 20px;
			bottom: 20px;
			cursor: pointer;
		}
	}
	
</style>