<script>
  import { base } from '$app/paths'
  export let rating
  let grades = [1, 2, 3, 4, 5]
</script>

<div class="star-rating">
  {#each grades as grade}
    {#if grade <= rating}
      <i class="svg-rating-plain svg-rating-plain-dims" />
    {:else if grade - rating == 0.5}
      <i class="svg-rating-half svg-rating-half-dims" />
    {:else}
      <i class="svg-rating-empty svg-rating-empty-dims" />
    {/if}
  {/each}
</div>

<style>
  .star-rating {
    display: flex;
  }
  .star-rating > i {
  }
</style>
