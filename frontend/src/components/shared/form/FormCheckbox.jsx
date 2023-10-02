const FormCheckbox = ({ name, label }) => {
  return (
    <div className='flex items-center gap-2'>
      <input type='checkbox' className='h-4 w-4 cursor-pointer !outline-none !border-none' />
      {label && (
        <label htmlFor={name} className='text-gray-400/50 font-medium'>
          {label}
        </label>
      )}
    </div>
  )
}

export default FormCheckbox
