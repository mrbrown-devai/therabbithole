import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import View from './view';

export const metadata = courseMetadata('vlad-tenev');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('vlad-tenev')} />
      <View />
    </>
  );
}
