"use strict";
var app = angular.module("blockchainExpressDapp");


app.factory('DappService', function(){

     var packages = [{ id: 1, sender: 'John', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-1276',senderEmail: 'faeez.shaikh@gmail.com',  receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 500, miles: 0.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready' },
    { id: 2, sender: 'Mary', senderAddr:'123 Pine St. St. Louis MO 63101', senderPhone: '800-BIG-MARY',senderEmail: 'faeez.shaikh@gmail.com', receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 300, miles: 1.3, img: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'InTransit' },
    { id: 3, sender: 'Mike', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-4321', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 200, miles: 2.5, img: 'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready' },
    { id: 4, sender: 'Adam', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-5678',senderEmail: 'faeez.shaikh@gmail.com', receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 900, miles: 2.8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'InTransit' },
    { id: 5, sender: 'Julie', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-8765',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 1500, miles: 3.0, img: 'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!' , status:'ready'},
    { id: 6, sender: 'Juliette', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-5678', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 300, miles: 3.5, img: 'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png' ,fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready'},
    { id: 7, sender: 'John', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-1276',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 700, miles: 4.0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5duF2C4wJfJfEoCTbe23miXSwN7De5wHwY5PtGs3KoP_aASn4Gg' ,fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready'},
    { id: 8, sender: 'Mary', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '800-BIG-MARY', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 2000, miles: 4.5, img: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/money/spending/consumer-rights/parcel-scam-shutterstock-291281267.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!' , status:'ready'},
    { id: 9, sender: 'Mike', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-4321',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 400, miles: 5.0, img: 'http://www.shipping-usa.co.uk/images/send-parcel-to-usa.png' ,fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready'},
    { id: 10, sender: 'Adam', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-5678', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 500, miles: 5.5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JtPHRxj4dx5VjPEDxq3nIeJUjwCiiusazV9_ImTVXZNpOGz4tg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready' },
    { id: 11, sender: 'Julie', senderAddr:'123 Pine St. St. Louis MO 63101',senderPhone: '555-8765',senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com' ,gems: 600, miles: 5.8, img: 'https://www.directcouriersolutions.com/wp-content/uploads/2015/02/parcel-500-660-500x600.jpg',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready' },
    { id: 12, sender: 'Juliette',senderAddr:'123 Pine St. St. Louis MO 63101', senderPhone: '555-5678', senderEmail: 'faeez.shaikh@gmail.com',receiverAddr: '9445 Potter Rd. Chicago IL 94423',recieverPhone: '205-345-9545',recieverEmail: 'john@gmail.com',gems: 800, miles: 6.0, img: 'http://www.book-cycle.org/wp-content/uploads/2015/08/parcel.png',fragile:false,confirm:false,instructions:'Please drop the package at the doorstep. Do not ring doorbell. Thanks!', status:'ready' }];

  

  var balance;
  var smartContractBalance = 0;
  
    return {
      addPackage : function(pkg) {
        console.log('Adding package: ',pkg);
        packages.push(pkg);
        console.log('New pkgs list: ',packages);
      },
      updatePackage : function(pkg) {
        console.log('Updating package: ',pkg);
        for(i=0;i<packages.length;i++) {
          if(packages[i].id == pkg.id) {
             packages[i] = pkg;
              console.log('Pkg successfully updated',packages[i]);
          }
        }
      },
      getPackages : function() {
        console.log('Returning Packages: ', packages);
        return packages;
      },
      getPackage : function(id) {
        for(i=0;i<packages.length;i++) {
          if(packages[i].id == id) {
            return packages[i];
          }
        }
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


