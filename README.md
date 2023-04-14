# Setup

1. `cp env.js.example env.js`
2. fill your `API_KEY` in `env.js`

# Run

`node main.js`

```javascript
// response format
[
  {
    name: '...',
    reviews: ['...', '...'], // up to 5 reviews(limit by google api)
  },
];
```
