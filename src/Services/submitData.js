import getCookie from "../Utils/getCookie";

const submitData = async (base64EncodedImage, body, url) => {
    
    try {
        let result = await fetch(`https://rg-gallerybackend.herokuapp.com/${url}`, {
            method: "POST",
            body: JSON.stringify({ data: base64EncodedImage, prop: body }),
            headers: {
                "Content-type": "application/json",
                'Authorization': getCookie('x-auth-token')
            }
        });

        const res = await result.json();
        return res;

    } catch (error) {
        console.error(error);
    }
}

export default submitData