interface label {
    label : string,
    link  : string
}

function Button({label, link} : label) {
  return (
    <div>
      <a href={link}>
      <button className="mt-6 mb-3 px-10 py-2 border-2 border-white text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            {label}
        </button>
      </a>
    </div>
  )
}

export default Button
