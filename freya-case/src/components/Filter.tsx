/** dependencies */
import {Dispatch, SetStateAction} from "react";

/** components */
import CustomSelect from "@/components/CustomSelect";

interface Props {
    sortOption: string
    setSortOption: Dispatch<SetStateAction<string>>
}

const Filter = ({ sortOption, setSortOption }: Props) => {
    const options = [
        { value: '', label: 'Filtrele' },
        { value: 'ascending', label: 'Artan' },
        { value: 'descending', label: 'Azalan' },
    ];

    return (
        <CustomSelect
            options={options}
            selectedOption={sortOption}
            onOptionSelect={setSortOption}
        />
    );
};

export default Filter;
