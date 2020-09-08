<template>
	<section class="login">
		<form action="">
			<div class="form-group">
				<div class="login-form d-flex flex-column">
				<h3 class="text-center">Login</h3>
				<div class="mx-auto d-flex flex-column">
					<label for="email">Email</label>
					<input v-model="email" type="text" id="email" placeholder="Example@gmail.com" class="login-form__input">
				</div>
				<div class="mx-auto d-flex flex-column position-relative">
					<label for="password">PASSWORD</label>
					<input v-model="password" type="text" id="password" class="login-form__input">
					<span><img class="show-hide-password" src="../../assets/images/Shape.svg" alt=""></span>
				</div>
				<router-link to="/"><div class="text-right pb-3">Don’t remember password?</div></router-link>
				<button @click.prevent="submitHandler" class="btn login-form__submit mx-auto text-white">Continue</button>
				</div>
			</div>
			<div class="login-form text-center">
				I have no account, <router-link to="/register">REGISTER NOW</router-link>
			</div>
		</form>
	</section>
</template>

<script>
export default {
	name:'LogginModal',

	data:()=>{
		return{
			email:'',
			password:''
		}
	},

	methods: {
		async	submitHandler() {
			const formData = {
				email:this.email,
				password:this.password
			}
			try {
				await this.$store.dispatch('login',formData)
				this.$router.push('/')
			}
			catch(e){
				console.log(e);
			}
			
		}
	}
}
</script>

<style lang="scss" scoped>
	.login{
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