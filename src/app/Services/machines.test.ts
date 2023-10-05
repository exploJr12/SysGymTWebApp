import { Component, OnInit } from '@angular/core';
import { MachinesService } from './machines.service';

@Component({
  selector: 'app-root',
  template: '<!-- Your template here -->',
})
export class AppComponent implements OnInit {
  constructor(private machinesService: MachinesService) {}

  ngOnInit(): void {
    this.getMachines();
  }

  getMachines(): void {
    this.machinesService.getMachinesList().subscribe(
      (response) => {
        console.log('Datos de máquinas:', response);
      },
      (error) => {
        console.error('Error al obtener datos de máquinas:', error);
      }
    );
  }
}
