import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investiment-results',
  templateUrl: './investiment-results.component.html',
  styleUrl: './investiment-results.component.css',
})
export class InvestimentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
