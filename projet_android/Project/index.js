var btnSave = document.querySelector('#btnSave');
btnSave.addEventListener('click', () => console.log('connect to database'));

var btnCancel = document.querySelector('#btnCancel');
btnCancel.addEventListener('click', () => {
    var myAlert = document.createElement('ion-alert');
    myAlert.header = "Confirmation";
    myAlert.message = "Save done !";
    myAlert.buttons = [{
        text: 'Annuler',
        handler: () => {
            console.log('Processus annulé');
        }
    },
    {
        text: 'Okay',
        handler: () => {
            console.log('Processus Validé');
        }
    }

    ];
    document.body.appendChild(myAlert);
    myAlert.present();
});