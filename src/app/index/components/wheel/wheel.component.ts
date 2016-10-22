import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit,
    AfterViewChecked,
    Input,
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/interval";
import "rxjs/operator/map";

@Component({
    selector: "a-wheel",
    styles: [require("./wheel.component.scss")],
    template: require("./wheel.component.html")
})
export class wheelComponent implements AfterViewInit {
    @ViewChild("list") imgList: ElementRef;
    // 输入数据
    @Input("data") imageData: Array<{src: string}>;

    images: HTMLLIElement[];
    imageInfo: {width: number, height: number} = {
        width: 0,
        height: 0
    };
    imagePosition: number = 0;

    lastTouch: TouchEvent;
    lastTime: number = +new Date();

    constructor() {
        Observable.interval(5000)
                  .subscribe((num: number) => {
                      if( (+new Date() - this.lastTime) > 5000 ){
                        this.imagePosition = num % this.images.length;

                        this.lastTime = +new Date();
                      }
                    //   console.log(this.imagePosition);
                  });
    }


    /**
     * 处理数据
     *
     *
     * @memberOf wheelComponent
     */
    ngAfterViewInit(){
        this.images = this.imgList.nativeElement.querySelectorAll("li");
        // this.setImages().then((image) => {
        //     console.log(image)
        // })
        // this.setImages();
        this.getImageSize();

        this.setImages();


        console.log(this.imageData)
    }


    /**
     * 获取图片尺寸
     *
     *
     * @memberOf wheelComponent
     */
    getImageSize(){
        const img: HTMLImageElement = this.imgList.nativeElement.querySelector("img");
        // console.dir(img.naturalHeight)
        this.imageInfo.width = window.outerWidth;
        this.imageInfo.height = img.naturalHeight * window.outerWidth / img.naturalWidth;
    }


    /**
     * 设置图片的大小
     *
     * @returns
     *
     * @memberOf wheelComponent
     */
    setImages(){
         Observable.from(this.images)
                    .map((image: HTMLLIElement) => {
                        image.style.width = this.imageInfo.width + "px";
                        image.style.height = this.imageInfo.height + "px";
                    }).subscribe(() => {
                        this.imgList.nativeElement.style.width = this.imageInfo.width * this.images.length + "px";
                    })
    }

    touchMove(event: TouchEvent){
        console.log(
            event.changedTouches[0].pageX );

        if(!this.lastTouch){
            this.lastTouch = event;
        }

        if (
            event.changedTouches[0].pageX <
            this.lastTouch.changedTouches[0].pageX &&
            this.lastTouch !== event
        ) {
            if(this.imagePosition === this.imageData.length - 1){
                this.imagePosition = 0;
            } else {
                this.imagePosition ++;
            }

            this.lastTime = +new Date();
        } else {
            if(this.imagePosition !== 0) {
                this.imagePosition --;
                this.lastTime = +new Date();
            }
        }


        this.lastTouch = event;

    }

}
