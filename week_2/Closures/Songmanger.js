const SongsManager = function()
{
    const songs = {
    
      }

    const addSong = function(name,Url)
    {
       let str = "https://www.youtube.com/watch?v="
       let str2 = Url.slice(str.length);
       songs[name] = Url 

    }

    const getSong = function(name)
    {
        for(let song of Object.keys(songs))
        {
            if(song === name)
            {
                return songs[name]
            }

        }

        return "Songs Not Found"

    }

    return {
        addSong:addSong,
        getSong:getSong
    };
}




const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ