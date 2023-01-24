export function myFetch(api: string) {
    return new Promise((resolve, reject) => {
        resolve({ data: [1,2,3] })
    })
}