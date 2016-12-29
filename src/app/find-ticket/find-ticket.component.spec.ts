/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindTicketComponent } from './find-ticket.component';

describe('FindTicketComponent', () => {
  let component: FindTicketComponent;
  let fixture: ComponentFixture<FindTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
