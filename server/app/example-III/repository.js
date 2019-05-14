const axios = require('axios');

function get(path) {
    return axios.get(`http://localhost:3000${path}`).then(function(response) {
        return response.data;
    });
}

function post(path, data) {
    return axios.post(`http://localhost:3000${path}`, data).then(function(response) {
        return response.data;
    });
}

const findBand = function(id) {
    return get(`/bands/${id}`);
}

const findAllBands = function() {
    return get(`/bands`);        
}

const findAlbumsByBandId = function(bandId) {
    return get(`/bands/${bandId}/albums`);
}

const findSongsByAlbumId = function(albumId) {
    return get(`/albums/${albumId}/songs`);
}

const addBand = function(band) {
    return post(`/bands`, band);
}

const addAlbum = function(bandId, album) {
    album.bandId = bandId;
    return post(`/albums`, album);
}

const addSong = function(albumId, song) {
    song.albumId = albumId;
    return post(`/songs`, song);
}

module.exports.findBand = findBand;
module.exports.findAllBands = findAllBands;
module.exports.findAlbumsByBandId = findAlbumsByBandId;
module.exports.findSongsByAlbumId = findSongsByAlbumId;
module.exports.addBand = addBand;
module.exports.addAlbum = addAlbum;
module.exports.addSong = addSong;
