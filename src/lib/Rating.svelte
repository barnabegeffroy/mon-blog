<script>
  import { base } from '$app/paths'
  export let rating
  let grades = [1, 2, 3, 4, 5]
</script>

<div class="star-rating">
  {#each grades as grade}
    {#if grade <= rating}
      <img src={base + '/rating/plain.svg'} width="30px" alt="" />
    {:else if grade - rating == 0.5}
      <img src={base + '/rating/half.svg'} width="30px" alt="" />
    {:else}
      <img src={base + '/rating/empty.svg'} width="30px" alt="" />
    {/if}
  {/each}
</div>

<style>
  .star-rating {
    display: flex;
  }
</style>
