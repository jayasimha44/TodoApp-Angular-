import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string = '';
  list: any = [];

  onSubmit() {
    this.list.push(this.data);
    this.data = '';
  }

  onEdit(id: number) {
    if(id === this.list[id]){
      console.log(this.list[id].data);
    }
  }

  onDelete(id: number) {
      this.list.splice(id, 1);
  }
}
