import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import TokenRenameNotice from '../../../components/TokenRenameNotice';
import View from './view';

export const metadata = courseMetadata('ton-technology');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('ton-technology')} />
      <TokenRenameNotice />
      <View />
    </>
  );
}
