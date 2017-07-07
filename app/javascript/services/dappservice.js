"use strict";
var app = angular.module("blockchainExpressDapp");


app.factory('DappService', function(){

     var packages = [{ id: 1, sender: 'John', senderPhone: '555-1276', gems: 5, miles: 0.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg' },
    { id: 2, sender: 'Mary', senderPhone: '800-BIG-MARY', gems: 3, miles: 1.3, img: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg' },
    { id: 3, sender: 'Mike', senderPhone: '555-4321', gems: 2, miles: 2.5, img: 'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png' },
    { id: 4, sender: 'Adam', senderPhone: '555-5678', gems: 9, miles: 2.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg' },
    { id: 5, sender: 'Julie', senderPhone: '555-8765', gems: 15, miles: 3.0, img: 'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg' },
    { id: 6, sender: 'Juliette', senderPhone: '555-5678', gems: 3, miles: 3.5, img: 'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png' },
    { id: 7, sender: 'John', senderPhone: '555-1276', gems: 7, miles: 4.0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg' },
    { id: 8, sender: 'Mary', senderPhone: '800-BIG-MARY', gems: 2, miles: 4.5, img: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg' },
    { id: 9, sender: 'Mike', senderPhone: '555-4321', gems: 4, miles: 5.0, img: 'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png' },
    { id: 10, sender: 'Adam', senderPhone: '555-5678', gems: 5, miles: 5.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg' },
    { id: 11, sender: 'Julie', senderPhone: '555-8765', gems: 6, miles: 5.8, img: 'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg' },
    { id: 12, sender: 'Juliette', senderPhone: '555-5678', gems: 8, miles: 6.0, img: 'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png' }];

    var obj = {
      id: -1,
      title: '3 packed boxes',
      sender: 'John McFarlen',
      senderAddr: '123 Pine St. St. Louis MO 63101',
      senderEmail: 'faeez.shaikh@gmail.com',
      senderPhone: '314-982-3345',
      receiver: 'Mary Olgo',
      receiverAddr: '123 Olive St. Chicago IL 98773',
      receiverEmail: 'mary.olgo@gmail.com',
      receiverPhone: '204-982-3345',
      gems: 50,
      days: 5,
      fragile: true,
      confirm: true,
      instructions: 'Drop the package at the door step. Do not ring bell.',
      img: '',
      miles: '5 miles aways'
    }

  var balance;
  var smartContractBalance = 0;
  
    return {
      addPackage : function(pkg) {
        console.log('Adding package: ',pkg);
        packages.push(pkg);
      },
      getPackages : function() {
        return packages;
      },
      getBalance : function() {
        return balance;
      },
      setBalance: function(bal) {
        balance = bal;
      },
      getSmartContractBalance : function() {
        return smartContractBalance;
      },
      setSmartContractBalance: function(bal) {
        smartContractBalance = bal;
      }
    }

});


