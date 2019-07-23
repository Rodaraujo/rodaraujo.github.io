import { async, TestBed } from '@angular/core/testing';
import { ReviewGalleryComponent } from './review-gallery.component';
describe('ReviewGalleryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReviewGalleryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=review-gallery.component.spec.js.map