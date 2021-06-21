import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { ConnectionService } from 'ngx-connection-service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WEBFLIX by Rohit Kumar';
  loading = false;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: string;

  
  constructor(private router: Router, private toastr: ToastrService, private connectionService: ConnectionService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout (() => {
          this.loading = false;
       }, 1000);
      }
    });

    
    
  }

  ngOnInit() {


    // todo: showing offline toastr multiple times fix that

    this.connectionService.monitor().subscribe(currentState => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;
      if (this.hasNetworkConnection && this.hasInternetAccess && this.status != "ONLINE") {
        this.status = 'ONLINE';
        this.toastr.success('Back Online');
      } else if(this.status != 'OFFLINE' && !this.hasInternetAccess && !this.hasNetworkConnection){
        this.status = 'OFFLINE';
        this.toastr.error('You are offline')
      }
      
    });


  }




}
