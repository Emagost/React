const getImage = async () =>{

    try {

        const apiKey = 'WfittFKkXkcu5mMB3JJocqVDEH8QD6LZ'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    

    } catch (e) {
        console.error(e);
    }

}

getImage()