import {
    Component,
    Input,
    OnInit,
    ViewChild,
    ElementRef,
} from "@angular/core";

@Component({
    selector: "a-icon",
    template: `
    <div #svg></div>
    `
})
export class IconComponent implements OnInit{
    search: string = require("../../../assets/icon/search.svg");
    @Input("svg") svg:string;
    @ViewChild("svg") el: ElementRef;

    ngOnInit(){
        this.el.nativeElement.innerHTML = this.search;
    }
}
