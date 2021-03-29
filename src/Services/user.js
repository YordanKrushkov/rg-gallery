import getCookie from '../Utils/getCookie'
import { getUserUrl, updateUserUrl } from './URL';
const getMyData = async () => {
    const promise = await fetch(getUserUrl, {
        method: 'GET',
        headers: { 'Auth': getCookie('x-auth-token') }
    })
    const res = await promise.json()
    return res

}
const updateUser = async (id, update) => {
    const promise = await fetch(updateUserUrl, {
        method: "POST",
        body: JSON.stringify({ id: id, ...update }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const result = promise.json();
    return result;
}
export {
    getMyData,
    updateUser
}