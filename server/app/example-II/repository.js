const { albums, bands, songs } = require('./data')

const findBand = function(id) {
    return bands.find(b => b.id == id);
}

const findAllBands = function() {
    return bands;
}

const findAlbumsByBandId = function(bandId) {
    return albums.filter(a => a.bandId == bandId);
}

const findSongsByAlbumId = function(albumId) {
    return songs.filter(s => s.albumId == albumId);
}

module.exports.findBand = findBand;
module.exports.findAllBands = findAllBands;
module.exports.findAlbumsByBandId = findAlbumsByBandId;
module.exports.findSongsByAlbumId = findSongsByAlbumId;