const express = require('express');
const router = express.Router();
const devicetype = require('../helpers/devicetype');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { page: 'About Us', menuId: 'about' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { page: 'Contact Us', menuId: 'contact' });
});

router.get('/link', function (req, res, next) {
  if (devicetype.isDevicePhone(req.headers['user-agent'])) {
    res.redirect('applink');
  }
  else {
    res.render('error', { page: 'Error', menuId: 'link', status: 404, message: 'App Not Installed!' });
  }
});

module.exports = router;
