import React from 'react'
import { makeSymbol } from 'react-sketchapp'

import Profile from './components/Profile'
import Button from './components/Button'

export default function () {
  makeSymbol(() => <Profile user={{
    profile_image_url:"https://pbs.twimg.com/profile_images/895665264464764930/7Mb3QtEB_400x400.jpg",
    name: "name",
    screen_name: "screen name",
    description: "description",
    location: "location",
    url: "url"
  }} />, 'Profile')

  makeSymbol(() => <Button label="label" backgroundColor="#000000" />, 'Button')
}
