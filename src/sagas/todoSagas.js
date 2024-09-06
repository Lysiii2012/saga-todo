import { call, put, takeEvery } from 'redux-saga/effects';
import { 
  fetchTodosSuccess,
  fetchTodosFailure,
} from '../actions/todoActions';

function* fetchTodos() {
  try {
    const response = yield call(() =>
      fetch('https://jsonplaceholder.typicode.com/users')
    );
    const data = yield response.json();
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* todoSaga() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
}

export default todoSaga;
