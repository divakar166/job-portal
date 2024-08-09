const Input = ({ label, type, name, placeholder }) => {
  return (
    <div>
      <label
        for={name}
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div class="rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          class="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
