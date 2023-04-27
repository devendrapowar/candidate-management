import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linkedin-login-response',
  templateUrl: './linkedin-login-response.component.html',
  styleUrls: ['./linkedin-login-response.component.scss']
})
export class LinkedinLoginResponseComponent {
  linkedInToken = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
  }
}
