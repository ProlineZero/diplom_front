import React from 'react'

interface InputStringProps {
  title: string,
  placeholder: string
  name: string
  setInput?: React.Dispatch<React.SetStateAction<string>>
}

export function InputString({title, placeholder, name, setInput}: InputStringProps) {
  return (
    <div className=" relative w-full">
    <label htmlFor="name-with-label" className="text-gray-700">
        {title}
    </label>
    <input type="text" id="name-with-label" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" name={name} placeholder={placeholder}
    onChange = {setInput? (event) => {setInput(event.target.value)}: () => {}}/>
    </div>
  )
}