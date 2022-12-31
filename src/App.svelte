<script>
  let tmdbToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDkwMDg4N2ZkNTIyYmU4Zjk4NTUxMjI1NjI5NWI0NiIsInN1YiI6IjYzOTdlZjYwMmNlZmMyMDA4NGI1ZjBlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hirqLLTfuFVuw8CKfPhOoGave_yF5EvayFgLPSzUG3c';

  let moviesData = null;

  fetch(
    'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2000&with_watch_monetization_types=flatrate',
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${tmdbToken}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed');
      }

      return response.json();
    })
    .then((data) => {
      moviesData = Object.values(data.results);
      console.log(moviesData);
    });
</script>

<style>
  .movie-container {
    widows: 100vw;
    overflow: auto;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  
  .movie-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .movie-poster {
    width: 300px;
  }
</style>

<h1>2000's Most Popular Movies</h1>
{#if !moviesData}
  <p>No hay datos</p>
{:else}
  <div class="movie-container">
    {#each moviesData as movie}
    <div class="movie-card">
      <img class="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
      <p>{movie.title}</p>
    </div>
  {/each}
  </div>
  
{/if}
