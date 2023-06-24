import { AiOutlineMail } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <div className="text-white px-6 pt-12 pb-24 bg-[url('https://xemphim.fun/static/skin/footer-bg.jpg')]">
      <div className="max-w-[1344px] mx-auto">
        <h3>
          Phim chất lượng cao online của{' '}
          <a href="/" className="text-[#42779A] hover:text-[#C4C628] font-medium">
            XemPhim
          </a>{' '}
          khác gì so với các trang phim khác?
        </h3>
        <ul className="m-8 text-sm text-[#b5b5b5] list-disc">
          <li>
            Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD (1080p), trong khi hầu
            hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất
          </li>
          <li>
            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần phim online thông
            thường - đây là yếu tố quyết định độ nét của phim (thậm chí còn quan trọng hơn độ phân
            giải)
          </li>
          <li>
            Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác (kể cả
            Youtube)
          </li>
          <li>Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao</li>
          <li>
            Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem
            online
          </li>
          <li>
            Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh & tiếng Việt), phù hợp
            với những người muốn học tiếng Anh qua phụ đề phim
          </li>
        </ul>
        <div className="flex justify-end">
          <a
            href=""
            className="w-12 h-12 mr-6 rounded-full border-solid border-white border-[1px] flex justify-center items-center "
          >
            <AiOutlineMail className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/Xemphim.Original"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 mr-6 rounded-full border-solid border-white border-[1px] flex justify-center items-center"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://t.me/xemphim_official"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 mr-6 rounded-full border-solid border-white border-[1px] flex justify-center items-center"
          >
            <RiTelegramFill className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
