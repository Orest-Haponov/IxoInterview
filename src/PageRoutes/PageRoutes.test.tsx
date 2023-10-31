
// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import PageRoutes from './PageRoutes';

describe('PageRoutes', () => {

  it('Should Render PageRoutes', () => {
      const component = renderer.create(
    <PageRoutes />,
  );

    expect(component).toBeInTheDocument();
  });
});
