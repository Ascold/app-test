import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MetaInfoComponent } from './meta-info/meta-info.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { PhotoListItemComponent } from './photo-list-item/photo-list-item.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PhotoSingleComponent } from './photo-single/photo-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    MetaInfoComponent,
    AlbumItemComponent,
    PhotoListItemComponent,
    TooltipComponent,
    PhotoSingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
