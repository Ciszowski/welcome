export default function getIntro(callback)
{
    fetch("/api/presentation.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then((data)=>{
        callback(data);
    })
}

