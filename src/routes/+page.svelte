<script>
	import { enhance } from '$app/forms';
	import MTextInput from '../components/MTextInput.svelte';
</script>

<form method="POST" action="?/post" use:enhance>
	<MTextInput placeholder = "Correo electrónico" name = "email"/> <br>
    <MTextInput placeholder = "Nombre de usuario" name = "user"/>
    <button type="submit">Submit</button>
</form>

<style>
</style>
