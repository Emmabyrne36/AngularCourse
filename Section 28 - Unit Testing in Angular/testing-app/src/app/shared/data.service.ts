export class DataService {
    getDetails() {
        const resultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data'); // pass back a string holding data
            }, 1500);
        });
        return resultPromise;
    }
}
