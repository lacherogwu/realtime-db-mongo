<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<ChatMessages />
</template>

<script>
import ChatMessages from './components/ChatMessages.vue';

export default {
	name: 'App',
	components: {
		ChatMessages,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
