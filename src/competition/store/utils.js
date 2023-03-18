const addNewVote = (votes, payload) => {
  const { categoryId } = payload;
  console.log({ vote_data: payload });
  const duplicateVote = votes.find((vote) => vote.categoryId === categoryId);

  if (!duplicateVote) return [...votes, payload];
  return votes.map((vote) => (vote.categoryId === categoryId ? payload : vote));
};

const removeVote = (votes, categoryId) => {
  const upddatedVotes = votes.filter((vote) => categoryId === vote.categoryId);
  return upddatedVotes;
};

export { addNewVote, removeVote };
