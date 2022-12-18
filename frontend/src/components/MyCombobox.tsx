import { Fragment, useState, useRef, useEffect} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {IItem, emptyItem} from '../models'


interface ComboboxProps {
  list: IItem[]
  placeholder?: string
  isActive?: boolean
  clearInput?: boolean
  setItem: React.Dispatch<React.SetStateAction<IItem|undefined>>
  selectedItem: IItem|undefined
}


export function MyCombobox({list, placeholder,isActive = true, clearInput = false, setItem, selectedItem}: ComboboxProps) {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? list
      : list.filter((item:IItem) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  useEffect(() => {
    if (clearInput) {
      setSelected('')
      setQuery('')
      setItem(undefined)
    }
  }, [clearInput])

  useEffect(() => {
    setSelected('')
    setQuery('')
}, [clearInput])

  useEffect(() => {
    if (selectedItem) {
      setSelected(selectedItem.name)
      setQuery(selectedItem.name)
    }
  }, [])

  return (
    <div className = "static">
      <Combobox value={selected} onChange={setSelected} nullable disabled = {!isActive} >
        <div className="relative mt-2 ">
          <div className="relative cursor-default overflow-hidden rounded-xl bg-white text-left shadow-md " >
            <Combobox.Input
              className="w-full rounded-xl py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border-2 focus:outline-none focus:border-red-600 hover:border-red-600 " 
              displayValue={(item: IItem) => item?.name}
              onChange={(event) => {setQuery(event.target.value);setItem(list[list.findIndex((element) => element.name == event.target.value)])}}
              placeholder = {placeholder}
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base text-left shadow-lg ring-1 ring-red-700 ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Ничего не найдено.
                </div>
              ) : (
                filteredPeople.map((item) => (
                  <Combobox.Option 
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-red-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value= {item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center text-right pl-3 ${
                              active ? 'text-white' : 'text-red-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
