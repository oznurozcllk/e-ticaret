import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import Blank from '../../../components/blank';

@Component({
  imports: [Blank],
  templateUrl: './create.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductCreate {

}
