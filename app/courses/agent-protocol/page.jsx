import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import View from './view';

export const metadata = courseMetadata('agent-protocol');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('agent-protocol')} />
      <View />
    </>
  );
}
