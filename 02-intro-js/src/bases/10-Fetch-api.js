const apiKey = 'WfittFKkXkcu5mMB3JJocqVDEH8QD6LZ'

const call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

call
    .then (resp => resp.json())
    .then (({data}) => {
        const {url}=data.images.original;
        
        const img = document.createElement('img');
        img.src=url;

        document.body.append(img)
    })

.catch (console.warn)