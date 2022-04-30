# Technologies

- `@reduxjs/toolkit/query`
  I knew that it's very easy to use `createAPI` to start fetching any data and I will have `isFetching`, `isLoading` by default. Maybe in that case it's a bit redundant and can be done with react state.
- `react-leaflet`
  I decided to use it because it doesn't require having an API key like google-maps. Unfortunately, I spent too much time figuring out issues with react@18 with both map libraries, so I rolled back to react@17

# What I want to change

- Add `eslint` (forgot to do it before the start)
- Add tests
- Add remaining features (because they are quite interesting)
- Make the ControlPanel looks better, not just simple HTML
- Use css-modules or maybe tailwindcss to style UI
- Improve UX (Because right now it only disables inputs while fetching)
