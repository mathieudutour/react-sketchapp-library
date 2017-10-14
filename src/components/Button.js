/* @flow */
import React from 'react';
import { Text, View } from 'react-primitives';
import { spacing, colors, fonts } from '../designSystem';

type Props = {
  label: string,
  backgroundColor: string
};

const buttonStyle = {
  borderRadius: 3,
  boxSizing: 'border-box',
  color: colors.White,
  cursor: 'pointer',
  padding: spacing.Medium,
  width: 200,
  height: 50
};

const textStyle = {
  ...fonts.body,
  lineHeight: 50,
  color: '#FFFFFF',
  textAlign: 'center'
};

const Button = ({ label, backgroundColor }: Props) => (
  <View style={{ ...buttonStyle, backgroundColor }}>
    <Text style={{ ...textStyle }}>{label}</Text>
  </View>
);

export default Button;
