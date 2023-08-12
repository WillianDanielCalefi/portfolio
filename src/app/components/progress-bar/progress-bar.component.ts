import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() img: string = '';
  @Input() tempo_anos: any = '';
  @Input() tec_empresa: any = '';

  tempo_carreira: any = '';


  ngOnInit(){
    this.calculaTempo();
  }

  calculaTempo(){
    const date = new Date('2019/09');
    let data_atual = new Date();

    let timeDiff = Math.abs(data_atual.getTime() - date.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let meses = diffDays/30;
    let anos = meses/12;

    this.tempo_carreira = Math.round(anos);
  }

  calculaPorcentagem(){
    let diffAnos = (this.tempo_anos / this.tempo_carreira) * 100;
    return diffAnos;
  }
}
