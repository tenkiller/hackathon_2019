import { getFormValues } from './storage'
import $ from 'jquery'

const values = getFormValues()

var planet_names = ["Planet McPlanetface", "Earth 2", "Lathaetera", "Lasuanus", "Mengora", "Zolradus", "Dophus",
"Vaphus", "Gulegantu", "Drivutis"," Llorth 4XCY", "Doth 9C7", "Hoth", "Mandalore", "Tatooine", "Ithor",
"Kepler-16b", "HD 40307g", "Kepler-186f", "PSO J318.5-22"]

var blurb1="Howdy from $planet! The oceans have turned to scorched blood and we couldn't be more excited." +
" We have everything: carbide fighting cages, chlorofluoro microtubes, and the last combination Pizza Hut-Taco Bell" +
" in the Dreyfuss macrogalaxy. Book your flight today."

var blurb2="Dear Comrade, salutations from $planet! A smorgasbord of borscht and kielbasa awaits" +
" those travelling to the Zylinski zupragalaksi. Not a day goes by that doesn't  see a salute to our" +
" Dear Leader Boris Grutschev's eminent and august countenance––which grants all life! Bow ye, before his all-giving eye."

var blurb3="Welcome to $planet, the planet full of cryogenically preserved 20th century tennis stars!" +
" See Sampras mid-serve, Borg barrelling to the net, McEnroe throwing one of his signature tantrums." +
" The majestic Bille Jean King stands among the rest, racket raised, poised to strike."

var blurb4="Welcome to $planet, the Kyralos Galaxy's special economic zone for grotesque taxidermy projects." +
" No proof of provenance or intergalactic hunting license necessary! All carbon-based flesh mounts 50% off. "
" Limited time special: Glantromphian Brakexsnout stuffed and hung for a single downpayment of 25M plus 1.25M per " +
" selenial year until the end of the Visuncular cycle. Three for the price of two!"

var blurb5="Welcome to $planet! Known for it's sharp rock formations and acid lakes, we're certain your time here " +
"will be one for the books! While you're here, be sure to check out our new life-size amoeba petting zoo " +
"and visit our Cosmic Cafe for lunch."

var blurbs = [blurb1, blurb2, blurb3, blurb4, blurb4, blurb5]

var intro = "Welcome to {name}! We hope you enjoy your stay. It looks like the temperature today is {temp} Kelvin " +
"and the moisture level is {moisture}. There are many fun and exciting things to experience here on this exoplanet. " +
"About {oceanic}% of our planet is covered in water, so I hope you packed your bathing suit! "

function interpolate_info() {
    var name = planet_names[Math.floor(Math.random() * planet_names.length)];
    var random_blurb = blurbs[Math.floor(Math.random() * blurbs.length)];
    $("#title").text(name);
    var newIntro = intro.replace(/{name}/g, name)
    newIntro = newIntro.replace(/{temp}/g, Number.parseFloat(values.kelvin))
    newIntro = newIntro.replace(/{moisture}/g, Number.parseFloat(values.moisture).toFixed(2))
    newIntro = newIntro.replace(/{oceanic}/g, (Number.parseFloat(values.oceanic) * 100).toFixed(2))
    $("#p1").text(newIntro)
    $("#p2").text(random_blurb.replace('$planet', name))
}

$(document).ready( function () {
    interpolate_info()
});
