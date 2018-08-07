/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PghAppTestModule } from '../../../test.module';
import { BatchDeleteDialogComponent } from 'app/entities/batch/batch-delete-dialog.component';
import { BatchService } from 'app/entities/batch/batch.service';

describe('Component Tests', () => {
    describe('Batch Management Delete Component', () => {
        let comp: BatchDeleteDialogComponent;
        let fixture: ComponentFixture<BatchDeleteDialogComponent>;
        let service: BatchService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PghAppTestModule],
                declarations: [BatchDeleteDialogComponent]
            })
                .overrideTemplate(BatchDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(BatchDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BatchService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
