import { Injectable } from '../../node_modules/@angular/core';
import { Http, Headers, Response } from '../../node_modules/@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServersService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        // const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://angularcoursehttp-63af0.firebaseio.com/data.json', servers, {headers: headers});

        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://angularcoursehttp-63af0.firebaseio.com/data.json', servers, {headers: headers});
    // post - append to any existing element
    // post often used to store data
    // as long as we don't subscribe, no request gets sent
    // data.json just prevents a cors error in Firebase - this is firebase specific
    // on Firebase, this will overrite the existing data
    }

    getServers() {
        return this.http.get('https://angularcoursehttp-63af0.firebaseio.com/data')
        .pipe(map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'fetched_' + server.name;
                }
                return data;
            }
        ))
        .pipe(catchError(
            (error: Response) => {
                return throwError('Something went wrong');
            }
        ));
    }

    getAppName() {
        return this.http.get('https://angularcoursehttp-63af0.firebaseio.com/AppName.json')
        .pipe(map( (response: Response) => {
            return response.json();
            }
        ));
    }
}
