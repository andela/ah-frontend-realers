import React from 'react';
import NavSection from './NavSection';
import MenuBar from './MenuBar';
import Search from '../containers/Search';

export default function HeaderSection() {
  return (
    <header>
      <NavSection />
      <MenuBar />
      <Search />
    </header>
  );
}
