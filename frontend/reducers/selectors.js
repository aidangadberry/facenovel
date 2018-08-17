export const getUserFromUrl = (state, userUrl) => {
  return state.entities.users[state.entities.userUrls[userUrl]];
};

export const getRequest = (state, user) => {
  if (user === undefined) return null;

  const friendIds = Object.keys(state.entities.friends);

  for (var i = 0; i < friendIds.length; i++) {
    let friend = state.entities.friends[friendIds[i]];
    if (friend.requestingId === user.id || friend.requestedId === user.id) return friend;
  }

  return null;
}
