<script>
/*   import { Button, Checkbox, Switch, Snackbar } from "smelte";
  export let name;

  let showSnackbar = false;
*/
  import Header from "./components/Header.svelte";
  import Search from "./components/Search.svelte";
  import SearchResults from "./components/SearchResults.svelte";

  export let title;

  let searchResults = {novelupdates: [], lncrawl: [], goodreads: []};
  let searchQuery = '';
  let searchTerm = null;
  let isLoadingSearch = false;
  let totalSearchResults = null;

  function handleSubmit() {
    searchTerm = searchQuery.trim();
    searchResults = {novelupdates: [], lncrawl: [], goodreads: []};
    totalSearchResults = null;

    if (!searchTerm) return;

    search();
  }

  function search() {
    isLoadingSearch = true;

    const endpoint = process.env.API_URL + process.env.SEARCH_ENDPOINT;

    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(data => {
        if (data.total === 0) {
          alert("No search results.")
          return;
        }
        console.log(data);

        // use spread to cause an update
        searchResults.novelupdates = [...searchResults.novelupdates, ...data.novelupdates];
        searchResults.lncrawl = [...searchResults.lncrawl, ...data.lncrawl];
        searchResults.goodreads = [...searchResults.goodreads, ...data.goodreads];

        console.log(searchResults);

        totalSearchResults = searchResults.novelupdates.length + searchResults.lncrawl.length + searchResults.goodreads.length;
      }).catch(() => alert("Error while searching"))
      .finally(() => {
        isLoadingSearch = false;
      });
  }
</script>

<Header {title} />
<Search bind:query={searchQuery} handleSubmit={handleSubmit} />

<SearchResults results={searchResults.novelupdates} type={"novelupdates"} />
<SearchResults results={searchResults.lncrawl} type={"lncrawl"} />
<SearchResults results={searchResults.goodreads} type={"goodreads"} />

<!-- <div class="container mx-auto h-full items-center">
  <h1>Hello {name}!</h1>
  <h2>Hello {name}!</h2>
  <h3>Hello {name}!</h3>
  <h4>Hello {name}!</h4>
  <h5>Hello {name}!</h5>
  <h6>Hello {name}!</h6>
  <div class="py-6">
    <Button>Button</Button>
  </div>
  <div class="py-6">
    <Switch label="Switch" />
  </div>

  <Button on:click={() => (showSnackbar = true)}>Show snackbar</Button>

  <Snackbar bind:value={showSnackbar}>
  <div>Have a nice day.</div>
  <div slot="action">
    <Button text on:click={() => (showSnackbar = false)}>Dismiss</Button>
  </div>
</Snackbar>
</div> --->
