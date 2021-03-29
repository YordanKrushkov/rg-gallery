import { getAll, getPainting, updateAPainting, deletePaintingUrl, deleteAndUpdateUrl,updateProfilePicture } from './URL'
const getPaintings = async (gallery) => {
    const promise = await fetch(getAll, {
        method: 'GET',
        headers: { 'gallery': gallery }
    })
    const res = await promise.json()
    return res

}

const updatePainting = async (id, painting, imgs) => {
    const send = await fetch(updateAPainting, {
        method: "POST",
        body: JSON.stringify({ id: id, ...painting, imgs: imgs }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const res = await send.json();
    return res;
};

const getOne = async (id) => {
    const promise = await fetch(getPainting, {
        method: 'GET',
        headers: { 'key': id }
    })
    const res = await promise.json()
    return res

}
const deletePainting = async (id, imgs) => {
    const promise = await fetch(deletePaintingUrl, {
        method: "POST",
        body: JSON.stringify({ id: id, imgs: imgs }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = promise.json();
    return data;
}

const deleteAndUpdate = async (id, deletImg) => {

    const painting = await fetch(deleteAndUpdateUrl, {
        method: "POST",
        body: JSON.stringify({ id: id, img: deletImg }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await painting.json();
    return data;
}
const changeProfile=async(id,data)=>{
    const send = await fetch(updateProfilePicture, {
        method: "POST",
        body: JSON.stringify({ id: id, profile: data }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const res=send.json();
    return res
}

export {
    getPaintings,
    updatePainting,
    getOne,
    deletePainting,
    deleteAndUpdate,
    changeProfile
}