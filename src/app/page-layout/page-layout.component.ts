import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs/operators';

const purpleURLs = [
  '/priv8',
];

const slimURLs = [
];

const badgeURLs = [
  '/',
  '',
];
@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.scss"]
})
export class PageLayoutComponent implements OnInit {
  url: string;
  router: Router;
  locale: String;
  redirectURL: string;

  constructor(
    route: ActivatedRoute,
    router: Router,
    @Inject(LOCALE_ID) protected localeId: string,
  ) {
    this.router = router;
    const url = this.router.url.replace(/\/$/, '');
    this.url = url;
	this.locale = localeId;
	this.redirectURL = `https://www.orchid.com${('/' + this.locale.replace(/en-us/i, '') + '/' + url).replace('//', '/').replace('//', '/').replace('//', '/')}`;
  }

  ngOnInit() {
	const doc = typeof document !== "undefined" && document;
	if (doc) {
		window.location.href = this.redirectURL;
	}
  }
}
