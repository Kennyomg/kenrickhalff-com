/**
 *
 * Tests for ExperienceSelector
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
import { render } from '@testing-library/react'

import ExperienceSelector from '../index'

describe('<ExperienceSelector width={1920} height={1080} />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    render(
      <ExperienceSelector width={1920} height={1080} />
    )

    expect(spy).not.toHaveBeenCalled()
  })

  it.todo('Additional unit tests specified');

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <ExperienceSelector width={1920} height={1080} />
    );
    expect(firstChild).toMatchSnapshot();
  });
});
