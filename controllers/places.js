const { append } = require('express/lib/response')

const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })  

router.get('/', (req,res) => {
    let places = [{
        name: 'Pie In The Sky',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Italian, Pizza',
        pic: '/images/pizza.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})

module.exports = router
