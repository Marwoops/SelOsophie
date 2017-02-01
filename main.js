var citations = [

				"Oh merde, j'ai missclick, j'ai missclick un creep non ! PUTAIN, J'.. J'AI MISSCLICK UN CREEP !!",
				"Oh nan, nan. QUOI ? QUOI ? HAHA, quoi, quoi, quoi ??",
				"J'en ai rien à foutre, de ton cancer du cul.",
				"Niquez vos mères putain. Qu'est-c'que c'est qu'ça ?! Comment c'est possible, des games comme ça ?",
				"Mon compte, est à un MMR équivalent.. à c'que vaudrait Martial, sur League of Legends.",
				"Ah.. Aaaaaaaah mes couilles ! Ahahah ahah, euh ah, ah, raah, AAHahahah.. ah.",
				"Putain, c'est full pussy t'façon.. Ça c'est l'mariage gay ça putain, 100%, 1000ù mon gars.",
				/*"Correlation 100% */"Ça c'est t'façon S5, S6, légalisation du mariage homosexuel, comme par hasard. Hein, tout le monde se met à jouer comme des pussys.",
				"WHAT THE FUCK LA TOUR, QU'EST C'QUE C'EST QU'ÇA ?! A L'AIDE !! MAIS QU'EST C'QUE QU'CETTE MER..AHAHAHAH !",
				"OH, OH JL'AI TELLEMENT OUTPLAY ! OH PUTAIN C'ÉTAIT D'LA FOLIE ! OH MON DIEU MAIS QU'EST-C'QUI C'EST PASSÉ ? MAIS QUEL JOUEUR! ",
				"Actuellement il est Master, qu'est c'tu vas faire ?? Toi t'es Silver PUTAIN ! TU COMPRENDS CONNARD ? PUTAIN, c'est sérieux là.."

				];
var auteur = "Sardoche";
var aleatoire = null;
var tweet = "";
var hashtag = "SelOsophie";

const audios = [ 
				'./sounds/missclickuncreep.wav',
				'./sounds/quoiquoiquoi.wav',
				'./sounds/rienafoutre.wav',
				'./sounds/commentcestpossible.wav',
				'./sounds/martialsurlol.wav',
				'./sounds/amescouilles.wav',
				'./sounds/fullpussy.wav',
				'./sounds/correlation.wav',
				'./sounds/latour.wav',
				'./sounds/queljoueur.wav',
				'./sounds/tucomprendsconnard.wav'

			   ].map(name => new Audio(name))

$('document').ready(function() {

	$('.auteur').html("- " + auteur);
	aleatoire = Math.floor(Math.random() * citations.length);
	$('.citation').html(citations[aleatoire]);
	audios[aleatoire].play();

	$('#generer').click(function() {

		audios[aleatoire].pause();
		audios[aleatoire].currentTime = 0;
		aleatoire = Math.floor(Math.random() * citations.length);
		$('.citation').html(citations[aleatoire]);
		audios[aleatoire].play();

	});

	 $('#twitter').click(function() {

	 	tweet = twitter(citations[aleatoire], 140 -  23);
		window.open('https://twitter.com/intent/tweet?text=' + encodeURI(tweet) + " - " + auteur + '&hashtags=' + hashtag, 'twitter', 'height=300, width=550, scrollbars=0, menubar=0');
	
	});

	 function twitter(str, num) {

	 	if (num <= 3) return str.slice(0, num).concat('...');
	 	else if (num < str.length) return str.slice(0, num-3).concat('...');
	 	return str;
	 }

});