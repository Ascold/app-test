import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {PhotoListItemComponent} from './components/photo-list-item/photo-list-item.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {PhotoSingleComponent} from './components/photo-single/photo-single.component';
import {LoginComponent} from './components/login/login.component';
import {ApiService} from './services/api.service';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import {Store, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {albums} from "./reducers/albums.reducer";
import {user} from "./reducers/user.reducer";
import {AppStore} from "./app.store";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TabsComponent,
        AlbumsComponent,
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
            {path: 'albums/:name', component: PhotoListItemComponent},
            {path: 'albums/:name/:id', component: PhotoSingleComponent}
        ]),
        StoreModule.provideStore({
            albums,
            user
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(store: Store<AppStore>) {
        store.dispatch({type: 'GET_USER_FROM_STORAGE'});
    }
}
