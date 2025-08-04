function Button(props) {
  return (
    <button
      {...props}
      className="bg-sky-800 px-4 py-2 p-2 text-white font-medium rounded-md hover:bg-sky-900"
    >
      {props.children}
    </button>
  );
}

export default Button;
