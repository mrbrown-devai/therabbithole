import { JsonLd, courseJsonLd, courseMetadata } from '../../../lib/site';
import TokenRenameNotice from '../../../components/TokenRenameNotice';
import View from './view';

export const metadata = courseMetadata('telegram-fundamentals');

export default function Page() {
  return (
    <>
      <JsonLd data={courseJsonLd('telegram-fundamentals')} />
      <TokenRenameNotice />
      <View />
    </>
  );
}
