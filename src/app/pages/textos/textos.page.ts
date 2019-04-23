import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.page.html',
  styleUrls: ['./textos.page.scss'],
})
export class TextosPage implements OnInit {

  mitexto = 'Gracias a la vida';

  constructor( public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentInput() {

    const input = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Introduce un mensaje:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Esperamos tu mensaje'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ( mensaje ) => {
            console.log('Confirm Ok', mensaje);
            this.mitexto = mensaje.txtNombre;
          }
        }
      ]
    });

    await input.present();

  }


}
