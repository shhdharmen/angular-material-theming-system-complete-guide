import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [AlertComponent],
})
export class SharedModule {}
