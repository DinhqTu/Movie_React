import MovieCard from '../../components/MovieCard';

function Collection() {
  return (
    <div>
      <h2 className="text-3xl text-center pb-4">Bộ sưu tập phim của bạn</h2>
      <section className="grid grid-cols-5 gap-4">
        <MovieCard
          image={'https://image.tmdb.org/t/p/w342/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'}
          nameEn={'Spider-Man: Across the Spider-Verse'}
          nameVi={'Spider-Man: Across the Spider-Verse'}
          path={'569094'}
          genre={'movie'}
        />
        <MovieCard
          image={'https://image.tmdb.org/t/p/w342/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'}
          nameEn={'Spider-Man: Across the Spider-Verse'}
          nameVi={'Spider-Man: Across the Spider-Verse'}
          path={'569094'}
          genre={'movie'}
        />
        <MovieCard
          image={'https://image.tmdb.org/t/p/w342/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'}
          nameEn={'Spider-Man: Across the Spider-Verse'}
          nameVi={'Spider-Man: Across the Spider-Verse'}
          path={'569094'}
          genre={'movie'}
        />
      </section>
    </div>
  );
}

export default Collection;
