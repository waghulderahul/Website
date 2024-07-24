import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-digital-agency-two',
  templateUrl: './digital-agency-two.component.html',
  styleUrls: ['./digital-agency-two.component.scss']
})
export class DigitalAgencyTwoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      items: 1, // Set to 1 for single item view
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000, // 5 seconds
      autoplayHoverPause: true,
      nav: true,
      dots: true
    });
  }

  toggleDescription(id: string) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }
  }

  openModal(descId: string) {
    const descElement = document.getElementById(descId);
    if (descElement) {
      const modalDescription = document.getElementById('customModalDescription');
      if (modalDescription) {
        modalDescription.innerHTML = descElement.innerHTML;
      }
      const modal = document.getElementById('customServiceModal');
      if (modal) {
        modal.style.display = 'block';
      }
    }
  }

  closeModal() {
    const modal = document.getElementById('customServiceModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}


