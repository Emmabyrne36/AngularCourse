import { DataService } from '../shared/data.service';
import { ReversePipe } from './reverse.pipe';

describe('UserComponent', () => {
 it('create reverse pipe', () => {
   const reversePipe = new ReversePipe();
   expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
