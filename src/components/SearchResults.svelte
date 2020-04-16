<script>

export let results;
export let type;
import SearchResult from "./SearchResult.svelte";
</script>

<style>
  .search-results {
    list-style: none;
    display: grid;
    gap: 40px 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>

<!-- <ul class="search-results">
  {#each results.novelupdates as result}
    <SearchResult novel={result} type={type} />
  {/each}
</ul>
<ul class="search-results">
  {#each results.lncrawl as result}
    <SearchResult novel={result} type={type} />
  {/each}
</ul>
<ul class="search-results">
  {#each results.goodreads as result}
    <SearchResult novel={result} type={type} />
  {/each}
</ul> -->