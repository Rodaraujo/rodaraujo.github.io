import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('accept', 'application/json');
let BirdeyeService = class BirdeyeService {
    constructor(http) {
        this.http = http;
        this.url = "https://api.birdeye.com/resources/v1/review/businessId/154506337206117?sindex=0&count=25&api_key=6Z8JfGOXRd69pbpNvDN7CbSYep9QQjYl";
    }
    getReviews() {
        const body = {
            fromDate: "04/01/2018",
            toDate: "05/3/2019",
            updateFromDate: "04/01/2018",
            updateToDate: "05/3/2019",
            sources: ["google", "facebook"],
            ratings: [1, 2, 3, 4, 5, 0],
            searchStr: ""
        };
        return this.http
            .post(this.url, body, { headers: headers })
            .subscribe(result => console.log(result));
    }
};
BirdeyeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], BirdeyeService);
export { BirdeyeService };
/*
curl
-H "content-type: application/json"
-H "accept:application/json"
-X POST
-d {
    "fromDate":"04/01/2018",
    "toDate":"05/3/2019",
    "updateFromDate":"04/01/2018",
    "updateToDate":"05/3/2019",
    "sources":["google","facebook"],
    "ratings":[1,2,3,4,5,0],
    "searchStr":"",
    "subBusinessIds":[154506337206117]
}
"https://api.birdeye.com/resources/v1/review/businessId/755009344_1?sindex=0&count=25&api_key=6Z8JfGOXRd69pbpNvDN7CbSYep9QQjYl" -v
*/ 
//# sourceMappingURL=birdeye.service.js.map