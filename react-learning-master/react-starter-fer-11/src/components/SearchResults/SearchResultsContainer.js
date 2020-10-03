import {connect} from 'react-redux';
import SearchResults from './SearchResults.js';
import {createAction_changeSearchString} from '../../redux/searchStringRedux.js';
import {getCardsForSearch} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  changeSearchString: () => dispatch(createAction_changeSearchString(props.match.params.searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
