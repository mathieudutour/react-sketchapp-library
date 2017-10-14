/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';

import exposeSymbols from './exposeSymbols'

import Label from './components/Label';
import Palette from './components/Palette';
import Section from './components/Section';
import TypeSpecimen from './components/TypeSpecimen';
import Profile from './components/Profile'
import Button from './components/Button'

import { createNewDocument, getStoragePath, saveDocument, closeDocument, addLibrary } from './sketch-utils'

const Document = ({ system }: { system: DesignSystem }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        This is an example react-sketchapp document, showing how to render a
        styleguide from a data representation of your design system.
      </Label>
    </View>

    <Section title="Type Styles">
      {Object.keys(system.fonts).map(name => (
        <TypeSpecimen name={name} style={TextStyles.get(name)} />
      ))}
    </Section>

    <Section title="Color Palette">
      <Palette colors={system.colors} />
    </Section>

    <Section title="Component">
      <View style={{
        flexWrap: 'wrap',
        flexDirection: 'row'
      }}>
        <Profile user={{
          screen_name: 'jongold',
          name: 'kerning man',
          description:
            'an equal command of technology and form • functional programming (oc)cultist • design tools @airbnbdesign',
          location: 'California',
          url: 'weirdwideweb.jon.gold',
          profile_image_url:
            'https://pbs.twimg.com/profile_images/833785170285178881/loBb32g3.jpg',
        }} />
        <Button label="I'm a button" backgroundColor={designSystem.colors['Sur a11y'].hex} />
      </View>
    </Section>
  </View>
);

export function generateLibrary (context) {
  const document = createNewDocument(context)

  context.document = document

  renderLibrary(context)

  const path = getStoragePath(context)
  saveDocument(document, path)
  closeDocument(document)
  addLibrary(path)

  context.document.showMessage('Library added! 🙌')
};

export function renderLibrary (context) {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    designSystem.fonts
  );

  exposeSymbols()

  render(<Document system={designSystem} />, context.document.currentPage());
}
