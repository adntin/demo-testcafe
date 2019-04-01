import { Selector } from 'testcafe';
import { waitForReact, ReactSelector } from 'testcafe-react-selectors';

fixture('App tests')
  .page('http://localhost:3000/unified-login')
  .beforeEach(async () => {
    await waitForReact();
  });

test('Find React Component', async t => {
  const Download = ReactSelector('Download');
  await t.expect(Download.exists).ok();
});

test('Find Styled Components', async t => {
  const Button = ReactSelector('EnvSelect');
  await t.expect(Button.exists).ok();
});

// 不能查找styled-components组件