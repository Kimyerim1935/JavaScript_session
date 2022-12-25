import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import SearchResult from './SearchResult.js';
import { request } from './api.js';
import debounce from './debounce.js';

const MAX_HISTORY_COUNT = 5;

export default function App({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    searchResult.setState(this.state.results);
    searchHistory.setState(this.state.histories);
  };

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onSearch: debounce(async (keyword) => {
      try {
        if (keyword.length > 0) {
          const results = await request(`/api/search?keyword=${keyword}`);

          let nextHistories = [...this.state.histories];

          if (nextHistories.includes(keyword)) {
            nextHistories = [
              ...nextHistories.filter((history) => history !== keyword),
              keyword,
            ];
          } else {
            nextHistories = [...nextHistories, keyword];
          }
          if (nextHistories.length > MAX_HISTORY_COUNT) {
            nextHistories = nextHistories.slice(
              nextHistories.length - MAX_HISTORY_COUNT,
              MAX_HISTORY_COUNT + 1
            );
          }
          this.setState({
            results,
            histories: nextHistories,
          });
        }
      } catch (e) {
        alert('오류다! 오류야!');
      }
    }, 300),
  });

  const searchHistory = new SearchHistory({
    $target,
    initialState: [],
  });

  const searchResult = new SearchResult({
    $target,
    initialState: this.state.results,
    onMusicianClick: async (musician) => {
      try {
        const results = await request(`/api/search?keyword=${musician}`);
        this.setState({
          results,
          histories: [...this.state.histories],
        });

        // 요 호출은 여기서 하는 게 아니라 App의 setState에서 해도 되고
        // 예외적으로만 여기서 하는 식으로 해도 되긴 함. 이건 개발자 마음대로
        searchInput.setState(musician);
      } catch (e) {
        alert('엔지니어가 제일 싫어하는 동네.. 오류동...');
      }
    },
  });
}