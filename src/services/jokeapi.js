export const getJoke = async (API) => {
    try{

        const request = await fetch(API);

        const response = await request.json();

        console.log(response)

        document.querySelector(".joke").textContent = response.joke
    }
    catch(e)
    {
        console.log(e)
    }
}

