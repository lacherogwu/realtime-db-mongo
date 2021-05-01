<template>
	<div class="actions">
		<h2>Send a message</h2>
		<form @submit.prevent="submit">
			<label for="name">Name</label>
			<input type="text" id="name" v-model="formData.name" />

			<label for="message">Messages</label>
			<input type="text" id="message" v-model="formData.message" />

			<button type="submit">Send</button>
		</form>
	</div>
	<div>
		<h1>Messages</h1>
		<div v-for="message in messages">
			<span class="name" style="font-weight: bold">{{ message.by }}: </span>
			<span>{{ message.text }}</span>
		</div>
	</div>
</template>

<script>
import io from 'socket.io-client';
import { ref, reactive } from 'vue';
import axios from 'axios';

export default {
	setup() {
		const socket = io(process.env.VUE_APP_BASE_URL);
		const messages = ref([]);
		const formData = reactive({});

		socket.on('chatMessage', data => {
			messages.value.push(data);
		});

		socket.on('chatMessage-delete', data => (messages.value = messages.value.filter(i => i._id !== data._id)));

		socket.on('chatMessage-update', data => {
			// find item
			let item = messages.value.find(i => i._id === data._id);
			if (!item) return;
			Object.entries(data.updateDescription.updatedFields).forEach(([key, value]) => (item[key] = value));
		});

		const submit = async () => axios.get(`/api/?email=test2@gmail.com&username=${formData.name || ''}&password=orjeqmdk&text=${formData.message || ''}`);
		return { messages, formData, submit };
	},
};
</script>

<style></style>
