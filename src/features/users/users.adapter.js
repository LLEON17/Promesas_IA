function userAdapter(user) {
  return {
    id: user.id,
    fullName: `${user.name} (${user.username})`,
    email: user.email
  };
}

export default userAdapter;
