let { products } = require('../data/dataBase')

module.exports = {
    contacto: (req, res) => {
    	let productCart = products.filter(element => element.cart === true)
        
        res.render("contact", {
            titleBanner: "Contáctenos",
            productCart
        })
    }
}