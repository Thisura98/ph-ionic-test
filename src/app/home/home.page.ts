declare var payhere: any;
import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { cordova } from '@ionic-native/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {}

  systemMode(){
    const target = '_system';
    const options = 'location=no,hardwareback=yes';
    const browser = this.iab.create("http://orangegrounds.space/test/ph-js-test/", target, options);
  }

  selfMode(){
    const target = '_self';
    const options = 'location=no,hardwareback=yes';
    const browser = this.iab.create("http://orangegrounds.space/test/ph-js-test/", target, options);
  }

  blankMode(){
    const target = '_blank';
    const options = 'location=no,hardwareback=yes';
    const browser = this.iab.create("http://orangegrounds.space/test/ph-js-test/", target, options);
  }

  startPayment() {
    // Called when user completed the payment. It can be a successful payment or failure
    payhere.onCompleted = function onCompleted(orderId) {
      console.log("Payment completed. OrderID:" + orderId);
      //Note: validate the payment and show success or failure page to the customer
    };

    // Called when user closes the payment without completing
    payhere.onDismissed = function onDismissed() {
      //Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
    };

    // Called when error happens when initializing payment such as invalid parameters
    payhere.onError = function onError(error) {
      // Note: show an error page
      console.log("Error:" + error);
    };

    // Put the payment variables here
    let payment = {
      "sandbox": false,
      "merchant_id": "210251",
      "return_url": "",
      "cancel_url": "",
      "notify_url": "http://sample.com/notify",
      "order_id": "PHIT001",
      "items": "PayHere Test Purchase",
      "amount": "50.00",
      "currency": "LKR",
      "first_name": "Thisura",
      "last_name": "Dodangoda",
      "email": "thisura@bhasha.com",
      "phone": "0773361054",
      "address": "No.4, Galle Road, Kaluthara South",
      "city": "Colombo",
      "country": "Sri Lanka",
      "delivery_address": "No. 46, Galle road, Kalutara South",
      "delivery_city": "Kalutara",
      "delivery_country": "Sri Lanka",
      "custom_1": "",
      "custom_2": ""
    };

    console.log("Reached 1");

    payhere.startPayment(payment);
    
  }

}
