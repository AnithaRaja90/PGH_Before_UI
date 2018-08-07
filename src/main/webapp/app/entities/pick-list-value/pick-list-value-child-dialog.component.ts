import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPickListValue, PickListValue } from 'app/shared/model/pick-list-value.model';
import { PickListValueService } from './pick-list-value.service';

@Component({
    selector: 'jhi-pick-list-value-child-dialog',
    templateUrl: './pick-list-value-child-dialog.component.html'
})
export class PickListValueChildDialogComponent {
    pickListValue: IPickListValue;
    pickListChildValue: Object = {};

    constructor(
        private pickListValueService: PickListValueService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    /* addChild(id: number) {
        console.log(id);
        console.log(this.pickListValue.subChildValue);
        // this.pickListValue.selfIds = [id];
        this.pickListValue.pickListValue = this.pickListValue.subChildValue;
        console.log(this.pickListValue);
    } */
}

@Component({
    selector: 'jhi-pick-list-value-child-popup',
    template: ''
})
export class PickListValueChildPopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ pickListValue }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(PickListValueChildDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });

                this.ngbModalRef.componentInstance.pickListValue = pickListValue;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
