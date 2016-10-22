import { Component,ViewChild,ElementRef } from "@angular/core";

import { Observable } from "rxjs/Observable";

@Component({
    selector: "touch-move",
    styles: [require("./touch.component.scss")],
    template: require("./touch.component.html")
})
export class touchComponent {
    images: any[] = [{
        url: "//img.alicdn.com/bao/uploaded/i4/170060266123009562/TB2KX7JuXXXXXXcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75.jpg_.webp"
    },{
        url: "//img.alicdn.com/bao/uploaded/i4/170060266123009562/TB2KX7JuXXXXXXcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75.jpg_.webp"
    },{
        url: "//img.alicdn.com/bao/uploaded/i4/170060266123009562/TB2KX7JuXXXXXXcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75.jpg_.webp"
    },{
        url: "//img.alicdn.com/bao/uploaded/i4/170060266123009562/TB2KX7JuXXXXXXcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75.jpg_.webp"
    },{
        url: "//img.alicdn.com/bao/uploaded/i4/170060266123009562/TB2KX7JuXXXXXXcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75.jpg_.webp"
    },{
        url: "//img.alicdn.com/bao/uploaded/i4/170060266123009562/TB2KX7JuXXXXXXcXpXXXXXXXXXX_!!0-travel.jpg_400x400q75.jpg_.webp"
    }];

    lastEvent;
    positionX: number;

    @ViewChild("touchParent") _el: ElementRef;

    constructor() {
        // this.testOb.subscribe((e) => {
        //     console.log(e)
        // })
    }

    move(event: TouchEvent) {

        if (this.lastEvent) {
            let move = event.touches[0].clientX - this.lastEvent.clientX;

            if (this.positionX) {
                let child = this._el.nativeElement.children[0]

                // if ( (this.positionX + move) < 0 ) {
                //     this.positionX = 0;
                //  } else if ((this.positionX + move) < (this._el.nativeElement.offsetWidth - child.offsetWidth)) {
                //     this.positionX = this._el.nativeElement.offsetWidth - child.offsetWidth;
                //  }
                this._el.nativeElement.style.left = this.positionX + move + 'px';
                this.positionX = (this.positionX || 0) + move;

                let lengthest = this._el.nativeElement.offsetWidth - child.offsetWidth * 2;

                if (parseInt(this._el.nativeElement.style.left) > 0) {
                    this._el.nativeElement.style.left = 0;

                    this.positionX = 0;

                } else if(parseInt(this._el.nativeElement.style.left) < -lengthest ) {
                    this._el.nativeElement.style.left = -lengthest + "px";

                    this.positionX = -lengthest;
                }

            } else {
                this._el.nativeElement.style.left = move + 'px';
                this.positionX = (this.positionX || 0) + move;
            }



        }
        this.lastEvent = event.touches[0];

    }

    end() {
        this.lastEvent = undefined;
    }
}
