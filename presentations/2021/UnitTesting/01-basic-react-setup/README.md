- `yarn`
- `yarn start`
- `yarn test` or `yarn test --watch`

### Remember:
- we use parcel here only to be able to bundle and serve our app. 
- React testing library it is like additional framework on top of jest using which we can easily test react components
- And all these unit tests are run on node (backend), so for UI testing we have set jest environment `jsdom` which lets us to use most of DOM features we have on browser, like `document.querySelector` which we otherwise wouldn't have if jest environment would be node.
