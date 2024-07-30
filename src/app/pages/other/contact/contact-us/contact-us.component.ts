import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  ctaForm: FormGroup = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  })
  formSubmitted: boolean = false;

  // leaflet map
  options: any = {};


  constructor (private fb: FormBuilder) { }

  ngOnInit(): void {
    this.options = {
      center: latLng(40.749179, -73.989276),
      zoom: 12,
      useTextIcon: false,
      interactive: true,
      markerIconPath: '/assets/images/icons/map-marker.svg',
      markerIconPathHover: '/assets/images/icons/map-marker-filled.svg',
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        })
      ],
      geojson: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [
                -73.978301,
                40.763342
              ]
            },
            properties: {
              id: 21,
              label: '$121',
              name: 'Coderthemes Design LLP',
              link: '/',
              description: '',
              address: '565 Brrom Str, NY'
            }
          }
        ]
      }
    }
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() { return this.ctaForm.controls; }

  /**
  * On submit form
  */
  onSubmit(): void {
    this.formSubmitted = true;
  }

}
