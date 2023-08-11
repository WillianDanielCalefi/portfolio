import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(){
    this.getTheme();
  }

  setTheme(){
    let theme: any = '';
    let yes: any = document.getElementById("checkbox");
    if(yes.checked == true){
      theme = 'light';
    }
    else if(yes.checked == false){
      theme = 'dark';
    }

    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', theme);
  }

  getTheme(){
    let theme: any = localStorage.getItem('theme');
    let input: any = document.getElementById("checkbox");

    if(theme == 'dark'){
      document.body.classList.toggle('dark-theme');
      input.checked = false;
    }
    else if(theme == 'light'){
      document.body.classList.toggle('light-theme');
      input.checked = true;
    }
  }
}
