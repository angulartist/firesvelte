<script>
	// Components
	import Todos from "./components/todos/todos.svelte";
</script>

<svelte:head>
	<title>Todo List</title>
</svelte:head>

<header>
	<h1>TodoList powered by Svelte & Firebase</h1>
</header>
<main>
	<Todos/>
</main>
<footer>
	Built in 5s. :fire:
</footer>
