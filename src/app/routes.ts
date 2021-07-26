import { Routes } from "@angular/router";

import { AboutCompanyComponent } from "./about-company/about-company.component";
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { AboutNetworkComponent } from "./about-network/about-network.component";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { EventsComponent } from "./events/events.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
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
			{ path: "app", redirectTo: "download" },
			{ path: "app.html", redirectTo: "download" },
			{ path: "network", component: AboutNetworkComponent },
			{ path: "network.html", redirectTo: "network" },
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
			{
				path: "podcast",
				loadChildren: () => import("./podcast/podcast.component").then(m => m.PodcastComponent)
			},
			{
				path: "podcast/episode-1-interview-with-rich-starpoli",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-2-vinny-lingham",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-3-jyri-engestrom",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-4-roger-ver",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-5-jehan-chu",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-6-paul-veradittakit",
				loadChildren: () => import("./podcast-ep6/podcast.component").then(m => m.PodcastEp6Component)
			},
			{
				path: "podcast/episode-7-alexander-lloyd",
				loadChildren: () => import("./podcast-ep7/podcast.component").then(m => m.PodcastEp7Component)
			},
			{
				path: "podcast/episode-8-cindy-cohn",
				loadChildren: () => import("./podcast-ep8/podcast.component").then(m => m.PodcastEp8Component)
			},
			{
				path: "podcast/episode-9-david-chaum",
				loadChildren: () => import("./podcast-ep9/podcast.component").then(m => m.PodcastEp9Component)
			},
			{
				path: "podcast/episode-10-ben-bartlett",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-11-richard-muirhead",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-12-ken-seiff",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-13-brian-j-fox",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-14-juan-gilbert",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-15-val-mack",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-16-jason-brett",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-17-dawn-song",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-18-alex-gluchowski",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-19-david-pan",
				loadChildren: () => import("./podcast-ep1/podcast.component").then(m => m.PodcastEp1Component)
			},
			{
				path: "podcast/episode-20-neeraj-khandelwal",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-21-felipe-erazo",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-22-adriana-hamacher",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-23-roneil-rumburg",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-24-brad-kam",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-25-roger-huang",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-26-anne-ahola-ward",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-27-kurt-rohloff",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-28-andreas-antonopoulos",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-29-yaniv-tal",
				loadChildren: () => import("./podcast-ep2/podcast.component").then(m => m.PodcastEp2Component)
			},
			{
				path: "podcast/episode-30-franck-nouyrigat",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-31-jamie-king",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-32-nathan-wilcox",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-33-john-redgrave",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-34-joe-toscano",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-35-leigh-honeywell",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-36-lance-vick",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-37-david-henklel-wallace",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-38-miko-matsumura",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-39-gregory-landua",
				loadChildren: () => import("./podcast-ep3/podcast.component").then(m => m.PodcastEp3Component)
			},
			{
				path: "podcast/episode-40-marvin-tong",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-41-aibek-esengulov",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-42-tor-bair",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-43-emin-gun-sirer",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-44-bill-barhydt",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-45-derek-e-silva",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-46-edward-snowden",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-47-kara-swisher",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-48-avichal-garg",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-49-dragana-kaurin",
				loadChildren: () => import("./podcast-ep4/podcast.component").then(m => m.PodcastEp4Component)
			},
			{
				path: "podcast/episode-50-rebecca-wexler",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-51-greg-osuri",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-52-gbenga-sesan",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-53-jason-pielemeier",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-54-brittany-piovesan",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-55-john-gleeson",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-56-michael-caster",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
			{
				path: "podcast/episode-57-kean-birch",
				loadChildren: () => import("./podcast-ep5/podcast.component").then(m => m.PodcastEp5Component)
			},
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
