function renderList() {
    const tracklist = [
        {
            num: 1,
            song: 'Утеха',
            artist: 'Лили Иванова (Lili Ivanova)',
            album: 'танго',
            country: 'Bulgaria',
            year: 1975,
            duration: '3:25',
            yt_link: 'https://www.youtube.com/embed/pihwaswzciw?si=TSZ_wtSzD0_7lt6R',
            tidal_link: 'https://tidal.com/track/190188581/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Lili_Ivanova',
            notes: ''
        }, 
        {
            num: 2,
            song: 'Музыка звучит (A muzyka zvutshit)',
            artist: 'Софія Ротару (Sofia Rotaru)',
            album: 'Lavanda',
            country: 'Ukraine / USSR',
            year: 1980,
            duration: '4:01',
            yt_link: 'https://www.youtube.com/embed/xkpO2jf7CCI',
            tidal_link: 'https://tidal.com/track/21033041/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Sofia_Rotaru',
            notes: ''
        }, 
        {
            num: 3,
            song: 'Красная стрела (Krasnaja strela)',
            artist: 'Софія Ротару (Sofia Rotaru)',
            album: 'Lavanda',
            country: 'Ukraine / USSR',
            year: 1980,
            duration: '5:12',
            yt_link: 'https://www.youtube.com/embed/cHfSHtbW2tE',
            tidal_link: 'https://tidal.com/track/21033046/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Sofia_Rotaru',
            notes: ''
        }, 
        {
            num: 4,
            song: 'Вечната игра',
            artist: 'Лили Иванова (Lili Ivanova)',
            album: 'Асен Гаргов',
            country: 'Bulgaria',
            year: 1978,
            duration: '3:33',
            yt_link: 'https://www.youtube.com/embed/i8CfHkUPSo4?si=Kws0dVnPDQC3KCSd',
            tidal_link: 'https://tidal.com/track/178668405/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Lili_Ivanova',
            notes: ''
        }, 
        {
            num: 5,
            song: 'чистый лист',
            artist: 'Нэнси (NENSI)',
            album: 'Новые и лучшие песни группы "Нэнси"',
            country: 'Ukraine / Russia / USSR',
            year: 1995,
            duration: '5:17',
            yt_link: 'https://www.youtube.com/embed/mh2hBevH4Dk',
            tidal_link: 'https://tidal.com/track/32550855/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Nensi',
            notes: 'This is not an official video, however, it was the only one with this version of the song on YouTube.'
        }, 
        {
            num: 6,
            song: 'Песенка телеграфистки (ft. игорь тальков)',
            artist: 'Раиса Саед-Шах (Raisa Sayed-Shah)',
            album: 'Детство, юность...',
            country: 'Russia / Nepal / USSR',
            year: 1990,
            duration: '2:56',
            yt_link: 'https://www.youtube.com/embed/POI1OYe8oZA',
            tidal_link: 'https://tidal.com/track/302800618/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B5%D0%B4-%D0%A8%D0%B0%D1%85,_%D0%A0%D0%B0%D0%B8%D1%81%D0%B0_%D0%9C%D0%BE%D1%85%D0%B0%D0%B1%D1%83%D0%B1%D0%BE%D0%B2%D0%BD%D0%B0',
            notes: "Раиса Саед-Шах is the first Russian artist I really looked into. Раиса Саед-Шах is a Nepalese-Russian singer who was briefly in Electroclub for one year (tracks 7 & 14), and in fact, this track (& track 17) features Игорь Тальков (Igor Talkov) of Electroclub. Her mother Анна Саед-Шах (Anna Sayed-Shah) was also a singer, and worked as a lyricist for Sofia Rotaru (tracks 2 & 3). Sayed-Shah and her mother collaborated often when she was alive, such as on 'Songs and Poems. Part 1', which her sister Фаина (Faina) also appears on. She had a son with singer Alexander Barykin, who later became the rapper <a href='https://youtu.be/l4vn8lPf_Mk' target='_blank'>Check (Тимур Саед-Шах)</a>. Raisa collaborates with him on the last track of 'Songs and Poems. Part 3."
        }, 
        {
            num: 7,
            song: 'Ты замуж за него не выходи',
            artist: 'Электроклуб (Electroclub)',
            album: 'Электроклуб-2',
            country: 'Russia / USSR',
            year: 1986,
            duration: '3:22',
            yt_link: 'https://www.youtube.com/embed/NCmHK0s-zdI',
            tidal_link: 'https://tidal.com/track/58600417/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Electroclub',
            notes: ""
        }, 
        {
            num: 8,
            song: 'Ясный мой свет',
            artist: 'Татьяна Буланова (Tatyana Bulanova)',
            album: 'Моё русское сердце',
            country: 'Russia / USSR',
            year: 1990,
            duration: '3:29',
            yt_link: 'https://www.youtube.com/embed/voD4XXHPxtQ',
            tidal_link: 'https://tidal.com/track/67627261/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Tatiana_Bulanova',
            notes: "I very much enjoy this music video. What is happening."
        }, 
        {
            num: 9,
            song: 'Мальчик хочет в Тамбов',
            artist: 'Мурат Насыров (Murat Nasyrov)',
            album: 'Кто-то простит',
            country: 'Kazakhstan / USSR',
            year: 1997,
            duration: '3:35',
            yt_link: 'https://www.youtube.com/embed/NOaKPbkJg-I',
            tidal_link: 'https://tidal.com/track/57793334/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Murat_Nasyrov',
            notes: "Murat Nasyrov was Soviet, Kazakhstani, Russian, and was of Uyghur descent. Early on in his career, Nasyrov performed with A'Studio (band in the next track) and was introduced to his producer by one of A'Studio's members, Baglan Sadvakasova. Nasyrov tragically committed suicide at 37 reportedly due to depression, and this was also after Baglan Sadvakasova passed away in a traffic accident the summer before. (side note: I do also really love this video.)"
        }, 
        {
            num: 10,
            song: 'Освободи сердце моё',
            artist: "A'Studio",
            album: 'Нелюбимая',
            country: 'Kazakhstan',
            year: 1996,
            duration: '4:01',
            yt_link: 'https://www.youtube.com/embed/UcBe8vMT_5U',
            tidal_link: 'https://tidal.com/track/198219166/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/A-Studio',
            notes: ''
        }, 
        {
            num: 11,
            song: 'Парамарибо (Paramaribo)',
            artist: 'Квартал (Kvartal)',
            album: 'Всё земное стало странным',
            country: 'Russia / USSR',
            year: 1991,
            duration: '4:29',
            yt_link: 'https://www.youtube.com/embed/eSciIfdLtgc',
            tidal_link: 'https://tidal.com/track/97362969/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B0%D0%BB_(%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%86%D0%B0_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F)',
            notes: ''
        }, 
        {
            num: 12,
            song: 'Желаю тебе',
            artist: 'Игорь Саруханов (Igor Sarukhanov)',
            album: 'Лучшие песни 2',
            country: 'Russia / USSR',
            year: 1992,
            duration: '4:36',
            yt_link: 'https://www.youtube.com/embed/8arOgTJ5Bcs',
            tidal_link: 'https://tidal.com/track/104978758/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Igor_Sarukhanov',
            notes: ''
        }, 
        {
            num: 13,
            song: 'Мелодия (Из к/ф "Раба любви")',
            artist: 'Оркестр п/у Павла Овсянникова (Orchestra conducted by Pavel Ovsyannikov)',
            album: 'Звездный вираж',
            country: 'Russia / USSR',
            year: 1984,
            duration: '3:06',
            yt_link: 'https://www.youtube.com/embed/LOw_XozdLII',
            tidal_link: 'https://tidal.com/track/201604960/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%9E%D0%B2%D1%81%D1%8F%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%2C_%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D1%87',
            notes: ''
        }, 
        {
            num: 14,
            song: 'Прощальный день',
            artist: 'Электроклуб (Electroclub)',
            album: 'Электроклуб',
            country: 'Russia / USSR',
            year: 1986,
            duration: '4:42',
            yt_link: 'https://www.youtube.com/embed/Asdr4IYPyWw',
            tidal_link: 'https://tidal.com/track/58599659/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Electroclub',
            notes: ""
        }, 
        {
            num: 15,
            song: 'Зимний сон',
            artist: 'Алсу (Alsou)',
            album: 'Алсу',
            country: 'Russia / USSR',
            year: 1999,
            duration: '4:21',
            yt_link: 'https://www.youtube.com/embed/eP4ElRfquDA',
            tidal_link: 'https://tidal.com/track/262725334/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Alsou',
            notes: ''
        }, 
        {
            num: 16,
            song: 'Возвращайся',
            artist: 'Игорь Саруханов (Igor Sarukhanov)',
            album: 'Лучшие песни',
            country: 'Russia / USSR',
            year: 1992,
            duration: '6:21',
            yt_link: 'https://www.youtube.com/embed/2xYID0bwlI8',
            tidal_link: 'https://tidal.com/track/110996993/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Igor_Sarukhanov',
            notes: ''
        }, 
        {
            num: 17,
            song: 'Самый ягодный сезон (ft. игорь тальков)',
            artist: 'Раиса Саед-Шах (Raisa Sayed-Shah)',
            album: 'Детство, юность...',
            country: 'Russia / Nepal / USSR',
            year: 1990,
            duration: '4:24',
            yt_link: 'https://www.youtube.com/embed/FXl6w8he9Vs',
            tidal_link: 'https://tidal.com/track/179599034/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B5%D0%B4-%D0%A8%D0%B0%D1%85,_%D0%A0%D0%B0%D0%B8%D1%81%D0%B0_%D0%9C%D0%BE%D1%85%D0%B0%D0%B1%D1%83%D0%B1%D0%BE%D0%B2%D0%BD%D0%B0',
            notes: ""
        }, 
        {
            num: 18,
            song: 'Ах, какая женщина',
            artist: 'Фристайл',
            album: 'Ах, какая женщина!',
            country: 'Ukraine / USSR',
            year: 1990,
            duration: '5:13',
            yt_link: 'https://www.youtube.com/embed/5xjhR9IJUGM',
            tidal_link: 'https://tidal.com/track/57709436/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%B9%D0%BB_(%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0)',
            notes: "Incredible first slide in this slideshow. It is from a 2007 Australian shoe ad campaign titled 'Trail of Destruction.' Unrelated to anything but amazing. If you reverse image search, you'll find it circulated among Russian forums. <a href='https://otvet.mail.ru/question/25788901' target='_blank'>One such example.</a> As a response to one user asking 'Why do men betray me?', a translated comment responds, 'Your problem... is absolutely clear!!!! You get too emotionally attached to men... and they feel it!!! You should... ON THE CONTRARY!!!! Men love strong... independent... a little bitchy!!! Treat them with humor and love yourself!!!! You'll see... everything will change... Basically... be a queen!!!! then they will be your pawns!!!'"
        }, 
        {
            num: 19,
            song: 'о Хорошем',
            artist: 'Раиса Саед-Шах',
            album: 'Детство, юность...',
            country: 'Russia / Nepal / USSR',
            year: 1990,
            duration: '5:47',
            yt_link: 'https://www.youtube.com/embed/0VxCkPZ4EuA',
            tidal_link: 'https://tidal.com/track/166801950/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B5%D0%B4-%D0%A8%D0%B0%D1%85,_%D0%A0%D0%B0%D0%B8%D1%81%D0%B0_%D0%9C%D0%BE%D1%85%D0%B0%D0%B1%D1%83%D0%B1%D0%BE%D0%B2%D0%BD%D0%B0',
            notes: ''
        }, 
        {
            num: 20,
            song: 'Лотерейный билет',
            artist: 'Раиса Саед-Шах',
            album: 'Sunday Wife',
            country: 'Russia / Nepal / USSR',
            year: 1990,
            duration: '2:39',
            yt_link: 'https://www.youtube.com/embed/DnCkzF1EX4w',
            tidal_link: 'https://tidal.com/track/166801959/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B5%D0%B4-%D0%A8%D0%B0%D1%85,_%D0%A0%D0%B0%D0%B8%D1%81%D0%B0_%D0%9C%D0%BE%D1%85%D0%B0%D0%B1%D1%83%D0%B1%D0%BE%D0%B2%D0%BD%D0%B0',
            notes: "How could you not love an album called 'Sunday Wife'? This song first appeared on a different album, but I couldn't find it. A lot of the tracks in here appear on a later album I found on TIDAL but the original release date was much earlier."
        }, 
        {
            num: 21,
            song: 'О Москве',
            artist: 'Раиса Саед-Шах',
            album: 'Sunday Wife',
            country: 'Russia / Nepal / USSR',
            year: 1996,
            duration: '3:18',
            yt_link: 'https://www.youtube.com/embed/Xr8bHejRdYY',
            tidal_link: 'https://tidal.com/track/166801949/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B5%D0%B4-%D0%A8%D0%B0%D1%85,_%D0%A0%D0%B0%D0%B8%D1%81%D0%B0_%D0%9C%D0%BE%D1%85%D0%B0%D0%B1%D1%83%D0%B1%D0%BE%D0%B2%D0%BD%D0%B0',
            notes: ''
        }, 
        {
            num: 22,
            song: 'Funny Boy',
            artist: 'Раиса Саед-Шах',
            album: 'Избранное, Часть 3',
            country: 'Russia / Nepal / USSR',
            year: 2021,
            duration: '4:03',
            yt_link: 'https://www.youtube.com/embed/08wSc7g5RH8',
            tidal_link: 'https://tidal.com/track/302801223/u',
            spotify_link: '',
            wiki: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B5%D0%B4-%D0%A8%D0%B0%D1%85,_%D0%A0%D0%B0%D0%B8%D1%81%D0%B0_%D0%9C%D0%BE%D1%85%D0%B0%D0%B1%D1%83%D0%B1%D0%BE%D0%B2%D0%BD%D0%B0',
            notes: ''
        }, 
        {
            num: 23,
            song: 'Arrivederci (Remastered 2023)',
            artist: "Ебанько (Eban'ko)",
            album: 'Москва- Калуга (Альбом пародий)',
            country: 'Russia',
            year: 2010,
            duration: '2:58',
            yt_link: 'https://www.youtube.com/embed/vXoQ8mHZ8Mc',
            tidal_link: 'https://tidal.com/track/322950259/u',
            spotify_link: '',
            wiki: '',
            notes: "This is where the playlist starts to get a little lost. It could probably end here. I say this because I have NO idea what this group is up to. I just know I enjoy this song. Their YouTube is incredibly strange and I would say it seems to target a younger audience because of their cover art style despite many of their songs being vulgar and not appropriate for children, but it seems that some of their commenters, at least from this one song I found, are of drinking age maybe (18 in most Slavic countries)? (a translated comment I found: 'Just came out of a binge and immediately started listening to songs about binge drinking.')"
        }, 
        {
            num: 24,
            song: 'Чужие губы',
            artist: 'Руки Вверх! (Ruki Vverh!)',
            album: 'Сделай погромче!',
            country: 'Russia',
            year: 1997,
            duration: '4:02',
            yt_link: 'https://www.youtube.com/embed/LzZ6Q40QHG4',
            tidal_link: 'https://tidal.com/track/90144548/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Ruki_Vverh!',
            notes: ''
        }, 
        {
            num: 25,
            song: 'Восточные сказки',
            artist: 'Блестящие (Blestyashchiye)',
            album: 'Восточные сказки',
            country: 'Russia',
            year: 1996,
            duration: '3:25',
            yt_link: 'https://www.youtube.com/embed/6X3ZJh762-I',
            tidal_link: 'https://tidal.com/track/80806996/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Blestyashchiye',
            notes: ''
        }, 
        {
            num: 26,
            song: 'Вывирать чудо',
            artist: 'Nyusha',
            album: 'Вывирать чудо',
            country: 'Russia',
            year: 2010,
            duration: '4:26',
            yt_link: 'https://www.youtube.com/embed/RjObnc58fAM',
            tidal_link: 'https://tidal.com/track/67846113/u',
            spotify_link: '',
            wiki: 'https://en.wikipedia.org/wiki/Nyusha',
            notes: 'Nyusha dresses like the girls in those 2000s flash dress up games in this music video. <br> She did a remake of this song with Persian singer Arash, who also appears on track 25.'
        }
    ];

     function getTidalEmbedLink(url) {
        if (!url) return '';
        const match = url.match(/tidal\.com\/track\/(\d+)/);
        return match ? `https://embed.tidal.com/tracks/${match[1]}` : '';
    }

    tracklist.forEach(track => {
        track.tidal_embed = getTidalEmbedLink(track.tidal_link);
    });

    const template_f = '{{#tracklist}} <div class="track-container"> <button type="button" class="coll-closed track-toggle"> <h1 class="track-num">{{num}}</h1> <img class="album-icon" src="{{num}}.png" alt= "{{album}} by {{artist}}"> <div class="song-info"> <h3>{{song}}</h3> <p>{{artist}}</p> </div> <p class="album">{{album}}</p> <p class="duration">{{duration}}</p> </button> <div class="content_closed"> <div class="media-container"> <table cellspacing="0"> <tr> <th>Song</th> <td>{{song}}</td> </tr> <tr> <th>Artist</th> <td>{{artist}}</td> </tr> <tr> <th>Album</th> <td>{{album}}</td> </tr> <tr> <th>Year</th> <td>{{year}}</td> </tr> <tr> <th>Country</th> <td>{{country}}</td> </tr> </table>{{#tidal_embed}}<iframe class="tidal-embed" src="{{.}}" frameborder="0" allowfullscreen allow="encrypted-media *; fullscreen *; web-share *;"></iframe>{{/tidal_embed}}</div> {{#notes}}<div class="media-container"> <h3>Notes:</h3> <p>{{{.}}}</p> </div>{{/notes}} <div class="music-link-container"> {{#wiki}}<div class="music-link"> <img src="../img/icons/wiki.png"> <a href="{{.}}"target="_blank"><p>wikipedia</p></a> </div> {{/wiki}}<div class="music-link"> <img src="../img/icons/yt.png"> <a href="{{yt_link}}" target="_blank"><p>youtube</p></a> </div> <div class="music-link"> <img src="../img/icons/tidal.png"> <a href="{{tidal_link}}" target="_blank"><p>tidal</p></a> </div> <div class="music-link"> <img src="../img/icons/spotify.png"> <a href="{{spotify_link}}" target="_blank"><p>spotify</p></a> </div> </div> </div> </div> {{/tracklist}}';
    
    const template = '{{#tracklist}} <div class="track-container"> <button type="button" class="coll-closed track-toggle"> <h1 class="track-num">{{num}}</h1> <img class="album-icon" src="{{num}}.png"> <div class="song-info"> <h3>{{song}}</h3> <p>{{artist}}</p> </div> <p class="album">{{album}}</p> <p class="duration">{{duration}}</p> </button> <div class="content_closed"> <div class="media-container"> <table cellspacing="0"> <tr> <th>Song</th> <td>{{song}}</td> </tr> <tr> <th>Artist</th> <td>{{artist}}</td> </tr> <tr> <th>Album</th> <td>{{album}}</td> </tr> <tr> <th>Year</th> <td>{{year}}</td> </tr> <tr> <th>Country</th> <td>{{country}}</td> </tr> </table> <iframe class="vid" src="{{yt_link}}" title="YouTube video player" frameborder="0" allowfullscreen></iframe> </div> {{#notes}}<div class="media-container"> <h3>Notes:</h3> <p>{{{.}}}</p> </div>{{/notes}} <div class="music-link-container"> {{#wiki}}<div class="music-link"> <img src="../img/icons/wiki.png"> <a href="{{.}}" target="_blank"><p>wikipedia</p></a> </div> {{/wiki}} <div class="music-link"> <img src="../img/icons/tidal.png"> <a href="{{tidal_link}}" target="_blank"><p>tidal</p></a> </div> <div class="music-link"> <img src="../img/icons/spotify.png"> <a href="{{spotify_link}}" target="_blank"><p>spotify</p></a> </div> </div> </div> </div> {{/tracklist}}';
    const rendered = Mustache.render(template, {tracklist});
    document.getElementById('tracklist-placeholder').innerHTML = rendered;
    initTracklistInteractions();
}


            // tidal_embed: function() {
            //     return function (text, render){
            //         text = render(text);
            //         const tidal_embed = 'https://embed.' + text.split('https://')[1].split('/u')[0];
            //         return tidal_embed;
            //     }
            // },

// https://tidal.com/track/190188581/u
// html formatted template:
				// {{#tracklist}} <div class="track-container">
				// 	<button type="button" class="coll-closed ">
				// 		<h1 class="track-num">{{num}}</h1>
				// 		<img class="album-icon" src="{{num}}.jpg">
				// 		<div class="song-info">
				// 			<h3>{{song}}</h3>
				// 			<p>>{{artist}}</p>
				// 		</div>
				// 		<p class="album">{{album}}</p>
				// 		<p class="duration">{{duration}}</p>
				// 	</button>
				// 	<div class="content_closed">
				// 		<div class="media-container">
				// 			<div id="table"></div>
                // <table> <tr> <th>Song</th> <td>{{song}}</td> </tr> <tr> <th>Artist</th> <td>{{artist}}</td> </tr> <tr> <th>Album</th> <td>{{album}}</td> </tr> <tr> <th>Year</th> <td>{{year}}</td> </tr> <tr> <th>Country</th> <td>{{country}}</td> </tr> </table>
				// 			<iframe class="vid" src="{{yt_link}}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
				// 		</div>
 				// 		<div class="media-container">
 				// 			<h3>Notes:</h3>
 				// 			<p>{{notes}}</p>
 				// 		</div>
				// 		<div class="music-link-container">
				// 			<div class="music-link">
				// 				<img src="../img/icons/tidal.png">
				// 				<a href="{{tidal_link}}" target="_blank"><p>tidal</p></a>
				// 			</div>
				// 			<div class="music-link">
				// 				<img src="../img/icons/spotify.png">
				// 				<a href="{{spotify_link}}" target="_blank"><p>spotify</p></a>
				// 			</div>
				// 		</div>
				// 	</div>
				// </div> {{/tracklist}}

                


                // <div class="track-container">
                //     <button type="button" class="coll-closed track-toggle">
                //         <h1 class="track-num">{{num}}</h1>
                //         <img class="album-icon" src="{{num}}.png">
                //         <div class="song-info">
                //             <h3>{{song}}</h3>
                //             <p>{{artist}}</p>
                //         </div>
                //         <p class="album">{{album}}</p>
                //         <p class="duration">{{duration}}</p>
                //     </button>
                //     <div class="content_closed">
                //         <div class="media-container">
                //             <table cellspacing="0">
                //                 <tr>
                //                     <th>Song</th>
                //                     <td>{{song}}</td>
                //                 </tr>
                //                 <tr>
                //                     <th>Artist</th>
                //                     <td>{{artist}}</td>
                //                 </tr>
                //                 <tr>
                //                     <th>Album</th>
                //                     <td>{{album}}</td>
                //                 </tr>
                //                 <tr>
                //                     <th>Year</th>
                //                     <td>{{year}}</td>
                //                 </tr>
                //                 <tr>
                //                     <th>Country</th>
                //                     <td>{{country}}</td>
                //                 </tr>
                //             </table>
                //             <iframe class="vid" src="{{yt_link}}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                //         </div>
                //         <div class="media-container">
                //             <h3>Notes:</h3>
                //             <p>{{{.}}}</p>
                //         </div>
                //         <div class="music-link-container">
                //             <div class="music-link">
                //                 <img src="../img/icons/wiki.png"> <a href="{{.}}" target="_blank"><p>wikipedia</p></a> </div> {{/wiki}} <div class="music-link"> 
                //                 <img src="../img/icons/tidal.png"> <a href="{{tidal_link}}" target="_blank"><p>tidal</p></a> </div> <div class="music-link">
                //                 <img src="../img/icons/spotify.png"> <a href="{{spotify_link}}" target="_blank"><p>spotify</p></a>
                //             </div>
                //         </div>
                //     </div>
                // </div>