import {
    Component,
    Input
} from "@angular/core";

@Component({
    selector: "a-select",
    styles: [require("./select.component.scss")],
    template: require("./select.component.html")
})
export class selectComponent{
    @Input("default") default: string;
    // value: string = "test";
    constructor(){
        console.log(this)
    }
}
