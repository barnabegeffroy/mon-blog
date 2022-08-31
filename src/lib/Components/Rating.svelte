<script>
  export let rating
  let grades = [1, 2, 3, 4, 5]
</script>

<div class="star-rating">
  {#each grades as grade}
    {#if grade <= rating}
      <i class="svg-rating-plain svg-sprite-icon-applis" />
    {:else if grade - rating == 0.5}
      <i class="svg-rating-half svg-sprite-icon-applis" />
    {:else}
      <i class="svg-rating-empty svg-sprite-icon-applis" />
    {/if}
  {/each}
</div>

<style>
  .star-rating {
    display: flex;
  }
  .star-rating > i {
    width: 30px;
    height: 30px;
  }
</style>
