import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import View from './view';

export const metadata = courseMetadata('robinhood-101');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('robinhood-101')} />
      <View />
    </>
  );
}
