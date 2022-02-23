import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-project';
  overviewData:boolean=true;
  reportsData:boolean=false;
  analyticsData:boolean=false;
  exportsData: boolean = false;
  orderData: boolean = false;
  customerData: boolean = false;
  dailyData: boolean = false;
  dashboardData: boolean = false;
  item1Data: boolean = false;
  item2Data: boolean = false;
  item3Data: boolean = false;
  item4Data: boolean = false;
  barData: boolean = false;
  areaData: boolean = false;

  overviewContent(){
    this.overviewData=true;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }

  reportsContent(){
    this.overviewData=false;
    this.reportsData=true;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData =false;
  }

  analyticsContent(){
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData =true;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  exportsContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = true;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  ordersContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = true;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  customersContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = true;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  dailyContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = true;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData =false;
  }
  dashboardContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = true;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  item1Content() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = true;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  item2Content() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = true;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData =false;
  }
  item3Content() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = true;
    this.item4Data = false;
    this.barData = false;
    this.areaData = false;
  }
  item4Content() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = true;
    this.barData = false;
    this.areaData =false;
  }
  chartsContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = true;
    this.areaData = false;
  }
  areasContent() {
    this.overviewData=false;
    this.reportsData=false;
    this.analyticsData = false;
    this.exportsData = false;
    this.orderData = false;
    this.customerData = false;
    this.dailyData = false;
    this.dashboardData = false;
    this.item1Data = false;
    this.item2Data = false;
    this.item3Data = false;
    this.item4Data = false;
    this.barData = false;
    this.areaData = true;
  }
}
