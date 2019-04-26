<script>
 import { db, tsmp } from "./../../firebase.js";

 // Meta
 const todosRef = db.collection("todos");

 // Actions
 const addTodo = () =>
   todosRef.add({ action: "That's another task...", createdAt: tsmp });
</script>

<aside>
    <button on:click={addTodo}>Add a todo</button>
</aside>
