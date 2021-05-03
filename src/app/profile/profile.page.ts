import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  logout()
  {
    this.navCtrl.navigateRoot('login');
  }

}
