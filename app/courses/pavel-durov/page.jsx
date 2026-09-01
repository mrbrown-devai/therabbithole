import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import View from './view';

export const metadata = courseMetadata('pavel-durov');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('pavel-durov')} />
      <View />
    </>
  );
}
