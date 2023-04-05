import './css/SortSelect.css';

interface SortSelectProps {
    sortCardCar: (value: string) => void
}

export function SortSelect(props: SortSelectProps) {

    return (
        <div className='sort-select-box'>
            <select onChange={event => props.sortCardCar(event.target.value)}>
                <option value='id'>Default</option>
                <option value='name'>Name</option>
                <option value='price'>Price</option>
            </select>
        </div>
    )
}

export default SortSelect;