import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {MetaInfoComponent} from './components/meta-info/meta-info.component';
import {AlbumItemComponent} from './components/album-item/album-item.component';
import {PhotoListItemComponent} from './components/photo-list-item/photo-list-item.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {PhotoSingleComponent} from './components/photo-single/photo-single.component';
import {LoginComponent} from './components/login/login.component';
import {ApiService} from './services/api.service';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


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
        LoginComponent,
        ContentWrapperComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot([
            {path: '', component: ContentWrapperComponent},
            {path: 'login', component: LoginComponent},
            {path: 'album', component: PhotoListItemComponent}
        ]),
        StoreModule.provideStore({
            //place for future reducers
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
