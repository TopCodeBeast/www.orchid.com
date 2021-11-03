import { Routes } from "@angular/router";

import { AboutCompanyComponent } from "./about-company/about-company.component";
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { EventsComponent } from "./events/events.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { GetStartedComponent } from './get-started/get-started.component';
import { DownloadComponent } from "./download/download.component";
import { PageLayoutComponent } from "./page-layout/page-layout.component";
import {
	PrivacyPolicyComponent
} from "./privacy-policy/privacy-policy.component";
import {
	MobilePrivacyPolicyComponent
} from "./mobile-privacy-policy/mobile-privacy-policy.component";
import { ServiceTermsComponent } from "./service-terms/service-terms.component";
import { VisionComponent } from "./vision/vision.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { JoinComponent } from './join/join.component';
import { PreferredProvidersComponent } from './preferredproviders/preferredproviders.component';
import { OxtComponent } from './oxt/oxt.component';
import { PartnersComponent } from './partners/partners.component';

import { PodcastComponent } from './podcast/podcast.component';

import { NewsletterSignupPage } from './newsletter-signup-page/newsletter-signup-page.component';
import { WebinarLPComponent } from './webinar-lp/webinar-lp.component';
import { QuizComponent } from './quiz/quiz.component';
import { Slides2021Component } from './slides-2021/slides.component';
import { Priv8 } from './priv8/priv8.component';
import { Priv8Signup } from './priv8-signup/priv8-signup.component';

export const routes: Routes = [
	{
		path: "",
		component: PageLayoutComponent,
		children: [
			{ path: "", component: HomeComponent },
			{ path: "get-orchid", component: GetStartedComponent, data: { basicLayout: true } },
			{ path: "get-orchid.html", redirectTo: "get-orchid" },
			{ path: "get-started", redirectTo: "get-orchid" },
			{ path: "app", redirectTo: "download" },
			{ path: "app.html", redirectTo: "download" },
			{ path: "how-it-works", component: HowItWorksComponent },
			{ path: "how-it-works.html", redirectTo: "how-it-works" },
			{ path: "vision", component: VisionComponent },
			{ path: "vision.html", redirectTo: "vision" },
			{ path: "about-us", component: AboutCompanyComponent },
			{ path: "about-us.html", redirectTo: "about-us" },
			{ path: "privacy-guardian", component: AmbassadorComponent },
			{ path: "privacy-guardian.html", redirectTo: "ambassador" },
			{ path: "faq", component: FaqComponent },
			{ path: "faq.html", redirectTo: "faq" },
			{ path: "contact", component: ContactComponent },
			{ path: "download", component: DownloadComponent },
			{ path: "download.html", redirectTo: "download" },
			{ path: "events", component: EventsComponent },
			{ path: "events.html", redirectTo: "events" },
			{ path: "join", component: JoinComponent },
			{ path: "join.html", redirectTo: "join" },
			{ path: "webinar", component: WebinarLPComponent },
			{ path: "privacy-policy", component: PrivacyPolicyComponent },
			{ path: "mobile-privacy-policy", component: MobilePrivacyPolicyComponent },
			{ path: "privacy-policy.html", redirectTo: "privacy-policy" },
			{ path: "mobile-privacy-policy.html", redirectTo: "mobile-privacy-policy" },
			{ path: "service-terms", component: ServiceTermsComponent },
			{ path: "service-terms.html", redirectTo: "service-terms" },
			{ path: "oxt", component: OxtComponent },
			{ path: "oxt.html", redirectTo: "oxt" },
			{ path: "preferredproviders", component: PreferredProvidersComponent },
			{ path: "preferredproviders.html", redirectTo: "preferredproviders" },
			{ path: "partners", component: PartnersComponent },
			{ path: "partners.html", redirectTo: "partners" },
			{ path: "podcast", component: PodcastComponent },
			{ path: "podcast.html", redirectTo: "podcast" },
			{ path: "newsletter-signup", component: NewsletterSignupPage },
			{ path: "newsletter-signup.html", redirectTo: 'newsletter-signup' },
			{ path: "quiz", component: QuizComponent },
			{ path: "quiz.html", redirectTo: 'quiz' },
			{ path: "slides-2021", component: Slides2021Component },
			{ path: "slides-2021.html", redirectTo: 'slides-2021' },
			{ path: "priv8", component: Priv8, data: { purpleLayout: true } },
			{ path: "priv8.html", redirectTo: 'priv8' },
			{ path: "priv8-signup", component: Priv8Signup },
			{ path: "priv8-signup.html", redirectTo: 'priv8-signup' },
			{ path: "**", component: NotFoundComponent }
		]
	},
	{ path: "index.html", redirectTo: "" },
];
