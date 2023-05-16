import MovieCard from "../../components/MovieCard";

const dataMovie = [
    {   
        id:1,
        category:'phim đề cử',
        movies: [
            {
                id:1,
                image:'	https://image.tmdb.org/t/p/w342/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg',
                nameVi:'Khế Ước',
                nameEn:"Guy Ritchie's The Convenant"
            },{
                id:2,
                image:'	https://image.tmdb.org/t/p/w342/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
                nameVi:'Phim anh em Super Mario',
                nameEn:"The Super Mario Bros. Movie"
            },{
                id:3,
                image:'	https://image.tmdb.org/t/p/w342/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg',
                nameVi:'Tay Sai Của Quỷ',
                nameEn:"Renfield"
            },{
                id:4,
                image:' https://image.tmdb.org/t/p/w342/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
                nameVi:'Ma Cây Trỗi Dậy',
                nameEn:"Evil Dead Rise"
            },{
                id:5,
                image:'https://image.tmdb.org/t/p/w342/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg',
                nameVi:'Ngục tối và rồng: Danh dự của kẻ trộm',
                nameEn:"Dungeons & Dragons: Honor Among Thieves"
            }
        ]
    },{   
        id:2,
        category:'phim lẻ mới cập nhật',
        movies: [
            {
                id:1,
                image:'	https://image.tmdb.org/t/p/w342/aX0H63vho7rZ9Rm3I567Zf00Z1t.jpg',
                nameVi:'Khế Ước',
                nameEn:"Guy Ritchie's The Convenant"
            },{
                id:2,
                image:'	https://image.tmdb.org/t/p/w342/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
                nameVi:'Phim anh em Super Mario',
                nameEn:"The Super Mario Bros. Movie"
            },{
                id:3,
                image:'	https://image.tmdb.org/t/p/w342/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg',
                nameVi:'Tay Sai Của Quỷ',
                nameEn:"Renfield"
            },{
                id:4,
                image:' https://image.tmdb.org/t/p/w342/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg',
                nameVi:'Ma Cây Trỗi Dậy',
                nameEn:"Evil Dead Rise"
            },{
                id:5,
                image:'https://image.tmdb.org/t/p/w342/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg',
                nameVi:'Ngục tối và rồng: Danh dự của kẻ trộm',
                nameEn:"Dungeons & Dragons: Honor Among Thieves"
            },{
                id:6,
                image:'https://image.tmdb.org/t/p/w342/tn4vf3DDQuP96VQ9PQR1xEXrXqH.jpg',
                nameVi:'Tây Hành Kỷ: Cùng Kỳ Địa Động',
                nameEn:"The Westward: The Cave of the Poor"
            },{
                id:7,
                image:'	https://image.tmdb.org/t/p/w342/sq3Ntm8Y2ozLg4oHQnNfRZ9vYdW.jpg',
                nameVi:'The Legend & Butterfly',
                nameEn:"The Legend & Butterfly"
            },{
                id:8,
                image:'https://image.tmdb.org/t/p/w342/tn4vf3DDQuP96VQ9PQR1xEXrXqH.jpg',
                nameVi:'Tây Hành Kỷ: Cùng Kỳ Địa Động',
                nameEn:"The Westward: The Cave of the Poor"
            },{
                id:9,
                image:'https://image.tmdb.org/t/p/w342/tn4vf3DDQuP96VQ9PQR1xEXrXqH.jpg',
                nameVi:'Tây Hành Kỷ: Cùng Kỳ Địa Động',
                nameEn:"The Westward: The Cave of the Poor"
            },{
                id:10,
                image:'https://image.tmdb.org/t/p/w342/tn4vf3DDQuP96VQ9PQR1xEXrXqH.jpg',
                nameVi:'Tây Hành Kỷ: Cùng Kỳ Địa Động',
                nameEn:"The Westward: The Cave of the Poor"
            }
        ]
    }
]

function Home() {
    return <div>
        {dataMovie.map((movie, index) => (
            <div key={index}>
                {movie.id ===1 ? <h2 key={index} className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">{movie.category}</h2> 
                : <h2 key={index} className="text-[#b1a21e] uppercase text-2xl font-medium mb-2 mt-8 pb-[3.2px] border-b-[1px] border-b-[#1b3c5d]">{movie.category}</h2>} 
                <section className="grid grid-cols-5 gap-[16px] ">
                    {movie.movies.map((card) => (
                        <MovieCard key={card.id} image={card.image} nameEn={card.nameEn} nameVi={card.nameVi} />
                    ))}
                </section>
            </div>
        ))}
    </div>;
}

export default Home;