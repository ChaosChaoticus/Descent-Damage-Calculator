"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
require("Chart.js");
require('jquery');

export class Info {

  constructor() {

  }

  attached() {
      $('[data-toggle="tooltip"]').tooltip({container: "body", delay: { show: 500 } });
  }

}
