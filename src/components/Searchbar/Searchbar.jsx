import css from './Searchbar.module.css'
import { useSearchParams } from 'react-router-dom';


const Searchbar = ({onSubmit}) => {

    const handleSubmit = e => {
        e.preventDefault();

        const searchTitle = e.target.elements.searchInput.value;
        if (searchTitle.trim() === ``) {
          return alert('Write something');
        }

        onSubmit(searchTitle.toLowerCase());
    };

        return(
            <form className={css.form} onSubmit={handleSubmit}> 
                <input
                    className={css.input}
                    type="text"
                    name="searchInput"
                    placeholder="Avengers (example)"
                />
                <button className={css.searchBtn}>Search</button>
             </form>
        )

}

export default Searchbar;