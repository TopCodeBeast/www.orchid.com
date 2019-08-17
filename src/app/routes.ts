import {Routes} from "@angular/router";

import {AboutAppComponent} from "./about-app/about-app.component";
import {AboutCompanyComponent} from "./about-company/about-company.component";
import {AboutNetworkComponent} from "./about-network/about-network.component";
import {EventsComponent} from "./events/events.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {HomeComponent} from "./home/home.component";
import {PageLayoutComponent} from "./page-layout/page-layout.component";
import {
  PrivacyPolicyComponent
} from "./privacy-policy/privacy-policy.component";
import {
  MobilePrivacyPolicyComponent
} from "./mobile-privacy-policy/mobile-privacy-policy.component";
import {ServiceTermsComponent} from "./service-terms/service-terms.component";
import {WhyOrchidComponent} from "./why-orchid/why-orchid.component";

export const routes: Routes = [
  {
    path: "",
    component: PageLayoutComponent,
    children: [
      {path: "", component: HomeComponent},
      {path: "app", component: AboutAppComponent},
      {path: "app.html", redirectTo: "app"},
      {path: "network", component: AboutNetworkComponent},
      {path: "network.html", redirectTo: "network"},
      {path: "why-orchid", component: WhyOrchidComponent},
      {path: "why-orchid.html", redirectTo: "why-orchid"},
      {path: "faqs", component: FaqsComponent},
      {path: "faqs.html", redirectTo: "faqs"},
      {path: "events", component: EventsComponent},
      {path: "events.html", redirectTo: "events"},
      {path: "privacy-policy", component: PrivacyPolicyComponent},
      {path: "mobile-privacy-policy", component: MobilePrivacyPolicyComponent},
      {path: "privacy-policy.html", redirectTo: "privacy-policy"},
      {path: "mobile-privacy-policy.html", redirectTo: "mobile-privacy-policy"},
      {path: "service-terms", component: ServiceTermsComponent},
      {path: "service-terms.html", redirectTo: "service-terms"},
    ]
  },
  {
    path: "",
    component: PageLayoutComponent,
    data: {purpleLayout: true},
    children: [
      {
        path: "company",
        component: AboutCompanyComponent,
        data: {purpleLayout: true}
      },
      {path: "company.html", redirectTo: "company"},
    ]
  },
  {path: "index.html", redirectTo: ""},
];
