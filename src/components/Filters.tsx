import SearchInput from "./SearchInput"

const Filters = () => {
    return (
        <main className=" min-h-[324px] w-full p-16 text-white bg-[#002A3B] flex flex-col justify-center items-center border border-b border-gray-200 border-t-0 border-l-0 border-r-0 " >
            <div className=" w-full max-w-[1280px] flex flex-col justify-between items-center gap-8  " >
                <h1 className=" w-full text-center font-bold text-3xl ">
                Explore Challenges
                </h1>
                <div className=" w-full flex justify-center items-center gap-8 ">
                    <SearchInput groupedOptions={groupedOptions} />
                </div>
            </div>
        </main>
    )
}

export default Filters



export type StatusOption = {
    label: string;
    value: string;
    type: 'status' | 'level';
  };
  
  export type LevelOption = {
    label: string;
    value: string;
    type: 'status' | 'level';
  };
  
  export type GroupedOption = {
    label: string;
    options: (StatusOption | LevelOption)[];
    type: 'status' | 'level';
  };
  
  const statusOptions: StatusOption[] = [
    { label: 'Active', value: 'active', type: 'status' },
    { label: 'Upcoming', value: 'upcoming', type: 'status' },
    { label: 'Past', value: 'past', type: 'status' },
  ];
  
  const levelOptions: LevelOption[] = [
    { label: 'Easy', value: 'easy', type: 'level' },
    { label: 'Medium', value: 'medium', type: 'level' },
    { label: 'Hard', value: 'hard', type: 'level' },
  ];
  
  const groupedOptions: GroupedOption[] = [
    {
      label: 'Status',
      options: statusOptions,
      type: 'status',
    },
    {
      label: 'Level',
      options: levelOptions,
      type: 'level',
    },
  ];
  
