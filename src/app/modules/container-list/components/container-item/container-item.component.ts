import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-container-item",
  templateUrl: "./container-item.component.html",
  styleUrls: ["./container-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerItemComponent implements OnInit {
  @Input() containerItem;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  getClassContainerStatus() {
    return "active";
  }
}
