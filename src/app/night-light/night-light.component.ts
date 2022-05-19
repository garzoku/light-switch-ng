import { Component } from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent {
  status = "The light is off";
  backgroundColor!: string;

  flickSwitch() {
    this.status = this.status === "The light is off" ? "The light is on" : "The light is off";
  }
}
