import { Search } from "lucide-react"
import Select, { StylesConfig, OptionProps, SingleValue } from 'react-select'
import { useState } from 'react'
import {GroupedOption} from './Filters'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setFilter } from '../redux/hackathonsSlice';
import cross from '../assets/icons/cross.svg'
const customStyles: StylesConfig<GroupedOption, false> = {
  control: (provided) => ({
    ...provided,
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: 'none',
    color: '#000000',
    '&:hover': {
      border: '1px solid #cbd5e0',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    width: '200px',
  }),
  option: (provided, state: OptionProps<GroupedOption>) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#EDF2F7' : 'white',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#E2E8F0',
    },
  }),
}

export default function SearchInput({groupedOptions}: {groupedOptions: GroupedOption[]}) {

  const [selectedOptions, setSelectedOptions] = useState<GroupedOption[]>([]);
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.hackathons.filter);

  const handleChange = (newValue: SingleValue<GroupedOption>) => {
    if (newValue) {
      const newSelectedOptions = [...selectedOptions, newValue];
      setSelectedOptions(newSelectedOptions);

      const levels = newSelectedOptions
        .filter(option => option.type === 'level')
        .map(option => option.label);
      const statuses = newSelectedOptions
        .filter(option => option.type === 'status')
        .map(option => option.label);

      dispatch(setFilter({
        level: levels,
        status: statuses,
        search: filter.search,
      }));
    }
  };

  const removeOption = (optionToRemove: GroupedOption) => {

    
    const newSelectedOptions = selectedOptions.filter(option => option.label !== optionToRemove.label);
    setSelectedOptions(newSelectedOptions);

    const levels = newSelectedOptions
      .filter(option => option.type === 'level')
      .map(option => option.label);
    const statuses = newSelectedOptions
      .filter(option => option.type === 'status')
      .map(option => option.label);

    dispatch(setFilter({
      level: levels,
      status: statuses,
      search: filter.search,
    }));
  };


  // const dispatch = useDispatch();
  // const { filter } = useSelector((state: RootState) => state.hackathons);

  // const [selectedOptions, setSelectedOptions] = useState<GroupedOption[]>([]);

  // const handleChange = (newValue: SingleValue<GroupedOption>) => {
  //   if (newValue) {
  //     const newSelectedOptions = [...selectedOptions, newValue];
  //     setSelectedOptions(newSelectedOptions);
      
  //     const levels = newSelectedOptions
  //       .filter(option => option.type === 'level')
  //       .map(option => option.label);
  //     const statuses = newSelectedOptions
  //       .filter(option => option.type === 'status')
  //       .map(option => option.label);
      
  //     dispatch(setFilter({
  //       level: levels,
  //       status: statuses,
  //       search: filter.search,
  //     }));
  //   }
  // };

  // const removeOption = (optionToRemove: GroupedOption) => {
  //   const newSelectedOptions = selectedOptions.filter(option => option.label !== optionToRemove.label);
  //   setSelectedOptions(newSelectedOptions);

  //   const levels = newSelectedOptions
  //     .filter(option => option.type === 'level')
  //     .map(option => option.label);
  //   const statuses = newSelectedOptions
  //     .filter(option => option.type === 'status')
  //     .map(option => option.label);
    
  //   dispatch(setFilter({
  //     level: levels,
  //     status: statuses,
  //     search: filter.search,
  //   }));
  // };


    return (
        <div className=" w-full max-w-4xl mx-auto p-4 flex flex-col items-center gap-8 ">
            <div className="w-full  flex flex-col sm:flex-row justify-start items-center gap-4">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={20} />
                    <input
                    type="search"
                    placeholder="Search"
                    onChange={(e) => {
                      dispatch(setFilter({
                        ...filter,
                        search: e.target.value,
                      }));
                    }}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <Select<GroupedOption>
                    options={groupedOptions}
                    styles={customStyles}
                    placeholder="Filter"
                    value={null}
                    onChange={handleChange}
                    className="w-full sm:w-32 text-black "
                    />
                </div>
            </div>
            <Pills selectedOptions={selectedOptions} removeOption={removeOption} />
        </div>
    )
} 


const Pills = ({ selectedOptions, removeOption }: { selectedOptions: GroupedOption[], removeOption: (option: GroupedOption) => void }) => {
    return (
      <div className="flex gap-2 w-full justify-start items-center ">
        {selectedOptions.map((option) => (
          <span key={option.label} className="px-4 py-2 bg-[#F8F9FD7D] text-white rounded-full text-sm flex justify-center items-center gap-4">
            {option.label}
            <button onClick={() => removeOption(option)} className="text-gray-800">
              <img src={cross} alt="cross" />
            </button>
          </span>
        ))}
      </div>
    )
  }