import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-container-list",
  templateUrl: "./container-list.component.html",
  styleUrls: ["./container-list.component.scss"]
})
export class ContainerListComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.data);
  }
}
