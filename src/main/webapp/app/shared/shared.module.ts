import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JobHcAutomaterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JobHcAutomaterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JobHcAutomaterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobHcAutomaterSharedModule {
  static forRoot() {
    return {
      ngModule: JobHcAutomaterSharedModule
    };
  }
}
