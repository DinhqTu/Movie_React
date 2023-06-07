import PropTypes from 'prop-types';

function NavBarItem(item) {
  console.log('item', item);
  return (
    <div className="flex-grow p-3 text-black">
      <label htmlFor="" className="mb-2 block font-medium text-white">
        {item.item.label}
      </label>
      <select
        className="block w-full px-[11px] py-[7px] rounded-[4px] cursor-pointer w-[200px]  active:border-[#428bca] active:shadow-[0 0 0 0.125em rgba(66,139,202,.25)] outline-none transition-all"
        name=""
        id=""
      >
        <option value={item.item.selected} defaultValue={''}>
          {item.item.selected}
        </option>
        {item.item.select.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

NavBarItem.propsType = {
  item: PropTypes.object,
};

export default NavBarItem;
