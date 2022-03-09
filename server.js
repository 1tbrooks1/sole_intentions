const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const stripe = require('stripe')(
  'sk_test_51KYkduDT393wRvxW2rJP7fKH7P7eZk3WEi2w4mt4vcK2N8pCuovVnd63lNBoAQQw17cpiRLAj5ExVooEVzhcMzab00m10g4G9X'
);

const hbs = exphbs.create({});
const app = express();

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
