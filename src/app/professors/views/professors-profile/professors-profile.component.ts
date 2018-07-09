import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NguCarousel } from '@ngu/carousel';
import { ActivatedRoute } from '@angular/router';
import { Profession } from '../../../shared/interfaces/models';
import { ProfessionService } from '../../../shared/services/profession.service';

@Component({
  selector: 'app-professors-profile',
  templateUrl: './professors-profile.component.html',
  styleUrls: ['./professors-profile.component.scss']
})
export class ProfessorsProfileComponent implements OnInit {

  previousProfessionsSelected: Set<number> = new Set<number>();
  professions: any[] = [];

  constructor(private professionService: ProfessionService) { }

  ngOnInit(): void {
    this.professionService.findAll().subscribe(response => {
      response.forEach(profession => {
        this.professions.push({
          professionID: profession.professionID,
          professionName: profession.professionName,
          selected: false
        });
        // guardo las que previamente estaban marcadas
        this.previousProfessionsSelected.add(profession.professionID);
      });
    });
  }

  saveChanges(): void {
    // Busco el delta de activos/inactivos
    this.professions.forEach(profession => {
      if (!profession.selected && this.previousProfessionsSelected.has(profession.professionID)) {
        //this.professionService.remove(profession);
      }
      if (profession.selected && !this.previousProfessionsSelected.has(profession.professionID)) {
        //this.professionService.add(profession);
      }
    });
  }
}
