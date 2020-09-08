<template>
	<section class="inbox">
		<div class="container bg-white">
			<h1 class="text-center inbox-title">Add product</h1>
			<div class="row justify-content-center">
				<form action class="text-center">
					<div class="d-flex flex-column text-left mb-4">
						<label for="title">TITLE</label>
						<input
							class="inbox-input"
							type="text"
							id="title"
							placeholder="For example: Iron man suit"
						/>
					</div>
					<div class="d-flex flex-column text-left mb-4">
						<label for="location">LOCATION</label>
						<input
							class="inbox-input"
							type="text"
							id="location"
							placeholder="For example: Los Angeles, CA"
						/>
					</div>
					<div class="d-flex flex-column text-left mb-4">
						<label for="description">DESCRIPTION</label>
						<textarea
							class="inbox-input inbox-textarea"
							id="description"
							placeholder="For example: Iron man suit"
						></textarea>
					</div>
					<div class="d-flex flex-column text-left mb-4 inbox-photos justify-content-center">
						<label for="photos" class="inbox-upload mb-0"></label>
						<input class="inbox-input d-none" type="file" id="photos" />
					</div>
					<div class="d-flex flex-column text-left mb-4">
						<label for="price">PRICE</label>
						<input class="inbox-input" type="text" id="price" placeholder="432" />
					</div>
					<button type="submit" class="inbox-submit mb-4">SUBMIT</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Inbox",
	data: () => {
		return {};
	},
	methods: {
		getroute() {
			console.log(this.$route.path);
		},
	},
	created() {
		this.getroute();
	},
};
</script>

<style lang="scss" scoped>
.inbox {
	background-color: #fff;
	margin-right: auto;
	margin-left: auto;
	margin-top: 40px;
	width: 1136px;
	box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
	border-radius: 7px;
	&-input {
		background: #f9fafb;
		border: 1px solid #dedee0;
		box-sizing: border-box;
		border-radius: 5px;
		width: 664px;
		height: 58px;
		padding: 20px;
	}
	&-title {
		padding-top: 36px;
		padding-bottom: 36px;
	}
	&-textarea {
		height: 183px;
	}
	&-submit {
		background: #349a89;
		border-radius: 5px;
		width: 377px;
		height: 58px;
		border: none;
		color: #f9fafb;
	}
	&-photos {
		background: #f9fafb;
		border: 1px solid #dedee0;
		box-sizing: border-box;
		border-radius: 5px;
		height: 124px;
		padding: 15px;
	}
	&-upload {
		background: #e4e4e4;
		border-radius: 4px;
		width: 92px;
		height: 92px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&::before {
			content: "";
			background: url("../assets/images/plus.png");
			display: block;
			height: 38px;
			width: 38px;
		}
	}
}
</style>