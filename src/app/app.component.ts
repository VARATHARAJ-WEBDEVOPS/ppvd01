import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countdown: any;
  isSettingsContainer: boolean = true;
  isTamil: boolean = false;

  toggleTamil() {
    this.isTamil = true;
  }

  toggleEnglish() {
    this.isTamil = false;
  }

  togglesettings() {
    this.isSettingsContainer = !this.isSettingsContainer;
  }

  navigateToLocation() {
    // Replace these coordinates with the desired destination
    const latitude = 9.8142016;
    const longitude = 78.0094434;

    // Form the Google Maps URL with the destination coordinates
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    // Open the URL in a new tab or window
    window.open(url, '_blank');
  }

  openWhatsApp() {
    const phoneNumber = '9360733323';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  openInstagram() {
    const instagramUsername = '_mass.dev'; // Replace 'USERNAME' with the desired Instagram username
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;
    window.open(instagramUrl, '_blank');
  }

  openDialer() {
    const phoneNumber = '9360733323';
    const dialerUrl = `tel:${phoneNumber}`;
    window.open(dialerUrl);
  }

  ngOnInit(): void {
    const targetDate = moment('2024-01-25');

    setInterval(() => {

      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      this.countdown = {
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
      };
    }, 1000);
  }

  title = 'ppvd_01';
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const backgroundElement = this.el.nativeElement.querySelector('#date_page_background');

    // Adjust the background-position based on the scroll position
    const yPos = `-${scrollPosition * 0.5}px`; // Adjust the factor as needed
    this.renderer.setStyle(backgroundElement, 'background-position', `center ${yPos}`);
  }



}
