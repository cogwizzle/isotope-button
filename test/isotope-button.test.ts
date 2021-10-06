import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IsotopeButton } from '../src/IsotopeButton.js';
import '../src/isotope-button.js';

describe('IsotopeButton', () => {
  it('is clickable', async () => {
    const el = await fixture<IsotopeButton>(
      html`<isotope-button></isotope-button>`
    );
    let fired = false;
    el.addEventListener('click', () => {
      fired = true;
    });
    el.click();
    expect(fired).to.be.true;
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IsotopeButton>(
      html`<isotope-button></isotope-button>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
