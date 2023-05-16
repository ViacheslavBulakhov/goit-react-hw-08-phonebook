const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.user.name;
const selectToken = state => state.auth.token;
const selectRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
  selectRefreshing,
};
export default authSelectors;
