 const bands = [
    {
        "id": 1,
        "name": "AC/DC",
        "country" : "Australia",
        "genre": ["Hard Rock", "Blues Rock", "Glam Rock"]
    },
    {
        "id": 2,
        "name": "Led Zeppelin",
        "country" : "United Kingdom",
        "genre": ["Hard Rock", "Blues Rock", "Folk Rock", "Rock"]
    },
    {
        "id": 3,
        "name": "Rage Against the Machine",
        "country" : "United States",
        "genre": ["Rap Metal", "Alternative Metal", "Rap Rock", "Alternative Rock"]
    }
];

const albums = [
    {
        "id": 1,
        "name": "Back in Black",
        "releaseYear": 1980,
        "bandId": 1
    },
    {
        "id" : 2,
        "name": "Highway to Hell",
        "releaseYear": 1979,
        "bandId": 1
    },
    {
        "id" : 3,
        "name": "Led Zeppelin IV",
        "releaseYear": 1971,
        "bandId": 2
    },
    {
        "id" : 4,
        "name": "Rage Against the Machine",
        "releaseYear": 1992,
        "bandId": 3
    }
];

const songs =  [
    {
        "id" : 1,
        "name" : "Hells Bells",
        "duration" : 5.11,
        "albumId" : 1
    },
    {
        "id" : 2,
        "name" : "Highway to Hell",
        "duration" : 3.26,
        "albumId" : 2
    },
    {
        "id" : 3,
        "name" : " Black Dog",
        "duration" : 4.55,
        "albumId" : 3
    },
    {
        "id" : 4,
        "name" : "Stairway to Heaven",
        "duration" : 7.55,
        "albumId" : 3
    },
    {
        "id" : 5,
        "name" : "Killing in the Name",
        "duration" : 5.14,
        "albumId" : 4
    } 
];

module.exports.bands = bands;
module.exports.albums = albums;
module.exports.songs = songs;