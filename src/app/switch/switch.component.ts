import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  @Output() switch = new EventEmitter();

  handleClick() {
    this.switch.emit();
  }
}
