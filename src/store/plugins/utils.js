export const getMutationType = (mutationType) => {
	const split = mutationType.split('/');
	return split[split.length - 1]
}