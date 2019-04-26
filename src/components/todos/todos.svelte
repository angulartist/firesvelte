<script>
  import { db } from "./../../firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // Components
  import Todo from "./todo.svelte";
  import AddTodo from "./add.svelte";

  // Meta
  const query = db
    .collection("todos")
    .orderBy("createdAt", "desc")
    .limit(10);

  const todos$ = collectionData(query, "id").pipe(startWith([]));

  // Actions
  const removeTodo = event => {
    const { id } = event.detail;
    return db.doc(`todos/${id}`).delete();
  };
</script>

<section>
    <AddTodo/>

    <article>
        <ul>
            {#each $todos$ as todo}
                <Todo on:removeEvent={removeTodo} {...todo} />
            {/each}
        </ul>
    </article>
</section>