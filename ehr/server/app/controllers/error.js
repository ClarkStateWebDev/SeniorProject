/* PROBABLY NOT NEEDED. */
exports.get404 = (req, res, next) => {
  res.status(404).render('404', { 
  pageTitle: 'Could Not Find Page', 
  path: '/404',
  });
};