export const snippet = `
queryFn: async () => {
  const users = await http.get("http://myapi.com/users").data;
  // Set each fetched user's details in react-query cache
  // This speeds up the user detail page load.
  users.forEach((user) =>
    queryClient.setQueryData<User>(["users", "detail", user.id], user)
  );

  return users;
}
`;

export const explanation = `
React-query problem: I fetched a list and I want to avoid needlessly refetching the same data on my detail page.
Solution: Use setQueryData to pre-populate the detail page cache. Now the detail page loads immediately. 🔥
Example below: This fetches a list of users, then stores each of the user's details in react-query's cache so that the fetch on the details page automatically has a cache hit. 
Note: This pattern only works if the list page fetches the same properties as the detail page.
`;
