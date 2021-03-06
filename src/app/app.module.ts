import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
 
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WyszukiwarkaComponent } from './wyszukiwarka/wyszukiwarka.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { FilmyComponent } from './filmy/filmy.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { InfoComponent } from './info/info.component';
import { UlubioneComponent } from './ulubione/ulubione.component';
import { StartComponent } from './start/start.component';
import {RouterModule} from '@angular/router';
import appRouting from './routing/my-routing';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OdcinkiComponent } from './odcinki/odcinki.component';
import {MatTableModule} from '@angular/material/table';
import { MyDataPipe } from './my-data.pipe';
import { PodsumowanieComponent } from './odcinki/podsumowanie/podsumowanie.component';
import {MatDialogModule} from '@angular/material';
import { UlubioneService } from './ulubione.service';


@NgModule({
  declarations: [
    AppComponent,
    WyszukiwarkaComponent,
    FilmyComponent,
    SzczegolyComponent,
    MenuComponent,
    InfoComponent,
    UlubioneComponent,
    StartComponent,
    OdcinkiComponent,
    MyDataPipe,
    PodsumowanieComponent
  ],
  imports: [
    RouterModule.forRoot(appRouting),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [UlubioneService],
  bootstrap: [AppComponent],
  entryComponents: [PodsumowanieComponent]
})
export class AppModule { }
