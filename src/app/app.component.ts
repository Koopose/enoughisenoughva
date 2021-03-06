import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(LoginComponent, dialogConfig);
    }
}
