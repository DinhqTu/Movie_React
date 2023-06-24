import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import NavBarItem from './NavBarItem';
import { category } from './Category';

function Navbar() {
  const [filters, setFilters] = useState({
    type: '',
    genre: '',
    country: '',
    year: '',
    time: '',
    arrange: '',
  });

  const navigate = useNavigate();

  const handleSetFilters = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleQuery = async () => {
      // loại bỏ những trường ko có dữ liệu
      const filtered = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== ''),
      );
      // chuyển đổi obj => query string
      const query = queryString.stringify(filtered);
      query !== '' ? navigate(`/discover?${query}`) : null;
    };
    handleQuery();
  }, [filters]);

  return (
    <div>
      <div className="flex flex-wrap bg-[#091C2D] rounded-sm mb-[10px]">
        {category.map((item, index) => (
          <NavBarItem item={item} key={index} handle={handleSetFilters} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
