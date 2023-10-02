const FormInput = ({ name, label, type, value, onChange }) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label htmlFor={name} className='text-gray-400/50 font-medium'>
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        className='p-4 bg-gray-200/50 text-black focus:outline-none'
      />
    </div>
  )
}

export default FormInput
