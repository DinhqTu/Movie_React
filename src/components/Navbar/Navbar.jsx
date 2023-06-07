import NavBarItem from './NavBarItem';

const category = [
  {
    label: 'Loại phim:',
    selected: '- Tất cả -',
    select: [
      {
        name: 'Phim lẻ',
        value: 'movie',
      },
      {
        name: 'Phim bộ',
        value: 'tv',
      },
    ],
  },
  {
    label: 'Thể loại:',
    selected: '- Tất cả -',
    select: [
      {
        id: 28,
        name: 'Phim Hành Động',
      },
      {
        id: 12,
        name: 'Phim Phiêu Lưu',
      },
      {
        id: 16,
        name: 'Phim Hoạt Hình',
      },
      {
        id: 35,
        name: 'Phim Hài',
      },
      {
        id: 80,
        name: 'Phim Hình Sự',
      },
      {
        id: 99,
        name: 'Phim Tài Liệu',
      },
      {
        id: 18,
        name: 'Phim Chính Kịch',
      },
      {
        id: 10751,
        name: 'Phim Gia Đình',
      },
      {
        id: 14,
        name: 'Phim Giả Tượng',
      },
      {
        id: 36,
        name: 'Phim Lịch Sử',
      },
      {
        id: 27,
        name: 'Phim Kinh Dị',
      },
      {
        id: 10402,
        name: 'Phim Nhạc',
      },
      {
        id: 9648,
        name: 'Phim Bí Ẩn',
      },
      {
        id: 10749,
        name: 'Phim Lãng Mạn',
      },
      {
        id: 878,
        name: 'Phim Khoa Học Viễn Tưởng',
      },
      {
        id: 10770,
        name: 'Chương Trình Truyền Hình',
      },
      {
        id: 53,
        name: 'Phim Gây Cấn',
      },
      {
        id: 10752,
        name: 'Phim Chiến Tranh',
      },
      {
        id: 37,
        name: 'Phim Miền Tây',
      },
    ],
  },
  {
    label: 'Quốc gia:',
    selected: '- Tất cả -',
    select: [
      {
        name: 'Việt Nam',
      },
      {
        name: 'Hàn Quốc',
      },
      {
        name: 'Thái Lan',
      },
      {
        name: 'Ấn Độ',
      },
    ],
  },
  {
    label: 'Năm:',
    selected: '- Tất cả -',
    select: [
      {
        name: '2023',
      },
      {
        name: '2022',
      },
      {
        name: '2021',
      },
      {
        name: '2020',
      },
      {
        name: '2019',
      },
      {
        name: '2018',
      },
      {
        name: '2017',
      },
      {
        name: '2016',
      },
      {
        name: '2015',
      },
      {
        name: 'Trước 2015',
      },
    ],
  },
  {
    label: 'Thời lượng:',
    selected: '- Tất cả -',
    select: [
      {
        name: 'Dưới 30 phút',
      },
      {
        name: '30 phút - 1 tiếng',
      },
      {
        name: '1 - 1.5 tiếng',
      },
      {
        name: '1.5 - 2 tiếng ',
      },
      {
        name: '2 - 3 tiếng',
      },
      {
        name: '3 tiếng trở lên',
      },
    ],
  },
  {
    label: 'Sắp xếp:',
    selected: 'Ngày cập nhật',
    select: [
      {
        name: 'Ngày phát hành',
      },
      {
        name: 'Điểm đánh giá',
      },
    ],
  },
];

function Navbar() {
  // const []
  return (
    <div>
      <div className="flex flex-wrap bg-[#091C2D] rounded-sm mb-[10px]">
        {category.map((item, index) => (
          <NavBarItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
