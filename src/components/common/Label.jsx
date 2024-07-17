const Label = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="mb-2">
      <label
        className={`block text-sm font-medium leading-6 text-gray-900`}
      >
        {name}
      </label>
      <div class="relative rounded-md shadow-sm">
        <input
          type={type}
          name={name.toLowerCase()}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900  sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 outline-none"
        />
      </div>
    </div>
  );
};
export default Label;
