import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import View from './view';

export const metadata = courseMetadata('dn404');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('dn404')} />
      <View />
    </>
  );
}
