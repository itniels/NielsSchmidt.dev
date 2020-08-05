import { NgModule } from '@angular/core';
// Common Behaviours
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { TextFieldModule } from '@angular/cdk/text-field';
// Components
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [],
  imports: [
    // Common Behaviours
    A11yModule,
    BidiModule,
    ClipboardModule,
    DragDropModule,
    LayoutModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkScrollableModule,
    TextFieldModule,
    // Components
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
  ],
  exports: [
    // Common Behaviours
    A11yModule,
    BidiModule,
    ClipboardModule,
    DragDropModule,
    LayoutModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkScrollableModule,
    TextFieldModule,
    // Components
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
  ]
})
export class CdkModule { }
