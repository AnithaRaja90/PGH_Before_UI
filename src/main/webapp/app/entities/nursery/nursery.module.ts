import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PghAppSharedModule } from 'app/shared';
import {
    NurseryComponent,
    NurseryDetailComponent,
    NurseryUpdateComponent,
    NurseryDeletePopupComponent,
    NurseryDeleteDialogComponent,
    nurseryRoute,
    nurseryPopupRoute
} from './';

const ENTITY_STATES = [...nurseryRoute, ...nurseryPopupRoute];

@NgModule({
    imports: [PghAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        NurseryComponent,
        NurseryDetailComponent,
        NurseryUpdateComponent,
        NurseryDeleteDialogComponent,
        NurseryDeletePopupComponent
    ],
    entryComponents: [NurseryComponent, NurseryUpdateComponent, NurseryDeleteDialogComponent, NurseryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PghAppNurseryModule {}
