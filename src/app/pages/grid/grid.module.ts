import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPageRoutingModule } from './grid-routing.module';

import { GridPage } from './grid.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    GridPageRoutingModule,
  ],
  declarations: [GridPage],
})
export class GridPageModule {}
