<template>
	<v-dialog
		:value="true"
		:width="getWidth"
		@click:outside="$emit('close')"
	>
		<v-card>
			<v-card-title class="dialog-header">
				<slot name="header"></slot>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-text>
				<slot name="content"></slot>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<slot name="footer"></slot>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'CustomDialog',

	props: {
		width: {
			type: String,
			default: 'm'
		}
	},

	data() {
		return {
			widthSizes: [
				{ value: 's', width: 250 },
				{ value: 'm', width: 500 },
				{ value: 'l', width: 750 },
			],
		}
	},

	computed: {
		getWidth() {
			return this.widthSizes.find(size => size.value === this.width).width;
		}
	}

}
</script>

<style>

</style>