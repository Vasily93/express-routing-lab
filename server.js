const app = require('./lib/app');

const PORT  = process.env.PORT || 1993;

app.listen(PORT, () => {
  console.log(`started on ${PORT}`);
});
