export const formatNameToTitle = (name) => {
	return (name.charAt(0).toUpperCase() + name.slice(1)).replace(/-/g, ' ')
}