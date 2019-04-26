<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  // Meta
  const dispatch = createEventDispatcher();

  // Actions
  const remove = () => {
    dispatch("removeEvent", { id });
  };

  // Props
  export let id;
  export let action;
</script>

<li 
    in:fly="{{ x: 100, duration: 175 }}" 
    out:fade="{{ duration: 175 }}" 
    on:click={remove}>{action}</li>