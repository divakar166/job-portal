const InputField = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-transparent w-full rounded-md border border-purple-500 focus:ring-2 focus:ring-inset focus:ring-purple-600 outline-none p-2 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
    />
  );
};

export default InputField;
