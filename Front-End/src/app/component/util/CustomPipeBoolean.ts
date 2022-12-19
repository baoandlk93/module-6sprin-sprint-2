import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'PipeBoolean'
})
export class CustomPipeBoolean implements PipeTransform {
    transform(value: boolean, completeWords = false, ellipsis = '') {
        return value ?  'Còn hàng':'Đã đặt cọc';
    }
}
