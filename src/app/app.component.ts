import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-calculation';
  total_hour: any;
  start_time: any;
  end_time: any;
  //Author : Abhishek Kumar Jaiswal
  ngOnInit() {
    this.case1(); // case AM to AM
    this.case2(); // case AM to PM
    this.case3(); // case PM to PM
    this.case4(); // case AM to PM
  }

  starttime(event: any) {
    console.log('start', event.target.value);
    this.start_time = event.target.value;
  }

  endtime(event: any) {
    console.log('end', event.target.value);
    this.end_time = event.target.value;
  }

  calculate() {
    console.log(this.start_time, this.end_time);
    let stime = this.start_time.split(':')[0];
    let etime = this.end_time.split(':')[0];

    if (stime > etime) {
      // this is a PM to AM case and day is change that's why we change date in end time
      var start_date_time = "2000-01-01T" + this.start_time; // here you can use current date
      var end_date_time = "2000-01-02T" + this.end_time; // here you can use next date
    } else {
      var start_date_time = "2000-01-01T" + this.start_time; // here you can use current date
      var end_date_time = "2000-01-01T" + this.end_time; // here you can use current date
    }


    var start_epoch_seconds = ((new Date(start_date_time)).getTime()) / 1000;
    var end_epoch_seconds = ((new Date(end_date_time)).getTime()) / 1000;

    var total_epoch_seconds = (end_epoch_seconds - start_epoch_seconds);

    var total_minutes = total_epoch_seconds / 60; // here total time difference come in to minute;

    var total_hour = total_minutes / 60; // here total time difference come in to hour;

    console.log('total_minutes =', total_minutes);
    console.log('total_hour =', total_hour);

    this.total_hour = total_hour;
  }

  case1() {
    /** you can use dynamic date and time according to your need
     *  but i use static (date + time) to show an example */

    var start_date_time = "2000-01-01T" + "01:30"; // here you can use current date
    var end_date_time = "2000-01-01T" + "08:15"; // here you can use current date

    var start_epoch_seconds = ((new Date(start_date_time)).getTime()) / 1000;
    var end_epoch_seconds = ((new Date(end_date_time)).getTime()) / 1000;

    var total_epoch_seconds = (end_epoch_seconds - start_epoch_seconds);

    var total_minutes = total_epoch_seconds / 60; // here total time difference come in to minute;

    var total_hour = total_minutes / 60; // here total time difference come in to hour;

    console.log('total_minutes =', total_minutes);
    console.log('total_hour =', total_hour);

  }

  case2() {
    /** you can use dynamic date and time according to your need
     *  but i use static (date + time) to show an example */

    var start_date_time = "2000-01-01T" + "09:30"; // here you can use current date
    var end_date_time = "2000-01-01T" + "14:15"; // here you can use current date

    var start_epoch_seconds = ((new Date(start_date_time)).getTime()) / 1000;
    var end_epoch_seconds = ((new Date(end_date_time)).getTime()) / 1000;

    var total_epoch_seconds = (end_epoch_seconds - start_epoch_seconds);

    var total_minutes = total_epoch_seconds / 60; // here total time difference come in to minute;

    var total_hour = total_minutes / 60; // here total time difference come in to hour;

    console.log('total_minutes =', total_minutes);
    console.log('total_hour =', total_hour);

  }

  case3() {
    /** you can use dynamic date and time according to your need
     *  but i use static (date + time) to show an example */

    var start_date_time = "2000-01-01T" + "15:45"; // here you can use current date
    var end_date_time = "2000-01-01T" + "22:40"; // here you can use current date

    var start_epoch_seconds = ((new Date(start_date_time)).getTime()) / 1000;
    var end_epoch_seconds = ((new Date(end_date_time)).getTime()) / 1000;

    var total_epoch_seconds = (end_epoch_seconds - start_epoch_seconds);

    var total_minutes = total_epoch_seconds / 60; // here total time difference come in to minute;

    var total_hour = total_minutes / 60; // here total time difference come in to hour;

    console.log('total_minutes =', total_minutes);
    console.log('total_hour =', total_hour);

  }

  case4() {
    /** you can use dynamic date and time according to your need
     *  but i use static (date + time) to show an example */

    // in that case day will change (PM to AM)
    var start_date_time = "2000-01-01T" + "22:45"; // here you can use current date
    var end_date_time = "2000-01-02T" + "06:10"; // here you can use next date

    var start_epoch_seconds = ((new Date(start_date_time)).getTime()) / 1000;
    var end_epoch_seconds = ((new Date(end_date_time)).getTime()) / 1000;

    var total_epoch_seconds = (end_epoch_seconds - start_epoch_seconds);

    var total_minutes = total_epoch_seconds / 60; // here total time difference come in to minute;

    var total_hour = total_minutes / 60; // here total time difference come in to hour;

    console.log('total_minutes =', total_minutes);
    console.log('total_hour =', total_hour);

  }
}
