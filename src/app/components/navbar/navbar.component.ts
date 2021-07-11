import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed: boolean = true;
  currentPage: string = "";
  showDropdown = false;

  constructor() { }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  ngOnInit(): void {
  }

}
