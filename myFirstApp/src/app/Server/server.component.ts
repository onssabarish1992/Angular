
import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',     
})
export class ServerComponent {
    Name = "Sabarish";
    displayMessage = true;

    serverText:string = "Server is not created!"

    enabled = true;
    getSurName(){
        return "Nair";
    }

    onServerCreate(){
        this.serverText = "One more server created!!!"
    }
}