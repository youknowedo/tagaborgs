import Banner from "$lib/assets/foodoraBanner.webp"
import GrandPrix from "$lib/assets/grand-prix.webp"
import Salad from "$lib/assets/salad.webp"
import Fotboll from "$lib/assets/fotboll.webp"
import Mys from "$lib/assets/mys.webp"

type Promo = {
    heading: string,
    price: number,
    body: string,
    bgUri: string
}

export default [
    {
        heading: "Fri frakt på Foodora",
        body: "Gäller beställningar över 300 kr",
        bgUri: Banner
    },
    {
        heading: "Grandprixmålet",
        price: 285,
        body: "Två stycken Monte Carlo, en valfri Ben & Jerry's glass och två valfria 33 cl drycker.",
        bgUri: GrandPrix
    },
    {
        heading: "Fri gåva",
        body: "Få en fri gåva till valfri sallad",
        bgUri: Salad
    },
    {
        heading: "Fotbollsmålet",
        price: 285,
        body: "Välj två pizzor, en Ben & Jerry's glass och två 33 cl drycker i nästa steg.",
        bgUri: Fotboll
    },
    {
        heading: "Kvällsmys",
        price: 290,
        body: "Två kebabpizzor, en valfri Ben & Jerry's glass och två valfria 33 cl drycker.",
        bgUri: Mys
    },
] as Promo[]
