import './FilterCheckbox.css'

const FilterCheckbox = ({ isOn, handleToggle }) => {
  return (
    <div className="filter-checkbox">
      <p className="filter-checkbox__text">Короткометражки</p>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="filter-checkbox__checkbox"
        id={`filter-checkbox__new`}
        type="checkbox"
      />
      <label
        className="filter-checkbox__label"
        htmlFor={`filter-checkbox__new`}
      >
        <span className={`filter-checkbox__button`} />
      </label>
    </div>
  );
};
export default FilterCheckbox
