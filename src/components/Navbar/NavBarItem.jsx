import PropTypes from 'prop-types';

function NavBarItem(props) {
  const { item, handle } = props;

  return (
    <div className="flex-grow p-3 text-black">
      <label htmlFor="" className="mb-2 block font-medium text-white">
        {item.label}
      </label>
      <select
        className="block px-[11px] py-[7px] rounded-[4px] cursor-pointer w-[200px] active:border-[#428bca] active:shadow-[0 0 0 0.125em rgba(66,139,202,.25)] outline-none transition-all"
        name={item.key}
        key={item.key}
        id={item.key}
        onChange={(e) => handle(e)}
      >
        <option value={''} defaultValue={''}>
          {item.selected}
        </option>
        {item.select.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

NavBarItem.propTypes = {
  item: PropTypes.object,
  handle: PropTypes.func,
};

export default NavBarItem;
