<template>
	<v-btn outlined class="mx-3" @click.stop="method">
		<span class="mr-2">{{ label }}</span>
		<v-icon v-if="icon">{{ icon }}</v-icon>
	</v-btn>
</template>


<script>
export default {
	name: 'HeaderAction',

	props: {
		method: {
			type: Function,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: false,
		},
		name: {
			type: String,
			required: true,
		},
	}
}
</script>

<style>

</style>