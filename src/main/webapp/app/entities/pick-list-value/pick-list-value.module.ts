import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PghAppSharedModule } from 'app/shared';
import {
    PickListValueComponent,
    PickListValueDetailComponent,
    PickListValueUpdateComponent,
    PickListValueDeletePopupComponent,
    PickListValueDeleteDialogComponent,
    pickListValueRoute,
    pickListValuePopupRoute,
    PickListValueChildPopupComponent,
    PickListValueChildDialogComponent
} from './';

const ENTITY_STATES = [...pickListValueRoute, ...pickListValuePopupRoute];

@NgModule({
    imports: [PghAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PickListValueComponent,
        PickListValueDetailComponent,
        PickListValueUpdateComponent,
        PickListValueDeleteDialogComponent,
        PickListValueDeletePopupComponent,
        PickListValueChildPopupComponent,
        PickListValueChildDialogComponent
    ],
    entryComponents: [
        PickListValueComponent,
        PickListValueUpdateComponent,
        PickListValueDeleteDialogComponent,
        PickListValueDeletePopupComponent,
        PickListValueChildPopupComponent,
        PickListValueChildDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PghAppPickListValueModule {}
