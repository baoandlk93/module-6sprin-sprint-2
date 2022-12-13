import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from "./component/home/home.module";
import {CarModule} from "./component/car/car.module";
import {BlogModule} from "./component/blog/blog.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StyleClassModule} from 'primeng/styleclass';
import {HttpClientModule} from "@angular/common/http";
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";

const googleLoginOptions = {
    scope: 'profile email',
    plugin_name: 'login'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeModule,
        CarModule,
        BlogModule,
        StyleClassModule,
        HttpClientModule,
        SocialLoginModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '612774287153-uthnsrl25on17doe8413il68ebv9c969.apps.googleusercontent.com',
                            googleLoginOptions
                        )
                    },
                ]
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
