import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ReviewGalleryComponent = class ReviewGalleryComponent {
    constructor(birdeyeService) {
        this.birdeyeService = birdeyeService;
    }
    ngOnInit() {
        this.birdeyeService.getReviews();
    }
};
ReviewGalleryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-review-gallery',
        templateUrl: './review-gallery.component.html',
        styleUrls: ['./review-gallery.component.css']
    })
], ReviewGalleryComponent);
export { ReviewGalleryComponent };
//# sourceMappingURL=review-gallery.component.js.map