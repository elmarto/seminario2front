import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NguCarousel } from '@ngu/carousel';
import { ActivatedRoute } from '@angular/router';
import { Profession } from '../../../shared/interfaces/models';
import { ProfessionService } from '../../../shared/services/profession.service';
import { ProfessionalService } from '../../../shared/services/professional.service';
import { ProfessionalProfessionCreateRequest, ProfessionalProfessionDeleteRequest } from '../../../shared/interfaces/prospects';

@Component({
  selector: 'app-professors-profile',
  templateUrl: './professors-profile.component.html',
  styleUrls: ['./professors-profile.component.scss']
})
export class ProfessorsProfileComponent implements OnInit {

  previousProfessionsSelected: Set<number> = new Set<number>();
  professions: any[] = [];

  constructor(private professionService: ProfessionService,
              private professionalService: ProfessionalService) { }

  ngOnInit(): void {
    this.professionalService.findProfessionsByProfessional().subscribe(professionsByProfessional => {
      professionsByProfessional.forEach(profession => this.previousProfessionsSelected.add(profession.professionID));
      this.professionService.findAll().subscribe(allProfessions => {
        allProfessions.forEach(profession => {
          const selectableProfession = Object.assign({selected: this.previousProfessionsSelected.has(profession.professionID)}, profession);
          this.professions.push(selectableProfession);
        });
      });
    });
  }

  saveChanges(): void {
    // Busco el delta de activos/inactivos
    this.professions.forEach(profession => {
      if (!profession.selected && this.previousProfessionsSelected.has(profession.professionID)) {
        const professionalProfessionDeleteRequest: ProfessionalProfessionDeleteRequest = {
          professionID: profession.professionID
        };
        this.professionalService.removeProfession(professionalProfessionDeleteRequest).subscribe();
      }
      if (profession.selected && !this.previousProfessionsSelected.has(profession.professionID)) {
        const professionalProfessionCreateRequest: ProfessionalProfessionCreateRequest = {
          professionID: profession.professionID
        };
        this.professionalService.addProfession(professionalProfessionCreateRequest).subscribe();
      }
    });
  }
}
