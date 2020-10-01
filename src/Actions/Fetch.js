/**
 * Generates random number 1-10(number of users in API)
 * Does a fetch using number as id of user
 * @param {Callback} setUser 
 */

export const randomUser = async (setUser) => {
    const randomId = Math.round(Math.random() * (10 - 1) + 1);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
    setUser(await res.json());
}