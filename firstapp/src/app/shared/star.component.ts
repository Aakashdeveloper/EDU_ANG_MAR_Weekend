import { Component, OnChanges,
        OnInit, OnDestroy, Input,
        Output, EventEmitter } from '@angular/core';

@Component({
    // Attribute
    // selector: '[app-star]',
    // class
    // selector: '.app-star',
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {
    starWidth: number;

    @Input() rating: number;
    @Input() secondRating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        console.log('>>>> constructor');
    }

    ngOnChanges(): void {
        console.log('>>>>>1 on change lifecycle');
        this.starWidth = this.rating * 86 / 6;
    }

    ngOnInit(): void {
        console.log('>>>>>2 on init lifecycle');
    }

    ngOnDestroy(): void {
        console.log('>>>>3 on destory');
    }

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
        localStorage.clear();
        localStorage.setItem('outval', 'My RateValue 1');
        localStorage.setItem('outval1', 'My RateValue 223');
    }

}



