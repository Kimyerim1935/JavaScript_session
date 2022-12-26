import SearchInput from "./SearchInput.js";
import SearchResult from './SearchResult.js';
import {request} from './api.js';

export default function App({$target, initialState}) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    searchResult.setState(this.state);
  }

  const searchInput = new SearchInput({
    $target,
    initialState: this.state,
    handleSearch: async (keyword) => {
      try {
        if (keyword.length > 0) {
          const results = await request(`/api/search?keyword=${keyword}`);

          this.setState(results)
        }
      } catch (e) {
        alert('오류가 발생했습니다')
      }
    }})

  const searchResult = new SearchResult({$target, initialState: this.state})

  this.render = () => {

  }

  this.render();
}