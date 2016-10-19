import { HomePage } from './home';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';
describe('Sales Service', function () {
    beforeEach(function (done) {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: NavController, useValue: mockNavController },
            ],
        });
        TestBed.compileComponents();
        done();
    });
    it('should load component', async(function () {
        var fixture = TestBed.createComponent(HomePage);
        fixture.detectChanges();
        expect(fixture).toBeDefined();
    }));
});
