function renderList() {
    const tracklist = [
        {
            num: 1,
            song: 'song title',
            artist: 'artist name',
            album: 'album',
            year: 1975,
            duration: '3:25',
            yt_link: 'https://www.youtube.com/embed/pihwaswzciw',
            discogs_link: 'https://tidal.com/track/190188581/u',
            wiki: 'https://en.wikipedia.org/wiki/Lili_Ivanova',
            notes: '',
            fav: '',
        }, 
                {
            num: 2,
            song: 'song title',
            artist: 'artist name',
            album: 'album',
            country: 'Bulgaria',
            year: 1975,
            duration: '3:25',
            yt_link: 'https://www.youtube.com/embed/pihwaswzciw',
            discogs_link: 'https://tidal.com/track/190188581/u',
            wiki: 'https://en.wikipedia.org/wiki/Lili_Ivanova',
            notes: '',
            fav: '',
        }, 
        {
            num: 3,
            song: 'song title',
            artist: 'artist name',
            album: 'album',
            country: 'Bulgaria',
            year: 1975,
            duration: '3:25',
            yt_link: 'https://www.youtube.com/embed/pihwaswzciw',
            discogs_link: 'https://tidal.com/track/190188581/u',
            wiki: 'https://en.wikipedia.org/wiki/Lili_Ivanova',
            notes: '',
            fav: '',
        }, 
    ];


    const template = '{{#tracklist}} <div class="track-container {{#fav}}fav-track{{/fav}} "> <button type="button" class="coll-closed track-toggle"> <h1 class="track-num">{{num}}</h1> <img class="album-icon" src="{{num}}.png"> <div class="song-info"> <h3>{{song}}</h3> <p>{{artist}}</p> </div> <p class="album">{{album}}</p> <p class="duration">{{duration}}</p> </button> <div class="content_closed"> <div class="media-container"> <table cellspacing="0"> <tr> <th>Song</th> <td>{{song}}</td> </tr> <tr> <th>Artist</th> <td>{{artist}}</td> </tr> <tr> <th>Album</th> <td>{{album}}</td> </tr> <tr> <th>Year</th> <td>{{year}}</td> </tr></table><iframe class="vid" src="{{yt_link}}?autoplay=0" title="YouTube video player" frameborder="0" modestbranding allowfullscreen></iframe> </div> {{#notes}}<div class="media-container"> <h3>Notes:</h3> <p>{{{.}}}</p> </div>{{/notes}} <div class="music-link-container"> {{#discogs_link}}<div class="music-link"> <img src="../img/icons/discogs.png"> <a href="{{.}}" target="_blank"><p>album discogs</p></a> </div> {{/discogs_link}}{{#wiki}}<div class="music-link"> <img src="../img/icons/wiki.png"> <a href="{{.}}" target="_blank"><p>artist wiki</p></a> </div> {{/wiki}}</div> </div> </div> {{/tracklist}}';
    const rendered = Mustache.render(template, {tracklist});
    document.getElementById('tracklist-placeholder').innerHTML = rendered;
    initTracklistInteractions();
}