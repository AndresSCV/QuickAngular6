import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CursoComponent } from './cursos/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    
    EstudianteComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
