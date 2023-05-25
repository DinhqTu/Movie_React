import MovieCard from "../../components/MovieCard";

const movies = [
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

function Search() {
    return <div>
        <input type="text" className="focus:border-[#428bca] focus:shadow-boxShadow w-full h-[50px] outline-none px-[18px] text-xl mb-4 text-black rounded" placeholder="Nhập tên phim..." />
        <section className="grid grid-cols-5 gap-[16px] ">
            {movies.map((movie,index)=> (
                <MovieCard key={index} image={movie.image} nameEn={movie.nameEn} nameVi={movie.nameVi}/>
            ))}
        </section>
    </div>;
}

export default Search;