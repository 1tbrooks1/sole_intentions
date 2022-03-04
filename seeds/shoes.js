const { Shoe } = require('../models');

const shoeData = [
    {
        name: 'Adidas Yeezy Boost 350 V2 Beluga',
        price: '575',
        description: `The adidas Yeezy 350 Boost V2 takes the silhouette that 
        Kanye West made famous for adidas Originals and gives it new life.
        The low top Yeezy Boost 350 features a full length Boost cushioning system and a high end feel 
        that has made it the go-to sneaker for everyone from celebrities like Kim Kardashian-West, 
        Jay-Z, 2 Chainz and Future, as well as for athletes like Nick "Swaggy P" Young, Andrew Wiggins, 
        Lewis Hamilton and anyone else who can get their feet in a pair.`
    },
    {
        name: 'Air Jordan 1 x SB LA to Chicago',
        price: '590',
        description: `This AJ 1 SB comes with a white upper plus blue and yellow accents, 
        yellow Nike "Swoosh", white midsole, and a black sole. Underneath the purple and yellow coloring
        you can find some other colors, but only when the paint is irritated. GET TO SKATING!!!`
    },
    {
        name: 'Air Jordan 1 x Off White UNC ',
        price: '2500',
        description: `The third installment of the Air Jordan and Virgil Agbloh collaboration. 
        This sneakers pays homage to the glory days of Jordan in college at UNC. 
        The sneakers come in a white, dark powder blue and cone colorway, with 
        a white and blue deconstructed leather upper and Off-White detailing throughout.`
    },
    {
        name: 'Nike Air Max 1 x Parra',
        price: '675',
        description: `Legendary Dutch artist Parra and Nike have once 
        again teamed up for their first collab in over a decade!
        This Nike Air Max 1 takes abstract interpretations of cityscape and 
        landscape imagery, applying it to the Air Max's iconic silhouette. 
        Using his traditional color palette of white, light blue, red, grey, 
        and pink, this pair is sure to turn heads with its unique and vibrant style.`
    },
    {
        name: 'Air Jordan 1 Shattered Backboard',
        price: '1600',
        description: `The name “Shattered Backboard” comes from a moment after Michael Jordans 
        rookie season, in the summer of 1985, when he played in an exhibition game in Italy. 
        Jordan, wearing the orange, black, and white of Stefanel Trieste, hit a dunk so hard 
        he shattered the glass backboard.`
    },
    {
        name: 'Adidas Yeezy Boost 350 V2 Static',
        price: '400',
        description: `Electrify your sneaker rotation with the adidas Yeezy Boost 350 V2 Static. 
        This Yeezy 350 V2 comes with a grey and white upper and a white sole. The see through upper helps
        you to show off the cool socks in you lost a long time ago.`
    },
    {
        name: 'Nike Air Force 1 Low x Supreme Wheat',
        price: '215',
        description: `Drawing inspiration from classic work boots, the Nike Air Force 1 Low SP 
        Supreme Wheat features a Flax Durabuck upper with Supreme Box Logo insignias on the 
        lateral heels. At the base, a matching Flax Air sole completes the design. This model 
        was exclusively sold through Supreme stores and their online shops.`
    },
    {
        name: 'Adidas Yeezy Boost 350 V2 Zebra',
        price: '425',
        description: `Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of 
        NBA All-Star Weekend, these Yeezy's are nicknamed the "Zebras," and come in a classic white, 
        black and red color scheme. Sporting a white-based Primeknit upper with black accents giving 
        off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent 
        BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become 
        one of the most popular colorways`
    },
    {
        name: '',
        price: '',
        description: ''
    },
    {
        name: '',
        price: '',
        description: ''
    },
    {
        name: '',
        price: '',
        description: ''
    },
    {
        name: '',
        price: '',
        description: ''
    },
]

const seedShoes = () => Shoe.bulkCreate(shoeData);

module.exports = seedShoes;