const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.user.name;
const selectToken = state => state.auth.token;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
};
export default authSelectors;
