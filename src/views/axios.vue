<template>
	<div>
		{{ info }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: null,
			body: {
				email: 'rumman.fahim97@gmail.com',
				password: '1234567890',
			},
		};
	},
	methods: {
		apiSuccessHandler(response) {
			console.log(response);
			this.info = response;
		},
		apiErrorHandler(error) {
			// will show you the error response
			console.log('error.response', error.response);
			// will show you the error message from backend
			console.log('error.response.data', error.response.data);
			// will show you error status
			console.log('error.response.status', error.response.status);
		},
	},
	mounted() {
		console.log('Started Api Call');
		this.axios
			.post('https://giraffeapp.co/auth/login', this.body)
			.then((response) => {
				// success
				this.apiSuccessHandler(response);
			})
			.catch((error) => {
				// error
				this.apiErrorHandler(error);
			});
		console.log('After API call line');
	},
};
</script>

<style scoped></style>
