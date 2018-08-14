export const getUserFromUrl = (state, userUrl) => (
  state.entities.users[state.entities.userUrls[userUrl]]
);
