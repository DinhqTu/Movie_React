import { Link } from 'react-router-dom';

function FilmHot() {
  return (
    <div className="">
      <h1 className="text-3xl uppercase text-center">Top phim được xem nhiều nhất</h1>
      <div>
        <Link>NGÀY</Link>
        <Link>TUẦN</Link>
        <Link>THÁNG</Link>
      </div>
    </div>
  );
}

export default FilmHot;
