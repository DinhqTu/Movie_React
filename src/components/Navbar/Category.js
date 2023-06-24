export const category = [
  {
    label: 'Loại phim:',
    key: 'type',
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
    key: 'genre',
    selected: '- Tất cả -',
    select: [
      {
        value: 28,
        name: 'Phim Hành Động',
      },
      {
        value: 12,
        name: 'Phim Phiêu Lưu',
      },
      {
        value: 16,
        name: 'Phim Hoạt Hình',
      },
      {
        value: 35,
        name: 'Phim Hài',
      },
      {
        value: 80,
        name: 'Phim Hình Sự',
      },
      {
        value: 99,
        name: 'Phim Tài Liệu',
      },
      {
        value: 18,
        name: 'Phim Chính Kịch',
      },
      {
        value: 10751,
        name: 'Phim Gia Đình',
      },
      {
        value: 14,
        name: 'Phim Giả Tượng',
      },
      {
        value: 36,
        name: 'Phim Lịch Sử',
      },
      {
        value: 27,
        name: 'Phim Kinh Dị',
      },
      {
        value: 10402,
        name: 'Phim Nhạc',
      },
      {
        value: 9648,
        name: 'Phim Bí Ẩn',
      },
      {
        value: 10749,
        name: 'Phim Lãng Mạn',
      },
      {
        value: 878,
        name: 'Phim Khoa Học Viễn Tưởng',
      },
      {
        value: 10770,
        name: 'Chương Trình Truyền Hình',
      },
      {
        value: 53,
        name: 'Phim Gây Cấn',
      },
      {
        value: 10752,
        name: 'Phim Chiến Tranh',
      },
      {
        value: 37,
        name: 'Phim Miền Tây',
      },
    ],
  },
  {
    label: 'Quốc gia:',
    key: 'country',
    selected: '- Tất cả -',
    select: [
      {
        name: 'Mỹ',
        value: 'am',
      },
      {
        name: 'Anh',
        value: 'en',
      },
      {
        name: 'Việt Nam',
        value: 'vi',
      },
      {
        name: 'Ý',
        value: 'it',
      },
      {
        name: 'Nhật Bản',
        value: 'ja',
      },
      {
        name: 'Hàn Quốc',
        value: 'ko',
      },
      {
        name: 'Thái Lan',
        value: 'tl',
      },
      {
        name: 'Ấn Độ',
        value: 'in',
      },
      {
        name: 'Trung Quốc',
        value: 'cn',
      },
    ],
  },
  {
    label: 'Năm:',
    key: 'year',
    selected: '- Tất cả -',
    select: [
      {
        name: '2023',
        value: '2023',
      },
      {
        name: '2022',
        value: '2022',
      },
      {
        name: '2022',
        value: '2021',
      },
      {
        name: '2020',
        value: '2020',
      },
      {
        name: '2019',
        value: '2019',
      },
      {
        name: '2018',
        value: '2018',
      },
      {
        name: '2017',
        value: '2017',
      },
      {
        name: '2016',
        value: '2016',
      },
      {
        name: '2015',
        value: '2015',
      },
      {
        name: '2014',
        value: '2014',
      },
    ],
  },
  {
    label: 'Thời lượng:',
    key: 'time',
    selected: '- Tất cả -',
    select: [
      {
        name: 'Dưới 30 phút',
        value: 30,
      },
      {
        name: 'Dưới 1 tiếng',
        value: 60,
      },
      {
        name: 'Dưới 1.5 tiếng',
        value: 90,
      },
      {
        name: 'Dưới 2 tiếng ',
        value: 120,
      },
      {
        name: 'Dưới 3 tiếng',
        value: 180,
      },
      {
        name: 'Dưới 4 tiếng ',
        value: 240,
      },
    ],
  },
  {
    label: 'Sắp xếp:',
    key: 'arrange',
    selected: 'Phổ biến nhất',
    select: [
      {
        name: 'Ngày phát hành',
        value: 'primary_release_date.desc',
      },
      {
        name: 'Điểm đánh giá',
        value: 'vote_count.desc',
      },
    ],
  },
];
