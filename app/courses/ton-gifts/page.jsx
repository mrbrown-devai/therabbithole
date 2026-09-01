import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import View from './view';

export const metadata = courseMetadata('ton-gifts');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('ton-gifts')} />
      <View />
    </>
  );
}
