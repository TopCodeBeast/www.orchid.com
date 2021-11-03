import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisionComponent } from './vision/vision.component';
import { EventsComponent } from './events/events.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MobilePrivacyPolicyComponent } from './mobile-privacy-policy/mobile-privacy-policy.component';
import { ServiceTermsComponent } from './service-terms/service-terms.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { NewsletterSignupCoreComponent } from './newsletter-signup-core/newsletter-signup-core.component';
import { NewsletterSignupHeroComponent } from './newsletter-signup-hero/newsletter-signup-hero.component';
import { NewsletterSignupFeaturesComponent } from './newsletter-signup-features/newsletter-signup-features.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { JoinComponent } from './join/join.component';
import { OxtComponent } from './oxt/oxt.component';
import { PreferredProvidersComponent } from './preferredproviders/preferredproviders.component';
import { PartnersComponent } from './partners/partners.component';
import { PodcastHeroComponent } from './podcast-hero/podcast-hero.component';
import { PodcastPlatformsComponent } from './podcast-platforms/podcast-platforms.component';

import { PodcastComponent } from './podcast/podcast.component';

import { WhereOXTComponent } from './where-oxt/where-oxt.component';
import { WhereOXTExtendedComponent } from './where-oxt-extended/where-oxt.component';
import { SetupVideoSectionComponent } from './setup-video-section/setup-video-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebinarLPComponent } from './webinar-lp/webinar-lp.component';
import { NewsletterSignupPage } from './newsletter-signup-page/newsletter-signup-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { Slides2021Component } from './slides-2021/slides.component';
import { Priv8 } from './priv8/priv8.component';
import { Priv8Signup } from './priv8-signup/priv8-signup.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { I18nModule } from './i18n/i18n.module';
import { MetaService } from './MetaService';

@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    VisionComponent,
    EventsComponent,
    DownloadComponent,
    PrivacyPolicyComponent,
    MobilePrivacyPolicyComponent,
    ServiceTermsComponent,
    HomeComponent,
    GetStartedComponent,
    NewsletterSignupComponent,
    NewsletterSignupCoreComponent,
    NewsletterSignupHeroComponent,
    NewsletterSignupFeaturesComponent,
    PageLayoutComponent,
    FaqComponent,
    ContactComponent,
    AboutCompanyComponent,
    AmbassadorComponent,
    JoinComponent,
    OxtComponent,
    PreferredProvidersComponent,
    PartnersComponent,
    PodcastHeroComponent,
    PodcastPlatformsComponent,
    PodcastComponent,
    NewsletterSignupPage,
    WhereOXTComponent,
    WhereOXTExtendedComponent,
    VideoSectionComponent,
    SetupVideoSectionComponent,
    NotFoundComponent,
    WebinarLPComponent,
    QuizComponent,
    Slides2021Component,
    Priv8,
    Priv8Signup,
  ],
  imports: [
    // TODO: how important is appId?
    BrowserModule.withServerTransition({ appId: 'orchid-www' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    I18nModule
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
